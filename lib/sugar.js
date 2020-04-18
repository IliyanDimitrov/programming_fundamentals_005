// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/

function size(object) {

  return Object.keys(object).length;

}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {

  const value = Object.values(object);

  return Math.min(...value);

}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {

  const value = Object.values(object);

  return Math.max(...value);
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.	
*/
function clone(object) {

  return Object.assign({}, object);

}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/

function get(object, key) {

  const getKeyValue = Object.keys(object);

  for(let keys of getKeyValue) {
    if(keys === key){
      return object[key];
    }
  }
}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {

  let match = false;
  const getKeyValue = Object.keys(object);

  for(let keys of getKeyValue) {
    if(keys === key) {

      match = true;
    }   
  }
  return match;
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {

  //create array of the obj values
  //check if array is empty, return 0 if yes
  //if not empty sum only the numbers values, if none return 0

  const objValues = Object.values(object);

  if(objValues.length === 0 ){
     return 0; 
  }
 
  return objValues.reduce((acc, value) => {
    
    if(typeof value === 'number') {

      return acc += value;
    } else {
      return acc += 0;
    }
  }, 0); 
}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {

  //used entries to get the keys and values and return them swapped around 

  const invertedObj = Object.fromEntries(
    Object.entries(object).map(([key, value]) =>  [value , key]));

    return invertedObj;
}

/*
  This function receives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/

function addAll(arr) {

const objToArray = arr.map(array => Object.entries(array));

const flatArr = objToArray.reduce((acc, val) => acc.concat(val), []);

const newObj = Object.fromEntries(flatArr);

return newObj;
}



// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {

  const values = Object.values(obj);

  for(let el of values) {
    if(matcherFunc(el)){
      return el;
    }
  }
  return null;
}

/*
  This function allows you to test whether every value in an object matches 
  a certain criteria. For example, is every value greater than 100? 
  The function receives an object and a tester function. 
  If all values in the object pass the tester function, true is returned. 
  Otherwise, return false.
*/
function every(obj, func) {

  const values = Object.values(obj);
  let match = true;

  for(let el of values) {
    func(el) ? null : match = false;
  }
  return match;
}

/*
  This function allows you to test whether some values in an object match a certain criteria. 
  For example, are at least some of the values greater than 100? 
  The function receives an object and a tester function. 
  If at least 1 of the values in the object pass the tester function, true is returned. 
  Otherwise, return false.
*/
function some(obj, func) {

  const values = Object.values(obj);
  let match = false;

  for(let el of values) {
    if(func(el)) { 
      match = true; 
    }
  }
  return match;
}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;