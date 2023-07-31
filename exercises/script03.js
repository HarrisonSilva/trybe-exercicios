const greaterThanTwoNumbers = (a, b) =>
a > b ? console.log(a, 'maior que', b)
: console.log(b, 'maior que', a);
greaterThanTwoNumbers(5, 5500)


const greaterThanThreeNumbers = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a, 'e maior que', b, 'e', c);
    } else if (b > a && b > c) {
        console.log(b, 'e maior que', a, 'e', c);
    } else {
        console.log(c, 'e maior que', a, 'e', b);
    }
}
greaterThanThreeNumbers(50, 10, 9000)

  
  
  
  
  
  
  
  
  
  
  
  
  