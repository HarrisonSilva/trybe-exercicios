const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const myWebpage = document.getElementById('my-spotrybefy');
const input = document.getElementById('input');

const manipulatClassTech = (event) => {
    const tech = document.querySelector(".tech")
    tech.classList.remove('tech')
    event.target.classList.add('tech')
    input.value = ''
}

firstLi.addEventListener("click", manipulatClassTech)
secondLi.addEventListener("click", manipulatClassTech)
thirdLi.addEventListener("click", manipulatClassTech)

input.addEventListener('input', (event) => {
    const tech = document.querySelector('.tech')
    tech.innerText = event.target.value
})


myWebpage.addEventListener("dblclick", () => {
    window.location.replace('https://www.betrybe.com/')
})

myWebpage.addEventListener('mouseover', () => {
    myWebpage.style.color = 'red'
})

