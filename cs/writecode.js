//1 Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.


function addToZero(array) {

let checker = "False"

for(let i = 0; i < array.length; i++){
  for (let j = 0; j < array.length; j++){
    if (i !== j){
      if(array[i] + array[j] === 0) {
        checker = "True"
      }
    }
  }
}
console.log(checker)

}
addToZero([1, 2, 3]);

//Time complexity: O(n^2)
//Space complexity: O(1)


//2 Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(word){
  let uniqueChars = new Set([])
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i])
  }
  return uniqueChars.size === word.length
}

console.log(hasUniqueChars('Monday'))

console.log(hasUniqueChars('Moonday'))

console.log(hasUniqueChars('Bob'))

//Time complexity: O(n)
//Space complexity: O(1)

//3 A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
//Write a function to check a sentence to see if it is a pangram or not.
function pangrams(s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let regex = /\s/g;
  let lowercase = s.toLowerCase().replace(regex, "");
 
  for(let i = 0; i < alphabet.length; i++){
   if(lowercase.indexOf(alphabet[i]) === -1){
     return "not pangram";
   }
  }
 
 return "pangram";
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'))


//Time complexity: O(n)
//Space complexity: O(1)

//4 Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

//Time complexity: O(n)
//Space complexity: O(1)


