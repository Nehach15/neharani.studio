const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".menu-overlay");


if(menuIcon){

menuIcon.addEventListener("click",()=>{

sidebar.classList.toggle("active");
overlay.classList.toggle("active");

});

}


if(overlay){

overlay.addEventListener("click",()=>{

sidebar.classList.remove("active");
overlay.classList.remove("active");

});

}
