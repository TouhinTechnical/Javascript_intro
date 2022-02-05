function isLeapYear(year){
    // First Way condition

    // if((year % 4 == 0) && (year % 100 == 0) || (year % 400 == 0)){
    //     return true;
    // } // onk year ace ja ei condition leap year dakaile o technical bolte gale eita leap year nah ei problem slove korar jonno amra(second way ta use korbo)

    // Second ways to check leap
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 == 0)){
        return true;
    }

    // Third way to check leap year
    // if((year % 100 ===0) ? (year % 400 === 0) : (year % 4)){
    //     return true;
    // }
    // fourth  ways to check leap year condition
    /* if (year % 4 == 0){
        return true;
    }
    else if(year % 100 == 0){
        return false;
    }
    else if(year % 400 == 0){
        return true;
    } */
    else{
        return false;
    }
}
const myYear = 2100;
const myYearLeap = isLeapYear(myYear);
console.log(myYearLeap);