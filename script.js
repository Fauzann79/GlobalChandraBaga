document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn");
    const navMenu = document.getElementById("nav-menu");
    const head = document.querySelector('header');

    // Event listener untuk mengubah tampilan saat tombol hamburger diklik
    btn.addEventListener("click", function () {
        navMenu.classList.toggle("hidden");
    });

    document.addEventListener("DOMContentLoaded", function () {
        const btn = document.getElementById("btn");
        const navMenu = document.getElementById("nav-menu");

        btn.addEventListener("click", function () {
            navMenu.classList.toggle("hidden");
        });
    });

    // Event listener untuk mengubah tampilan header saat di-scroll
    window.addEventListener("scroll", function () {
        const fixNav = head.offsetTop;

        if (window.pageYOffset > fixNav) {
            head.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            head.style.backdropFilter = 'blur(5px)'; // Ubah nilai blur sesuai keinginan Anda
        } else {
            head.style.backdropFilter = 'none';
        }
    });
});
