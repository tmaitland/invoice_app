// console.log("Works")

// function add(num1, num2){
//     return num1 + num2
// }

// var sum = add(10,35)
// console.log(sum)

// function randomValue(){
//     return Math.floor(Math.random()*10+1)
// }

// console.log(randomValue())

// function sumUp3(x,y,z){
//     console.log([x + y + z])
// }

// sumUp3(randomValue(), randomValue(), randomValue())

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "This " +myNoun+ " is " +myAdjective+ " and " +myVerb+ " very " + myAdverb;
  
    // Your code above this line
    return result;
  }
  
  // Change the words here to test your function
  wordBlanks("lesson", "bullshit", "written", "poorly");