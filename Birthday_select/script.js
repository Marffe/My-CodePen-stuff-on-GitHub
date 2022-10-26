// Variables
const daysSelector = document.querySelector("[data-daySelector]")
const monthSelector = document.querySelector("[data-monthSelector]")
const yearSelector = document.querySelector("[data-yearSelector]")
const yourAge = document.getElementById("yourAge")
const ageBtn = document.getElementById("updateAgebtn")
const currentDate = new Date().getFullYear() + 1

// Funtions

for (let i = 1; i < 32; i++) {
    const addDays = document.createElement("option")
    addDays.value = i
    addDays.innerText = i
    daysSelector.append(addDays)
}

for (let m = 1; m < 13; m++) {
    const addMonths = document.createElement("option")
    addMonths.value = m
    addMonths.innerText = m
    monthSelector.append(addMonths)
 }

for (let y = 1925; y < currentDate; y++) {
    const addYears = document.createElement("option")
    addYears.value = y
    addYears.innerText = y
    yearSelector.append(addYears)
}

ageBtn.onclick = () => {
    let updateAge_year = 2022 - yearSelector.value
    yourAge.innerText = updateAge_year
}

