
  // Write your algorithm here

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}


/*
  Add your pseudocode here
*/
// iterate from the beginning of the string to the middle of the string
//   compare the letter we're iterating over to the corresponding letter at the end of the string
//     if the letters don't match, return false

// if we reach the middle, and all the letters match, return true
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
  // add your own custom tests in here
function isPalindrome(word) {
  // Compare the word with its reverse
  return word === word.split('').reverse().join('');
}
console.log(isPalindrome('abba'));      // true
console.log(isPalindrome('racecar'));   // true
console.log(isPalindrome('a'));         // true
console.log(isPalindrome('robot'));     // false
console.log(isPalindrome('ab'));        // false
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;
