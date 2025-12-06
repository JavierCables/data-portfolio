// Add event listeners for collapsible sections
document.addEventListener('DOMContentLoaded', () => {

  // ==========================
  // NIVEL 1
  // ==========================
  document.querySelectorAll('.accordion-level-1 > .section-header')
    .forEach(header => {
      header.addEventListener('click', (e) => {
        header.parentElement.classList.toggle('open');
      });
    });

  // ==========================
  // NIVEL 2
  // ==========================
  document.querySelectorAll('.accordion-level-2 > .section-header')
    .forEach(header => {
      header.addEventListener('click', (e) => {
        e.stopPropagation(); // evita que se active Nivel 1
        header.parentElement.classList.toggle('open');
      });
    });

  // ==========================
  // NIVEL 3
  // ==========================
  document.querySelectorAll('.accordion-level-3 > .section-header')
    .forEach(header => {
      header.addEventListener('click', (e) => {
        e.stopPropagation(); // evita activar Nivel 2 o 1
        header.parentElement.classList.toggle('open');
      });
    });

  // Smooth scroll for table of contents links
  const tocLinks = document.querySelectorAll('.toc-list a');

  tocLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = link.getAttribute('href');

      if (targetId) {
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          // Open the section
          targetSection.classList.add('open');

          // Scroll to the section
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
