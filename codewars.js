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