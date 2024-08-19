
function compareObjects(obj1, obj2) {

    // return JSON.stringify(obj1) === JSON.stringify(obj2)

    if (obj1 === obj2) {
        return true
    }
    if (typeof (obj1) !== 'object' || obj1 === null || typeof (obj2) !== 'object' || obj2 === null) {
        return false
    }

    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) {
        return -1
    }
    // console.log(keys1, keys2)
    for (let key of keys1) {
        if (!compareObjects(obj1[key], obj2[key])) {
            return false
        }

        console.log(obj1[key], obj2[key])
    }
    return true

}
console.log(compareObjects({ a: 1, b: 3, c: 4 }, { a: 1, b: 3, c: 4 }))


function shallowEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  const objA = { name: 'Alice', age: 25 };
  const objB = { name: 'Alice', age: 25 };
  console.log(shallowEqual(objA, objB)); 
  