

window.onload = function() {
    function backgroundcor(cor) {
        const pai = document.body;
        pai.style.backgroundColor = cor
        localStorage.setItem("cordaPagina", cor)
    }
    function colorText(corLetra) {
        const getNat = document.getElementById("natalia");
        getNat.style.color = corLetra
        localStorage.setItem("cordaLetra", corLetra)
        
    }
    function fontTamanho(tamanhoDaFonte) {
    const getNat2 = document.getElementById("natalia");
    getNat2.style.fontSize = tamanhoDaFonte
    localStorage.setItem("tamanhoFont", tamanhoDaFonte)


    }
    function espacoLinha(linhaEspac) {
    const getNat3 = document.getElementById("natalia");
    getNat3.style.lineHeight = linhaEspac
    localStorage.setItem("espacLinha", linhaEspac)





    }
    function fontStyle(minhaFont) {
        const getNat4 = document.getElementById("natalia");
        getNat4.style.fontFamily = minhaFont
/*         localStorage.setItem("tipoFont", minhaFont)
 */


    }





    backgroundcor("yellow")
    colorText("blue")
    fontTamanho("10px")
    espacoLinha("50px")
    fontStyle("monospace")
    
}
