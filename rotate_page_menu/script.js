const body = document.querySelector("body")
const content = document.getElementById("content")
const btn_open = document.getElementById("open")
const btn_close = document.getElementById("close")

btn_open.onclick = () => {
    body.classList.add("show_menu")
    content.classList.add("show_menu")
    btn_close.style.zIndex = "1"
    btn_open.style.zIndex = "-1"
}

btn_close.onclick = () => {
    body.classList.remove("show_menu")
    content.classList.remove("show_menu")
    btn_close.style.zIndex = "-1"
    btn_open.style.zIndex = "1"
}