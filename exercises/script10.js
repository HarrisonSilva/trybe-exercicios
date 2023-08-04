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



  for (let nome in moradores) {
    console.log(moradores[nome][0].nome, moradores[nome][0].sobrenome);
    console.log(moradores[nome][1].nome, moradores[nome][0].sobrenome);
  }