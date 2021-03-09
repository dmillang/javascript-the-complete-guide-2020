
// console.log(Number.MAX_SAFE_INTEGER); // max integer number we can work with
// console.log(Number.MIN_SAFE_INTEGER); // min integer number we can work with
// console.log(Number.MAX_VALUE); // biggest value

// console.log(Math.pow(2,53)-1); // max number we can work with

// console.log((0.2 + 0.4) === 0.6 ? true : false); // false

// console.log((5).toString(2)); // the 2 sets the string in the binary system

// console.log((1/5).toString(2));

// console.log(0.33333 + 0.33333 + 0.33333); // 0.99999
// console.log(1/3 + 1/3 + 1/3); // 1


// console.log(0.2.toFixed(20)); // 0.20000000000000001110

// console.log((0.2 + 0.4).toFixed(1)); // 0.6

// let value = 20.2;
// console.log(value.toFixed(20)); // not 20.2 but lower: 20.19999999999999928946

// console.log(value.toFixed(20) * 100); // reduce to integer

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(900719925474099132219223112n);

// console.log(typeof Number.MAX_SAFE_INTEGER);
// console.log(typeof 900719925474099132219223112n);

// console.log(10n - 6n);
// console.log(parseInt(10n) - 6);
// console.log(10n - BigInt(6));

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.isFinite(7));
console.log(Number.isFinite(Infinity));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(NaN));

console.log(Math.PI);
console.log(Math.abs(5));
console.log(Math.floor(Math.random() * 6) + 1);
