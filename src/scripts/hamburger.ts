export function initHamburgerMenu(): void {
  const btn = document.getElementById('hamburger-btn') as HTMLButtonElement | null;
  const menu = document.getElementById('mobile-menu') as HTMLDivElement | null;
  const icon = document.getElementById('hamburger-icon') as SVGElement | null;

  if (!btn || !menu) return;

  btn.addEventListener('click', (): void => {
    menu.classList.toggle('hidden');

    const isOpen = !menu.classList.contains('hidden');
    const hamburgerPath = 'M4 6h16M4 12h16M4 18h16';
    const closePath = 'M6 18L18 6M6 6l12 12';

    if (icon) {
      const path = icon.querySelector('path') as SVGPathElement | null;
      if (path) {
        path.setAttribute('d', isOpen ? closePath : hamburgerPath);
      }
    }
  });

  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach((link: Element): void => {
    link.addEventListener('click', (): void => {
      menu.classList.add('hidden');
      if (icon) {
        const path = icon.querySelector('path') as SVGPathElement | null;
        if (path) {
          path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        }
      }
    });
  });
}
