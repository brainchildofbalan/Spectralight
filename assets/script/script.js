document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.mobile-menu-wrapper');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const close = document.querySelector('.close-icon');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
    overlay.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
    close.addEventListener('click', function () {
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
                spaceBetween: 60,
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




    const bannerWrapper = document.querySelector('.banner-wrapper');
    const itemImg = document.querySelector('.banner-image');

    // Track the mouse position
    bannerWrapper.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Get the current position of the item
        const itemX = itemImg.getBoundingClientRect().left;
        const itemY = itemImg.getBoundingClientRect().top;

        // Calculate the distance between the mouse and the item
        const dx = (mouseX - itemX) / 40;
        const dy = (mouseY - itemY) / 40;

        // Update the item's position in the opposite direction of the mouse movement
        itemImg.style.transform = `translate(${-dx}px, ${-dy}px) scale(1.04)`;

    });


    bannerWrapper.addEventListener('mouseleave', (e) => {
        itemImg.style.transform = `translate(0px, 0px) scale(1.04)`;

    })




    // Function to add a class to the observed element
    function addClassToElement(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // When the element comes into the viewport
                entry.target.classList.add("in-viewport");
            }
        });
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver(addClassToElement, {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0.20 // 50% of the target element must be visible
    });

    // Target the element you want to observe
    const targetElement = document.querySelectorAll(".anim");

    // Start observing the element
    targetElement.forEach(item => {
        observer.observe(item);
    })





});