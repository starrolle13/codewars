// January 2nd 2023
// I completed a codewar challenge and then optimized it to
// a ternary and tried to guess the complexity
// I am going to start asking the chat what the complexity is
// and then starting to ask why

function boolToWord( bool ){
    //...
    let string = "";
    bool === true? string = "Yes": string = "No"
    return string;
  }

  // I did a second one since I was on a roll
  // I overcomplicated it. I was using .split and .reverse
 
  function reverseList(list) {
    return list.reverse();
    }

 // I solved it right away but I did not capitlaize the Math

 function cockroachSpeed(s) {
    //Good Luck! 
    return Math.floor(s * 27.777777777778)
  }

  //12/5 I keep forgetting that strings in Javascript are immutable meaning 
  //that I can't replace them in a sequence, I can only make a new array
  //to store the replacement and join that into a string
  function fakeBin(x) {
    const resultArray = [];
    
    for (let i = 0; i < x.length; i++) {
      if (parseInt(x.charAt(i)) < 5) {
        resultArray.push("0");
        console.log("0");
      } else {
        resultArray.push("1");
        console.log("1");
      }
    }
  
    const resultString = resultArray.join('');
    return resultString;
  }

  //12/6 I did a simple one and figured out how to check if a variable 
  //is a string. It was not tough to figure out. 
  function problem(x){
    //your code here
  return String(x) === x ? "Error": x * 50 + 6;
  }


  //This one was pretty easy. I had to correct the return statement so that
  //the cancatenation is correct and passes the name in
  function sayHello(name) {
    return `Hello, ${name}`
  }

  //1/7 created a function that returned hotdogs. It was an easy task
  //learned about triple ternary statements. Time complexity 0(1) because 
  // it does not increase the value of n as the equation gets better
  function saleHotdogs(n){
    let price = 0  
    n < 5 ? price = 100 : n >= 5&& n < 10 ? price = 95 : price = 90
    return n * price  
    }

    //1/8 changed a string tpo uppercase
    function makeUpperCase(str) {
        return str.toUpperCase();
        }

   //1/8 I was missing the parInt x[i] to make sure I am accessing the element 
   //inside of the array. I had a tough day and bombed a skills test
   function sumMix(x){
    let sum = 0
    for (let i = 0; i < x.length; i++){
       sum += parseInt(x[i]);
    }
    return sum
  }  
  
  //1/9 reversed a string
  function solution(str){
    return str.split("").reverse().join("");
  }

  //1/9 return open or senior on a nested array
  function openOrSenior(data) {
    let newData = []
    data.forEach((item) => {
      if (item[0] > 54 && item[1] > 7) {
        newData.push("Senior");
      } else {
        newData.push("Open");
      }
    });
     return newData;
  }

  //1/10 I got the fact that the bus stop passengers is getting the stops added 
  //and subtracted from it
  var number = function(busStops){
    // Good Luck!
    let busPassengers = 0
   busStops.forEach((stop)=>{
      busPassengers += stop[0] - stop[1];
    })
    return busPassengers
  }

  //1/10 even or odd was easy forgot to use % instead of / 
  function oddOrEven(array) {
    let evenOdd = 0
   array.forEach((number)=>{
     evenOdd += number
      
   })
    return evenOdd % 2 === 0 ? "even" : "odd";
  }
  //1/11 I answered this first try but may revise it
  var isSquare = function(n){
    return Math.sqrt(n)*Math.sqrt(n)===n
   }

   //Got second one on first try too
   function booleanToString(b){
    return b ? "true" : "false"
  }

  //1/12 today i am doing easy ones. My mind hurts and I have not been able to focus
  function repeatStr (n, s) {
    return s.repeat(n);
  }
  //I got the answer as clean as possible but there was a typo because my brain hurts
  function lovefunc(flower1, flower2) {
    return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0);
}

//1/13 removed speaces from a string with a gsub
function noSpace(x){
    return x.replace(/ /g, "");
    }

