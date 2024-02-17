const form = document.querySelector(".foot-form")
const infoFromLocal = JSON.parse(localStorage.getItem("form-info"))

form.elements.userName.value = infoFromLocal ? infoFromLocal.name : "";
form.elements.userMail.value = infoFromLocal ? infoFromLocal.email : "";
form.elements.userMassage.value = infoFromLocal ? infoFromLocal.message : "";

form.addEventListener("input", doForInput)

function doForInput(evt) {
    const infoForLocal = {
    name: infoFromLocal.name || "",
    email: infoFromLocal.email || "",
    message: infoFromLocal.message || "",
}
    if (evt.target === form.elements.userName) {
        infoForLocal.name = evt.target.value.trim()
        localStorage.setItem("form-info", JSON.stringify(infoForLocal))
    } else if (evt.target === form.elements.userMail) {
        infoForLocal.email = evt.target.value.trim()
        localStorage.setItem("form-info", JSON.stringify(infoForLocal))
    } else {
        infoForLocal.message = evt.target.value.trim()
        localStorage.setItem("form-info", JSON.stringify(infoForLocal))
    }
}

console.log(localStorage.getItem("form-info"))

form.addEventListener("submit", doForSubmit)

function doForSubmit(evt) {
    evt.preventDefault()
    console.log(localStorage.getItem("form-info"))
    form.reset()
}

