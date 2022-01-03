const task2 = (string) => {
  if (!string) {
    return "please insure at least one letter is provided";
  }
  // convert string to an array and run reducer method on it

  // time comlexity = .reduce = O(n), n = length of array
  let letters = string
    .toLowerCase()
    .split("")
    .reduce((acc, element) => {
      // create a new variable to store new combinations of letters
      let updatedLetters = new Set();

      //loop over each letter and add different combinations of letters to the set
      // time comlexity = O(n), n = length of array
      acc.forEach((letter) => {
        for (let i = 0; i <= letter.length; i++) {
          updatedLetters.add(
            letter.substring(0, i) + element + letter.substring(i)
          );
        }
      });

      return updatedLetters;
    }, new Set([""]));

  return [...letters];
};

console.log(task2("abc"));

//b. Call the function with different inputs (or write test cases if you like), and for each input, explain what scenario you are testing.

// test 1: in the event where there was a capital letter for one of the activities, the function should account for capitalization
console.log(task2("Abc"));
// test 2: if the input is empty, should return an error stating that input is empty
console.log(task2());

// test 3: function should work with numbers as well
console.log(task2("ab1"));
