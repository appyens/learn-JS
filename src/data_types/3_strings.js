// js strings format
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

//embed expresson
function sum(a, b) {
    return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}`);

//spanning multiline using backticks
let guestList = `Guests:
* John
* Pete
*Mary
`;

alert(guestList);

//special characters
alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫, a rare chinese hieroglyph (long unicode)
alert( "\u{1F60D}" ); // 😍, a smiling face symbol (another long unicode)

//escaping
alert( 'I\'m the Walrus!' ); // I'm the Walrus!
alert( `I'm the Walrus!` ); // I'm the Walrus!
alert( `The backslash: \\` ); // The backslash: \

//length
alert(`My\n`.length); // 3

//accessing char
let str = `Hello`;
//first character
alert(str[0]);
alert(str.charAt(0));

//the last char
alert(str[str.length - 1]);

//difference
let str = `Hello`;

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (an empty string)

// iterating over strings
for (let char of "ANurag"){
    alert(char)
}

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

//finding all accurrences
let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true){
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1){
        break;
    }
    alert(`Found at ${foundPos}`);
    pos = foundPos + 1;
}

//includes, startsWith, endsWith
alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false
alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") );   // true, "Widget" ends with "get"

//substring

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0
let str = "stringify";
alert( str.slice(2) ); // ringify, from the 2nd position till the end
let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // gif
let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)
let str = "stringify";
alert( str.substr(2, 4) ); // ring, from the 2nd position get 4 characters
let str = "stringify";
alert( str.substr(-4, 2) ); // gi, from the 4th position get 2 characters

//comparing
alert( 'a' > 'Z' ); // true
alert( 'Österreich' > 'Zealand' ); // true

// different case letters have different codes
alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90
let str = '';

for (let i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i);
}
alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

//correct way
alert( 'Österreich'.localeCompare('Zealand') ); // -1

//a surrogate pairs
alert( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
alert( '😂'.length ); // 2, FACE WITH TEARS OF JOY
alert( '𩷶'.length ); // 2, a rare chinese hieroglyph
