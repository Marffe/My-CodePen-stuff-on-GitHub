let search_open = document.querySelector(".search")
let search_close = document.querySelector(".close")
let search_box = document.querySelector(".search_box")

search_open.onclick = function show_searchbox() {
    search_box.classList.add("show_search")
}
search_close.onclick = function hide_searchbox() {
    search_box.classList.remove("show_search")
}



