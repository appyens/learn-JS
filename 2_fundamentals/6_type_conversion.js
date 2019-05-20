/*
SUMMARY
=======
The three most widely used type conversions are to string, to number, and to boolean.

ToString – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

ToNumber – Occurs in math operations. Can be performed with Number(value).

The conversion follows the rules:

Value	Becomes…
undefined	NaN
null	0
true / false	1 / 0
string	The string is read “as is”, whitespaces from both sides are ignored. An empty string becomes 0. An error gives NaN.
ToBoolean – Occurs in logical operations. Can be performed with Boolean(value).

Follows the rules:

Value	Becomes…
0, null, undefined, NaN, ""	false
any other value	true
Most of these rules are easy to understand and memorize. The notable exceptions where people usually make mistakes are:

undefined is NaN as a number, not 0.
"0" and space-only strings like " " are true as a boolean.

 */


// ToString
/*
String conversion happens when we need the string form of a value.
For example, alert(value) does it to show the value.
We can also call the String(value) function to convert a value to a string:
 */

let value = true;
alert(typeof value);
value = String(value);
alert(typeof value);


// ToNumber
/*
Numeric conversion happens in mathematical functions and expressions automatically.
For example, when division / is applied to non-numbers:
 */

// 3, strings are converted to numbers
alert("6" / "2");

// We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number

// If the string is not a valid number, the result of such a conversion is NaN. For instance:

let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion failed

/*
Value	            Becomes…
undefined	        NaN
null	            0
true and false	    1 and 0
string	            Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

 */

alert(Number("    123    "));
alert(Number("123"));
alert(Number(true));
alert(Number(false));

/*
Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN.
 */

/*
Addition ‘+’ concatenates strings
Almost all mathematical operations convert values to numbers. A notable exception is addition +. If one of the added values is a string, the other one is also converted to a string.

Then, it concatenates (joins) them:
 */

alert( 1 + '2' ); // '12' (string to the right)
alert( '1' + 2 ); // '12' (string to the left)


/*
ToBoolean
Boolean conversion is the simplest one.

It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).

The conversion rule:

Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.
For instance:
 */

alert(Boolean(1));// true
alert(Boolean(0)); // false
alert(Boolean("hello")); // true
alert(Boolean("")); // false


