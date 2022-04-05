// Write a function which takes a ROT13 encoded string as input and returns a decoded string
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
function rot13(str) {
  let newStr = "";
  // Iterate over string
  for (let i = 0; i < str.length; i++) {
    // Check if character is alphabetical
    if (/[A-Z]/.test(str[i])) {
      // Get char code
      let code = str.charCodeAt(i);
      code -= 65; // Convert UTF-16 code to alphabetical index (A = 65)
      code += 13; // Add key
      code %= 26; // Wrap around from Z to A
      code += 65; // Convert back to UTF-16 code
      // Get character from code
      newStr += String.fromCharCode(code);
    } else {
      // if character is not alphabetical don't change it
      newStr += str[i];
    }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");
