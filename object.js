var student1 = {
    id: 115, 
    name: "Jannatul Naima", 
    marks: 91, 
    phone: 023456745
};
// obejct value glo dker jonno
console.log(student1);
// object jakono value k dkte caile(variableName.propertyName)
console.log(student1.name);
// object kono kisu change korar jonno
student1.marks = 81;
student1["marks"] = 71;
console.log(student1);

var moblieDetails = {
    color: 'black',
    model: 'Iphone-7',
    price: 15000,
    Storage: '128gb'
};
moblieDetails.Storage; // item access niym
moblieDetails.moblieCode = 3534; // noton item access korar niym
moblieDetails.price = 16000; // item change ba replace jonno
moblieDetails.model = ['iphone-7', 'iphone-7s', 'iphone-7plus'];
moblieDetails.model[2]; // object item jodi array hoi tahole object item access kore array vitore item access kora jabe
moblieDetails.welComeMsg = function(){
    console.log('Hello');
}
moblieDetails.welComeMsg();
for(item in moblieDetails){
    console.log(item);
} // sob item access korar jnno
console.log(moblieDetails);
console.log(moblieDetails.model[2]);