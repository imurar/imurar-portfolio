export function buildHero(): void {
  const heroSection = document.getElementById('hero-section') as HTMLElement | null;
  const heroSymbols = document.getElementById('hero-symbols') as HTMLElement | null;
  if (!heroSymbols || !heroSection) return;
  heroSymbols.innerHTML = '';

  const sectionWidth = heroSection.offsetWidth;
  const lines: string[] = ['CODE'];
  const REF = 200;
  const probe = document.createElement('canvas').getContext('2d');
  if (!probe) return;
  probe.font = `900 ${REF}px monospace`;
  const maxLineW = Math.max(...lines.map(l => probe.measureText(l).width));
  const fontSize = Math.min(200, Math.floor(REF * (sectionWidth * 0.88) / maxLineW));
  const spacing = Math.max(7, Math.floor(fontSize / 16));
  const symbolSize = spacing + 1;
  const lineH = Math.ceil(fontSize * 1.25);
  const lineGap = Math.floor(fontSize * 0.1);

  const offscreen = document.createElement('canvas');
  const ctx = offscreen.getContext('2d');
  if (!ctx) return;

  ctx.font = `900 ${fontSize}px monospace`;
  const lineWidths: number[] = lines.map(l => Math.ceil(ctx.measureText(l).width));
  const canvasW = Math.max(...lineWidths) + spacing * 2;
  const canvasH = lineH * lines.length + lineGap * (lines.length - 1);

  offscreen.width = canvasW;
  offscreen.height = canvasH;
  ctx.font = `900 ${fontSize}px monospace`;
  ctx.fillStyle = '#000';
  lines.forEach((line: string, i: number): void => {
    const lx = Math.floor((canvasW - lineWidths[i]) / 2);
    ctx.fillText(line, lx, fontSize + i * (lineH + lineGap));
  });

  const data = ctx.getImageData(0, 0, canvasW, canvasH).data;

  heroSymbols.style.height = `${canvasH}px`;
  heroSymbols.style.position = 'relative';

  const offsetX = Math.max(0, (sectionWidth - canvasW) / 2);
  const fragment = document.createDocumentFragment();

  for (let y = 0; y < canvasH; y += spacing) {
    for (let x = 0; x < canvasW; x += spacing) {
      const i = (y * canvasW + x) * 4;
      if (data[i + 3] > 100) {
        const span = document.createElement('span');
        span.textContent = '✻';
        const speed = (1.2 + Math.random() * 2).toFixed(2);
        const delay = -(Math.random() * 3).toFixed(2);
        const opacity = (0.6 + Math.random() * 0.4).toFixed(2);
        span.style.cssText = `
          position: absolute;
          left: ${offsetX + x}px;
          top: ${y}px;
          font-size: ${symbolSize}px;
          line-height: 1;
          color: #fff;
          opacity: ${opacity};
          will-change: transform;
          animation: symSpin ${speed}s linear infinite;
          animation-delay: ${delay}s;
        `;
        fragment.appendChild(span);
      }
    }
  }

  heroSymbols.appendChild(fragment);
}

export function onResize(): void {
  clearTimeout((window as any).resizeTimer);
  (window as any).resizeTimer = setTimeout(buildHero, 200);
}
