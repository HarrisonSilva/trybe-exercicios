  let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  const nome = moradores.blocoDois[1].nome
  const sobrenome = moradores.blocoDois[1].sobrenome
  const andar = moradores.blocoDois[1].andar
  const apartamento = moradores.blocoDois[1].apartamento


  console.log('O morador do bloco 2 de nome', nome, sobrenome, 'mora no', andar, 'andar, apartamento', apartamento);

  /* Exercício 4
Acesse as chaves nome, sobrenome,
 andar e apartamento do último morador 
 do blocoDois e faça um console.log no seguinte
  formato: “O morador do bloco 2 de nome Zoey 
  Brooks mora no 1° andar, apartamento 101”.

Utilize o for para imprimir o nome completo de todos 
os moradores do bloco 1, acessando suas chaves nome
 e sobrenome. Depois faça o mesmo para os moradores
  do bloco 2.
 */