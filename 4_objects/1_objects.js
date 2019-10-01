/*
ne = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place
alert(clone.sizes.width); // 51, see the result from the other one
To fix that, we should use the cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning”.

There’s a standard algorithm for deep cloning that handles the case above and more complex cases, called the Structured cloning algorithm. In order not to reinvent the wheel, we can use a working implementation of it from the JavaScript library lodash, the method is called _.cloneDeep(obj).

Summary
Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow to take the key from a variable, like obj[varWithKey].
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.
Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object. All operations via copied references (like adding/removing properties) are performed on the same single object.

To make a “real copy” (a clone) we can use Object.assign or _.cloneDeep(obj).

What we’ve studied in this chapter is called a “plain object”, or just Object.

There are many other kinds of objects in JavaScript:

Array to store ordered data collections,
Date to store the information about the date and time,
Error to store the information about an error.
…And so on.
They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.
 */

/*
Objects
As we know from the chapter Data types, there are seven data types in JavaScript. Six of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.
 */

// An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

/*
Usually, the figure brackets {...} are used. That declaration is called an object literal.

Literals and properties
We can immediately put some properties into {...} as “key: value” pairs:
 */

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};

/*
A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

In the user object, there are two properties:

The first property has the name "name" and the value "John".
The second one has the name "age" and the value 30.
The resulting user object can be imagined as a cabinet with two signed files labeled “name” and “age”.
 */

/*
We can add, remove and read files from it any time.

Property values are accessible using the dot notation:
 */

// get fields of the object:
alert( user.name ); // John
alert( user.age ); // 30

// The value can be of any type. Let’s add a boolean one:
user.isAdmin = true;
// To remove a property, we can use delete operator:
delete user.age;
// We can also use multiword property names, but then they must be quoted:

let user = {
    name : "John",
    age: 30,
    "likes birds": true //multiword property name must be quoted
};

// The last property in the list may end with a comma:

let user = {
    name: "John",
    age: 30,
};

// That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.
// Square brackets
// For multiword properties, the dot access doesn’t work:

// this would give a syntax error
// user.likes birds = true;

/*
That’s because the dot requires the key to be a valid variable identifier. That is: no spaces and other limitations.

There’s an alternative “square bracket notation” that works with any string:
 */

let user = {};
//set
user['likes bird'] = true;
//get
alert(user['likes bird']); //true
//delete
delete user['likes bird'];


/*
Now everything is fine. Please note that the string inside the brackets is properly quoted (any type of quotes will do).

Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:
 */

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

/*
Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility. The dot notation cannot be used in a similar way.

For instance:
 */

let user = {
    name: 'John',
    age: 30,
};

let key = prompt("WHat do you want to know about the user?",  'name');
//access by variable
alert(user[key]); //John (if enter name)


/*
Computed properties
We can use square brackets in an object literal. That’s called computed properties.

For instance:
 */

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
    [fruit]: 5 // the name of the property is taken from the variable
};

alert(bag.apple); //5 if fruit = "apple"

/*
The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.

So, if a visitor enters "apple", bag will become {apple: 5}.

Essentially, that works the same as:

 */


let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
// …But looks nicer.
//
//     We can use more complex expressions inside square brackets:

let fruit = 'apple';
let bag = {
    [fruit + "Computers"]: 5 //bag.appleComputers = 5
};

/*
Square brackets are much more powerful than the dot notation. They allow any property names and variables. But they are also more cumbersome to write.

So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.
 */

/*
Property value shorthand
In real code we often use existing variables as values for property names.

For instance:
 */

function makeUser(name, age) {
    return {
        name : name,
        age: age,
        //other properties
    };
}

let user = makeUser("John", 30);
alert(user.name);

/*
In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

Instead of name:name we can just write name, like this:

 */

function makeUser(name, age) {
    return {
        name, // same as name: name
        age   // same as age: age
        // ...
    };
}

// We can use both normal properties and shorthands in the same object:


let user = {
    name,  // same as name:name
    age: 30
};

/*
Existence check
A notable objects feature is that it’s possible to access any property. There will be no error if the property doesn’t exist! Accessing a non-existing property just returns undefined. It provides a very common way to test whether the property exists – to get it and compare vs undefined:
*/

let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"

/*
There also exists a special operator "in" to check for the existence of a property.

    The syntax is:

 */

"key" in objeect

// For instance:

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

/*
Please note that on the left side of in there must be a property name. That’s usually a quoted string.

If we omit quotes, that would mean a variable containing the actual name will be tested. For instance:
 */

let user = {age: 30};
let key = "age";
alert(key in user);
alert(user.key);
alert(user[key]); // true takes the name from key and checks for


/*
The “for…in” loop
To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

The syntax:
 */

for (key in objeect){
    // executes the body for each key among object properties
}

// for instance lets output all the properties of user

let user = {
    name: "John",
    age: 30,
    isAdmin: true,
};


for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
}

/*
Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here.

Also, we could use another variable name here instead of key. For instance, "for (let prop in obj)" is also widely used.
 */

/*
Ordered like an object
Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.

As an example, let’s consider an object with the phone codes:
 */

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}

