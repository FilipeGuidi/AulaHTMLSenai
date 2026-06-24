function soma(){
     let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) + Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado
    
     salvarHistorico("Soma",primeiroNumero, segundoNumero, resultado)
}


function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    console.log("Função: " + nomeDaFuncao);
    console.log("Primeiro numero: " + num1 + ", SegundoNumero: " + num2);
    console.log("Resultado: " + resultado);
    console.log("--------------------------------------");
}
