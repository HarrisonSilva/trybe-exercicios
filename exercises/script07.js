let inputLine = '';
let inputPosition = 5 - 1;

for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    if (j < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + '*';
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
 


