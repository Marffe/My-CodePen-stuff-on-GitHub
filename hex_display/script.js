
let alt = ["1", "2", "3", "4", "5", "6", "A", "B", "C", "D", "E", "F"]
const hex_text = document.getElementById("hex_value")
const hex_btn = document.getElementById("hex_changer")
const bg = document.querySelector(".container")

function random_hex() {
    let hex_1 = alt[Math.floor(Math.random() * alt.length)]
    let hex_2 = alt[Math.floor(Math.random() * alt.length)]
    let hex_3 = alt[Math.floor(Math.random() * alt.length)]
    let hex_4 = alt[Math.floor(Math.random() * alt.length)]
    let hex_5 = alt[Math.floor(Math.random() * alt.length)]
    let hex_6 = alt[Math.floor(Math.random() * alt.length)]
    hex_text.innerText = "#" + hex_1 + hex_2 + hex_3 + hex_4 + hex_5 + hex_6
    bg.style.background = "#" + hex_1 + hex_2 + hex_3 + hex_4 + hex_5 + hex_6
    hex_btn.textContent = "Change color again"
}

hex_btn.onclick = () => {random_hex()}