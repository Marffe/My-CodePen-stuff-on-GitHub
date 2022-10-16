const progress = document.getElementById("progress")
const steps = document.querySelectorAll(".step")
const btn_next = document.getElementById("next")
const btn_prev = document.getElementById("prev")

let active_step = 1

btn_next.addEventListener('click', () => {
    active_step++
    if(active_step > steps.length) {
        active_step = steps.length
    }
    console.log(active_step)
    update()
})

btn_prev.addEventListener('click', () => {
    active_step--
    if(active_step < 1) {
        active_step = 1
    }
    console.log(active_step)
    update()
})

function update() {
    steps.forEach((step, idx) => {
        if(idx < active_step) {
            step.classList.add("active")
        } else {
            step.classList.remove("active")
        }
    })

    const active_steps = document.querySelectorAll(".active")

    progress.style.width = ((active_steps.length -1) / (steps.length -1)) * 100 + "%"

    if(active_step === 1) {
        btn_prev.disabled = true
    } else {
        btn_prev.disabled = false
    }

    if(active_step === 4) {
        btn_next.disabled = true
    } else {
        btn_next.disabled = false
    }
}