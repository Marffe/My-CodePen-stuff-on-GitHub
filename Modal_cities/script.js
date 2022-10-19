// España
const btn_show_espana = document.getElementById("show_info_espana")
const card_espana = document.getElementById("info_espana")
const close_card_espana = document.getElementById("close_espana")
// Brasil
const btn_show_brasil = document.getElementById("show_info_brasil")
const card_brasil = document.getElementById("info_brasil")
const close_card_brasil = document.getElementById("close_brasil")
// Argentina
const btn_show_argentina = document.getElementById("show_info_argentina")
const card_argentina = document.getElementById("info_argentina")
const close_card_argentina = document.getElementById("close_argentina")
// USA - Texas
const btn_show_usa = document.getElementById("show_info_usa")
const card_usa = document.getElementById("info_usa-texas")
const close_card_usa = document.getElementById("close_usa")



btn_show_espana.onclick = () => {
    card_espana.classList.remove("hide")
}
close_card_espana.onclick = () => {card_espana.classList.add("hide")}

btn_show_brasil.onclick = () => {
    card_brasil.classList.remove("hide")
}
close_card_brasil.onclick = () => {card_brasil.classList.add("hide")}

btn_show_argentina.onclick = () => {
    card_argentina.classList.remove("hide")
}
close_card_argentina.onclick = () => {card_argentina.classList.add("hide")}

btn_show_usa.onclick = () => {
    card_usa.classList.remove("hide")
}
close_card_usa.onclick = () => {card_usa.classList.add("hide")}