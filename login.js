const userLogin1 = {
    email: "carlos123@gmail.com", password: "123"
}
let form = document.querySelector("form");
    
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let emailForm = e.target.elements.email.value
    let passwordForm = e.target.elements.password.value

    if (emailForm === userLogin1.email && passwordForm === userLogin1.password) {
        localStorage.setItem("email", emailForm)
        localStorage.setItem("cart", JSON.stringify([]))
        localStorage.setItem("quantity", "0")
        location.href = "./index.html";
    } else {
        alert("incorrecto")
    }
})