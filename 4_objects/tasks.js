/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
 */

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
alert(user.name);
delete user.name;
alert(user["name"]);
alert(Object.keys(user).length);

// Check for emptiness
function isEmpty(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;
}

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
alert(isEmpty(user));


/*
We have an object storing salaries of our team:
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0.
 */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};


function checkSum(obj) {
    sum = 0;
    if (isEmpty(obj)){
        return 0
    }
    else {
        for (key in obj){
            sum += obj[key]
        }
        return sum
    }

};

let result = checkSum(salaries);
alert(result);

//Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

let multiplyNumeric =  function(obj) {
    for (key in obj){
        if (typeof (obj[key]) == 'number'){
            obj[key] *= 2
        }
    }
    return obj;
};

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
alert(menu.width);
alert(menu.height);