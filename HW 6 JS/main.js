
//ex1(1)
const printTimout = (str, n) => 
    setTimeout(function() { console.log(str) }, n*1000);
printTimout('some text', 2 );

//ex1(2)
function printTimeout(str, n) {
    setTimout(() => console.log(str), n*1000);
}
printTimout('some text', 10 );

//ex1(3)
function printTimeout(str, n) {
    setTimeout(function() { console.log(str) }, n * 1000);
};
printTimeout('hello', 5);

//ex2(1)

//A function which returns sum of all numbers from 1 to n using recursion.
function sumAll(n) {
    if (n == 1) return 1;
    return n + sumAll(n - 1);
};
console.log( sumAll(100) );

//ex2(2)
function sumAll(n) {
    var sum = 0;
        for (var i = 1; i <= n; i++) {
        sum += i;
  };
  return sum;
};
console.log( sumAll(100) );


//ex3()
// A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str
function bombTimer(str, time) { 
    let result = setInterval(function(){console.log(time--);
        if (time === -1) {
        console.log(str);
        clearInterval(result);
    }
  }, 1000);
}
bombTimer('Boooom', 3);

//ex4()
//A function which returns factorial of number using recursion.
function factorial(n) { 
    if (n == 1) return 1;
    return n * factorial(n-1);
}
console.log( factorial(5) );


//ex5() повернутись
//Implement function from task №3 (bombTimer) using recursion and setTimeout
//A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str


//ex6()
//A function which takes an array of numbers and maxNumber, the function returns new array with numbers not higher than maxNumber.
function filterNumbers(arr, maxNumber) {
    let result = [];
        arr.map(function(value) {
        if (value <= maxNumber){
        result.push(value);
    };  
  });
  return console.log(result);
}
filterNumbers([1, 4, 8, 1, 20], 5);

// 7(1)

//A function that returns object with min and max numbers from array of numbers.
function minMax(arr) { 
    let result = {min:arr[0] , max:arr[0]};
        arr.forEach(function(item){
            if (item < result.min) {
            result.min = item;
            }; 
            if (item > result.max) {
            result.max = item;
            };
        });
    console.log(result);
    return result;
}
minMax([1, 4, 8, 2, 20]) // { max: 20, min: 1 }

// 7(2)

function minMax(arr) {
    let result = [];
    let minNumber = Math.min(...arr);
    let maxNumber = Math.max(...arr);
        arr.forEach(function(number) {
            if (number == minNumber || number == maxNumber) {
            result.push(number);     
        };
    });
    return console.log(result);  
};
minMax([1, 4, 8, 2, 20]);


//ex8(1)
//A function that returns object with min and max numbers from array of numbers.

//A function that returns average of numbers in array.
function average(arr) {
    let sum = arr.reduce(function(acc, item) {
    return (item + acc);
    });
    let result = sum/arr.length;
  console.log(result);
};
average([1,4,2]); // 2.33 

//ex8(2)
let amount = function(arr) {
    let result = arr.reduce(function (a, b) { 
    return a + b 
    })  / arr.length;
    return console.log(result); 
}
amount([1, 4, 2]);


//ex9()
//A function which concats all first-nested arrays in one array (use reduce):
function concatFirstNestedArrays(arr) { 
    let allArr = arr.reduce(function(sum, current) {
    return sum.concat(current, []);
    });
    return console.log(allArr);
}
concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]) // [0, 1, 2, 3, 4, 5]



//ex10()

const users = [
    {   id: 1, name: 'John',birthday: '1999-2-12'},
    {   id: 2, name: 'Bill', birthday: '1999-1-19'},
    {   id: 3, name: 'Carol', birthday: '1999-3-11'},
    {   id: 4,name: 'Luce',birthday: '1999-2-22'}
    ];

let usersToObject = function(users) {
    const result = {};
    for (let i = 0; i < users.length; i++) {
        const number = users[i];
        result[number.id] = number;
    };
    return result;
};
console.log(usersToObject(users));


