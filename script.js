function mudarBG(cor) {
    
    const h1 = document.querySelector("h1");

    // cor
    document.body.style.backgroundColor = cor;

    // alterar a cor 
    if (cor.toLowerCase() === "black" || cor === "#000000") {
        h1.style.color = "white";
    } else if (cor.toLowerCase() === "green" || cor === "#ffffff") {
        h1.style.color = "black";
    } else {
        h1.style.color = ""; 
    }
}

const corEscolhida = prompt("Digite o nome ou o código hexadecimal da cor:");
if (corEscolhida) {
    mudarBG(corEscolhida);
} else {
    alert("Você não inseriu nenhuma cor. O fundo permanecerá o mesmo.");
}
