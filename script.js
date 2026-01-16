const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});

function updateCertImage() {
  const img = document.getElementById('certificates-img');
  if (!img) return;
  if (window.innerWidth <= 700) {
    img.style.width = '90%';
    img.style.maxWidth = '720px';
    img.style.margin = '1rem auto 0';
    img.style.display = 'block';
  } else {
    img.style.width = '260px';
    img.style.maxWidth = '100%';
    img.style.margin = '0';
    img.style.display = '';
  }
}
window.addEventListener('resize', updateCertImage);
window.addEventListener('load', updateCertImage);