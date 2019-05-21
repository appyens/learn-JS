/*

Summary
We covered 3 browser-specific functions to interact with visitors:

alert
shows a message.
prompt
shows a message asking the user to input text. It returns the text or, if CANCEL or Esc is clicked, null.
confirm
shows a message and waits for the user to press “OK” or “CANCEL”. It returns true for OK and false for CANCEL/Esc.
All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

There are two limitations shared by all the methods above:

The exact location of the modal window is determined by the browser. Usually, it’s in the center.
The exact look of the window also depends on the browser. We can’t modify it.
That is the price for simplicity. There are other ways to show nicer windows and richer interaction with the visitor, but if “bells and whistles” do not matter much, these methods work just fine.
 */


//alert

alert(message);
// This shows a message and pauses script execution until the user presses “OK”.

//prompt
result = prompt(title, []);

let age = prompt("how old are you", 100);
alert(`Your age ${age} years old`);


//confirm
/*
The function confirm shows a modal window with a question and two buttons: OK and CANCEL.
The result is true if OK is pressed and false otherwise.
 */
result = confirm(question);

let isboss = confirm("Are you the boss");
alert(isboss);