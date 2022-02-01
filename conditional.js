var isFoodReady = true;
var isFoodNotReady = false;
// jodi khaber ready hoi taile ami khamu
if(isFoodNotReady == true){
    console.log('mama!! i will eat now.');
    // console.log('khaber ready nah');
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