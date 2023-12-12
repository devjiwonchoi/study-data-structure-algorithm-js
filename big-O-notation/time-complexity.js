/**
 * To compare which algorithm is better, we could consider time and memory.
 * But, time depends on many factors like different machines, same machine will have different time for different runs, etc.
 * So, we consider the number of operations.
 */

function addUpTo(n) {
  // multiply, add, divide, total 3 operations
  return (n * (n + 1)) / 2
}

function addUpTo2(n) {
  // 1 assignment
  let total = 0
  // 1 assignment for let i = 0
  // comparison for i <= n for n times
  // add and assign, for n times for i++
  for (let i = 0; i <= n; i++) {
    // add and assign, for n times
    total += i
  }
  return total
}
