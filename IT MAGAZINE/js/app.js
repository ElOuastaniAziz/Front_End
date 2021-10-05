
const nav = document.querySelector('#container nav');
const barNav = document.querySelector('#container nav .hamburger');
const navLinks = document.querySelector('#container nav .nav-links');
const links = document.querySelectorAll('#container nav .nav-links li');

barNav.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
    nav.classList.toggle('fix');
    links.forEach((link)=>{
        link.classList.toggle("fade");
    });
});

const parrafo = document.querySelectorAll('section .post p');

console.log(parrafo[1].textContent)//Así sacamos el texto de un parafo javascript poro

console.log($( "section .post p:eq(0)" ).text()); //Así sacamos el texto de un p con Jquery
console.log($( "section .post p:first" ).text())




