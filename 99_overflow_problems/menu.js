const btn = document.querySelector("button")
const menu_list = document.querySelector("ul")
const menu = document.querySelector("nav")

btn.onclick = () => {
    menu_list.classList.remove("hide")
    menu.classList.add("close")
    btn.classList.add("close_btn")
}