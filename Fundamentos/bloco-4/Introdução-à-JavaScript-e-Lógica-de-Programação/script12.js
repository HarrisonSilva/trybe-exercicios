const peca = 'bispo'.toLowerCase()

switch(peca) {
    case 'peao':
        console.log('(',peca,')', 'so pode se mover para frente, porem como primeiro moviento o', peca,  'pode se mover ate duas casas para frente apenas uma vez')
        break;

    case 'rei':
        console.log('(',peca,')', 'pode se mover apenas uma casa pra qualquer direcao');
        break;

    case 'dama':
        console.log('(',peca,')', 'pode se mover quantas casas quiser pra qualquer direcao');
        break;
    
    case 'torre':
        console.log('(',peca,')', 'anda quantas casas quiser pra frente e para os lados');
        break;

    case 'cavalo':
        console.log('(',peca,')', 'anda em L pra qualquer direcao');
        break;

    case 'bispo':
        console.log('(',peca,')', 'anda quantas casas quiser em diagonal');
        break;

    default:
        console.log('(',peca,')', 'nao e uma peça valida');
}