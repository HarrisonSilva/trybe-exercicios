let controlLeft = 4;
let controlRight = 4;

for (let i = 1; i <= 4; i += 1) {
  let outputLine = '';
  for (let j = 1; j <= 7; j += 1) {
    if (j === controlLeft || j === controlRight || i === 4) {
      outputLine += '*';
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}