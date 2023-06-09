//Business Logic

function containsInt(text) {
  let intSplit = text.toString().split("");
  let integers = intSplit.map(Number);
  console.log(integers);
  if (integers === isNaN) {
    return "Enter whole numbers only";
  }
  return "Good job entering a number!";

}










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
function startsWithVowel(text){
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