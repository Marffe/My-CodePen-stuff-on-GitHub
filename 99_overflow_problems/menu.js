const btn_open = document.getElementById("open")
const btn_close = document.getElementById("close")
const menu_list = document.getElementById("menu_list")

btn_open.onclick = () => {menu_list.classList.add("show")}
btn_close.onclick = () => {menu_list.classList.remove("show")}