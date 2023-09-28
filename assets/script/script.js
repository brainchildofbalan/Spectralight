document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.mobile-menu-wrapper');
    const overlay = document.querySelector('.mobile-menu-overlay');
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
    overlay.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 100) {
            header.classList.add('active')
        }
        else {
            header.classList.remove('active')
        }


    })




    const swiper = new Swiper('.swiper', {

        slidesPerView: 1.2,
        spaceBetween: 40,
        // If we need pagination

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {

            768: {
                slidesPerView: 1.3,
                spaceBetween: 40,
            },

            992: {
                slidesPerView: 2.5,
                spaceBetween: 95,
            },
        }

    });






    const input = document.querySelectorAll('.input');
    input.forEach((item) => {
        item.addEventListener('focus', () => {
            item.parentElement.classList.add('focused');
        });

        item.addEventListener('blur', () => {
            if (!item.value) {
                item.parentElement.classList.remove('focused');
            }
        });

        // Check if item field already has content on page load
        if (item.value) {
            item.parentElement.classList.add('focused');
        }
    })






});