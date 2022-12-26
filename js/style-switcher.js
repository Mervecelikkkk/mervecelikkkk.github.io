const stylewitcherToggler=document.querySelector(".style-switcher-toggler");
stylewitcherToggler.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const alternateStyle=document.querySelectorAll(".alternateStyle");
function setActivateStyle (color) {
localStorage.setItem("color",color);
changeColor();
}
function changeColor() {
    alternateStyle.forEach((style)=>{
        if(localStorage.getItem("color")===style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
    })
}