//learned about Regex a little more and the differences between it and gsub whic I used in Ruby
function validatePIN(pin) {
    // Check if the pin consists of exactly 4 or 6 digits
    return /^(\d{4}|\d{6})$/.test(pin);
}  

//1/14 reversed a string that had mixed letters to check for palindrome
function isPalindrome(x) {
    // your code here
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
  }

  //this one was interesting because I used XOR to find the number that was different and saved it 
  //to a variable and returned it
  function stray(numbers) {
    let strayNumber = 0;

  numbers.forEach((number) => {
        strayNumber ^= number;
    });

    return strayNumber;
}

//1/15 solved in 2 minutes
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return fuelLeft * mpg >= distanceToPump
  };

  //this one was more difficult and I wasnt doing proper string manipulation
  function isIsogram(str) {
    let letterSet = new Set();
  
    for (let letter of str.toLowerCase()) {
      if (letterSet.has(letter)) {
        return false; // Found a repeated letter
      }
      letterSet.add(letter);
    }
  
    return true; // No repeated letters found
  }

  //1/16 they just wanted me to create a function today
  function helloWorld(){
    let str = "Hello World!"
    console.log(str)
  }

  //1/17 split a string and returned an array
  function stringToArray(string){
    return string.split(" ")
    }
  //this passed but did nto handle all edge cases ie NaN
  function sumStr(a, b) {
    const numA = isNaN(parseInt(a)) ? 0 : parseInt(a);
    const numB = isNaN(parseInt(b)) ? 0 : parseInt(b);
  
    return String(numA + numB);
  }

  //1/18 I want to start challenging myself more
  function squareDigits(num) {
    const numArray = num.toString().split('').map(digit => parseInt(digit));
    
    const squaredDigits = numArray.map(digit => digit ** 2);
  
    return parseInt(squaredDigits.join(''));
  }
  
  //1/19 created an array that counts the elements of an array
  var number = function (array) {
    // your awesome code here
    let newArray = [];
  
    array.forEach((letter, index) => {
      newArray.push(`${index + 1}: ${letter}`);
    });
  
    return newArray;
  };

  //This one was easy
  function simpleMultiplication(number) {
    return number % 2 === 0? number * 8 : number * 9 
    }

    //1/20 sorted array values in ascending order
    function solution(nums) {
      return nums === null || nums.length === 0 ? [] : nums.sort((a, b) => a - b);
    }

    //this one bothered me because I wanted to come up with somethign cleaner
    function sum(numbers) {
      let result = 0;
    
      numbers.forEach((number) => {
        result += number;
      });
    
      return result;
    }

    //1/21 added goal results together
    function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
      return laLigaGoals+copaDelReyGoals+championsLeagueGoals
     }

     function findNeedle(haystack) {
      const index = haystack.indexOf("needle");
      return index !== -1?`found the needle at position ${index}`:"needle not found in the haystack"
      }

      //1/22 this one was annoying
      function findOdd(A) {
        let odd = 0;
        let matches = A.filter(number => {
          // Use the filter function to find elements that match the current number
          let matchingElements = A.filter(elem => elem === number);
          
          // Check if the count of matching elements is odd
          if (matchingElements.length % 2 !== 0) {
            odd = number;
          }
        });
      
        return odd;
      }

      //used regex to replace all characters with a capital
      String.prototype.toJadenCase = function () {
        // Use replace to capitalize the first letter of each word
        return this.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
      };

