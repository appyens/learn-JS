/*
Summary
Comparison operators return a boolean value.
    Strings are compared letter-by-letter in the “dictionary” order.
    When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
    Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.

 */


/*
Comparisons
We know many comparison operators from maths:

Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b (please note the double equals sign =. A single symbol a = b would mean an assignment).
Not equals. In maths the notation is ≠, but in JavaScript it’s written as an assignment with an exclamation sign before it: a != b.

 */

alert(2 > 1);
alert(2 == 1);
alert(2 != 1);

// A comparison result can be assigned to a variable, just like any value:
let result = 5 > 4;
alert(result);

/*
String comparison
To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
In other words, strings are compared letter-by-letter.
 */

alert("Z" > "A");
alert('GLow' > 'Glee');
alert('Bee' > 'Be');

/*
Comparison of different types
When comparing values of different types, JavaScript converts the values to numbers.

    For example:
*/

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

/*
For boolean values, true becomes 1 and false becomes 0.
For example:

*/

alert( true == 1 ); // true
alert( false == 0 ); // true

/*
Strict equality
A regular equality check == has a problem. It cannot differentiate 0 from false:
*/

alert( 0 == false ); // true

/*
The same thing happens with an empty string:
*/

alert( '' == false ); // true

/*
This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

    What to do if we’d like to differentiate 0 from false?

    A strict equality operator === checks the equality without type conversion.

    In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

    Let’s try it:
*/

alert( 0 === false ); // false, because the types are different

/*
Comparison with null and undefined
Let’s see more edge cases.

    There’s a non-intuitive behavior when null or undefined are compared to other values.

    For a strict equality check ===
These values are different, because each of them is a different type.
*/

alert( null === undefined ); // false
/*
For a non-strict check ==
There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

 */
alert( null == undefined ); // true

/*For maths and other comparisons < > <= >=
null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

    Now let’s see some funny things that happen when we apply these rules. And, what’s more important, how to not fall into a trap with them.

 */

/*
Strange result: null vs 0
Let’s compare null with a zero:
*/

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

/*
An incomparable undefined
The value undefined shouldn’t be compared to other values:
*/

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

/*Why does it dislike zero so much? Always false!
    We get these results because:
    Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
    The equality check (3) returns false because undefined only equals null, undefined, and no other value.

 */

