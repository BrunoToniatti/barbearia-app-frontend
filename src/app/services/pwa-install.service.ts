import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaInstallService {
  private deferredPrompt: any;
  private _isInstallable = new BehaviorSubject<boolean>(false);
  public isInstallable$ = this._isInstallable.asObservable();

  private _isInstalled = new BehaviorSubject<boolean>(false);
  public isInstalled$ = this._isInstalled.asObservable();

  constructor() {
    this.initializeService();
  }

  private initializeService(): void {
    // Detectar se já está instalado
    this.checkIfInstalled();

    // Escutar evento de beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this._isInstallable.next(true);
    });

    // Escutar evento de appinstalled
    window.addEventListener('appinstalled', () => {
      this._isInstalled.next(true);
      this._isInstallable.next(false);
      this.deferredPrompt = null;
    });
  }

  private checkIfInstalled(): void {
    // Verificar se está rodando como PWA instalado
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppiOS = (window.navigator as any).standalone === true;
    const isInstalled = isStandalone || isInWebAppiOS;

    this._isInstalled.next(isInstalled);
  }

  async promptInstall(): Promise<boolean> {
    if (!this.deferredPrompt) {
      return false;
    }

    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      this._isInstalled.next(true);
      this._isInstallable.next(false);
      this.deferredPrompt = null;
      return true;
    }

    return false;
  }

  getInstallInstructions(): string {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
      return 'No Safari, toque no ícone de compartilhar e selecione "Adicionar à Tela de Início"';
    } else if (isAndroid) {
      return 'No Chrome, toque no menu (⋮) e selecione "Adicionar à tela inicial"';
    } else {
      return 'Use o menu do navegador para instalar este app';
    }
  }
}
