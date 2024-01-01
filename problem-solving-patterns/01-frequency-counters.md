Use Object or Set to avoid nested loops.

```js
function validAnagram(source, target){
  if (source.length !== target.length) {
      return false
  }
  
  // const sourceObj = {};
  // const targetObj = {};

// First Attempt
  // for (const sourceStr of source) {
  //     sourceObj[sourceStr] = sourceObj[sourceStr] ? sourceObj[sourceStr] + 1 : 1
  // }
  // for (const targetStr of target) {
  //     targetObj[targetStr] = targetObj[targetStr] ? targetObj[targetStr] + 1 : 1
  // }

// Second Attempt
  // for (let i = 0; source.length >= i; i++) {
  //     const sourceStr = source[i]
  //     const targetStr = target[i]
  //     sourceObj[sourceStr] = sourceObj[sourceStr] ? sourceObj[sourceStr] + 1 : 1
  //     targetObj[targetStr] = targetObj[targetStr] ? targetObj[targetStr] + 1 : 1
  // }
  
  // for (const key in sourceObj) {
  //     if (sourceObj[key] !== targetObj[key]) {
  //         return false
  //     }
  // }

  const obj = {}
  for (let i = 0; source.length >= i; i++) {
    const sourceStr = source[i]
    // Seems like Udemy Code Test don't allow `??` syntax.
    // obj[sourceStr] = (obj[sourceStr] + 1) ?? 1
    obj[sourceStr] = obj[sourceStr] ? obj[sourceStr] + 1 : 1
  }
  for (let i = 0; target.length >= i; i++) {
    const targetStr = target[i]

    if (!obj[targetStr]) {
      return false
    }

    obj[targetStr] -= 1
  }
  return true
}

// If length of source and target don't match, return false.
// 1. Align source string by letter - number of letters
// 2. Align target string by letter - number of letters
// 3. Compare the values of #1 object to #2 by their key
// 4. If any of the values don't match, return false
// 5. At last, return true
```
