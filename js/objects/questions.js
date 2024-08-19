// Write a function to find the number of key-value pairs in an object.
function findObjLen(obj) {
    let newObj = Object.entries(obj)
    return newObj.length
}
// console.log(findObjLen({ a: 1, b: 2, c: 5 }))

// Given an object, write a function to return an array containing its keys.
function onlyKeys(obj) {
    return Object.keys(obj)
}
// console.log(onlyKeys({ a: 'alice', b: true }))

// Write a function that takes an object with numeric values and returns the sum of those values.
function sumOfObjValues(obj) {
    let val = Object.values(obj)
    return val.reduce((acc, curr) => acc + curr, 0)
}
// console.log(sumOfObjValues({ a: 1, b: 5, c: 9 }))

// Given an array of arrays (representing key-value pairs), write a function to construct an object from those entries.
function constructObj(arr) {
    return Object.fromEntries(arr)
}
// console.log(constructObj([["a", 1],
// ["b", 2],
// ["c", 3]]))

// Write a function that checks if a specific key exists in an object.
function keyExists(obj, key) {
    for (let objKeys in obj) {
        if (objKeys === key) {
            return true
        }
    }
    return false
}
// console.log(keyExists({ a: 1, b: 2, c: 3 }, "a"))

// Write a function to update the value of a specific key in an object.
function updateVal(obj, key, newVal) {
    if (obj.hasOwnProperty(key)) {
        obj[key] = newVal
        return true
    } else return false
}

// Given an object and a key, write a function to remove that key and its corresponding value from the object.
function deleteKeyVal(obj, key) {
    if (obj.hasOwnProperty(key)) {
        delete obj[key]
        return obj
    }
}
// console.log(deleteKeyVal({ a: 1, b: 2, c: 34, d: 11 }, "e"))

// Write a function to get unique keys of object
function uniqueKeys(obj) {
    let result = []
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (!result.includes(key)) {
                result.push(key)
            }
        }
    }
    return result
}
// console.log(uniqueKeys({ a: 1, b: 5, c: 65, b: 'anamika', a: true, d: 'abdul' }))

// Write a function to count the frequency of each value in an object.
function countFreq(obj) {
    let map = new Map();

    for (let key in obj) {
        let value = obj[key];
        if (map.has(value)) {
            map.set(value, map.get(value) + 1);
        } else {
            map.set(value, 1);
        }
    }

    return map;
}

// console.log(countFreq({ a: 1, b: 3, c: 3, d: 2, e: 1 }));

// Given an object, write a function to return an array of entries sorted by keys.
function sortByKeys(obj) {
    return Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
}
console.log(sortByKeys({ b: 2, a: 1, d: 0, c: 3 }))

//Object Deep copy
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      const copyArr = [];
      for (let i = 0; i < obj.length; i++) {
        copyArr[i] = deepCopy(obj[i]);
      }
      return copyArr;
    }
  
    const copyObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copyObj[key] = deepCopy(obj[key]);
      }
    }
    return copyObj;
  }
  
  // Example usage:
  const originalObj = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4]
    }
  };
  
//   const copiedObj = deepCopy(originalObj);
//   console.log(copiedObj);

//Object Deep Comparison
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true; // Same object reference or same primitive value
    }

    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false; // One of them is not an object or null
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false; // Different number of keys
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false; // Key is missing or values are not deeply equal
        }
    }

    return true; // All keys and values are deeply equal
}

// Example usage:
const objA = { a: 1, b: { c: 2, d: [3, 4] } };
const objB = { a: 1, b: { c: 2, d: [3, 4] } };

// const areEqual = deepEqual(objA, objB);
// console.log("Are the objects deeply equal?", areEqual);