// ak kaz ver ver print korar jonno
// while loop
var roastGiven = 0;
while (roastGiven <= 7){
    console.log("roast den completed " +  roastGiven);
    roastGiven++;
    // roastGiven = roastGiven + 1;
    // roastGiven += 1;
}

var serialNumber = 0;
while (serialNumber <= 20){
    console.log("serial Number show" + ' ' +  serialNumber);
    serialNumber++;
}

// odd number
var oddNumber = 1;
while (oddNumber <=100){
    console.log("odd Number show" + ' ' + oddNumber);
    oddNumber += 2;
}

// even number
var evenNumber = 2;
while (evenNumber <= 100){
    console.log("even Number" + ' ' + evenNumber);
    evenNumber += 2;
}

// for loop
for (var evenNumber = 2; evenNumber <= 50; evenNumber += 2){
    console.log("even Number" + ' ' + evenNumber);
}

for (var daliyWork = 0; daliyWork < 10; daliyWork++){
    console.log("daliyWork" + ' ' + daliyWork);
}

for (var i = 2; i <= 10; i+= 2){
    console.log("even Number" + ' ' + i);
}
// Break Statement(loop modde kono element k stop korte caile loop ta soho loop stop korte caile break statement use korte hoi)
for (var i = 2; i <= 20; i += 2){
    if(i == 12){
        break;
    }
    console.log("even Number" + ' ' + i);
}
// continue statement
for (var i = 1; i <= 40; i += 2){
    if(i == 15){
        continue;
    }
    console.log("odd Number" + ' ' + i);
}