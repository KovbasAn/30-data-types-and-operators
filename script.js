// Min 1
console.log(0.2+0.3);

// Min 2
let a = '1', b = 2;
console.log(parseInt(a)+b);

// Min 3
let fleshCapacity;
const fileSize = 820;
fleshCapacity = prompt(`what's size of your flesh drive?`);
alert(`you can write down no more than ${Math.floor(fleshCapacity * 1024 / fileSize)} files`);

// Norm 1
let userMoney, priceOfChocolate;
userMoney = prompt(`how much money are you ready to spend on chocolate?`);
priceOfChocolate = prompt(`what is the price of one piece of chocolate?`)
alert(`you can buy ${Math.floor(userMoney / priceOfChocolate)} pieces of chocolate and ${userMoney % priceOfChocolate} will be your change`);

// Norm 2
let number, result;
number = prompt(`give me a 3-digits number`);
result = ((number % 10) * 100) + Math.floor((number % 100) / 10)*10 + Math.floor(number / 100);
if (result < 10) {alert(`here's reversed number: 00${result}`)}
else if (result < 100) {alert(`here's reversed number: 0${result}`)}
else {alert(`here's reversed number: ${result}`)}

// Max1
let deposit, depositNew, time, rate;
deposit = +prompt(`deposit`);
time = +prompt(`time(in month)`);
rate = +prompt(`rate (in %)`);
depositNew = deposit
for (let i = 1; i <= time; i++) {
  depositNew += depositNew*rate*0.01/12
  }
  alert(`you've earned ${depositNew-deposit}USD`)

// Max 2
let x, y, z;
x =  2 && 0 && 3
y =  2 || 0 || 3;
z =  2 && 0 || 3;
console.log(x, y, z)