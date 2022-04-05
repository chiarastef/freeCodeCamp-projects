// Return true if the passed string looks like a valid US phone number
// The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
  // Valid regex patterns
  const regex = [
    // without parenthesis
    /^1?( |)\d{3}(-| |)\d{3}(-| |)\d{4}$/,
    // with parenthesis
    /^1?( |)\(\d{3}\)(-| |)\d{3}-\d{4}$/,
  ];

  // Iterate over regex to check if string is valid
  for (let i = 0; i < regex.length; i++) {
    if (regex[i].test(str)) {
      return true;
    }
  }
  return false;
}

telephoneCheck("555-555-5555");
