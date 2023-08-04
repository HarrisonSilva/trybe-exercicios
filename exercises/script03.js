  const numeroAleatorio = () => {
    return Math.random()
  }
  console.log(numeroAleatorio());


  const hello = (nome) => {
    return `Olá, ${nome}!`
  }
  let nome = 'Ivan';
  console.log(hello(nome));

  const nomeCompleto = (nome, sobrenome) => {
    return `${nome} ${sobrenome}`
  }
  let nome1 = 'Ivan';
  let sobrenome = 'Pires';
  console.log(nomeCompleto(nome1, sobrenome));


  let speed = 90;
  const speedCar = (speed) => {
    speed >= 120 ? console.log('Você ultrapassou o limite de velocidade') : console.log('Você está na velocidade permitida');
  };
  speedCar(speed);