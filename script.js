const sidebar = document.getElementById('sidebar')
const nav = document.querySelector('nav')
const logo = document.querySelectorAll('#logo img')
const navIcons = document.querySelectorAll('#nav-btn i')
const HeroSpan = document.getElementById('hero-span')
const heroAnimate = document.getElementById('hero-animate')
const navMenu = document.querySelectorAll('#nav-menu a')
const navanimation = document.querySelectorAll('.nav-li div')
const mainImage1 = document.getElementById('main-image-1')
const mainImage2 = document.getElementById('main-image-2')
const mainImage3 = document.getElementById('main-image-3')
const mainImage4 = document.getElementById('main-image-4')
const mainImage5 = document.getElementById('main-image-5')
const btnRadio = document.getElementById('btn-radio')
const priceText1 = document.getElementById('price-text1')
const priceText2 = document.getElementById('price-text2')
const priceTexts = document.querySelectorAll('.price-text')
const timeTexts = document.querySelectorAll('.time-text')

let interval = setInterval(hero, 1500)
let heroArr = ["customer data", "sales performance", "product analytics"]
let herox = 0

function SideOpen() {
    sidebar.classList.toggle('side-active')
    if (document.documentElement.scrollTop > 20 && !logo[0].classList.contains('hidden')) {
        for (let i = 0; i < logo.length; i++) { logo[i].classList.toggle('hidden') }
    } else if (document.documentElement.scrollTop < 20 && !logo[0].classList.contains('hidden')) {
        logo[0].classList.add('hidden')
        logo[1].classList.remove('hidden')
        nav.classList.toggle('bg-white')
    }
    for (let i = 0; i < navIcons.length; i++) { navIcons[i].classList.toggle('hidden') }
    if (nav.classList.contains('bg-white')) {
        for (let i = 0; i < navIcons.length; i++) { navIcons[i].style.color = 'black' }
    }
    HeroSpan.classList.toggle('hidden')
}

function hero() {
    herox++
    if (herox === 1) {
        heroAnimate.innerHTML = `<li class="animate__fadeIn animate__animated">${heroArr[0]}</li>`
    }
    if (herox === 2) {
        heroAnimate.innerHTML = `<li class="animate__fadeIn animate__animated">${heroArr[1]}</li>`
    }
    if (herox === 3) {
        heroAnimate.innerHTML = `<li class="animate__fadeIn animate__animated">${heroArr[2]}</li>`
    }
    if (herox > 3) {
        herox = 0
        heroAnimate.innerHTML = `<li class="animate__fadeIn animate__animated">sales performance</li>`
    }
}
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.classList.add('bg-white')
        nav.style.borderBottom = '1px solid #eee'
        logo[1].classList.remove('hidden')
        logo[0].classList.add('hidden')
        navIcons[0].style.color = '#000'
        for (let i = 0; i < navMenu.length; i++) navMenu[i].style.color = '#000'
        for (let i = 0; i < navanimation.length; i++) navanimation[i].style.background = '#000'
    } else {
        nav.classList.remove('bg-white')
        nav.style.borderBottom = '0'
        logo[0].classList.remove('hidden')
        logo[1].classList.add('hidden')
        navIcons[0].style.color = '#fff'
        for (let i = 0; i < navMenu.length; i++) navMenu[i].style.color = '#fff'
        for (let i = 0; i < navanimation.length; i++) navanimation[i].style.background = '#fff'
    }

}

window.addEventListener("scroll", function () {
    if (window.innerWidth >= 1024) {
        let top = (window.scrollY).toFixed(0)
        let offset = (mainImage1.offsetTop).toFixed(0)
        let height = (mainImage1.offsetHeight).toFixed(0)
        let x = 0
        if (top >= ((+offset + +height) / 2)) {
            x = ((+offset + +height) - +top) / 18
            mainImage1.style.transform = `translateY(${x}px)`
            mainImage2.style.transform = `translateY(${-x}px)`
            mainImage3.style.transform = `translateY(${x}px)`
            mainImage4.style.transform = `translateY(${-x}px)`
        }
        if (top >= 6450) {
            document.querySelector('footer').style.zIndex = '1'
        }else{
            document.querySelector('footer').style.zIndex = '-1'
        }
    } else {
        mainImage1.style.transform = `translateY(0)`
        mainImage2.style.transform = `translateY(0)`
        mainImage3.style.transform = `translateY(0)`
        mainImage4.style.transform = `translateY(0)`
    }
    if (window.scrollY > 1900 && window.scrollY > 2100) {
        let top = (window.scrollY).toFixed(0)
        let offset = (mainImage5.offsetTop).toFixed(0)
        let height = (mainImage5.offsetHeight).toFixed(0)
        let x = 0
        if (top >= ((+offset + +height) / 2)) {
            x = ((+offset + +height) - +top) / 20
            mainImage5.style.transform = `translate(-50%, ${x}px)`
        }
    }
});

function ShowPrice(){
    btnRadio.classList.toggle('left-0')
    btnRadio.classList.toggle('left-[50%]')
    if (btnRadio.classList.contains('left-0')) {
        priceText1.classList.add('text-[#824deb]')
        priceText2.classList.remove('text-[#824deb]')
        priceTexts[0].innerHTML = 29
        priceTexts[1].innerHTML = 49
        priceTexts[2].innerHTML = 99
        for (let i = 0; i < timeTexts.length; i++) timeTexts[i].innerHTML = "/ Month"
    }else if(btnRadio.classList.contains('left-[50%]')){
        priceText1.classList.remove('text-[#824deb]')
        priceText2.classList.add('text-[#824deb]')
        priceTexts[0].innerHTML = 299
        priceTexts[1].innerHTML = 499
        priceTexts[2].innerHTML = 999
        for (let i = 0; i < timeTexts.length; i++) timeTexts[i].innerHTML = "/ Year"
    }
}

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});