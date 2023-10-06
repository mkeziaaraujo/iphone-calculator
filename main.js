const btn = document.querySelectorAll ('button');
const result = document.querySelector ('.zeroResult');
const functions = ['x', '÷', '%', '+', '-', '*', '='];
let evalValueString = '';
let isDisabledOperationsBtns = false
let value = ' '

function calculate () {
    result.innerHTML = eval(evalValueString)
    evalValueString = ''
};
function generateValueToCalculate (value) {
    if (value === '=') {
        calculate ();
        return;
    }
    if(value ==='x') {
        value = '*';
    }
    if(value === '÷'){
        value = '/';
    }
    if(value === '%') {
        evalValueString = parseFloat(result.innerHTML)/100;
        value = ''
    }
    evalValueString += value;
    result.innerHTML = evalValueString;
};
btn.forEach ((btn) => {
    btn.addEventListener("click", ()=> {
        if (btn.innerHTML === 'AC'|| btn.innerHTML === '±'){
            return;
        }
        generateValueToCalculate(btn.innerHTML);
        if (functions.includes(btn.innerHTML && !isDisabledOperationsBtns)) {
            functions.forEach((functions) => {
                functions.disabled = true;
            });
            isDisabledOperationsBtns = true;

        } else if (isDisabledOperationsBtns) {
            functions.forEach((functions) => {
                functions.disabled = false
            });
            isDisabledOperationsBtns = false
        }
        })
    })
function reset () {
    let reset = ''
    evalValueString = reset
    result.innerHTML = 0
}