const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('nav');
const gallery = document.querySelector('.gallery');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('hide');
});

function viewerTemplate(src, alt) {
  return `
    <dialog class="image-viewer">
      <button class="close-viewer" aria-label="Close viewer">X</button>
      <img src="${src}" alt="${alt}">
    </dialog>
  `;
}

gallery.addEventListener('click', (event) => {
  const selectedImage = event.target.closest('img');
  if (!selectedImage) return;

  const imgSrc =
    selectedImage.getAttribute('data-full') ||
    selectedImage.getAttribute('src');

  const altText = selectedImage.getAttribute('alt');

  document.body.insertAdjacentHTML('beforeend', viewerTemplate(imgSrc, altText));

  const dialog = document.querySelector('.image-viewer');
  const closeButton = dialog.querySelector('.close-viewer');

  dialog.showModal();

  closeButton.addEventListener('click', () => {
    dialog.close();
  });

  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const clickedInDialog =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!clickedInDialog) {
      dialog.close();
    }
  });

  dialog.addEventListener('close', () => {
    dialog.remove();
  });
});

window.addEventListener('keydown', (event) => {
  const dialog = document.querySelector('.image-viewer');
  if (event.key === 'Escape' && dialog) {
    dialog.close();
  }
});