const sum = (...nums) => {
  let count = 0;
  nums.forEach((num) => count += num);
  return count;
}

console.log(sum(1,2,3,4));