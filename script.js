// Pastikan ini ada di bawah HTML-mu, sebelum </body>
const menuBtn = document.querySelector('#menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuBtn.classList.toggle('active');
});


