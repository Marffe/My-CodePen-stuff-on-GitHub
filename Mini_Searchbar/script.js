const search_o = document.querySelector(".search_o")
const seacrh_c = document.querySelector(".seacrh_c")
const search_box = document.querySelector(".search_box")

search_o.onclick = function() {search_box.classList.add("opened")}
seacrh_c.onclick = function() {search_box.classList.remove("opened")}