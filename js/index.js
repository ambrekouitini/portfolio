/* MENU BURGER*/

const hamburger = document.querySelector(".hamburger"); // déclaration variable qui ne peut pas être modifiés par des réaffectations ulterieurs so cant be declaré à nouveau
const menuNav = document.querySelector(".menu-nav");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    menuNav.classList.toggle("active");
})

document.querySelectorAll(".menu-link").forEach(n => n. addEventListener("click",() => {
    hamburger.classList.remove("active");
    menuNav.classList.remove("active");
}))

window.addEventListener('scroll', () => {
	hamburger.classList.remove("active");
	menuNav.classList.remove("active");
})
