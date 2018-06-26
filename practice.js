//Exercise 1
/*var oper1 = 12 + 12
var oper2 = 4 * 6
var oper3 = 48 / 2
var oper4 = 36 - 12
var oper5 = 10 % 4*/

//Exercise 2
/*var op1 = 6 % 3
var op2 = 10 % 2
var op3 = 5 % 2*/

//Exercise 3
/*var string1 = "The test grade is as follows: \n"
var string2 = "\t Student1 : 96"
var string3 = "\n \t Comment: \"None\""*/

//console.log("The test grade is as follows: \n" + string2 + string3)

//var numbers = [1,2,3,4,5,6,7,8,9,10]

//console.log(numbers[2] + numbers[4])

// var me = {
//     first: "Toni-Lee",
//     last: "Maitland",
//     occup: "Teacher",
//     home: "Hollywood, FL",
//     hobby: "Music"
// }
 /*console.log(`Hi my name is ${me.first} ${me.last}. I am a ${me.occup}, and I am from ${me.home}. In my spare time I like to listen to ${me.hobby}. `) */

 /*console.log(`Hi my name is ${me['first']} ${me['last']}. I am a ${me['occup']}, and I am from ${me['home']}. In my spare time I like to listen to ${me['hobby']}. `) */

//  var num = 3

//  while(num>0){
//      console.log("The number is currently " +  num);
//      num--;
//  }

// var num = 1
// while(num <= 10){
//     //do something
//     if(num % 2 == 0){
//         console.log(num);
//     }
//     //make sure increment variable moves towards not being true or it will run forever
//     num++
// }

// for(var i=1; i<=3; i++){
//     console.log("The number is currently " + i)
// }

// for(var i=1; i<=10; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// var count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch(card){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       ++count;
//       break;
//     case 7:
//     case 8:
//     case 9:
//         count = 0;
//       break;
//     case 10:  
//     case "J":
//     case "Q":
//     case "K":  
//     case "A":
//       --count;
//      break;
//   }

//   if (count > 0) {
//     return count + " Bet";
//   } else if (count <= 0) {
//     return count + " Hold";
//   }
//   // Only change code above this line
// }
// console.log(cc(2,"J",9,2,7))

// // Setup
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
  
//   // Only change code below this line;
  
//   var playerNumber= "16";       // Change this Line
//   var player = testObj[playerNumber];   // Change this Line
//   console.log(testObj[playerNumber]);

// Setup
// function phoneticLookup(val) {
//     var result = "";
  
//     // Only change code below this line
//     var lookup = {
//       "alpha": "Adams",
//       "bravo": "Boston",
//       "charlie": "Chicago",
//       "delta": "Denver",
//       "echo": "Easy",
//       "foxtrot": "Frank"
//     };
  
//     result = lookup[val];

//     // Only change code above this line
//     return result;
//   }
  
//   // Change this value to test
//  console.log(phoneticLookup("alpha"));

// Setup
// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
//   };
  
//   function checkObj(checkProp) {
//     // Your Code Here
//     if (myObj.hasOwnProperty(checkProp) == true){
//         return myObj[checkProp];
//     } else { 
//     return "Not Found";
//   }
// }
  
    
//   // Test your code by modifying these values
//   console.log(checkObj("bed"))

// Setup
// var collection = {
//     "2548": {
//       "album": "Slippery When Wet",
//       "artist": "Bon Jovi",
//       "tracks": [ 
//         "Let It Rock", 
//         "You Give Love a Bad Name" 
//       ]
//     },
//     "2468": {
//       "album": "1999",
//       "artist": "Prince",
//       "tracks": [ 
//         "1999", 
//         "Little Red Corvette" 
//       ]
//     },
//     "1245": {
//       "artist": "Robert Palmer",
//       "tracks": [ ]
//     },
//     "5439": {
//       "album": "ABBA Gold"
//     }
// };
// // Setup
// var collection = {
//     "2548": {
//       "album": "Slippery When Wet",
//       "artist": "Bon Jovi",
//       "tracks": [ 
//         "Let It Rock", 
//         "You Give Love a Bad Name" 
//       ]
//     },
//     "2468": {
//       "album": "1999",
//       "artist": "Prince",
//       "tracks": [ 
//         "1999", 
//         "Little Red Corvette" 
//       ]
//     },
//     "1245": {
//       "artist": "Robert Palmer",
//       "tracks": [ ]
//     },
//     "5439": {
//       "album": "ABBA Gold"
//     }
// };

// // Keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));

// // Only change code below this line
// function updateRecords(id, prop, value) {
//   if(value==""){
//     delete collection[id][prop];
//     return collection;
//   }
//   if (prop!== "tracks" && value !== "") {
//      collection[id][prop] = value;
//   } else {
//     if (collection[id].hasOwnProperty("tracks")) collection[id].tracks;
//     collection[id].tracks.push(value);
//   }
  
//   return collection;
// }

// // Alter values below to test your code
// console.log(updateRecords(5439, "artist", "ABBA"));

// var myArray = [];

// var t=0;
// while (t<=4) {
//   myArray.push(t);
//   t++;
// }
// console.log(myArray)

// var myArray = [];
// for (var t=1; t<=5; t++) {
//     myArray.push(t);
// }
// console.log(myArray)

// var myArray = [];
// for (var t = 1; t<10; t+=2) {
//     myArray.push(t);
// }

// console.log(myArray);

// var myArray = [];
// for (var t = 9; t > 0; t -= 2 ) {
//     myArray.push(t);
// }
// console.log(myArray);

// var myArr = [2,3,4,5,6];
// var arrTotal = 0;
// for (var t=0; t<myArr.length; t++){
//     arrTotal += myArr[t];
// }
// console.log(arrTotal)

// // Setup
// var myArray = [];
// var i = 10;

// Only change code below this line.

// do {  
//   myArray.push(i);
//   i++;
// } while (i<10);
// console.log(myArray)

// function checkEqual(a, b) {
//   return a == b  ? "true" : "false";
// }

// console.log(checkEqual(1, 2));

function checkSign(num) {
  return (num===0) ? "zero" : (num<0) ? "negative" : "positive";
}

console.log(checkSign(10));