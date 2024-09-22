// Untuk menghilangkan tombol Log In ketika scroll
const loginButton = document.getElementById("login");

window.addEventListener("scroll", function(){
    let scrollTop = this.window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        loginButton.style.opacity = "0";
    } else {
        loginButton.style.opacity = "1";
    }
    loginButton.style.transition = "opacity 0.5s";
});

// Menampilkan menu pada Hamburger Menu
function myFunction() {
    const navMenu = document.querySelector('.main-navigation ul');
    navMenu.classList.toggle('active');
};