// hamburger
const hamburgerBtn = document.getElementById('hamburger-btn');
const hamburgerNav = document.getElementById('hamburger-nav');

hamburgerBtn.addEventListener('click', () => {
    hamburgerNav.classList.toggle('active');
});

// toast
const toastBtn = document.getElementById('toast-btn');
const toastContainer = document.getElementById('toast-container');

toastBtn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notification = document.createElement('div');
    notification.classList.add('toast');

    notification.innerText = '🍻';

    toastContainer.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 1500)
}

// text-ticker
const text = "lorem ipsum dolor sit amet..."

let index = 0;

function writeText() {
    const line = document.getElementById('text-ticker-line')
    line.innerText = text.slice(0, index);
    index++;

    if (index > text.length - 1) {
        index = 1;  // start at 2nd letter to prevent page from buckling when there is no text
    }
}

setInterval(writeText, 100);

// popup
const popupOpen = document.getElementById('popup-btn');
const popupClose = document.getElementById('popup-close');
const popupContainer = document.getElementById('popup-container');

popupOpen.addEventListener('click', () => {
    popupContainer.classList.add('active');
});

popupClose.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});

// image-ticker
function createTickerImage() {
    const tickerImage = document.createElement('div');
    tickerImage.classList.add('ticker-image');

    tickerImage.innerText = '🚗';

    const tickerLine = document.getElementById('inline-image-ticker');
    tickerLine.appendChild(tickerImage);
}

const printImageTicker = setInterval(createTickerImage, 500);

setTimeout(() => {
    clearInterval(printImageTicker);
}, 1500);

// background-changer
const bgToggle = document.getElementById('background-toggle');
const bgReset = document.getElementById('background-reset');

bgToggle.addEventListener('click', () => {
    document.body.style.background = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
});

bgReset.addEventListener('click', () => {
    document.body.style.background = '#222222';
});

// theme-toggle

const themeToggle = document.getElementById('theme-button');

const theme = document.getElementsByTagName('link')[0];

themeToggle.addEventListener('click', () => {
    if (theme.getAttribute('href') == 'styles/dark.css') {
        theme.setAttribute('href', 'styles/light.css');
    } else {
        theme.setAttribute('href', 'styles/dark.css');
    }
});

// carousel
const slider = document.getElementById('slider');
const slides = document.querySelector('.slides');

let carouselIndex = 0;
function transform() {
    carouselIndex++;
    if (carouselIndex > 2) carouselIndex = 0;
    slides.style.transform = `translateX(-${carouselIndex * 500}px)`;
}

const carouselPrevious = document.getElementById('carousel-previous');
const carouselNext = document.getElementById('carousel-next');

carouselPrevious.addEventListener('click', () => {
    carouselIndex--;
    if (carouselIndex < 0) carouselIndex = 2;
    slides.style.transform = `translateX(-${carouselIndex * 500}px)`;
});

carouselNext.addEventListener('click', () => {
    carouselIndex++;
    if (carouselIndex > 2) carouselIndex = 0;
    slides.style.transform = `translateX(-${carouselIndex * 500}px)`;
});

// sound-board
const sounds = ['applause', 'boo', 'gasp', 'surprise', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const soundButton = document.createElement('button');
    const audio = document.getElementById(sound);

    soundButton.innerText = sound;

    soundButton.addEventListener('click', () => {
        pauseCurrentSound();
        audio.play();
    });

    document.getElementById('sounds').appendChild(soundButton);
})

function pauseCurrentSound() {
    sounds.forEach((sound) => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}

// zoom-effect
const zoomContainer = document.getElementById('zoom-container');
const zoomImage = document.getElementById('zoom-image');

zoomContainer.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetLeft;
    
    zoomImage.style.transformOrigin = `${x}px ${y}px`;
    zoomImage.style.transform = "scale(2)";
});

zoomContainer.addEventListener('mouseleave', () => {
    zoomImage.style.transformOrigin = "center center";
    zoomImage.style.transform = "scale(1)";
});