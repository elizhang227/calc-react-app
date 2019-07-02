let currentString = '-12-52-21'

// if (currentString.charAt(0) === '-') {
//     currentString = currentString.substr(1)
// }
// console.log(currentString)

let numberStringArray = currentString.split(/\+|\-|\*|\//g);
//let numberStringArray = currentString.replace(/\-/g, "").split("");
// numberStringArray[0] = '-' + numberStringArray[0] 
console.log(numberStringArray)

// let numberStringArray = currentString.replace(/\+|\*|\-|\//g, "").split("");
// console.log(numberStringArray)

let operatorsArray = currentString.replace(/[0-9]|\./g, "").split("");
console.log(operatorsArray)

if (operatorsArray.length === numberStringArray.length) {
    console.log('same length');
}






// if (currentString[0] === '-') {
//     numberStringArray = currentString.split(/\+|\*|\//g);
//     console.log(numberStringArray)
//     const index = numberStringArray.indexOf('-')
//     console.log('index', index)
//     //numberStringArray = currentString.split(/\+|\*|\-|\//g);
// } else {
//     numberStringArray = currentString.split(/\+|\-|\*|\//g);
// }

//console.log(numberStringArray)