window.onscroll = function () {
    const head = document.querySelector('header'); // Gunakan kelas yang telah ditambahkan di elemen header
    const fixNav = head.offsetTop;

    if (window.pageYOffset > fixNav) {

        head.style.backdropFilter = 'blur(5px)'; // Ubah nilai blur sesuai keinginan Anda
    } else {
        head.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        head.style.backdropFilter = 'none';
    }
}


const menu = document.getElementById('btn');
const navMenu = document.getElementById('nav-menu');


menu.addEventListener('click', function () {
    navMenu.classList.toggle('hidden')
})