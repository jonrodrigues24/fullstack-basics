
let equals = 1 === 1;
let greaterThan = 5 > 1;
let lessThan = 2 < 10;
let greaterThanEq = 5 >= 5;
let lessThanEq = 4 <= 9;
let notEquals = 5 !== 2;

let storeA = 3.10;
let storeB = 4.40;

function compareStorePrices (storeA, storeB) {

    let storeAIsLower = storeA < storeB;

    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal")
    }
}

compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum (number) {
    return number * number;
}

let squaredNumber = squareNum(4);
console.log(squaredNumber);

let x = 10;

function addNumbers (n, m, x) {
    console.log(x);
    let b;
    if (1===1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}

addNumbers(1,2,10);

let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
let newArr = ourArray[4];
console.log(newArr);

let arrLen = ourArray.length;
for(let i = 0; i < arrLen; i++) {
    console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++) {
        console.log('j is equal to: ' + j);
    }
}


while (x < 10) {
    console.log('Ran');
    x = x + 1;
}