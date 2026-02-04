export default function toggleMenue(hamburgerIcon, closeIcon, nav, evt) {
    const target = evt.target.closest("#hamburger, #close");
    if(!target) {
        console.error("Du klickade på ett otillåtet element");
        return
    }
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    nav.classList.toggle("hidden");
} 