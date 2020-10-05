const inputField = document.getElementById("input");
const result = document.querySelector ("H2");
inputField.addEventListener ("input", function (){
    const inputText = inputField.nodeValue;
    result.innerHTML = inputText;
});