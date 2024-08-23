const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.menu__mobile');


function openMobileMenu() {
    burger.addEventListener('click', () => {

        mobileMenu.classList.toggle('active');

        burger.classList.toggle('active');
    });
}

openMobileMenu();



// burger.addEventListener('click', () => {
//     burger.classList.add('active');
//     document.querySelector('.menu__mobile').classList.add('active');
// });


