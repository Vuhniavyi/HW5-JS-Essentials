//ex1
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(word){
    word = word.split("").sort();
    for (var i=0;i<word.length-1;i++){
        if (word[i]==word[i+1]) return false;
    };
    return true;
  };
console.log(isIsogram("sda"));


function isIsogram(str) {
    str = str.toLowerCase();
    for (first = 0; first < str.length - 1; first++) {
        for (second = first + 1; second < str.length; second++) {
            if (str[first] === str[second]) {
              return false;
            };
        };
    };
return true;
}

function isIsogram(str){
    let numberof;
    let newString = str.toUpperCase().split("").sort(); numberof = 0;
    for (var i = 0; i < newString.length; i++) {
        newString[i] == newString[i+1] ? numberof+=1 : numberof
    };
return numberof == 0 ? true : false;
};

//ex2
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if(str[i] === vowels[j]) {
        vowelsCount++;
        };
    };
};
return vowelsCount;
};
console.log(getCount("asdaaaa")); 


function getCount(str) {
    var vowelsCount = 0;
        vowelsCount = str.match(/[aeiou]/g);
    return vowelsCount ? vowelsCount.length:0;
};
console.log(getCount("asdaaaa"));


function getCount(str) {
    var vowelsCount = 0;
    var strArray = str.split('');
    var vowels = ['a','e','i','o','u'];
    for(var i=0;i<strArray.length;i++){
        for(var j=0; j<vowels.length;j++){
            if(strArray[i].toUpperCase() === vowels[j].toUpperCase()) 
                vowelsCount++;
        };
    };
return vowelsCount;
};


//ex3

function GetSum( a,b ) {
    var result = 0;
    var bigger = a > b ? a : b;
    var smaller = a > b ? b : a;
    for (var i = smaller; i <= bigger; i++) { 
      result += i 
    };
    return result
};
console.log(GetSum(5, -2));


//debugger;


//ex4(1)

function sumMix(x){
var newArr = [];
    for(i=0; i< x.length; i++){
        if(typeof(x[i]) === 'string') {
            newArr.push(parseInt(x[i],10));
        } else newArr.push(x[i])
    };
    return newArr.reduce((a,b)=> a+b);
};
console.log(sumMix([2, 4, 6]));

//ex4(2)
function sumMix(x){
    var a = x.join("").split("");
    var sum = 0;
    for (var i = 0; i < x.length; i++){
        sum += parseInt(a[i])
    };
return sum
};
console.log(sumMix([2, 4, 6]));


//ex4(3)
function sumMix(x){
    var sumArrX = 0;
    for (var i = 0; i < x.length; i++) {
      sumArrX += +x[i];
    };
return sumArrX;  
};
console.log(sumMix([2, 4, 6]));



//ex5(1)
function divisibleBy(numbers, divisor) {
    var newArr = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % divisor === 0) {
      newArr.push(numbers[i]);
    } 
};
return console.log(newArr);
};
divisibleBy([1, 2, 3, 4, 5, 6], 2);


//ex6(1)

 // Напиши функцию checkNumberType(num)
  
  //Функция получает число num как аргумент и возвращает 
  //строку "Even" если число четное и строку "Odd" если не четное.


function checkNumberType(num) {
  if (num%2==0) {
    return "Even";
  } else {
    return "Odd";
  };
};
console.log( checkNumberType(2) ); // 'Even'

console.log( checkNumberType(46) ); // 'Even'

console.log( checkNumberType(3) ); // 'Odd'

console.log( checkNumberType(17) ); // 'Odd'


//ex7(1)
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot seperating them.
//It should look like this:
//Sam Harris => S.H
//Patrick Feeney => P.F

function abbrevName(name){
var names = name.split(" ");
var firstName = names[0];
var lastName = names[1];

var firstInital = firstName[0].toUpperCase();
var lastInital = lastName[0].toUpperCase();
var initals = firstInital + "." + lastInital;
return initals;
};