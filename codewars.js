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