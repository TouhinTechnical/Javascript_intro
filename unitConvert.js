// Inch to foot
let inches = 132;
let feet = inches / 12;
console.log(feet);

// function diye
function inchToFeet(inch){
    let fit = inch / 12;
    return fit;
}
let fit = inchToFeet(122);
console.log('feet value:', fit);

//miles to kilometer
function mileToKilometer(miles){
    let km = miles * 1.60934;
    return km;
}
let marathon = mileToKilometer(26.2);
console.log('marathon in km: ', marathon);

// ana to bhori
function annaToBhori(anna){
    let bhori = anna * .0625;
    return bhori;
}
let bhori = annaToBhori(16);
console.log('Bhori value is: ', bhori);