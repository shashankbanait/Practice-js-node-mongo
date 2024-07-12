let x;

x = 5 + '5';
x = 5 + '5';

console.log(x, typeof x);

y = 5 + null;
console.log(typeof y);
y = Number(null);
console.log(typeof y);


z = Number(true);
console.log(z);     // output: 1

u = Number(false);
console.log(u);     // output: 0

i = 5 + Number(false);
console.log(i);     // output: 5

j = 5 + Number(true);
console.log(j);     // output: 6