/*
The object may be used to suggest a list of options to the user. If we’re making a site mainly for German audience then we probably want 49 to be the first.

But if we run the code, we see a totally different picture:

USA (1) goes first
then Switzerland (41) and so on.
The phone codes go in the ascending sorted order, because they are integers. So we see 1, 41, 44, 49.
 */

// …On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance:


let user = {
    name: "John",
    surname: "Smith"
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
    alert( prop ); // name, surname, age
}
//
// So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.
//
//     Like this:

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
};

for (let code in codes) {
    alert( +code ); // 49, 41, 44, 1
}

/*
Now it works as intended.

Copying by reference
One of the fundamental differences of objects vs primitives is that they are stored and copied “by reference”.

Primitive values: strings, numbers, booleans – are assigned/copied “as a whole value”.

For instance:
 */

let message = "Hello!";
let phrase = message;
// A variable stores not the object itself, but its “address in memory”, in other words “a reference” to it.
//
//     Here’s the picture for the object:

    let user = {
        name: "John"
    };

/*
Here, the object is stored somewhere in memory. And the variable user has a “reference” to it.

When an object variable is copied – the reference is copied, the object is not duplicated.

If we imagine an object as a cabinet, then a variable is a key to it. Copying a variable duplicates the key, but not the cabinet itself.

For instance:
 */

let user = { name: "John" };

let admin = user; // copy the reference
// Now we have two variables, each one with the reference to the same object:
//
// We can use any variable to access the cabinet and modify its contents:

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

/*
The example above demonstrates that there is only one object. As if we had a cabinet with two keys and used one of them (admin) to get into it. Then, if we later use the other key (user) we would see changes.

Comparison by reference
The equality == and strict equality === operators for objects work exactly the same.

Two objects are equal only if they are the same object.

For instance, two variables reference the same object, they are equal:
 */

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

// And here two independent objects are not equal, even though both are empty:

let a = {};
let b = {}; // two independent objects

alert( a == b ); // false

/*

For comparisons like obj1 > obj2 or for a comparison against a primitive obj == 5, objects are converted to primitives. We’ll study how object conversions work very soon, but to tell the truth, such comparisons are necessary very rarely and usually are a result of a coding mistake.

Const object
An object declared as const can be changed.

For instance:
 */

const user = {
    name: "John"
};

user.age = 25; // (*)

alert(user.age); // 25

/*
It might seem that the line (*) would cause an error, but no, there’s totally no problem. That’s because const fixes the value of user itself. And here user stores the reference to the same object all the time. The line (*) goes inside the object, it doesn’t reassign user.

    The const would give an error if we try to set user to something else, for instance:

 */
const user = {
    name: "John"
};

// Error (can't reassign user)
// user = {
//     name: "Pete"
// };


/*
…But what if we want to make constant object properties? So that user.age = 25 would give an error. That’s possible too. We’ll cover it in the chapter Property flags and descriptors.

Cloning and merging, Object.assign
So, copying an object variable creates one more reference to the same object.

But what if we need to duplicate an object? Create an independent copy, a clone?

That’s also doable, but a little bit more difficult, because there’s no built-in method for that in JavaScript. Actually, that’s rarely needed. Copying by reference is good most of the time.

But if we really want that, then we need to create a new object and replicate the structure of the existing one by iterating over its properties and copying them on the primitive level.

Like this:
 */


let user = {
  name: 'Anurag',
  age: 30,
};

let clone = {}; //the new empty object
//lets copy all user properties into it
for (let key in user){
    clone[key] = user[key];
}

//now clone is a fully independent clone
clone.name = "Pete"; //changed the data in it
alert(user.name); //still Anurag in original object
/*

Also we can use the method Object.assign for that.
The syntax is:

 */
Object.assign(dest, [src1, src2, src3])

/*
Arguments dest, and src1, ..., srcN (can be as many as needed) are objects.
It copies the properties of all objects src1, ..., srcN into dest. In other words, properties of all arguments starting from the 2nd are copied into the 1st. Then it returns dest.
For instance, we can use it to merge several objects into one:
 */

let user = {name: "Anurag"};
let permissions1 = {canView: true};
let permissions2 = {canEdit: true};
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
// now user = {name: "Anurag", canEdit: true, canView: true}

// If the receiving object (user) already has the same name property, It will be overwritten

let user = { name: "John" };

// overwrite name, add isAdmin
Object.assign(user, { name: "Pete", isAdmin: true });

// now user = { name: "Pete", isAdmin: true }

// We also can use Object.assign to replace the loop for simple cloning:

let user = {
    name: "John",
    age: 30
};

let clone = Object.assign({}, user);

/*
It copies all properties of user into the empty object and returns it. Actually, the same as the loop, but shorter.

Until now we assumed that all properties of user are primitive. But properties can be references to other objects. What to do with them?

Like this:
 */


let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

alert( user.sizes.height ); // 182

/*
Now it’s not enough to copy clone.sizes = user.sizes, because the user.sizes is an object, it will be copied by reference. So clone and user will share the same sizes:

Like this:
 */

let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place
alert(clone.sizes.width); // 51, see the result from the other one

/*
To fix that, we should use the cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning”.

There’s a standard algorithm for deep cloning that handles the case above and more complex cases, called the Structured cloning algorithm. In order not to reinvent the wheel, we can use a working implementation of it from the JavaScript library lodash, the method is called _.cloneDeep(obj).
 */