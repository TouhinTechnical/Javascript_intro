function animalCount(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Mlies = 50;
    const animalDesityThird10Miles = 100;
    if(miles <= 10){
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if(miles >= 10 && miles <= 20){
        const first10Miles = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const second10Miles = restMiles * animalDensitySecond10Mlies;
        const totalSecondCount = first10Miles + second10Miles;
        return totalSecondCount;
    }
    else{
        const first10Miles = 10 * animalDensityFirst10Miles;
        const second10Miles = 10 * animalDensitySecond10Mlies;
        const thirdRestMiles = miles -20;
        const third10Miles = thirdRestMiles * animalDesityThird10Miles;
        const totalThirdCount = first10Miles + second10Miles + third10Miles;
        return totalThirdCount;

    }
}
const animals = animalCount(35);
console.log(animals);
