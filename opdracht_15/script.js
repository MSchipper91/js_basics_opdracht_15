const buttonAlert = document.querySelector(".btn-alert");
const changeBackground = document.querySelector(".change-background");

const alertButton = () => {
       window.alert("Button Clicked!")
}

buttonAlert.addEventListener("click", alertButton);

const redBackground = () => {
    document.body.classList.toggle("red-background");
}

changeBackground.addEventListener("click", redBackground);