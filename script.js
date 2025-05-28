// Tela 1 → Tela 2
setTimeout(() => {
    document.getElementById("tela1").style.display = "none";
    document.getElementById("tela2").style.display = "block";
}, 3000);

// Tela 2 → Tela 3 (contagem)
setTimeout(() => {
    document.getElementById("tela2").style.display = "none";
    document.getElementById("tela3").style.display = "block";

    let contador = 3;
    const contadorElemento = document.getElementById("contador");

    const intervalo = setInterval(() => {
        contador--;
        if (contador > 0) {
            contadorElemento.textContent = contador;
        } else {
            clearInterval(intervalo);
            document.getElementById("tela3").style.display = "none";
            document.getElementById("tela4").style.display = "block";
        }
    }, 1000);
}, 5000);
