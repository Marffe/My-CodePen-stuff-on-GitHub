const btn = document.getElementById("btn")
const btn_close = document.getElementById("close")
const menu = document.querySelector(".menu")

btn.onclick = () => {
    menu.classList.add("active")
}

btn_close.onclick = () => {
    menu.classList.remove("active")
}