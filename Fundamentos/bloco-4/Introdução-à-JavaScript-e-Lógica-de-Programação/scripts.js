let peçaDeXadrez = "jao";

switch(peçaDeXadrez) {
    case "peao": console.log("peao -> uma ou duas casas para cima");
    break;
    case "cavalo": console.log("cavalo -> um L pra qualquer lado");
    break;
    case "bispo": console.log("bispo -> diagonal para qualquer lado");
    break;
    case "torre": console.log("torre -> todas casas pra cima ou para os lados");
    break;
    case "rainha": console.log("qualquer casa pra qualquer lado");
    break;
    case "rei": console.log("uma casa pra qualquer lado");
    break;

    default:
        console.log("Erro, peça invalida!");







}