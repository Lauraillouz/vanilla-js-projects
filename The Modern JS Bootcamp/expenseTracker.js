let myAccount = {
  name: 'something',
  expenses: 0,
  income: 0,
};

let addExpense = (account, amount) => {
  account.expenses = account.expenses + amount;
};

let addIncome = (account, amount) => {
  account.income = account.income + amount;
};

let resetAccount = (account) => {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = (account) => {
  const summary = `Account for ${account.name} has ${
    account.income - account.expenses
  }. ${account.income} in income. ${account.expenses} in expenses.`;
  console.log(summary);
};

addIncome(myAccount, 1000);
addExpense(myAccount, 200);
addExpense(myAccount, 57);
getAccountSummary(myAccount);
resetAccount(myAccount);
getAccountSummary(myAccount);
