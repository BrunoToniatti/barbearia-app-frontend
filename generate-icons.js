// Script para gerar ícones personalizados da J&B Barbearia
// Execute este script em um navegador para gerar os ícones

function generateBarberIcon(size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#D4AF37');
  gradient.addColorStop(0.5, '#B8860B');
  gradient.addColorStop(1, '#CD853F');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  // Add border
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = size * 0.02;
  ctx.strokeRect(0, 0, size, size);

  // Add J&B text
  ctx.fillStyle = '#1a1611';
  ctx.font = `bold ${size * 0.25}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('J&B', size/2, size * 0.4);

  // Add ornament
  ctx.font = `${size * 0.15}px serif`;
  ctx.fillText('◆', size/2, size * 0.55);

  // Add subtitle
  ctx.font = `${size * 0.08}px sans-serif`;
  ctx.fillText('BARBEAR SHOP', size/2, size * 0.75);

  return canvas.toDataURL('image/png');
}

// Gerar ícones em diferentes tamanhos
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

sizes.forEach(size => {
  const iconData = generateBarberIcon(size);

  // Criar link para download
  const link = document.createElement('a');
  link.download = `icon-${size}x${size}.png`;
  link.href = iconData;

  // Adicionar ao body (temporariamente) e clicar
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  console.log(`Ícone ${size}x${size} gerado!`);
});

console.log('Todos os ícones foram gerados e baixados!');
