const pick_num = document.getElementById("num_picker")
const show_num = document.getElementById("num_display")

function random_number(min, max) {
    return Math.floor(Math.random() * (max - min))
}

pick_num.onclick = () => {
    show_num.innerText = random_number(1, 100)
}