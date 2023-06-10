Describe: mr-robogers();

Test: "It takes an integer as an array." 
Code: function userInput(3)
Expected Output: [0,1,2,3]

Test: "It finds the number 1 and returns a console.log of 'integer found.'
Code: function findInteger(1)
Expected Output: 'integer found.'

Test: "It finds the number 2 and returns a console.log of 'integer found.'
Code: function findInteger(2)
Expected Output: 'integer found.'

Test: "It finds the number 3 and returns a console.log of 'integer found.'
Code: function findInteger (3)
Expected Output: 'integer found.'

Test: It looks for the number 1 in the userArray and replaces with the string "Beep."
Code: function beepInsert()
Expected Output: ['Beep', 2, 3]

Test: It looks for the number 2 in the userArray and replaces with the string "Boop."
Code: function beepInsert()
Expected Output: ['Beep!', 'Boop!', 3]

Test: It looks for the number 3 in the userArray and replaces with the string "Won't you be my neighbor?"
Code: function neighborInsert()
Expected Output: ['Beep!', 'Boop!', 'Won't you be my neighbor?']

Test: It refactors code to remove findInteger function
Code: //function findInteger
Expected Output: Code runs correctly without function

Test: It replaces any text containing the integer 1, with Beep.
Code function beepInsert()
Expected Output: ['Beep!', 'Boop!', 'Won't you be my neighbor?', '4', '5', '6', '7', '8', '9', 'Beep', 'Beep']

Test: It replaces any text containing the integer 2, with Boop.
Code function boopInsert()
Expected Output: ['Beep!', 'Boop!', 'Won't you be my neighbor?', '4', '5', '6', '7', '8', '9', 'Beep', 'Beep', 'Boop!']






