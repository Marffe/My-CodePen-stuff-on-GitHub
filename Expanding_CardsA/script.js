const cards = document.querySelectorAll('.card')

cards.forEach(card => { // * We need to check each element to interact with it
    card.addEventListener('click', () => { // * Here I specify the trigger to expand the card, in this case is clicking in any card, the browser will check what card was clicked
        active_class_delete() // * This function will delete the active class from any
        card.classList.add('active') // * Then the active class will be added
    })
})

function active_class_delete() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}