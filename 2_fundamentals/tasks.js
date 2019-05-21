// let admin;
// let name;
// name = 'Jhon';
// admin = name;
// alert(admin);
//
// // variables
// let earth;
// let currentUser;
// const birthday = '18.04.1982';
// const age = someCode(birthday);
//
// // data types
// let name = "Ilya";
// alert(`Hello ${1}`);
// alert(`Hello ${"name"}`);
// alert(`Hello ${name}`);
//
//
// //operators
// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
// alert(a);
// alert(c);
// alert(d);

// comparisons
// alert(5 > 4);
// alert("apple" > "pineapple");
// alert("2" > "12");
// alert(undefined == null);
// alert(undefined === null);
// alert(null == "\n0\n");
// alert(null === +"\n0\n");

// interaction

// let name = prompt("Enter your name: ");
// alert(name);

// conditional_ope

// 1
if ("0") {
    alert('Hello')
}

// 2

let name = prompt("What is the official name of JS: ");

if (name == "ECMAScript") {
    alert("Right!!!")
} else {
    alert("Didn't know? ECMAScript? ")
}

// 3

let number = prompt("Enter any number: ");
number = Number(number);
if (number > 0) {
    alert(1)
} else if (number < 0) {
    alert(-1)
} else {
    alert(0)
}

//4


let result = (a + b < 4) ? "below" : "Over";
alert(result)

//5

let message = (login == 'Employee') ? "Hello" :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? "no login:" :
            '';

// logical

//what is the result
alert(null || 2 || undefined);
alert(alert(1) || 2 || alert(3));
alert(1 && null && 2);
alert(alert(1) && alert(2));
alert(null || 2 && 3 || 4);

// check the range inside
if (age >= 14 && age <= 90) {
    alert("the age is between 14 and 90")
}

// check the range outside
if (!(age >= 14 && age <= 90)) {
    alert("the age is bet")
}

if (age < 14 || age > 90) {

}

// which will executes
if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third');


//check login

let userName = prompt("Enter username: ");
if (userName == 'Admin') {

    let password = prompt("Enter password: ");

    if (password == 'TheMaster') {
        alert("Welcome!")

    } else if (password == "" || password == null) {
        alert("Canceled!")

    } else {
        alert("Wrong password")
    }
} else if (userName == "" || userName == null) {
    alert('Canceled')

} else {
    alert("I dont know")
}


