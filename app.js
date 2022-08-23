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

// ==========================================================
// =====================Valid Palindrome======================
//============================================================

// function palindrome (word){
//   word = word.toLowerCase().replace(/[\W_]+/g)
//   let pal = word.toLowerCase().replace(/[\W_]+/g).split('').reverse().join('');

//   if (word == pal) {
//     return true;
//   }else {
//     return false
//   }
//   return pal
// }

// ==========================================================
// =====================Best time to buy and sell stocks======================
//============================================================

// function maxProfit(prices){

//   //Left and right pointers
//   let left = 0; // buy
//   let right = 1; //Sell
//   let max_profit = 0;

//   while (right < prices.length){

//     if(prices[left] < prices[right]){
//       let profit = prices[right] - prices[left]

//       max_profit = Math.max(max_profit, profit)

//     }else {
//       left = right;
//     }
//     right++;
//   }

//   return max_profit;
// }

// console.log(maxProfit([8, 1, 17, 9, 20, 30, 15, 2, 0, 45, 50]));

// ==========================================================
// =====================Grouped Anagram======================
//============================================================

// function groupAnagrams (strs) {
//   let map = new Map();
//   let result = []

//   for (let item of strs) {
//     let reverse = item.split('').sort().join('');

//     if(map.has(reverse)){
//       map.get(reverse).push(item);

//     }else {
//       map.set(reverse, [item])
//     }
//     // strs.length=0;
//     // for(let [key, value] of map){
//     //   strs.push(value);
//     // }
//     for(let key of map.keys()){
//       result.push(map.get(key))
//       console.log(map.get(key));
//     }
//   }
//   return result;
// }
// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat']));

















