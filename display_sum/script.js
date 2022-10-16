const show_result = document.getElementById("result")
const equal = document.querySelector("button")
const a_input = document.querySelector("#a")
const b_input = document.querySelector("#b")

equal.onclick = () => {
    a_num = parseInt(a_input.value)
    b_num = parseInt(b_input.value)
    result = a_num + b_num
    show_result.innerHTML = (result)
}