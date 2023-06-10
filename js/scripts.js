//Business Logic
let userArray = [];

function userInput(number) {
  let newArray = [];
  let outputArray = [];

  for (let i = 0; i <= number; i++) {
    newArray.push(i);
  }

  for (let i = 0; i < newArray.length; i++) {
    let element = newArray[i];
    if (element.toString().includes("1")) {
      element = "Beep!";
    } else if (element.toString().includes("2")) {
      element = "Boop!";
    } else if (element.toString().includes("3")) {
      element = "Won't you be my neighbor?";
    }

    outputArray.push(element);
  }
  userArray = newArray;
  //findInteger();
  beepInsert();
  boopInsert();
  neighborInsert();
  return newArray;
}

function beepInsert() {
  const numberToReplace1 = 1;
  const replacementStringBeep = "Beep!";
  for (let i = 0; i < userArray.length; i++) {
    let currentNumber = userArray[i];
    if (currentNumber.toString().includes(numberToReplace1.toString())) {
      userArray[i] = replacementStringBeep;
    };
  };
}

function boopInsert() {
  const numberToReplace2 = 2;
  const replacementStringBoop = "Boop!";
  for (let i = 0; i < userArray.length; i++) {
    let currentNumber = userArray[i];
    if (currentNumber.toString().includes(numberToReplace2.toString())) {
      userArray[i] = replacementStringBoop;
    };
  };
}

function neighborInsert() {
  const numberToReplace3 = "3";
  const replacementStringNeighbor = "Won't you be my neighbor?";
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].toString().includes(numberToReplace3)) {
      userArray[i] = replacementStringNeighbor;
    };
  };
}


// UI Logic

window.onload = function () {
  document.querySelector("button").addEventListener("click", whenClicked);
};

function whenClicked() {
  event.preventDefault();
  const userNumber = document.getElementById("userNumber").value;
  if (userNumber < 0) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Mr. Roboger only deals with positive numbers! Try again.";
    return;
  }
  const result = userInput(+(userNumber));
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = result.join(", ");
}

let form = document.querySelector("form");
form.onsubmit = function (event) {
  event.preventDefault();
  inputTotal();
};

let button = document.querySelector("button");
button.addEventListener("click", function () {
  inputTotal();
});