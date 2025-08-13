import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PwaUpdateService {

  constructor(private swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      this.checkForUpdates();
      this.handleUpdateAvailable();
    }
  }

  private checkForUpdates(): void {
    // Verificar atualizações a cada 30 minutos
    setInterval(() => {
      this.swUpdate.checkForUpdate().then(() => {
        console.log('Verificando atualizações...');
      });
    }, 30 * 60 * 1000); // 30 minutos
  }

  private handleUpdateAvailable(): void {
    this.swUpdate.versionUpdates
      .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
      .subscribe(() => {
        this.showUpdateNotification();
      });
  }

  private showUpdateNotification(): void {
    if (confirm('Nova versão disponível! Deseja atualizar agora?')) {
      this.swUpdate.activateUpdate().then(() => {
        document.location.reload();
      });
    }
  }

  checkForUpdate(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate();
    }
  }

  activateUpdate(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.activateUpdate().then(() => {
        document.location.reload();
      });
    }
  }
}
