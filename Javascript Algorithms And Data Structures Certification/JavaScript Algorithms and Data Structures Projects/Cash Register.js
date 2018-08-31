function checkCashRegister(price, cash, cid) {
  let availableCash = {
    'ONE HUNDRED': 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01
  }
  let change = cid.map((item) => [item[0], 0]);
  let returnMoney = cash - price;
  let returnObject = {};

  let checkInDrawer = function (money, index) {
    if (returnMoney > money && cid[index][1] != 0) {
      if (returnMoney >= cid[index][1]) {
        returnMoney -= cid[index][1];
        change[index][1] = cid[index][1];
        cid[index][1] = 0;
      } else {
        change[index][1] = Math.floor(returnMoney / money) * money;
        returnMoney %= money;
        cid[index][1] -= change[index][1];
      }
      returnMoney = Math.round(returnMoney * 100) / 100;
    }
  };

  cid.slice().reverse().forEach((item, index) => {
    checkInDrawer(availableCash[item[0]], (cid.length - index - 1));
  });

  if (returnMoney > 0) {
    returnObject.status = "INSUFFICIENT_FUNDS";
    returnObject.change = [];
  } else if (cid.every((item) => item[1] == 0)) {
    returnObject.status = "CLOSED";
    returnObject.change = change;
  } else {
    returnObject.status = "OPEN";
    returnObject.change = change.filter((item) => item[1] != 0).reverse();
  }
  return returnObject;
}
