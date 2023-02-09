/*
Write a function that takes in a positive integer "numberOfTags" and returns a list of all the valid strings that you can generate with that number of matched "<div></div>" tags

A string is valid and contains matched "<div></div>" tags if for every opening tag <div>, there's a closing tag </div> that comes after the opening tag and that isn't used as a closing tag for another opening tag. Each output string should contain exactly numberOfTags opening tags and numberOfTags closing tags

For example, given "numberOfTags = 2", the valid strings to return would be ["<div></div><div></div>", "<div><div></div></div>"]

Note that the output strings don't need to be in any particular order.
*/

function generateDivTags(numberOfTags) {
  let result = [];

  function createDivPermutations(prefix, openingTags, closingTags) {
     if (closingTags === 0) result.push(prefix)

     if (openingTags > 0) {
      createDivPermutations(prefix + '<div>', openingTags - 1, closingTags)
     }

     if (openingTags < closingTags) {
      createDivPermutations(prefix + '</div>', openingTags, closingTags - 1)
     }
  }

  createDivPermutations('', numberOfTags, numberOfTags)
  return result;
}