/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
  // An if else statement compares the variable doorChoice equal to 1. If the door that was chosen is 1 then variable bearClothing is assigned a string value "hat". If not it is assigned a string value "scarf"

2. What variable has a new value assigned to it after the first if statement executes?
  // bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  // scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
  // An If else statement compares the variable bearChoice with the number 1. If the expression evaluates as true then the console.log statement that follows runs. If bearChoice evaluates as false then the console.log statement is skipped and the first else if condition is evaluated. This second conditional statement compares bearChoice strict equal to the number 3. If this condition evaluates as true then the code block that follows it will run. If it evaluates to false the final code block will run that corresponds to the the else code block.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  // "You run as fast as you can into the next room. It's full of snakes!"

7. What is your favorite ending?
  // bearChoice === 1
*/
