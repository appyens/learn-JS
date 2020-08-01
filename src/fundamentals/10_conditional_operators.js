// the if statement

let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert( 'You are right!' );

//If we want to execute more than one statement, we have to wrap our code block inside curly braces:
if (year == 2015){
    alert("thats correct");
    alert("You are smart");

}

/*
The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

Let’s recall the conversion rules from the chapter Type Conversions:

A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.
So, the code under this condition would never execute:
 */

if (0){
    // 0 is falsy
}

// …and inside this condition – it always will:

if (1){
    // 1 is truthy
}

// We can also pass a pre-evaluated boolean value to if, like this:

let cond = (year == 2015);
if (cond){
    //
}

// the "else" clause

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
    alert( 'You guessed it right!' );
} else {
    alert( 'How can you be so wrong?' ); // any value except 2015
}

//Several conditions: “else if”
//Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
    alert( 'Too early...' );
} else if (year > 2015) {
    alert( 'Too late' );
} else {
    alert( 'Exactly!' );
}

//Conditional operator ‘?’

let accessAllowd;
let age = prompt('How old are you');
if (age > 18){
    accessAllowd = true;
}else{
    accessAllowd = false;
}

alert(accessAllowd);

// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

let result = condition ? value1 : value2;

let accessAllowd = (age > 18) ? true: false;


/*
Multiple ‘?’
A sequence of question mark operators ? can return a value that depends on more than one condition.
 */

let age = prompt('age?', 18);
let message = (age < 3)? "hi baby":
    (age < 18) ? "Hello":
        (age < 100) ? "gretings!" :
            "waht an unusual age!";

alert(message);

/*
It may be difficult at first to grasp what’s going on. But after a closer look, we can see that it’s just an ordinary sequence of tests:

The first question mark checks whether age < 3.
If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon ‘":"’, checking age < 18.
If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon ‘":"’, checking age < 100.
If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon ‘":"’, returning 'What an unusual age!'.
 */

//Non-traditional use of ‘?’
// Sometimes the question mark ? is used as a replacement for if:

let company = prompt("which company created JavaScript");
(company == 'Netscape') ?
    alert('Right') : alert('Wrong');


/*
Depending on the condition company == 'Netscape', either the first or the second expression after the ? gets executed and shows an alert.

We don’t assign a result to a variable here. Instead, we execute different code depending on the condition.

We don’t recommend using the question mark operator in this way.

The notation is shorter than the equivalent if statement, which appeals to some programmers. But it is less readable.


 */