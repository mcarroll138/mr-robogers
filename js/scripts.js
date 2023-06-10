//Business Logic
let userArray = []
function userInput(number) {
  let newArray = [];
  for (i = 0; i <= number; i++) {
    newArray.push(i);
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
  }

  function boopInsert() {
    const numberToReplace2 = 2;
    const replacementStringBoop = "Boop!";
    let indexBoop = userArray.indexOf(numberToReplace2);
    if (indexBoop !== -1) {
      userArray[indexBoop] = replacementStringBoop;
    };
  }

  function neighborInsert() {
    const numberToReplace3 = 3;
    const replacementStringNeighbor = "Won't you be my neighbor?";
    let indexNeighbor = userArray.indexOf(numberToReplace3);
    if (indexNeighbor !== -1) {
      userArray[indexNeighbor] = replacementStringNeighbor
    };
  }
/*







function beepInsert() {
  let numberToReplace1 = 1;
  let replacementStringBeep = "Beep!";
  let indexBeep = finalInt.indexOf(numberToReplace1);
  if (indexBeep !== -1) {
    finalInt[indexBeep] = replacementStringBeep;
  };
}

function boopInsert() {
  let numberToReplace2 = 2;
  let replacementStringBoop = "Boop!";
  let indexBoop = finalInt.indexOf(numberToReplace2);
  if (indexBoop !== -1) {
    finalInt[indexBoop] = replacementStringBoop;
  };
}

function neighborInsert() {
  let numberToReplace3 = 3;
  let replacementStringNeighbor = "Won't you be my neighbor?";
  let indexNeighbor = finalInt.indexOf(numberToReplace3);
  if (indexNeighbor !== -1) {
    finalInt[indexNeighbor] = replacementStringNeighbor;
  };
}

function reset() {
  finalInt = [];
}

function processInput(inputText) {
  reset();
  containsInt(inputText);
  beepInsert();
  boopInsert();
  neighborInsert();
  console.log(finalInt);
};








/* function startsWithVowel(text){
  let word = text;
  if (word.startsWith('a') || word.startsWith('e') ||word.startsWith('i') ||word.startsWith('o') ||word.startsWith('u')){
      return true;
  }
  return false;
}



function pigLatin(text){
 newWord = []
  let passage = text.split(" ");
passage.foreach(function(word){
  if (startsWithVowel(word)){
      newWord.push(word + "way");
  }
  else if(!startsWithVowel(passage)){
      newWord.push(word + "const");
  }
  
  // return word;
})
return newWord;
}
*/








/*let userNumber = []

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