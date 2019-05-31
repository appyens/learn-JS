/*

Function expressions and arrows
In JavaScript, a function is not a “magical language structure”, but a special kind of value.

The syntax that we used before is called a Function Declaration:
 */


function sayHi() {
    alert("hello")
}

/*

There is another syntax for creating a function that is called a Function Expression.

    It looks like this:
 */

let sayHi = function () {
    alert("hello");
};


/*
Here, the function is created and assigned to the variable explicitly, like any other value. No matter how the function is defined, it’s just a value stored in the variable sayHi.

The meaning of these code samples is the same: "create a function and put it into the variable sayHi".

We can even print out that value using alert:
 */

function sayHi() {
    alert("hello");
}

alert(sayHi); // shows the function code

/*
Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.

It is a special value of course, in the sense that we can call it like sayHi().

But it’s still a value. So we can work with it like with other kinds of values.

We can copy a function to another variable:
 */

function sayHi() {   // (1) create
    alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)


/*
Here’s what happens above in detail:

The Function Declaration (1) creates the function and puts it into the variable named sayHi.

Line (2) copies it into the variable func.

Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.

Now the function can be called as both sayHi() and func().

Note that we could also have used a Function Expression to declare sayHi, in the first line:
 */

let sayHi = function() { ... };

let func = sayHi;
// ...

// Everything would work the same. Even more obvious what’s going on, right?