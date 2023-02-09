/*
Write a function that takes in a positive integer "numberOfTags" and returns a list of all the valid strings that you can generate with that number of matched "<div></div>" tags

A string is valid and contains matched "<div></div>" tags if for every opening tag <div>, there's a closing tag </div> that comes after the opening tag and that isn't used as a closing tag for another opening tag. Each output string should contain exactly numberOfTags opening tags and numberOfTags closing tags

For example, given "numberOfTags = 2", the valid strings to return would be ["<div></div><div></div>", "<div><div></div></div>"]

Note that the output strings don't need to be in any particular order.
*/


//Solution:
//O((2n)! / ((n + 1)!n!)) time: catalan number, thats how many permutations for any number n
//O((2n)! / ((n + 1)!n!)) space: its the number of permutations in array. Technically each permuation has 11 * n characters (11 is num of characters in "<div></div>")

function generateDivTags(numberOfTags) {
  //initialize result array
  let result = [];

  //helper function that keeps track of openingTag/closingTag count and the curr string
  function createDivPermutations(prefix, openingTags, closingTags) {
    //if no more closingTags required, string is complete and can be pushed to result array
     if (closingTags === 0) result.push(prefix)

     //if there are openingTags left, add it to prefix and recursively call function while removing a openingTag count
     if (openingTags > 0) {
      createDivPermutations(prefix + '<div>', openingTags - 1, closingTags)
     }

     //every openingTag needs a corresponding closing tag, thus if opening count is less than closing count, add the closing tag and subtract closingTag count by 1
     if (openingTags < closingTags) {
      createDivPermutations(prefix + '</div>', openingTags, closingTags - 1)
     }
  }

  //call this helper function with an empty string, and openingTag/closingTag count set at numberOfTags
  createDivPermutations('', numberOfTags, numberOfTags)

  return result;
}