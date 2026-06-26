function calcular(){
    let valorProduto = document.getElementById("valor-produto").value;
    let valorFinal 
    if (valorProduto < 50) {
        valorFinal = valorProduto * 1.2
    } else {
        valorFinal = (valorProduto * 1.2) * 1.9
    }
    
document.getElementById("valorFinal").innerText = valorFinal;

let valorEmReal = (valorFinal * 5.18)
document.getElementById("valorEmReal").innerText = valorEmReal;


}