const inputField = document.getElementById("input");
const result = document.querySelector ("h2");
inputField.addEventListener ("input", function (){
    const inputText = inputField.value;
    result.innerHTML = inputText;
});