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



// 3
/*
Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.

Examples of its work:
 */