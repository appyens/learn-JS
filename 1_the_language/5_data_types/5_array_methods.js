arr.push(...items);  //– adds items to the end,
arr.pop(); // – extracts an item from the end,
arr.shift(); // – extracts an item from the beginning,
arr.unshift(...items); // – adds items to the beginning.

// how to delete
let arr = ["I", "go", "home"];
delete arr[1]; //remove go
alert(arr[1]); //undefined
// now arr = ["I", "home"];
alert(arr.length); //3

// splice
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); //from index 1 remove 1 element
alert(arr); // ["I", "JavaScript]
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Lets", "Dance");
alert(arr); //now ["Lets", "Dance", "right", "now"]

//Here we can see that splice returns the array of removed elements:
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arr.splice(0, 2);
alert(removed);

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
let arr = ["I", 'study', 'javascript'];
// from index 2
// delete 0
// then insert 'complex' and 'language'
arr.splice(2, 0, 'complex', 'language');
alert(arr);  // I study complex language javascript

// negative indexes allowed
let arr = [1, 2, 3];
// from index -1 (one step from the end)
// delete 0 elements
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
alert(arr);

// SLICE

let arr = ['t', 'e', 's', 't'];
let res = arr.slice(1, 3); // e, s
let res2 = arr.slice(-2); // s, t

// CONCAT
let arr = [1, 2];
// create an array from: arr and [3,4]
alert(arr.concat([3, 4]));
// create an array from: arr and [3,4] and [5,6]
let added = arr.concat([3, 4], [5, 6]); // 1, 2, 3, 4, 5, 6
// create an array from: arr and [3,4], then add values 5 and 6
alert(arr.concat([3, 4], 5, 6));


// ITERATE: forEach
// The arr.forEach method allows to run a function for every element of the array.
arr.forEach(function (item, index, array) {
   // do something
});

// For instance, this shows each element of the array:
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// And this code is more elaborate about their positions in the target array
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});


// Searching in array
/*
indexOf/lastIndexOf and includes
The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially the same as their string counterparts, but operate on items instead of characters:

arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from) – same, but looks for from right to left.
arr.includes(item, from) – looks for item starting from index from, returns true if found.

find and findIndex
Imagine we have an array of objects. How do we find an object with the specific condition?

Here the arr.find(fn) method comes in handy.
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
 */

let users = [
    {id: 1, name: 'jhon'},
    {id: 2, name: 'Rete'},
    {id: 3, name: 'Mary'}
];

let user  = users.find(item => item.id == 1);
alert(user.name);

// The arr.findIndex method is essentially the same, but it returns the index where the element was found
// instead of the element itself and -1 is returned when nothing is found.

/*
FILTER
The find method looks for a single (first) element that makes the function return true.
If there may be many, we can use arr.filter(fn).
 */
let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
});

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2

// MAP

let result = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(result);

// SORT
