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
