// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// The checkCashRegister() function should always return an object with a status key and a change key.
const currency = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1.0,
  FIVE: 5.0,
  TEN: 10.0,
  TWENTY: 20.0,
  "ONE HUNDRED": 100.0,
};

function checkCashRegister(price, cash, cid) {
  let registerObj = { status: "", change: [] };
  const changeNeeded = Number(parseFloat(cash - price).toFixed(2));
  const changeAvailable = calculateChangeAvailable(cid);

  // if cash-in-drawer is less than the change due return insufficent funds
  if (changeNeeded > changeAvailable) {
    registerObj.status = "INSUFFICIENT_FUNDS";
    return registerObj;
  }

  // if cash-in-drawer is equal to the change due return closed
  if (changeNeeded === changeAvailable) {
    registerObj.status = "CLOSED";
    registerObj.change = [...cid];
    return registerObj;
  }

  // if cash-in-drawer is more than the change due return open
  if (changeNeeded < changeAvailable) {
    let changeArr = getChange(changeNeeded, cid);

    // if you cannot return the exact change return insufficent funds
    if (changeNeeded > calculateChangeAvailable(changeArr)) {
      registerObj.status = "INSUFFICIENT_FUNDS";
    } else {
      registerObj.status = "OPEN";
      registerObj.change = changeArr;
    }
  }

  return registerObj;
}

// Iterate over cash-in-drawer to sum up money and return total
function calculateChangeAvailable(currencyArr) {
  let total = 0;

  for (let i = 0; i < currencyArr.length; i++) {
    total += currencyArr[i][1];
  }

  return Number(total.toFixed(2));
}

// Compute change array with the change due in coins and bills sorted in highest to lowest order
function getChange(changeNeeded, cid) {
  const arr = [];

  // Iterate over cash-in-drawer the other way round
  for (let i = cid.length - 1; i >= 0; i--) {
    const currencyName = cid[i][0];
    const currencyTotal = cid[i][1];
    // Get value of the coin/bill from currency obj
    const currencyValue = currency[currencyName];
    // Calculate amount of coin(s)/bill(s)
    let currencyAmount = Number((currencyTotal / currencyValue).toFixed(2));
    // Keep track of number of coin(s)/bill(s)
    let currencyCounter = 0;

    // Count how many coin(s)/bill(s) are needed for the change
    while (changeNeeded >= currencyValue && currencyAmount > 0) {
      changeNeeded = Number((changeNeeded - currencyValue).toFixed(2));
      currencyCounter++;
      currencyAmount--;
    }

    // Push to array a single array for every coin(s)/bill(s) needed for change
    if (currencyCounter > 0) {
      arr.push([currencyName, currencyCounter * currencyValue]);
    }
  }

  return arr;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
