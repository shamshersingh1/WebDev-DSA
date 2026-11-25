
let addElem = document.querySelector("#add");
let subElem = document.querySelector("#sub");
let mulElem = document.querySelector("#mul");
let divElem = document.querySelector("#div");

let inputOneElem = document.getElementById("input1");
let inputSecondElem = document.getElementById("input2");

let calElem = document.getElementById("calElem");
let output = document.getElementById("output");

let selectedOperator = '';
let selectedElem = null;

addElem.addEventListener('click', function() {
    if (selectedElem) {
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
    }

    selectedElem = addElem;
    selectedOperator = addElem.textContent;
    addElem.style.backgroundColor = "blue";
    addElem.style.color = "white";
});

subElem.addEventListener('click', function() {
    if (selectedElem) {
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
    }

    selectedElem = subElem;
    selectedOperator = subElem.textContent;
    subElem.style.backgroundColor = "blue";
    subElem.style.color = "white";
});

mulElem.addEventListener('click', function() {
    if (selectedElem) {
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
    }

    selectedElem = mulElem;
    selectedOperator = mulElem.textContent;
    mulElem.style.backgroundColor = "blue";
    mulElem.style.color = "white";
});

divElem.addEventListener('click', function() {
    if (selectedElem) {
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
    }

    selectedElem = divElem;
    selectedOperator = divElem.textContent;
    divElem.style.backgroundColor = "blue";
    divElem.style.color = "white";
});

calElem.addEventListener('click', function() {

    let valone = Number(inputOneElem.value);
    let valtwo = Number(inputSecondElem.value);
    let ans;

    if (inputOneElem.value === "" || inputSecondElem.value === "") {
        output.textContent = "Enter both numbers";
        return;
    }

    switch(selectedOperator) {

        case '+':
            ans = valone + valtwo;
            break;

        case '-':
            ans = valone - valtwo;
            break;

        case '*':
            ans = valone * valtwo;
            break;

        case '/':
            if (valtwo === 0) {
                output.textContent = "Cannot divide by zero";
                return;
            }
            ans = valone / valtwo;
            break;

        default:
            output.textContent = "Select an operator";
            return;
    }

    output.textContent = ans;
});
 