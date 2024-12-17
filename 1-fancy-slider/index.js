const carouselContainerDom = document.querySelector('.carousel')

const carouselList = document.querySelector('.carousel .carousel__list');


const thumbnailList = document.querySelector('.carousel .carousel__thumbnail-list')


const prevButton = document.querySelector('.button__prev');

const nextButton = document.querySelector('.button__next');

let timeout = null;

nextButton.addEventListener('click', () => {
    clearTimeout(timeout);
    const carouselItems = document.querySelectorAll('.carousel__item');
    const thumbnails = document.querySelectorAll('.carousel__thumbnail')

    thumbnailList.appendChild(thumbnails[0])
    carouselList.appendChild(carouselItems[0])
    carouselContainerDom.classList.add('next');
    timeout = setTimeout(() => {
        carouselContainerDom.classList.remove('next')
    }, 1000)
})

prevButton.addEventListener('click', () => {
    clearTimeout(timeout);
    const carouselItems = document.querySelectorAll('.carousel__item');
    const thumbnails = document.querySelectorAll('.carousel__thumbnail')
    carouselList.prepend(carouselItems[carouselItems.length - 1])
    thumbnailList.prepend(thumbnails[thumbnails.length - 1])
    carouselContainerDom.classList.add('prev');

    timeout = setTimeout(() => {
        carouselContainerDom.classList.remove('prev')
    }, 1500)
})