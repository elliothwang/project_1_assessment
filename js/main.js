let numberEl = document.querySelector("#number-display");
let inputEl = document.querySelector("#inputNum");


let addButton = document.querySelector("#add");
addButton.addEventListener("click", addNum);
let subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", subtractNum);

init();
function init () {
  numberEl.innerText = 0;
  inputEl.value = 1;
  
}


function addNum () {
numberEl.innerHTML = parseInt(numberEl.innerHTML, 10) + parseInt(inputEl.value, 10);
}

function subtractNum () {
    if (parseInt(numberEl.innerHTML, 10) - parseInt(inputEl.value, 10) < 0) {
      numberEl.style.color = "red";
      numberEl.innerHTML = parseInt(numberEl.innerHTML, 10) - parseInt(inputEl.value, 10);
    }
    else numberEl.innerHTML = parseInt(numberEl.innerHTML, 10) - parseInt(inputEl.value, 10);
  
}