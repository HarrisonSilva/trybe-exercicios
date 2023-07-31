let divisors = 1;
let numberPrime = 31;

for (let i = 2; i <= numberPrime; i += 1) {
  if (numberPrime % i === 0) {

      divisors += 1;
  }
}

if (divisors === 2) {
    console.log(numberPrime + ' é primo');
} else {
    console.log(numberPrime + ' não é primo');
}