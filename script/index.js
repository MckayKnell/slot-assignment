class User {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  }
}

const user = new User("user");

function slotMachineNum() {
  const number = [];

  for (let i = 0; i < 3; i++) {
    number.push(Math.floor(Math.random() * 10));
  }

  return number.join("");
}

function viewBalance() {
  alert(`your balance is $${user.balance}`);
}

function depositMoney() {
  const moneyInput = Number(
    prompt(`how much money would you like to deposit?`)
  );
  user.balance += moneyInput;
}

function spin() {
  const bet = prompt(`place your bets ${user.name}`);
  if (user.balance >= bet) {
    user.balance -= bet;
    const number = slotMachineNum();
    alert(`${number}`);
    if (number === "111" || number === "222" || number === "333") {
      alert(`JACKPOT!`);
      user.balance += bet * 2;
    } else if (number === "444" || number === "555" || number === "666") {
      alert(`JACKPOT!`);
      user.balance += bet * 5;
    } else if (number === "777" || number === "888" || number === "999") {
      alert(`JACKPOT!`);
      user.balance += bet * 10;
    } else {
      alert("better luck next time");
    }
    viewBalance();
  } else {
    alert(`You don't have enough money to make that bet`);
  }
}

function Menu() {
  while (true) {
    const menuInput = prompt(`
    [1] View Balance
    [2] Deposit Money
    [3] Place bet and Spin
    [4] Quit
    `);
    if (menuInput === "1") {
      viewBalance();
    } else if (menuInput === "2") {
      depositMoney();
    } else if (menuInput === "3") {
      spin();
    } else if (menuInput === "4") {
      return false;
    }
  }
}
