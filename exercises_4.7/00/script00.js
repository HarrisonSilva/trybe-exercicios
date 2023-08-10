const body = document.body

const callFunctions = () => {
    createElements('input', 'TEXTO')
    createElements('input', 'Cor de fundo da tela')
    createElements('input', 'Cor do texto')
    createElements('input', 'Tamanho da fonte')
    createElements('input', 'Espaçamento entre as linhas do texto')
    createElements('input', 'Tipo da fonte Font family')
    createElements('p', ' ')
}

const createElements = (element, text) => {
    const newLabel = document.createElement('label')
    body.appendChild(newLabel)
    newLabel.innerText = text
    const newElement = document.createElement(element)
    newLabel.appendChild(newElement)
    newElement.className = `new-${text}`
    return newElement
}
callFunctions()


const getParagraph = document.querySelector('p')
const getInputText = document.querySelector('.new-TEXTO')
getInputText.addEventListener("input", () => {
    getParagraph.innerText = getInputText.value
    localStorage.setItem("text", getInputText.value)
})

getParagraph.innerText = localStorage.getItem("text", getInputText.value)


const getInputBackgroundColor = document.querySelector(".new-Cor")

getInputBackgroundColor.addEventListener("input", () => {
    body.style.backgroundColor = getInputBackgroundColor.value
    localStorage.setItem("backgroundColor", getInputBackgroundColor.value)
})

body.style.backgroundColor = localStorage.getItem("backgroundColor", getInputBackgroundColor.value)

const getInputColorText = document.querySelector(".texto")

getInputColorText.addEventListener("input", () => {
    getParagraph.style.color = getInputColorText.value
    localStorage.setItem("fontColor", getInputColorText.value)
})
getParagraph.style.color = localStorage.getItem("fontColor", getInputColorText.value)


const getInputFonsize = document.querySelector(".new-Tamanho")
getInputFonsize.addEventListener("input", () => {
    getParagraph.style.fontSize = getInputFonsize.value
    localStorage.setItem("fontSize", getInputFonsize.value)
})

getParagraph.style.fontSize = localStorage.getItem("fontSize", getInputFonsize.value)


const getInputEspacament = document.querySelector(".new-Espaçamento")
getInputEspacament.addEventListener("input", () => {
    getParagraph.style.lineHeight = getInputEspacament.value
    localStorage.setItem("lineHeight", getInputEspacament.value)
})

getParagraph.style.lineHeight = localStorage.getItem("lineHeight", getInputEspacament.value)

const getInputFontfamily = document.querySelector(".new-Tipo")
getInputFontfamily.addEventListener("input", () => {
    getParagraph.style.fontFamily = getInputFontfamily.value
    localStorage.setItem("fontFamily", getInputFontfamily.value)
})

getParagraph.style.fontFamily = localStorage.setItem("fontFamily", getInputFontfamily.value)