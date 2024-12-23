const user = {
    name: 'ілля',
    age: 14,
    hobby: 'спорт',
    premium: true
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
    const value = user[key];
    console.log(`${key}: ${value}`);
}

function countProps(obj) {
    return Object.keys(obj).length;
}
console.log(countProps(user));

const employees = {
    maksim: 8,
    papich: 2,
    rostik: 12,
    ivan: 3
};

function findBestEmployee(employees) {                                                
    const values = Object.values(employees);
    return Math.max(...values);
}
console.log(findBestEmployee(employees));

const employees1 = {
    maksim: 24243,
    papich: 332,
    rostik: 993,
    ivan: 622
};

function countTotalSalary(employees1) {
    return Object.values(employees1).reduce((total, salary) => total + salary, 0);
}
console.log(countTotalSalary(employees1));

const users = [
    { name: 'maksim', age: 25 },
    { name: 'rostislav', age: 30 },
    { name: 'illia', age: 28 }
];

function getAllPropValues(arr, prop) {
    return arr.map(({ [prop]: value }) => value);
}
const names = getAllPropValues(users, 'name');
console.log(names);

const allProducts = [
    { name: 'мишка', price: 500, quantity: 10 },
    { name: 'клавіатура', price: 700, quantity: 5 },
    { name: 'монітор', price: 3000, quantity: 2 }
];

function calculateTotalPrice(allProducts, productName) {
    const product = allProducts.find(({ name }) => name === productName);
    if (product) {
        const { price, quantity } = product;
        return price * quantity;
    }
    return 0;
}
const totalMousePrice = calculateTotalPrice(allProducts, 'мишка');
console.log(totalMousePrice);
const totalKeyboardPrice = calculateTotalPrice(allProducts, 'клавіатура');
console.log(totalKeyboardPrice);
const totalMonitorPrice = calculateTotalPrice(allProducts, 'монітор');
console.log(totalMonitorPrice);


const account = {
    balance: 500,
    transactions: [],

    deposit(amount) {
        if (amount > 0) {
            this.transactions.push({ id: this.transactions.length + 1, type: 'deposit', amount });
            this.balance += amount;
            console.log(`внесено: ${amount}. баланс: ${this.balance}`);
        } else {
            console.log('сума повинна бути більше 0.');
        }
    },

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.transactions.push({ id: this.transactions.length + 1, type: 'withdraw', amount });
            this.balance -= amount;
            console.log(`знято: ${amount}. баланс: ${this.balance}`);
        } else {
            console.log('недостатньо коштів або некоректна сума.');
        }
    },

    getBalance() {
        console.log(`баланс: ${this.balance}`);
    },

    getTransactionDetails(id) {
        const transaction = this.transactions.find(t => t.id === id);
        console.log(transaction || 'транзакцію не знайдено.');
    },

    getTransactionTotal(type) {
        const total = this.transactions
            .filter(t => t.type === type)
            .reduce((sum, t) => sum + t.amount, 0);
        console.log(`загальна сума для "${type}": ${total}`);
    }
};

account.deposit(1000);
account.withdraw(500);
