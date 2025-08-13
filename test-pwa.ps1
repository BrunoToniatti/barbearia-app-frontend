# Script para testar PWA localmente
# Execute este script para servir o build de produção e testar PWA

Write-Host "🚀 Iniciando servidor para teste PWA..." -ForegroundColor Green

# Verificar se http-server está instalado
if (!(Get-Command "http-server" -ErrorAction SilentlyContinue)) {
    Write-Host "📦 Instalando http-server..." -ForegroundColor Yellow
    npm install -g http-server
}

# Servir o build de produção
Write-Host "🌐 Servindo aplicação em https://localhost:8080" -ForegroundColor Cyan
Write-Host "📱 Para testar PWA:" -ForegroundColor Yellow
Write-Host "   1. Abra https://localhost:8080 no Chrome/Edge" -ForegroundColor White
Write-Host "   2. Abra DevTools (F12)" -ForegroundColor White
Write-Host "   3. Vá para Application > Service Workers" -ForegroundColor White
Write-Host "   4. Teste a instalação pelo menu do navegador" -ForegroundColor White
Write-Host ""
Write-Host "🔒 IMPORTANTE: PWA só funciona com HTTPS ou localhost" -ForegroundColor Red
Write-Host ""

# Iniciar servidor
Set-Location "dist/danilo-frontend"
http-server -p 8080 -S -C ..\..\ssl-cert.pem -K ..\..\ssl-key.pem --cors
