## Objects

- No need order

### Big O of Objects

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(1)
- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n)
- hasOwnProperty - O(1) // same as access

## Arrays

- Ordered data with index
- Better to handle from the end (push/pop) O(1) than from the beginning (shift/unshift) O(n) because of re-indexing.
- Access O(1)
- Searching O(n)
- Operations mostly O(n)
  - push O(1) // end
  - pop O(1) // end
  - shift O(n)
  - unshift O(n)
  - concat O(n)
  - slice O(n)
  - splice O(n)
  - sort O(n \* log n) // takes longer than O(n)
  - forEach/map/filter/reduce/etc. O(n)
