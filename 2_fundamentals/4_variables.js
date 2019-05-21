"use strict";

// SUMMARY
/*
We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration. The code must be in strict mode to use let in Chrome (V8).
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences
      from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.

 */

// VARIABLES

// To create a variable in JavaScript, use the let keyword.
let message;

//Now, we can put some data into it by using the assignment operator =:
message = 'hello';

//The string is now saved into the memory area associated with the variable. We can access it using the variable name:
alert(message);

// To be concise, we can combine the variable declaration and assignment into a single line:

let message2 = 'Hello';
alert(message2);

//We can also declare multiple variables in one line:
let user = 'jhon', age = 25, msg = 'Hello';

/*
That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.

The multiline variant is a bit longer, but easier to read:
 */

let user = 'John';
let age = 25;
let message = 'Hello';


//Some people also define multiple variables in this multiline style:
let user = 'John',
    age = 25,
    message = 'Hello';


//…Or even in the “comma-first” style:
let user = 'John'
    , age = 25
    , message = 'Hello';

// We can also declare two variables and copy data from one into the other.
let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

///////////////////////////////////////////////////////////////////
// IDENTIFIERS

/*
There are two limitations on variable names in JavaScript:

The name must contain only letters, digits, or the symbols $ and _.
    The first character must not be a digit.
    Examples of valid names:
*/

let userName;
let test123;

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

// Examples of incorrect variable names:

let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in the name

// Case matters
// Variables named apple and AppLE are two different variables.

// Non-Latin letters are allowed, but not recommended
// It is possible to use any language, including cyrillic letters or even hieroglyphs, like this:

let имя = '...';
let 我 = '...';

////////////////////////////////////////////////////////////
//KEYWORDS

/*
There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
    For example: let, class, return, and function are reserved.
    The code below gives a syntax error:
*/

let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!
//
// An assignment without use strict
// Normally, we need to define a variable before using it. But in the old times, it was technically possible to
// create a variable by a mere assignment of the value without using let. This still works now if we don’t put
// use strict in our scripts to maintain compatibility with old scripts.

    // note: no "use strict" in this example

    num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5

// This is a bad practice and would cause an error in strict mode:

    "use strict";
num = 5; // error: num is not defined

////////////////////////////////////////////////////////////////////
// CONSTANTS
// To declare a constant (unchanging) variable, use const instead of let:

const myBirthday = '18.04.1982';
// Variables declared using const are called “constants”. They cannot be changed.
// An attempt to do so would cause an error:

const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

// Uppercase constants
/*
There is a widespread practice to use constants as aliases for difficult-to-remember values that are
known prior to execution. Such constants are named using capital letters and underscores.
For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:
 */

const COLOR_RED = "#ff0800";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

/*
Benefits:

COLOR_ORANGE is much easier to remember than "#FF7F00".
It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.
When should we use capitals for a constant and when should we name it normally? Let’s make that clear.
Being a “constant” just means that a variable’s value never changes. But there are constants that are known prior
to execution (like a hexadecimal value for red) and there are constants that are calculated in run-time,
during the execution, but do not change after their initial assignment.

    For instance:
*/

const pageLoadTime = /* time taken by a webpage to load */;

/*

The value of pageLoadTime is not known prior to the page load, so it’s named normally. But it’s still a constant
because it doesn’t change after assignment. In other words, capital-named constants are only used as aliases
for “hard-coded” values.

 */

/*
Some good-to-follow rules are:

Use human-readable names like userName or shoppingCart.
Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing.
It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the
variable is referencing.
Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name
related variables currentUser or newUser instead of currentVisitor or newManInTown.

 */