function calcular() {
    var notaAprov = 6;


    var nome = document.getElementById("nome").value;

    var n1 = parseInt(document.getElementById("primeiraNota").value);
    var n2 = parseInt(document.getElementById("segundaNota").value);
    var n3 = parseInt(document.getElementById("terceiraNota").value);
    var n4 = parseInt(document.getElementById("quartaNota").value);

    var media = ((n1 + n2 + n3 + n4) / 4).toFixed(2);

    var resultado;

    if (media >= notaAprov) {
        resultado = `<div class="aprovado">${nome} Sua Media foi: ${media}<p>Parabéns, você foi aprovado!</p></div>`;
    } else {
        resultado = `<div class="reprovado">${nome} Sua Media foi: ${media}<p>Que pena, voce foi reprovado..."</p></div>`;
    }

    if (media == "NaN") {
        alert("Ops! você deve selecionar as notas para continuar!");
    } else if (nome == '') {
        alert("Ops! você não digitou seu nome!");
    } else {
        document.getElementById("resultado").innerHTML = resultado;
    }
}

function limpar() {
    document.getElementById("primeiraNota").selectedIndex = 0;
    document.getElementById("segundaNota").selectedIndex = 0;
    document.getElementById("terceiraNota").selectedIndex = 0;
    document.getElementById("quartaNota").selectedIndex = 0;
    document.getElementById("resultado").innerHTML = '';
    document.getElementById("nome").value = '';
}