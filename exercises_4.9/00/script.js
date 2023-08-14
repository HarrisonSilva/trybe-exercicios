const veryfyNumbers = (value1, value2) => {
    if (!value1 || !value2) {
      throw new Error("Porfavor insira valores")
    }
    if (isNaN(Number(value1) || isNaN(Number(value2)))) {
      throw new Error("Porfavor insira numeros")
    }
}

const calculateSum = () => {
  try {
    const value1 = document.querySelector("#value1").value
    const value2 = document.querySelector("#value2").value
    veryfyNumbers(value1, value2)
    const result = Number(value1) + Number(value2)
    return result
    
  } catch (error) {
      document.querySelector("#result").innerHTML = `Erro: ${error.message}`
  }

}

const displayResult = (result) => {
    document.querySelector("#result").innerText = `O Resultado e ${result}`
    document.querySelector("#value1").value = ''
    document.querySelector("#value2").value = ''
}

const sum = () => {
  const result = calculateSum()
  if (result) {
    displayResult(result)
  }
}

window.onload = () => {
  const button = document.querySelector("button")
    button.addEventListener("click", sum)
}

