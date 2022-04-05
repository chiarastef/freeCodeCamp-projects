// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  // Turn string into lower case and remove non-alphanumeric characters
  let newStr = str.toLowerCase().replace(/[\W_]/g, "");

  // Turn string into array, reverse it and turn it back into a string
  let reversedStr = newStr.split("").reverse().join("");

  // Check if the two strings are the same
  return newStr === reversedStr;
}

palindrome("eye");
