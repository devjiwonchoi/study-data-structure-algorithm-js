function sum(arr) {
  // assign one
  let total = 0
  // assign one, total two => O(1) space complexity
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

function double(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    // length of arr increases as n increases, so O(n) space complexity
    newArr.push(2 * arr[i])
  }
  return newArr
}
