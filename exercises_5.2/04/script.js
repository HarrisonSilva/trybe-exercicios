const lotteryDraw = (betNumber) => {
  const generateNumber = Math.floor(Math.random() * 5) + 1
  if (betNumber === generateNumber) {
    console.log('Parabéns, você ganhou');
  } else {
    console.log('Tente novamente');
  }
}
lotteryDraw(1)
