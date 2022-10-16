const hex_btn = document.getElementById("hex_bg_btn")
const hex_colors = ["#4ECDC4", "#FF6B6B", "#F49D6E", "#2C2C54", "#FAFF7F", "#CCFFCB"]

const rgb_btn = document.getElementById("rgb_bg_btn")

hex_btn.onclick = () => {
    const colors_group = parseInt(Math.random()*hex_colors.length)
    document.getElementById("hex_bg").style.background = hex_colors[colors_group]
}

function randomize_rgb(min, max) {
    rgb_red = Math.random() * (max - min)
    rgb_green = Math.random() * (max - min)
    rgb_blue = Math.random() * (max - min)
}

rgb_btn.onclick = () => {
    randomize_rgb(10, 255)
    document.getElementById("rgb_bg").style.background =  `rgb(${rgb_red}, ${rgb_green}, ${rgb_blue})`
}