
document.querySelector('.carousel-control-prev').addEventListener('click', () => {
    const carousel = document.querySelector('#slide');
    const bootstrapCarousel = new bootstrap.Carousel(carousel);
    bootstrapCarousel.prev();
});

document.querySelector('.carousel-control-next').addEventListener('click', () => {
    const carousel = document.querySelector('#slide');
    const bootstrapCarousel = new bootstrap.Carousel(carousel);
    bootstrapCarousel.next();
});
