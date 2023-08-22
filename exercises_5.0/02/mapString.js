const mapString = (objectMap, string) => {
    const splitString = string.split('');
    const mappedArray = [];
    for (let index = 0; index < splitString.length; index += 1) {
      const character = splitString[index];
      const mappedValue = objectMap[character];
      
      if (mappedValue) {
        mappedArray.push(mappedValue);
      } else {
        mappedArray.push(character);
      }
    }
    return mappedArray.join('');
  }

module.exports = mapString