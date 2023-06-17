# **Mr Robogers**

### By Michael Carroll

A website created to use branching, for loops, and if/ else statments to replace numbers in an outputted array to end users. A user would enter a positive integer and Mr. Roboger would respond with an array, where the number 1 would be replaced with a "Beep!," the number 2 would be replaced with "Boop!," and the number 3 would be replaced with "Won't you be my neighbor?." Link to GH Page:https://github.com/mcarroll138

## Technologies used 
- HTML
- CSS
- JavaScript

## Complete setup/installation instructions 
- Clone this repository from github
- Launch index/index.html in text editor program

## Known Bugs

## License
MIT

Copyright (c) 2023 Michael Carroll

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Describe: mr-robogers();

Test: "It takes an integer as an array." Code: function userInput(3) Expected Output: [0,1,2,3]

Test: "It finds the number 1 and returns a console.log of 'integer found.' Code: function findInteger(1) Expected Output: 'integer found.'

Test: "It finds the number 2 and returns a console.log of 'integer found.' Code: function findInteger(2) Expected Output: 'integer found.'

Test: "It finds the number 3 and returns a console.log of 'integer found.' Code: function findInteger (3) Expected Output: 'integer found.'

Test: It looks for the number 1 in the userArray and replaces with the string "Beep." Code: function beepInsert() Expected Output: ['Beep', 2, 3]

Test: It looks for the number 2 in the userArray and replaces with the string "Boop." Code: function beepInsert() Expected Output: ['Beep!', 'Boop!', 3]

Test: It looks for the number 3 in the userArray and replaces with the string "Won't you be my neighbor?" Code: function neighborInsert() Expected Output: ['Beep!', 'Boop!', 'Won't you be my neighbor?']

Test: It refactors code to remove findInteger function Code: //function findInteger Expected Output: Code runs correctly without function

Test: It replaces any text containing the integer 1, with Beep. Code: function beepInsert() Expected Output: ['Beep!', 'Boop!', 'Won't you be my neighbor?', '4', '5', '6', '7', '8', '9', 'Beep', 'Beep']

Test: It replaces any text containing the integer 2, with Boop. Code: function boopInsert() Expected Output: ['Beep!', 'Boop!', 'Won't you be my neighbor?', '4', '5', '6', '7', '8', '9', 'Beep', 'Beep', 'Boop!']

Test: It replaces any text containing the integer 3, with Wont you be my neighbor. Code: function neighborInsert() Expected Output: ['Beep!', 'Boop!', 'Won't you be my neighbor?', '4', '5', '6', '7', '8', '9', 'Beep', 'Beep', 'Boop!', 'Wont you be my neighbor.']

Test: It adds the hierarchy of substitutions to the code. Code: if (element.toString().includes("1") Expected Output: ['Beep!', 'Boop!', 'Won't you be my neighbor?', '4', '5', '6', '7', '8', '9', 'Beep', 'Beep', 'Boop!', 'Wont you be my neighbor.']