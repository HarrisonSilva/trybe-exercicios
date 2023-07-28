let array = ['java', 'javascript', 'python', 'html', 'css']
let biggestWord = array[0]
let smallestWord = array[0]
 for (let i = 0; i < array.length; i += 1) {
        if (biggestWord.length < array[i].length) {
            biggestWord = array[i]
        } else {
            smallestWord = array[i]
        }
    
    }
    console.log('Maior Palavra:', biggestWord, '|', 'Menor Palavra:', smallestWord);