//================GIVEN A STRING OF WORDS RETURN THE LENGTH OF THE SHORTEST WORD(s)

// let S = 'My name isk Wilson Omondi Wanga, My aspiration is to become an software ENGINEER'

// function short(k){
//  const arrS = k.split(' ');

//  arrS.sort((a, b) => a.length - b.length);

//  return arrS[0].length;
// }

// console.log(short(s));

//==============WRITE A FUNCTION THAT MULTIPLYS TWO NUMBERS

// function mult(a, b){
//   return a * b;
// }

// ============Function that calculates the averages of the numbers in a given list.
// let list = [1, 2, 3, 4, 5]
// let list = [ ]

// function averages (k) {
//   let len = k.length + 1;
//   let sum = 0

//   if(k === [] || isNaN(k) === true ){
//     return 0;
//   } 


//   for (let i = 0; i < k.length; i++){
//     sum += k[i];
//   }

//   return sum/k.length;
  
// }

// console.log(averages(list));

//=================Reverse strings

// function reverse(k){
//   let revWord = k.split('').reverse().join('');
//   return revWord
// }

// console.log(reverse('wilson'));

//Is this a triangle

// function triangle(a, b, c){
//   if(a + b > c && a + c > b && c + b > a){
//     return true;
//   }
//   return false;
// }

// console.log(triangle(3,6,2));


//=============REMOVE FIRST LETTER AND LAST LETTER OF A STRING

// function rem(str){

//   return str.slice(1,-1);
// }

// console.log(rem('wilson'));

// ===========ALTERNATING CASE
// function alter(str){
//   let alt = [];
//   let sp = str.split('')
//   for(i = 0; i < sp.length; i++){
//     if (sp[i].toUpperCase() == sp[i]){
//       alt.push(sp[i].toLowerCase());
//     }
//     if (sp[i].toLowerCase() == sp[i]){
//       alt.push(sp[i].toUpperCase());
//     }
    
//   }
//   return alt.join('');
// }

// console.log(alter('wilson OmoNdi'));


// =================HAS DUPLICATES==============
// function hasDuplicates (array) {
//   if (new Set(array).size == array.length){
//     return false
//   }else {
//     return true
//   }
// }
/**************** ALTERNATIVE SOLUTION ************/

// function hasDuplicates (array){
//   var valuesSoFar = Object.create(null)
//   for (var i = 0; i < array.length; i++){
//     var value = array[i];
//     if(value in valuesSoFar){
//       return true;
//     }
//     valuesSoFar[value] = true;
//   }
//   return false;
// }

// =====================Check if two strings are anagram.
// An anagram is a word or phrase formed by rearranging the letters of a different word.

// function anagrams(stringA, stringB){
//   stringA = stringA.replace(/[\W_]+/g, "");
//   stringB = stringB.replace(/[\W_]+/g, "");

//   var a = stringA.toLocaleLowerCase().split("").sort().join();
//   var b = stringB.toLocaleLowerCase().split("").sort().join();

//   if (a == b){
//     return true;
//   }else {
//     return false;
//   }

// }
// console.log(anagrams('Santa', 'Satan'));

// ============Alternative Solution===


// function anagrams(stringA, stringB){
//   if(stringA.length !== stringB.length){
//     return false;
//   }else {
//     var strObj = {}
//     for(i=0; i < stringA.length; i++){

//     }
//   }
// }
// console.log(k)

// ==========================================================
// =====================TWO SUM==============================
//============================================================

// let nums = [2, 7, 11, 15]

// function twoSum(nums, target) {

//   let numObj = {};

//   for(i = 0; i < nums.length; i++){
//     var char = nums[i];

//     if(target - char in numObj){
//       return [numObj[target-char], i]
//     }else {
//       numObj[char] = i;
//     }
//   }

//   return false;
// }
// console.log(twoSum(nums, 9))
























