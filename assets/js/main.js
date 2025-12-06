// Dark mode toggle
  const themeToggle = document.getElementById('themeToggle');
  const icon = themeToggle.querySelector('i');
  const body = document.body;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.className = 'ri-sun-fill'
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
        icon.className = 'ri-sun-fill'
        localStorage.setItem('theme', 'dark');
      } else {
        icon.className = 'ri-moon-fill'
        localStorage.setItem('theme', 'light');
      }
    });
  }