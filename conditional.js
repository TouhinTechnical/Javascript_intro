var isFoodReady = true;
var isFoodNotReady = false;
// jodi khaber ready hoi taile ami khamu
if(isFoodNotReady == false){
    // console.log('mama!! i will eat now.');
    console.log('khaber ready nah');
}

var iPhonePrice = '70k';
var myBudget = '10k';
if(iPhonePrice > myBudget){
    console.log('Iphone diye showoff korbo');
}else{
    console.log('My own moblie is best');
}

var gotJob = true;
var moneySaved = 150000;

if(gotJob == true){
    console.log("cholo biya kore feli touma");
}
else{
    console.log("Tor kopale biya nai!!");
}

var gotNotJob = false;

if(gotNotJob == true){
    console.log("cholo biya kore feli touma");
}else{
    console.log("kopale biya nai!!");
}
// beshi condition somoy (&&)and condition
if(gotJob == true && moneySaved > 200000){
    console.log("wow! biye done");
}else{
    console.log("dev das roye galam");
}

if(gotJob == true && moneySaved < 200000){
    console.log("wow! biye done");
}else{
    console.log("dev das roye galam");
}

// jakono akta condition true hoile (||)or condition
if(gotJob == true || moneySaved > 200000){
    console.log("wow! biye done");
}else{
    console.log("dev das roye galam");
}

if(gotJob == true || moneySaved < 200000){
    console.log("wow! biye done");
}else{
    console.log("dev das roye galam");
}

// advance condition/nesteed condition
var danishPrice = 50;
var butterBonPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;
var packageWell = false;
if(danishPrice > myBudget){
    console.log('wow!danish done');
}else if(butterBonPrice < myBudget){
    console.log("bread done");
}
else if(toastBiscuitPrice > myBudget){
    console.log("biscuit kahmu");
}
else{
    console.log("khali cha khamu");
}

// another nested condition
if(danishPrice < myBudget){
    if(packageWell == true){
        console.log('danish khabo');
    }else{
        console.log('danish date experied');
    }
}
// problem sloveing
var a = 4;
var b = 5;
var c = 4;
var d = 6;
// a jodi b take boru hoi
if(a > b){
    console.log("a biggest than b");
}
else{
    console.log("b biggest than a");
}
// a jodi b take chuto hoi
if(b < c){
    console.log("b smallest than c");
}
else{
    console.log("c smallest than b");
}
// a jodi c take boru ba soman hoi
if(a >= c){
    console.log("yes you can allowed");
}
else{
    console.log("no, not allowed");
}
// b jodi d take chuto ba soman hoi
if(b <= d ){
    console.log("b is allowed");
}
else{
    console.log("d is allowed");
}
// a jodi b 2ta soman
if(a == c){
    console.log("you can ran");
}
else{
    console.log("not ran");
}
// a jodi b 2ta soman nah
if(a != b){
    console.log("yeah! i can work");
}
else{
    console.log("no! bad luck");
}

// 2ta condition true hoi taile && use krte hoi
var myAge = 21;
// eikane 2ta condition ace 2ta true hoile program run korbe
if(myAge > 20 && myAge < 60){
    console.log("you are a young person")
}
else{
    console.log("you are a child");
}
// 2ta condition modde jakono akta true hoile program run korbe
if(myAge > 20 || myAge > 60){
    console.log("yes you are adult")
}
else{
    console.log("no you are child");
}

//if..else if
var whatDAY = "sunday";
if(whatDAY == "friday"){
    console.log("it is closed today");
}else if(whatDAY == "thursday"){
    console.log("it is partially closed");
}else if(whatDAY == "saturday"){
    console.log("Some office are closed today");
}else if(whatDAY == "sunday"){
    console.log("yes ajk off day gf k niye gorte jhamu");
}else{
    console.log("it is normal working day today");
}

//Switch case
var color = 'yellow';
switch(color){
    case 'blue' :
        console.log('color is blue');
        break;
    case 'red' :
        console.log('color is red');
        break;
    case 'white' :
        console.log('color is white');
        break;
    case 'green' :
        console.log('color is green');
        break;
    case 'yellow' :
        console.log('color is yellow');
        break;
    default:
        console.log('color is black');

};
//weekday ar jonno switch case
var weekday = 'Sunday';
switch(weekday){
    case 'Saturday':
        console.log('Saturday! Today is closed');
        break;
    case 'Sunday':
        console.log('Sunday! It is a normal day');
        break;
    case 'Monday':
        console.log('Monday! It is a normal day');
        break;
    case 'Tuesday':
        console.log('Tuesday! It is a normal day');
        break;
    case 'Wednesday':
        console.log('Wednesday! It is a normal day');
        break;
    case 'Thursday':
        console.log('Thursday! It is a normal day');
        break;
    case 'Friday':
        console.log('Friday! It is a normal day');
        break;
    default:
        console.log('Not a Day');
}