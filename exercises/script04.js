let biggerPrimeNumber = 0;

for (let i = 2; i <= 50; i += 1) {
  let numberPrime = true;

  for (let j = 2; j < i; j += 1) {
    if (i % j === 0) {
        numberPrime = false;
    }
  }

  if (numberPrime) {
    biggerPrimeNumber = i;
  }
}

console.log("O maior número primo entre 2 e 50 é:", biggerPrimeNumber);
