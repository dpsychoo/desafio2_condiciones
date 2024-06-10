//SCRIPT EJERCICIO #3
document.querySelector("#verificarBtn").onclick = () => {
    const password1 = document.querySelector("#passwordSelect").value;
    const password2 = document.querySelector("#passwordSelect2").value;
    const password3 = document.querySelector("#passwordSelect3").value;
    const resultado = document.querySelector("#resultado");

    if (password1 === "9" && password2 === "1" && password3 === "1") {
        resultado.textContent = "Password 1 correcto";
        resultado.classList.remove("incorrecto");
        resultado.classList.add("correcto");
    } else if (password1 === "7" && password2 === "1" && password3 === "4") {
        resultado.textContent = "Password 2 correcto";
        resultado.classList.remove("incorrecto");
        resultado.classList.add("correcto");
    } else {
        resultado.textContent = "Password incorrecto";
        resultado.classList.remove("correcto");
        resultado.classList.add("incorrecto");
    }
};

//Si lo realizo con Inputs
/* document.querySelector("#verificarBtn").onclick = () => {
    const password1 = parseInt(document.querySelector("#passwordInput").value);
    const password2 = parseInt(document.querySelector("#passwordInput2").value);
    const password3 = parseInt(document.querySelector("#passwordInput3").value);
    const resultado = document.querySelector("#resultado");

    if (password1 === 9 && password2 === 1 && password3 === 1) {
        resultado.textContent = "Password 1 correcto";
    } else if (password1 === 7 && password2 === 1 && password3 === 4) {
        resultado.textContent = "Password 2 correcto";
    } else {
        resultado.textContent = "Password incorrecto";
    }
}; */
