//SCRIPT EJERCICIO #2
document.getElementById("calcularBtn").onclick = () => {
    const sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
    const sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
    const sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

    const total = sticker1 + sticker2 + sticker3;

    const input1 = document.getElementById("sticker1");
    const input2 = document.getElementById("sticker2");
    const input3 = document.getElementById("sticker3");
    const mensaje = document.getElementById("mensaje");

    if (total <= 10) {
        const msg = `Llevas ${total} stickers`;
        console.log(msg);
        mensaje.textContent = msg;
        mensaje.classList.remove("error");
        input1.classList.remove("error");
        input2.classList.remove("error");
        input3.classList.remove("error");
    } else {
        const msg = "Llevas demasiados stickers";
        console.log(msg);
        mensaje.textContent = msg;
        mensaje.classList.add("error");
        input1.classList.add("error");
        input2.classList.add("error");
        input3.classList.add("error");
    }
};
