let display = document.getElementById("display");
function number(num) {
  let input = display.value;
  let oprater = ["+", "-", "%", "/", "*"];
  let last = input[input.length - 1];
  let newInput = num;

  if (oprater.indexOf(last) !== -1 && oprater.indexOf(newInput) !== -1) {
    input = input.slice(0, -1) + newInput;
  } else {
    input += newInput;
  }

  display.value = input;
}

function calculate() {
  let result = eval(display.value);
  display.value = "";
  display.value = result;
}

function deleteAll() {
  display.value = "";
}

function deleteLastNumber() {
  let last = display.value.slice(0, -1);
  display.value = last;
}
