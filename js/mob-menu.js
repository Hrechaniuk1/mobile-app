const openMobMenuButton = document.querySelector(".mob-menu-btn-open")
const closeMobMenuButton = document.querySelector(".close-mob-menu-btn")

openMobMenuButton.addEventListener("click", modalToggle)
closeMobMenuButton.addEventListener("click", modalToggle)

function modalToggle() {
    const mobMenuWindow = document.querySelector(".mob-menu")
    mobMenuWindow.classList.toggle("is-hidden")
}
