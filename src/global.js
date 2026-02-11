//Referenser till gemensam stil
import './global.scss';

//js
import toggleMenue from './js/nav/toggleMenue'

if (window.matchMedia("(max-width:1100px)").matches) {
  //Visa eller dölj ikon och nav på mindre skrärm
  const header = document.querySelector("#header");
  const hamburgerIcon = document.querySelector("#hamburger");
  const closeIcon = document.querySelector("#close");
  const nav = document.querySelector("#nav");
  hamburgerIcon.classList.remove("hidden");
  header.addEventListener("click", (evt) => {
    toggleMenue(hamburgerIcon, closeIcon, nav, evt)
  })
}

