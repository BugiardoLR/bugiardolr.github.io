const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu()   {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu()    {
    hamburger.classList.remove("active");
    navMenu.classList.toggle("active");
}

let datePopup = document.getElementById("date-popup");
let roomPopup = document.getElementById("room-popup");
let ratesPopup = document.getElementById("rates-popup");

function dateOpenPopup()    {
    datePopup.classList.add("date-open-popup");
}
function dateClosePopup()    {
    datePopup.classList.remove("date-open-popup");
}

function roomOpenPopup()    {
    roomPopup.classList.add("room-open-popup");
}
function roomClosePopup()    {
    roomPopup.classList.remove("room-open-popup");
}

function ratesOpenPopup()    {
    ratesPopup.classList.add("rates-open-popup");
}
function ratesClosePopup()    {
    ratesPopup.classList.remove("rates-open-popup");
}


const picker = new easepick.create({
    element: "#datepicker",
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
    ],
    zIndex: 10,
    grid: 2,
    calendars: 2,
    inline: true,
    plugins: [
        "RangePlugin"
    ]
})


let vtDiv = document.getElementById("vt-div");
let vtText = document.getElementById("vt-text");

vtDiv.addEventListener('mouseenter', () => vtText.classList.add("hover-country-text"));
vtDiv.addEventListener('mouseleave', () => vtText.classList.remove("hover-country-text"));

let sofiaDiv = document.getElementById("sofia-div");
let sofiaText = document.getElementById("sofia-text");

sofiaDiv.addEventListener('mouseenter', () => sofiaText.classList.add("hover-country-text"));
sofiaDiv.addEventListener('mouseleave', () => sofiaText.classList.remove("hover-country-text"));


let koprivDiv = document.getElementById("kopriv-div");
let koprivText = document.getElementById("kopriv-text");

koprivDiv.addEventListener('mouseenter', () => koprivText.classList.add("hover-country-text"));
koprivDiv.addEventListener('mouseleave', () => koprivText.classList.remove("hover-country-text"));


let plovDiv = document.getElementById("plov-div");
let plovText = document.getElementById("plov-text");

plovDiv.addEventListener('mouseenter', () => plovText.classList.add("hover-country-text"));
plovDiv.addEventListener('mouseleave', () => plovText.classList.remove("hover-country-text"));

let hotelSearch = document.getElementById('submit-btn');
hotelSearch.addEventListener('click', function() {
    const locationInput = document.getElementById('locationInput');
    if (!locationInput.value.trim()) {
        alert('Полето не може да бъде празно!');
    } else {
        document.getElementById('locationForm').submit(); // Programmatically submit the form
    }
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }