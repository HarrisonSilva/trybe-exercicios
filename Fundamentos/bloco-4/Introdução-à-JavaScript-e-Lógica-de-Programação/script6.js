const candidato = 'reprovada';

switch(candidato) {
    case 'aprovada': 
    console.log('Parabéns, você foi aprovada(o)')
    break;
    case 'lista':
    console.log('Você está na nossa lista de espera')
    break;
    case 'reprovada':
    console.log('reprovada, imprima Você foi reprovada(o)')
    break;
    default:
        console.log('imprima a mensagem de Informação incorreta')
}