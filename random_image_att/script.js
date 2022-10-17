const img_array = [
    "url(https://images.pexels.com/photos/2889701/pexels-photo-2889701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", 
    "url(https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", 
    "url(https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", 
    "url(https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", 
    "url(https://images.pexels.com/photos/12016340/pexels-photo-12016340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", 
    "url(https://images.pexels.com/photos/3579433/pexels-photo-3579433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", 
    "url(https://images.pexels.com/photos/7008379/pexels-photo-7008379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", 
    "url(https://images.pexels.com/photos/5293883/pexels-photo-5293883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", 
    "url(https://images.pexels.com/photos/97906/pexels-photo-97906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", 
    "url(https://images.unsplash.com/photo-1577587230708-187fdbef4d91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)"]

const img = document.getElementById("img")
const img_info = document.getElementById("img_info")
const change_city = document.getElementById("change_img")

window.onload = () => {
    image_picker(img_array)
}

change_city.onclick = () => {
    image_picker(img_array)
}

function image_picker(array) {
    let random_image = Math.floor(Math.random() * array.length)
    img.style.background = array[random_image]
    img.style.backgroundSize = "cover"

    if (random_image === 0) {
        img_info.innerText = "Montreal"
    }
    else if (random_image === 1) {
        img_info.innerText = "New york"
    }   
    else if (random_image === 2) {
        img_info.innerText = "Seattle"
    }   
    else if (random_image === 3) {
        img_info.innerText = "San francisco"
    }   
    else if (random_image === 4) {
        img_info.innerText = "Monterrey"
    }   
    else if (random_image === 5) {
        img_info.innerText = "Ciudad de México"
    }   
    else if (random_image === 6) {
        img_info.innerText = "Bogotá"
    }   
    else if (random_image === 7) {
        img_info.innerText = "Quito"
    }   
    else if (random_image === 8) {
        img_info.innerText = "Säo Paulo"
    }   
    else if (random_image === 9) {
        img_info.innerText = "Lima"
    }

}