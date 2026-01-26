let sumEven = 0;
let productOdd  = 1;

for (let i = 1; i<=50; i++){
    if (i % 2 === 0 ){
        sumEven += i;
    }
};
for (let j =1; j <= 10; j++){
    if (j % 2 !== 0){
        productOdd *=  j;
    }
};


console.log("ผลรวมเลขคู่ 2-50: " + sumEven);
console.log("ผลคูณเลขคี่ 1-10: " + productOdd ,("(คือ 1*3*5*7*9)"));