//1/23 found the last triangle angle
function otherAngle(a, b) {
  return 180 - (a + b)
 }

 //is this a Pangram

 function isPangram(string){
  alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
     string = string.toLowerCase();
      return alphabets.every(x => string.includes(x));
  }

  //1/24 sorted a number and string arrray
  function order(words) {
    if (words.trim() === "") {
      return ""; // Return an empty string if the input is empty
    }
  
    // Split the input string into an array of words
    const wordArray = words.split(" ");
  
    // Sort the array based on the embedded number in each word
    const sortedArray = wordArray.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
    });
  
    // Join the sorted array back into a string
    const resultString = sortedArray.join(" ");
  
    return resultString;
  }

  //average of array elements
  function findAverage(array) {
    if (array.length === 0 || array.every(num => num === 0)) {
        return 0;
    }
    let sum = 0
    array.forEach((num)=>{
     sum+=num
    })
    return sum/array.length
    }

    //1/25 count the valid smiley faces
    function countSmileys(arr) {
      let count = 0;
         const validEyes = [':', ';'];
         const validNoses = ['-', '~'];
         const validMouths = [')', 'D'];
     
         for (const face of arr) {
             if (face.length === 2 && validEyes.includes(face[0]) && validMouths.includes(face[1])) {
                 count++;
             } else if (face.length === 3 && validEyes.includes(face[0]) && validNoses.includes(face[1]) && validMouths.includes(face[2])) {
                 count++;
             }
         }
     
         return count;
     }

     // find vowels with regex
     function getCount(str) {
      let m = str.match(/[aeiou]/gi);
        return m === null ? 0 : m.length;
      }
//1/26 grade function
function getGrade (s1, s2, s3) {
  let score = (s1+s2+s3)/3
  return score >= 90 && score <= 100?	'A'
  :score >= 80 && score <= 90?	'B'
  :score >= 70 && score <= 80?	'C'
  :score >= 60 && score <= 70?	'D'
  :'F'
}
// rock paper scissors one way
const rps = (p1, p2) => {
  return p1 === p2? "Draw!"
  : p1 === 'rock' && p2 === 'scissors'? "Player 1 won!"
  : p1 === 'paper'&& p2 === 'rock'? "Player 1 won!" 
  : p1 === 'scissors' && p2 === 'paper'? "Player 1 won!"
  : "Player 2 won!"
};
//a second way
const rps2 = (p1, p2) => {
  return p1 === p2? "Draw!"
  : p1 === 'rock' && p2 === 'scissors'
  || p1 === 'paper'&& p2 === 'rock'
  || p1 === 'scissors' && p2 === 'paper'? 
    "Player 1 won!"
  : "Player 2 won!"
};

// here is a regex one that I loved learning
const rps3 = (p1, p2) =>
  p1 === p2 ? `Draw!` : `Player ${/ps|rp|sr/.test(p1[0] + p2[0]) + 1} won!`;

//1/27 Im exhausted
function positiveSum(arr) {
  return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
}

//1/28 found out bmi
function bmi(weight, height) {
  return weight/(height*height) <= 18.5? "Underweight"
  : weight/(height*height) <= 25.0? "Normal"
  : weight/(height*height) <= 30.0? "Overweight"
  : "Obese"
}

//can also remove the repeated cocde
function bmi(weight, height) {
  const bodyMassIndex = weight / (height * height);

  return bodyMassIndex <= 18.5
    ? "Underweight"
    : bodyMassIndex <= 25.0
    ? "Normal"
    : bodyMassIndex <= 30.0
    ? "Overweight"
    : "Obese";
}

//1/29
function setAlarm(employed, vacation){
  return employed === true&&vacation === false? true:false
  }

  //I could have made it even simpler
  function setAlarm(employed, vacation){
    return employed && !vacation;
  }

  //1/30 created an addition problem with a string using eval
  function basicOp(operation, value1, value2){
    return eval(value1+operation+value2)
    }

  //  I was originally thinking of something like this but found something 
  //much easier before commiting
  function basicOp(operation, value1, value2) {
    return  operation == '+' ? value1 + value2 :
            operation == '-' ? value1 - value2 :
            operation == '*' ? value1 * value2 :
            operation == '/' ? value1 / value2 : 'Wrong Operation';
  }

  //1/31 I rested mostly today 
  class Kata {
    static getVolumeOfCuboid(length, width, height) {
      // your code here
      return length * width * height
    }
  }

  //this is outdated so I removed some things but not all
  class Kata {
    static getVolumeOfCuboid(l, w, h) {
      return l * w * h
    }
  }