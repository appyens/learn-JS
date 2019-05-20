// SUMMARY

/*
There are 7 basic data types in JavaScript.

number for numbers of any kind: integer or floating-point.
string for strings. A string may have one or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
object for more complex data structures.
symbol for unique identifiers.
The typeof operator allows us to see which type is stored in a variable.

Two forms: typeof x or typeof(x).
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.
 */


// no types
let message = 'hello';
message = 1234;

// Programming languages that allow such things are called “dynamically typed”, meaning that there are data types,
// but variables are not bound to any of them.

// NUMBER

let n = 123;
n = 12.234;

//Besides regular numbers, there are so-called “special numeric values” which also belong to this data type:
// Infinity, -Infinity and NaN.

// infinity
alert(1/0);
alert(Infinity);

/*
NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
 */

alert("not a number" / 2);

// NaN is sticky. Any further operation on NaN returns NaN:
alert( "not a number" / 2 + 5 ); // NaN

//So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result.


// STRING

// A string in JavaScript must be surrounded by quotes.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed ${str}`;

/*
In JavaScript, there are 3 types of quotes.

    Double quotes: "Hello".
    Single quotes: 'Hello'.
    Backticks: `Hello`.

    Double and single quotes are “simple” quotes. There’s no difference between them in JavaScript.
    Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

 */

let name = "jhon";
alert(`hello ${name}`);
alert(`the result is ${1 + 2}`);

// In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is char.

// BOOLEAN

//The boolean type has only two values: true and false.
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked


// NULL
/*
The special null value does not belong to any of the types described above.
It forms a separate type of its own which contains only the null value:

 */

let age = null;


// UNDEFINED

/*
The special value undefined also stands apart. It makes a type of its own, just like null.
The meaning of undefined is “value is not assigned”.
If a variable is declared, but not assigned, then its value is undefined:

 */

let x;
alert(x); // shows "undefined"

// Technically, it is possible to assign undefined to any variable:

let x = 123;
x = undefined;
alert(x); // "undefined"


// OBJECT

//The object type is special.


/*
The typeof operator
The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.

    It supports two forms of syntax:

    As an operator: typeof x.
    As a function: typeof(x).

*/

typeof undefined // undefines
typeof 0 // number
typeof true // booleans
typeof("foo") // string
typeof Symbol("id") // symbol
typeof Math // object
typeof null // object
typeof alert // function

/*
The last three lines may need additional explanation:

Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers. Here, it serves just as an example of an object.
The result of typeof null is "object". That’s wrong. It is an officially recognized error in typeof, kept for compatibility. Of course, null is not an object. It is a special value with a separate type of its own. So, again, this is an error in the language.
The result of typeof alert is "function", because alert is a function of the language. We’ll study functions in the next chapters where we’ll see that there’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently. Formally, it’s incorrect, but very convenient in practice.
 */