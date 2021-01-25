const numArray = [2,5,1,8,9,3,4,7];

const filteredNumArray = numArray.filter(num => num > 5);
console.log(filteredNumArray);

const mapNumArray = numArray.map((num) => ({'num':num}));
console.log(mapNumArray);

const reducedNumArray = numArray.reduce((a,b) => a * b);
console.log(reducedNumArray);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
};

console.log(findMax(...numArray));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin,curMax];
};

const [min,max] = findMinMax(...numArray);
console.log(min,max);

const userIds = new Set();

userIds.add(3);
userIds.add(6);
userIds.add(3); // duplicate won't be added to set

console.log(userIds);