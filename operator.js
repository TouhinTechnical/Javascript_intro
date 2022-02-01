// math operator
// addition (kono kisu jok korte caile {+} eita use korte hobe)
var bookPrice = 200;
var bookCover = 30;
var totalBookPrice = bookPrice + bookCover;
console.log(totalBookPrice);
// substrction (kono kisu biyok korte caile {-} eita use korte hobe)
var amount = 34;
var penPrice = 5;
var retrunPrice = amount - penPrice;
console.log(retrunPrice);
// multipation (kono kisu gun korte caile {*} eita use korte hobe)
var keyboardPerPicsPrice = 430;
var keyboardQuantity = 7;
var keyboardTotalAmount = keyboardPerPicsPrice * keyboardQuantity;
console.log(keyboardTotalAmount);
// devision (kono kisu vag korte caile {/} eita use korte hobe)
var keyboardTotalAmount = 3010;
var keyboardPerPicsPrice = keyboardTotalAmount / keyboardQuantity;
console.log(keyboardPerPicsPrice);

// string ka number convert korar niym
var touhinTk = '200';
var toumaTk = '100';
console.log(touhinTk + toumaTk); // number deo por Output jok nh hye pasapasi aslo krn eiglo string akre dici 
var bookTk = 230; // ponno sonkha takle [integer]
var retrunTk = 2.2; // decimal takle [float]

// integer string k number covert jonno
var something = parseInt(mobliePrice); // parseInt()
// float string k number covert jonno
var something = parseFloat(moblieCoverPrice); // parseFloat
// string ka number convert
var mobliePrice = '3000';
var moblieCoverPrice = '150.50';
var totalAmunt = parseInt(mobliePrice) + parseFloat(moblieCoverPrice);
console.log(totalAmunt);

// ajk date 
var today = new Date();
console.log(today);

// special edition
var firstNumber = 0.1;
var secondNumber = 0.3;
var total = firstNumber + secondNumber;
console.log(total.toFixed(4));

// modulus (kono kisu vag ses bahir korar jonno)
var mangoes = 57;
var hungryPerson = 4;
var dividing = mangoes / hungryPerson;
var remaining = mangoes % hungryPerson;
console.log(dividing);
console.log(remaining);

// Comparison operator
var a = 10;
var b = 10;
var c = 20;
// a value b ar soman kina ta check korar jonno [==] eita use korbo jodi a value b caite boru taile output true asbe nah hyle false asbe
console.log(a == b);
console.log(b == a);
console.log(a === c);
console.log(a != c);
console.log(a !== c);
console.log(a > c); // greater than
console.log(c > a);
console.log(a < c); // less than
console.log(c < a);
console.log(a <= b);
console.log(c <= a);
console.log(a >= c);

// Logical operator
var age = 20;
if(age >= 18 && age <= 21){
    console.log("Yes 2ta condition true");
}
if(age >= 18 || age <= 21){
    console.log("Yes 1ta condition true");
}
var logicNot = 10;
if (!logicNot <= 8){
    console.log("reverse answer hobe true");
}

// Assignment operator
// =,+=,-=,*=,/=,%=,**= eiglo assignment operator
var bookPrice = bookPrice * 2;
// shorthand variable same takle r var likte hbe nah[bookPrice= 200]
bookPrice *= 2;
bookPrice **= 3;
bookPrice += 30;
bookPrice ++; // sodu kono variable man 1 jok krte hyle shorthand holo(++)dite hoi ar ortho 1jok hobe ba [--] ar ortho ak biyok korbe.. 
console.log(bookPrice);

// Condition operator
var a = 10;
var b = 20;
var c = "c ar value" + '= ' + (a > b ? 10 : 20);
console.log(c);

/* Stay hungry Stay pulish */