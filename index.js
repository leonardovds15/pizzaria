
function fazerPedido() {
   
    const nomeCliente = document.querySelector("#nome").value.trim();

    if (!nomeCliente) {
        alert("Por favor, preencha o nome antes de fazer o pedido.");
        return;
    }

    const tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');

    if (!tamanhoSelecionado) {
        alert("Por favor, selecione o tamanho da pizza.");
        return;
    }

    let precoPizza = 0;
    switch (tamanhoSelecionado.value) {
        case "pequena":
            precoPizza = 25.0;
            break;
        case "media":
            precoPizza = 35.0;
            break;
        case "grande":
            precoPizza = 50.0;
            break;
    }

    const adicionaisSelecionados = document.querySelectorAll('input[name="adicionais"]:checked');
    const precoAdicional = 5.0;
    const totalAdicionais = adicionaisSelecionados.length * precoAdicional;

    const valorTotal = precoPizza + totalAdicionais;

    const elementoValor = document.querySelector("h2 strong");
    elementoValor.textContent = valorTotal.toFixed(2);

    console.log(`Pedido realizado por ${nomeCliente}. Total: R$ ${valorTotal.toFixed(2)}`);
}
