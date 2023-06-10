Describe: mr-robogers();

Test: "It takes an integer as an array." 
Code: function userInput(3)
Expected Output: [0,1,2,3]

~~Test: "It recognizes a string as NaN."
Code: containsInt("live")
Expected Output: NaN~~

Test: "It converts text to string and performs .split"
Code: intSplit("234")
Expected Output: ('2' ,'3', '4')

Test: "It converts string back to integers after .split and returns integers back instead of strings."
Code: let integers = 234
Expected Output: (2, 3, 4)

Test: "It returns NaN when string is entered that is not a numberic value and cannot be converted to integer.
Code: let integers = "live"
Expected Output: (4) [NaN, NaN, NaN, NaN]

Test: It uses if statement to return "Enter whole numbers only" if array comes back with NaN in any position"
Code: if (integers.includes(NaN)) when intigers = "live"
Expected Output: "Enter whole numbers only."

Test: It returns integers back to the console not as log but an actual return.
Code: return integers
Expected Output: (3) [2, 3, 4]

Test: It pushes integers into global array.
Code: finalInt.push(integers)
Expected Output: fianlInt = [2, 3, 4]

Test: It checks to make sure array will not be updated with string.
Code: finalInt.push(integers) using "live"
Expected Output: "Enter whole numbers only."

Test: It makes finalInt a global veriable.
Code: let finalInt
Expected Output: Calls veriable on the global level.

Test: It looks for the number 1 in the finalInt and replaces with the string "Beep."
Code: function beepInsert()
Expected Output: ['Beep', 2, 3]

Test: It looks for the number 2 in the finalInt and replaces with the string "Boop."
Code: function beepInsert()
Expected Output: ['Beep!', 'Boop!', 3]

Test: It looks for the number 3 in the finalInt and replaces with the string "Won't you be my neighbor?"
Code: function neighborInsert()
Expected Output: ['Beep!', 'Boop!', 'Won't you be my neighbor?']

Test: It looks for multiple instances of the number 1 and replaces all with "Beep!"
code: function beepInsert()
Expected output: Beep!, Boop!, 3, Beep!



