const innerTriangle = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0) {
        throw new Error('valores invalidos')
    } else {
        if (a + b + c === 180) {
            return true
        } else {
            return false
        }
    }
}  
console.log(innerTriangle(100, 50, 30));
  
  
  
  
  
  
  
  
  
  
  
  
  