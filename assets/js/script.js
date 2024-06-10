//SCRIPT EJERCICIO #1
const bordeRojo = document.querySelector("#bordeRojo");
console.log(bordeRojo);

bordeRojo.addEventListener("click", () => {
    if (bordeRojo.classList.contains("transformar")) {
        bordeRojo.classList.remove("transformar");
    } else {
        bordeRojo.classList.add("transformar");
    }
});