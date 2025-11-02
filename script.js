function filtersection(category){
    console.log("Filter selected:",category);
}
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentSlide = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeSlide(n) {
  currentSlide += n;
  if (currentSlide < 0) currentSlide = images.length - 1;
  if (currentSlide >= images.length) currentSlide = 0;
  lightboxImg.src = images[currentSlide].src;
}
