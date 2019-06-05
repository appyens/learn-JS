/*
Object methods, "this"
Objects are usually created to represent entities of the real world, like users, orders and so on:
 */

let user = {
    name: 'Bunty',
    age: 30,
};

/*
And, in the real world, a user can act: select something from the shopping cart, login, logout etc.

Actions are represented in JavaScript by functions in properties.

Method examples
For the start, let’s teach the user to say hello:
 */

let user = {
    name: "Bunty",
    age: 30
};

user.sayHi = function () {
    alert("hello");
};

user.sayHi(); //hello!

/*
Here we’ve just used a Function Expression to create the function and assign it to the property user.sayHi of the object.

Then we can call it. The user can now speak!

A function that is the property of an object is called its method.

So, here we’ve got a method sayHi of the object user.

Of course, we could use a pre-declared function as a method, like this:
 */


let user = {
    // ...
};

// first, declare
function sayHi() {
    alert("Hello!");
};

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!


/*
Method shorthand
There exists a shorter syntax for methods in an object literal:
 */

// these objects do the same
user = {
    sayHi: function () {
        alert("hello")
    }
};

//method shorthand looks better, right?

user = {
    sayHi(){ //same as "sayHi: function()"
        alert("hello")
    }
};

/*
As demonstrated, we can omit "function" and just write sayHi().

To tell the truth, the notations are not fully identical. There are subtle differences related to object inheritance (to be covered later), but for now they do not matter. In almost all cases the shorter syntax is preferred.

“this” in methods
It’s common that an object method needs to access the information stored in the object to do its job.

For instance, the code inside user.sayHi() may need the name of the user.

To access the object, a method can use the this keyword.

The value of this is the object “before dot”, the one used to call the method.

For instance:
 */

let user = {
    name: "Bunty",
    age: 30,
    sayHi(){
        alert(this.name);
    }
};


user.sayHi();//Bunty

/*
Here during the execution of user.sayHi(), the value of this will be user.

Technically, it’s also possible to access the object without this, by referencing it via the outer variable:
 */

let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(user.name); // "user" instead of "this"
    }

};

/*
…But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

That’s demonstrated below:
 */

let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert( user.name ); // leads to an error
    }

};


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // Whoops! inside sayHi(), the old name is used! error!

/*
If we used this.name instead of user.name inside the alert, then the code would work.

“this” is not bound
In JavaScript, “this” keyword behaves unlike most other programming languages. It can be used in any function.

There’s no syntax error in the code like that:
 */

function sayHi() {
    alert(this.name);
}

/*
The value of this is evaluated during the run-time, depending on the context. And it can be anything.

For instance, here the same function is assigned to two different objects and has different “this” in the calls:
 */


let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

/*
The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user or admin in the example above.
 */