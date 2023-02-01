//////// if...else
function offerDrink(age) {
    if (age < 16) {
        console.log('Take some milk!')
    } else if (age >= 16 && age < 18) {
        console.log('Here is your beer')
    } else {
        console.log('Here is your whisky, man!')
    }
}

offerDrink(10); 
offerDrink(16);
offerDrink(20);


/////// loops: for…of, for…in, for, while
// while

let hamburgers = 3;
while (hamburgers > 0) {
    console.log("Let's have one more hamburger");
    hamburgers--;
} 
console.log('No more hamburgers left');


// for
let presents = ['car', 'cake', 'toy'];

for (let i = 0; i < presents.length; i ++){
    console.log(`I got a ${presents[i]} as a present`);
}

// for of
let numbers = [4, 12, 8, 10, 2];
let multipliedNumbers = [];

for (let num of numbers) {
    num = num*2;
    multipliedNumbers.push(num);
}
console.log(multipliedNumbers);


// for in
let apples = {
    Jack: 10,
    Bob: 5,
    Marry: 8,
}

let sumOfApples = 0;
for (let key in apples) {
    sumOfApples += apples[key]
}
console.log(sumOfApples);



/////// switch ... case

function buyFruits(fruit) {
    switch(fruit){
        case 'onion':
            alert ('It is not a fruit');
            break;
        case 'apple':
            console.log('O, I love apples, let\'s take one');
            break;
        case 'pear':
            console.log('Oh, I hate pears');
            break;

        default:
            console.log('Just take something and let\'s go');
    }
}
buyFruits('apple');
buyFruits('orange');



/////// try...catch...finally
function multiplyByNumber(num) {
    let enteredNum = prompt('Enter any number', 0); // enter any letters or leave the field empty to see the work of catch here
    let result;
    try {
        if (enteredNum === '') {
            throw new Error ('Empty field');
        }
        result = enteredNum*num;
        if (isNaN(result)) {
            throw new Error ('Can\'t calculate');
        }
    }
    catch(e){
        console.log('Error: ' + e.message + '.' + ' Please enter a number');
        result = 0;
    }
    finally {
        console.log(`The result is : ${result}. Want to try again?`);
    }
}

multiplyByNumber(10);





////////// callbacks, promises, async/await

// - Только callback
function showImage(imageUrl, callback) {
    let image = document.createElement('img');
    image.src = imageUrl;
    image.onload = callback(image);
    document.body.append(image);
}

showImage('https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/js.jpg?format=2500w', image => {
    console.log('Result for callback function: The image is uploaded')
})



// - Только promises (resolve + reject flow)
let myPromise = new Promise(function(resolve, reject) {
    let divider = 2; ////change divider to 0 to check the Reject flow
    let result = 0;

    for (i = 0; i< 100000; i++) {
        result = (result+i)/divider;
    }
    if (!isNaN(result) || isFinite(result)) {
        resolve(result);
    } else {
        reject('Sorry, couldn\'t calculate the result'); 
    }
});
myPromise.then(
    function(value) {console.log('Result for promise is ' + value);},
    function(error) {console.log(error);}
    );



// - Только async/await
// async function makeCalculation(a,b) {
//     let result = await a+b;
//     console.log('Result for async/await is ' + result);
// }
// makeCalculation(1,3);

async function makeCalculation(a,b) {
    let result = a+b;
    console.log('Result for async/await is ' + result);
}
async ()=> await makeCalculation(1,3) ();


// - Комбинация callback + promise
let btn = document.getElementById('click-button');
btn.addEventListener('click', promiseFunction);
////// click 'Click me!' button to make it work
function promiseFunction() {
    let myPromise1 = new Promise(function(resolve, reject) {
        let divider = 2; ////change divider to 0 to check the Reject flow
        let result = 0;
    
        for (i = 0; i< 10000; i++) {
            result = (result+i)/divider;
        }
        if (!isNaN(result) || isFinite(result)) {
            resolve(result);
        } else {
            reject('Sorry, couldn\'t calculate the result'); 
        }
    });
    
    myPromise1.then(
        function(value) {console.log('Result for callback + promise function is ' + value);},
        function(error) {console.log(error);}
        );
}



// - Комбинация promise + async/await
async function showaAfterSomeTime() {
    return new Promise(function(resolve) {
        setTimeout(() => resolve("Result for promise + async/await"), 1000)
      });;
  }
  
  (async  ()=> console.log(await showaAfterSomeTime())) ();

////////Написать метод, который принимает массив строк в качестве параметра и 
////////выводит в консоль слово с наибольшим количеством букв. 
////////Если таких слов несколько - выводит их все
const words = ['cat', 'super', 'action', 'accident', 'computer', 'dog'];

const longestWords = (arr) => {
    let maxChar = 0;
    for(let word of arr) {
        if(maxChar < word.length) {
            maxChar = word.length;
        }
    }
    let longestWordsArray = words.filter(word => word.length == maxChar);
    console.log(...longestWordsArray);
    return longestWordsArray;

}
longestWords(words);



/////// Написать метод, который принимает массив строк в качестве параметра и
///////возвращает отфильтрованный массив, содержащий те же элементы, но без “гусей”.

blackList = ['Cruella', 'Dr.Nifario', 'Shrek'];
partyPossibleVisitors = ['Pinokio', 'Cruella', 'Dr.Nifario', 'James Bond', 'Cinderella', 'Shrek'];

const partyInvited = (arr, exclArr) =>  {
    let filteredArr = [];
    for (let item of arr) {
        if(!exclArr.includes(item)) {
            filteredArr.push(item);
        }
    }
    return filteredArr;
}

console.log(partyInvited(partyPossibleVisitors, blackList));

//////// Написать метод, который принимает массив чисел в качестве параметра и 
//////// возвращает массив только с чётными числами

num = [2, 4, 5, 7, 8];
let evenNum = [];
const filterNotEvenNum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
          evenNum.push(arr[i]);
        }
      }
}
filterNotEvenNum(num);
console.log(evenNum);

//////// Написать метод, который принимает строку в качестве параметра и 
////////возвращает ту же строку, но все пробелы заменяет на нижнее подчёркивание.

let str = 'I love javaScript';
const changeStr = (str) => {
    return str.replaceAll(' ', '_');
}
console.log(changeStr(str));