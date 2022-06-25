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

    const tickerLine = document.getElementById('image-ticker');
    tickerLine.appendChild(tickerImage);

}

const printImageTicker = setInterval(createTickerImage, 500);

setTimeout(() => {
    clearInterval(printImageTicker);
}, 5000);

