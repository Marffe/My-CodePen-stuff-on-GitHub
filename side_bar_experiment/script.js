const m_open = document.getElementById("open")
const m_close = document.getElementById("close")
const side_menu = document.querySelector(".side_menu")
const s_container = document.querySelector("body")

m_open.onclick = function() {
    m_close.classList.add("active_menu")
    side_menu.classList.add("active_menu")
    s_container.classList.add("static")
}

m_close.onclick = function() {
    m_close.classList.remove("active_menu")
    side_menu.classList.remove("active_menu")
    s_container.classList.remove("static")
}