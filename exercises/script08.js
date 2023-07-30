let inputLine = '';
let controlLeft = 3;
let controlRight = 3;

for (let i = 0; i <= 5; i += 1) {
  for (let j = 0; j <= 7; j += 1) {
    if (j > controlLeft && j < controlRight) {
      inputLine = inputLine + '*';
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};