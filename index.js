const multiplesOfSixAndNine = () => {
    for (let n = 1; n <= 100; n++) {
        if (n % 6 === 0 && n % 9 === 0) {
            console.log(n);
        }
    }
};

const greaterNum = () => {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        if (num1 > num2) {
            return num1;
        } else {
            return num2;
        }
    } else {
        return null;
    }
};

console.log(greaterNum(10, 7));
console.log(greaterNum(1.14, 1.14));
console.log(greaterNum("21", 21));
console.log(greaterNum("21", "21"));
