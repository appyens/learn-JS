/*
Summary
Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.
We can use constructor functions to make multiple similar objects.

JavaScript provides constructor functions for many built-in language objects: like Date for dates, Set for sets and others that we plan to study.
 */

/*
Constructor, operator "new"
The regular {...} syntax allows to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

That can be done using constructor functions and the "new" operator.

Constructor function
Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.
For instance:
 */

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false


/*
When a function is executed as new User(...), it does the following steps:

A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.
In other words, new User(...) does something like:

 */


function User(name) {
    // this = {};  (implicitly)

    // add properties to this
    this.name = name;
    this.isAdmin = false;

    // return this;  (implicitly)
}

// So the result of new User("Jack") is the same object as:


let user = {
    name: "Jack",
    isAdmin: false
};


/*
Now if we want to create other users, we can call new User("Ann"), new User("Alice") and so on. Much shorter than using literals every time, and also easy to read.

That’s the main purpose of constructors – to implement reusable object creation code.

Let’s note once again – technically, any function can be used as a constructor. That is: any function can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.
 */

