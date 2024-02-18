const openModalButton = document.querySelector(".download-btn")
const closeModalButton = document.querySelector(".close-dwl-btn")

openModalButton.addEventListener("click", modalToggle)
closeModalButton.addEventListener("click", modalToggle)

function modalToggle() {
    const modalWindow = document.querySelector(".modal-bg")
    modalWindow.classList.toggle("is-hidden")
}

