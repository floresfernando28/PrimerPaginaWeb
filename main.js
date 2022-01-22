const menu = document.querySelector(".contenedor-menu");
const openMenuBtn = document.querySelector(".abrir-menu");
const closeMenuBtn = document.querySelector(".cerrar-menu");

function toggleMenu(){
    menu.classList.toggle("open-menu");

}

openMenuBtn.addEventListener("click",toggleMenu);
closeMenuBtn.addEventListener("click",toggleMenu);
