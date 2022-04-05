// Convert the given number into a roman numeral
function convertToRoman(num) {
  // Roman numeral lookup table
  const lookupTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // Roman numeral string
  let romanStr = "";

  // Iterate over lookup table to add roman numarals to string
  for (const obj in lookupTable) {
    while (num >= lookupTable[obj]) {
      romanStr += obj;
      num -= lookupTable[obj];
    }
  }

  return romanStr;
}

convertToRoman(36);
