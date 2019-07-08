//1. premitive


/*
Try running it:

 let str = "Hello";

str.test = 5; // (*)

alert(str.test);
Depending on whether you have use strict or not, the result may be:

undefined (no strict mode)
An error (strict mode).
Why? Let’s replay what’s happening at line (*):

When a property of str is accessed, a “wrapper object” is created.
In strict mode, writing into it is an error.
Otherwise, the operation with the property is carried on, the object gets the test property, but after that the “wrapper object” disappears.
So, without strict mode, in the last line str has no trace of the property.

This example clearly shows that primitives are not objects.

They can’t store additional data.
 */


//2. data types

// 1
//Repeat until the input is a number
function readNumber() {
    let num;

    do {
        num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);


// 2
/*
The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).
 */

function random(min, max) {
    result = Math.random(min, max);
    return result;
}


// 3
/*
Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.

Examples of its work:
 */

function randomInclude(min, max) {
    result = Math.random(min, max + 1)
    return result;
}

// strings tasks
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1)

}

// checkspam
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');

}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");

//truncate
function truncate(str, maxlength) {
    if ((str.length > maxlength)){
        return str[maxlength - 1] + '...'
    }
    return str
}

truncate("What I'd like to tell on this topic is:", 20)

truncate("Hi everyone!", 20);

//extract the money
function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 ); // true

// Array
//create array
let styles = ['Jazz', 'blues'];
//push
styles.push("Rock-n-Roll");
alert(styles);
// finding center and assigning value at
styles[Math.floor(styles.length - 1) / 2] = 'Classics';
// strip first value
alert(styles[0]);
// prepend values
styles.unshift("Reggae");
styles.unshift("Rap");
alert(styles);

// function
function sumInput() {

    let numbers = [];

    while (true) {

        let value = prompt("A number please?", 0);

        // should we cancel?
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert( sumInput() );