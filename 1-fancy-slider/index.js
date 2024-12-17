const carouselContainerDom = document.querySelector('.carousel')

const carouselList = document.querySelector('.carousel .carousel__list');


const thumbnailList = document.querySelector('.carousel .carousel__thumbnail-list')


const prevButton = document.querySelector('.button__prev');

const nextButton = document.querySelector('.button__next');

let timeout = null;
let interval = null;

const slide = (type) => {
    clearTimeout(timeout);
    const carouselItems = document.querySelectorAll('.carousel__item');
    const thumbnails = document.querySelectorAll('.carousel__thumbnail')
    if (type === 'next') {
        thumbnailList.appendChild(thumbnails[0])
        carouselList.appendChild(carouselItems[0])
        carouselContainerDom.classList.add('next');
        timeout = setTimeout(() => {
            carouselContainerDom.classList.remove('next')
        }, 1000)
    } else {
        carouselList.prepend(carouselItems[carouselItems.length - 1])
        thumbnailList.prepend(thumbnails[thumbnails.length - 1])
        carouselContainerDom.classList.add('prev');

        timeout = setTimeout(() => {
            carouselContainerDom.classList.remove('prev')
        }, 1500)
    }
}

nextButton.addEventListener('click', () => {
    clearInterval(interval)
    slide('next')
})

prevButton.addEventListener('click', () => {
    clearInterval(interval)
    slide('prev')
})



const carouselThumbnails = document.querySelectorAll('.carousel__thumbnail');
const carouselItems = Array.from(
    document.querySelectorAll('.carousel .carousel__item'));


// carouselThumbnails.forEach((thumbnail, index) => {
//     thumbnail.addEventListener('click', () => {
//         console.log(index);
//         clearInterval(interval)
//         clearTimeout(timeout);

//         carouselItems[0] = carouselItems[index];
//         console.log({ carouselItems })
//         slide('next');
//     })
// })

window.onload = () => {
    localStorage.setItem('currentSlider', 0);
    interval = setInterval(() => {
        slide('next');
    }, 4000)
}