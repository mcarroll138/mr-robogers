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

function getArray(text) {
  let userInput = text.forEach;
  console.log(userInput)
}

/*function countUp(countTo, countBy) {
     if (badInputs) {
  return "Enter a number!";
 } else if (Math.sign(countTo) === -1) {
  return "Enter a positive number!";
 }
  for (let i = countBy; i <= countTo; i +=countBy) {
      finalResult.push(i);
  }
  return finalResult;
  
};

/*function countUp(countTo, countBy) {
  let finalResult = [];
  const badInputs = ["", NaN];
 if (badInputs.includes(parseInt(countTo)) || badInputs.includes(parseInt(countBy))) {
  return "Enter a number!";
 } else if (Math.sign(countTo) === -1 || Math.sign(countBy) === -1) {
  return "Enter a positive number!";
 }
  for (let i = countBy; i <= countTo; i +=countBy) {
      finalResult.push(i);
  }
  return finalResult;
  
};

\*

//Business logic

// function pigLatin(vowel, text) {
//     const passage = text;
//     let passageLength = passage.length;

//     // const vowelArray = ['a' ,'e' ,'i' ,'o' ,'u']
//     for (let i = 0; i <= passageLength; i++ )
//     if passag

// }

const numbers = [10, 23, 34, 44];
numbers.forEach(function (number) {
  alert('I Love ' + number);
});

function containsInt(text) {
  let intSplit = text.toString().split("");
  let integers = intSplit.map(Number);
  console.log(integers);

}



//User Logic