/*
🚀 Exercício 4
Para finalizar o teste da função printMessage, 
você pode ainda criar um fluxo de exceção dentro
 da função para criar um erro caso seja enviado um
  parâmetro que não seja um objeto, ou que não tenha
   a propriedade personagem como no exemplo abaixo.

// printMessage.js
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  if (!characterInfo || characterInfo.personagem === undefined) {
    throw new Error('objeto inválido');
  }
  return ('Boas vindas, '+ characterInfo.personagem);
};

console.log(printMessage(info));

module.exports = { info, printMessage };

Agora que a função possui um fluxo de exceção, crie uma 
função de teste para validar se a mensagem de erro é lançada caso
 a função seja chamada com um objeto inválido.
 */