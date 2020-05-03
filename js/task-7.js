'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let newId = 0;

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    const transaction = {};
    transaction.amount = amount;
    transaction.type = type;
    transaction.id = newId + 1;
    newId += 1;
    return transaction;
  },

  deposit(amount) {
    let transaction = {};
    transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Cнятие такой суммы не возможно, недостаточно средств.');
      return;
    }
    let transaction = {};
    transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    let itemById;
    for (const item of this.transactions) {
      if (item.id === id) {
        itemById = item;
      }
    }
    return itemById;
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const item of this.transactions) {
      if (item.type === type) {
        total += item.amount;
      }
    }
    return total;
  },
};

account.deposit(77);
account.deposit(200);
account.deposit(100);
account.withdraw(27);
account.withdraw(27);
account.withdraw(100);
console.log(account.transactions);
console.log('balance : ', account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal('withdraw'));
