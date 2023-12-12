# Big O Notation

## Time Complexity

Constants don't matter

```bash
O(2n) => O(n)
O(200) => O(1)
O(13n^2) => O(n^2)
```

Smaller terms don't matter

```bash
O(n + 10) => O(n)
O(1000n + 50) => O(n)
O(n^2 + 5n + 8) => O(n^2) // On the larger scale, 5n + 8 is too small to matter
```

## Big O Shorthands

1. Arithmetic operations are constant: (`+ - * / %`) `1 + 1` and `N + N` are pretty much the same.
2. Variable assignment is constant: `x = 1` and `x = N` are pretty much the same.
3. Accessing elements in an array (by index) or object (by key) is constant: `arr[5]` and `obj['a']`.
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

## Space Complexity

1. Most primitives (booleans, numbers, undefined, null) are constant space.
2. Strings require O(n) space (where n is the string length).
3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).
