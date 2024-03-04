class User {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  }
}

const user = new User("user");

function slotMachineNum() {
  const number = [];
  const indexOne = Math.floor(Math.random() * 10);
  const indexTwo = Math.floor(Math.random() * 10);
  const indexThree = Math.floor(Math.random() * 10);

  number.push(indexOne, indexTwo, indexThree);
  return number.join("");
}

function viewBalance() {
  alert(`your balance is $${user.balance}`);
}

function spin() {
  const bet = prompt(`place your bets ${user.name}`);
  const number = slotMachineNum();
  alert(`${number}`);
  if (number === "111" || number === "222" || number === "333") {
    alert(`JACKPOT!`);
    user.balance += bet * 1.2;
    alert(`your balance is now $${user.balance}`);
  } else if (number === "444" || number === "555" || number === "666") {
    alert(`JACKPOT!`);
    user.balance += bet * 1.5;
    alert(`your balance is now $${user.balance}`);
  } else if (number === "777" || number === "888" || number === "999") {
    alert(`JACKPOT!`);
    user.balance += bet * 2;
    alert(`your balance is now $${user.balance}`);
  } else {
    alert("better luck next time");
  }
}

function Menu() {
  while (true) {
    const menuInput = prompt(`
    [1] View Balance
    [2] Place bet and Spin
    [3] Quit
    `);
    if (menuInput === "1") {
      viewBalance();
    } else if (menuInput === "2") {
      spin();
    } else if (menuInput === "3") {
      return false;
    }
  }
}
