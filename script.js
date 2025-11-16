let valor = 0;

function mais() {
    valor = valor + 1;
    mostrar();
}

function menos() {
    valor = valor - 1;
    mostrar();
}

function zerar() {
    valor = 0;
    mostrar();
}

function mostrar() {
    let caixa = document.getElementById("numero");
    caixa.textContent = valor;
}