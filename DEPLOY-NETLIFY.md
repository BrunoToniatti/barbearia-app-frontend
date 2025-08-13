# 🚀 Instruções para Deploy na Netlify

## ✅ Configurações que você deve usar na Netlify:

### 1. Build Settings
- **Build command:** `npm install --force && npm run build:prod`
- **Publish directory:** `dist/danilo-frontend`
- **Node version:** `20`

### 2. Environment Variables (se necessário)
- `NODE_VERSION`: `20`
- `NPM_VERSION`: `10`
- `NPM_FLAGS`: `--force`

### 3. Deploy Settings
- **Branch to deploy:** `main`
- **Auto deploy:** Ativado

## 📱 Recursos PWA Incluídos:

✅ **Service Worker** - Cache automático e funcionamento offline
✅ **Web App Manifest** - Configuração para instalação
✅ **Ícones PWA** - Ícones para todas as plataformas
✅ **Status Bar** - Configurada com as cores douradas da barbearia
✅ **Install Prompt** - Notificação para instalar o app
✅ **Safe Areas** - Suporte para notch de celulares
✅ **Splash Screen** - Tela de carregamento personalizada

## 🔧 Problemas Comuns e Soluções:

### Se der erro de dependências:
1. Na Netlify, vá em: Site Settings > Build & Deploy > Environment Variables
2. Adicione: `NPM_FLAGS` com valor `--force`

### Se der erro de Node version:
1. Certifique-se que está usando Node 20
2. O arquivo `.nvmrc` já está configurado com `20`

### Se der erro de build command:
1. Use: `npm install --force && npm run build:prod`

## 📝 URLs importantes após deploy:

- **App Principal:** `https://seu-site.netlify.app`
- **PWA Manifest:** `https://seu-site.netlify.app/manifest.webmanifest`
- **Service Worker:** `https://seu-site.netlify.app/ngsw-worker.js`

## 📱 Como testar o PWA:

1. Acesse o site no Chrome/Edge mobile
2. Aparecerá a notificação "Instalar App"
3. Clique em "Instalar"
4. O app será adicionado à tela inicial
5. A status bar ficará dourada (#D4AF37)

## 🎨 Recursos Específicos da Barbearia:

- **Cores da marca:** Dourado (#D4AF37) e marrom (#1a1611)
- **Nome:** J&B Barbear Shop - Agendamentos
- **Ícone:** Logo J&B com ornamento
- **Orientação:** Portrait (vertical)
- **Tema:** Elegante com elementos flutuantes

---
💡 **Dica:** Após o deploy, teste sempre em um dispositivo móvel para verificar se o PWA está funcionando corretamente!
