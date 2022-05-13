const myRemove = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
arr = [1, 2, 3, 4];
console.log(myRemove(arr, 5))

module.exports = myRemove;