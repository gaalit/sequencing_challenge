//a. Develop a function that accepts the array of sequences and returns the array of groups as explained above.

const task1 = (array) => {
  // testing for input length
  if (array.length === 0) {
    return "input empty, please add activities";
  }
  let result = [];

  // time comlexity = .reduce = O(n), n = length of array
  let sortedObject = array.reduce((obj, letters) => {
    // sort each set of letters

    let sorted = letters.toLowerCase().split("").sort().join("");

    // If the sorted set of letters key doesn't already exist as a key in the object, create it
    if (!obj.hasOwnProperty(sorted)) {
      obj[sorted] = [];
    }

    // Push the number to its integer key
    obj[sorted].push(letters);

    // Pass the object on to the next loop
    return obj;
  }, {});

  // time complexity = Loop, O(n), n = length of object:
  for (let l in sortedObject) {
    result.push(sortedObject[l]);
  }
  return result;
};

console.log(task1(["abc", "abcd", "bca", "bdc", "cbd", "bdc", "abc"]));

//b. Call the function with different inputs (or write test cases if you like), and for each input, explain what scenario you are testing.

// test 1: in the event where there was a capital letter for one of the activities, the function should account for capitalization
console.log(task1(["Abc", "abcd", "bca", "bdc", "Cbd", "bdc", "abc"]));

// test 2: if the input is empty, should return an error stating that input is empty
console.log(task1([]));

// test 1: given that acitivities could be alphanumerical, the function should also be able to group alphanumerical activities accoringly
console.log(task1(["abc11", "abcd", "bca", "bdc", "cbd", "bdc", "abc11"]));

// test 4: if a specific activity has the same letters but also has a number included, it should be categorized seperetly
console.log(task1(["abc", "abcd", "bca1", "bdc", "cbd", "bdc", "abc"]));
