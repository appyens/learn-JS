/*String concatenation, binary +
Now, let’s see special features of JavaScript operators that are beyond school arithmetics.
Usually, the plus operator + sums numbers.
But, if the binary + is applied to strings, it merges (concatenates) them:

 */

let s = "my" + "string";
alert(s); // mystring


/*
Numeric conversion, unary +
The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

For example:
*/

// No effect on numbers

let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

// It actually does the same thing as Number(...), but is shorter.


// OPERATOR PRECEDENCE

/*

Precedence	                    Name	            Sign
…	…	…
16	                            unary plus	        +
16	                            unary negation	    -
14	                            multiplication	    *
14	                            division	        /
13	                            addition	        +
13	                            subtraction	        -
…	                            …	                …
3	                            assignment	        =
…	                            …	                …
As we can see, the “unary plus” has a priority of 16 which is higher than the 13 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.
 */


/*
Assignment
Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 3.

That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.
*/

let x = 2 * 2 + 1;

alert( x ); // 5


// It is possible to chain assignments:


let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4


/*
The assignment operator "=" returns a value
An operator always returns a value. That’s obvious for most of them like addition + or multiplication *. But the assignment operator follows this rule too.

The call x = value writes the value into x and then returns it.

Here’s a demo that uses an assignment as part of a more complex expression:
*/


let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

/*
In the example above, the result of (a = b + 1) is the value which is assigned to a (that is 3). It is then used to subtract from 3.

Funny code, isn’t it? We should understand how it works, because sometimes we see it in 3rd-party libraries, but shouldn’t write anything like that ourselves. Such tricks definitely don’t make code clearer or readable.
 */

/*
Remainder %

The remainder operator %, despite its appearance, is not related to percents.
The result of a % b is the remainder of the integer division of a by b.
    For instance:
 */

alert( 5 % 2 ); // 1 is a remainder of 5 divided by 2
alert( 8 % 3 ); // 2 is a remainder of 8 divided by 3
alert( 6 % 3 ); // 0 is a remainder of 6 divided by 3



/*
Exponentiation **
The exponentiation operator ** is a recent addition to the language.
For a natural number b, the result of a ** b is a multiplied by itself b times.
    For instance:
 */

alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)



/*
Increment/decrement
Increasing or decreasing a number by one is among the most common numerical operations.
So, there are special operators for it:
Increment ++ increases a variable by 1:

 */

let counter = 2;
counter++;      // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3
//Decrement -- decreases a variable by 1:

let counter = 2;
counter--;      // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1

//Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.


/*
To summarize:

If the result of increment/decrement is not used, there is no difference in which form to use:

 let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same
If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:

 let counter = 0;
alert( ++counter ); // 1
If we’d like to increment a value but use its previous value, we need the postfix form:

 let counter = 0;
alert( counter++ ); // 0
 */


/*
Bitwise operators
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
These operators are used very rarely. To understand them, we need to delve into low-level number representation and it would not be optimal to do that right now, especially since we won’t need them any time soon. If you’re curious, you can read the Bitwise Operators article on MDN. It would be more practical to do that when a real need arises.


 */


/*
Modify-in-place
We often need to apply an operator to a variable and store the new result in that same variable.

For example:

 */


let n = 2;
n = n + 5;
n = n * 2;


// This notation can be shortened using the operators += and *=:

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
alert( n ); // 14

/*
Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:
  */
let n = 2;
n *= 3 + 5;
alert( n ); // 16  (right part evaluated first, same as n *= 8)


/*Comma
The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.
The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.
For example:
*/

let a = (1 + 2, 3 + 4);
alert( a ); // 7 (the result of 3 + 4)

//Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.