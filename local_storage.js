const p = document.querySelector("#p");
const textInput = document.querySelector("#texto");

textInput.addEventListener("input", () => {
    p.innerText = textInput.value;;
    localStorage.setItem("savedText", textInput.value);
});
textInput.value = localStorage.getItem("savedText");
p.innerText = localStorage.getItem("savedText");


