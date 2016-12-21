let bankAccount: Bank = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

type Bank = { money: number, deposit:(value: number) => void }

let myself: { name: string, bankAccount: Bank, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);