// console.log('hello')
// const returnName = (name) => {
//     console.log(name)
// }

// return returnName('hussein')


// Frequency counter
// this patterns uses objects of sets to collect values/frequencies of values, this can often 
// aviod the need for nested loops or oN^2 time
// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) return false
//     let object1 = {}
//     let object2 = {}

//     for(let val of arr1) {
//         object1[val] = (object1[val] || 0) + 1
//     }
//     for(let val of arr2) {
//         object2[val] = (object2[val] || 0) + 1
//     }
//     for(let key in object1) {
//         if (!(key ** 2 in object2)) {
//             return false
//         }
//         if(object2[key ** 2] !== object1[key]) {
//             return false
//         }
//     }
//     return true
// }
// console.log(same([1,2,3,4], [1,1,1,1]))
// console.log(same([1,2,3,4], [1,4,9,16]))

// const validAnagram = (str1, str2) => {
//     let charCount1 = {}
//     for(let val of str1) {
//         charCount1[val] = (charCount1[val] || 0) + 1
//     }
//     for(let val of str2) {
//         if (charCount1[val]) charCount1[val]--
//     }
//     for(let val in charCount1) {
//         if (charCount1[val] !== 0) return false
//     }
//     return true
// }

// console.log(validAnagram('anagram', 'nagaram'))
// console.log(validAnagram('rat', 'car'))
// console.log(validAnagram('', ''))

// const sumZero = (arr) => {
//     let i = 0
//     let j = 1

//    lengthhile (i < arr.length) {
//         if (arr[i] + arr[j] !== 0) {
//             j++
//         } else {
//             return [arr[i], arr[j]]
//         }
//         i++
//     }
// }

// console.log(sumZero([-3, 2, 5, 3]))
// console.log(sumZero([1, 2, 3]))

// set a pointer at the first index and last index
// while the value of the first pointer is less than the length of the array
// we want to check if t

// const countUniqueValues = (arr) => {
//     if (!arr.length) return 0
    
//     let i = 0
//     let j = 0

//     while(j < arr.length) {
//         if (arr[j] == arr[i]) {
//             j++
//         } else {
//             i++
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1
// }

// console.log(countUniqueValues([1,1,1,1,2])) // 2
// console.log(countUniqueValues([1,1,1,1,2,2,2,4,6])) // 4
// console.log(countUniqueValues([])) // 0

// const countUniqueValues = (arr) => {
//     const newSet = new Set(arr)
//     return newSet.size
// }

// console.log(countUniqueValues([1,1,1,1,2])) // 2
// console.log(countUniqueValues([1,1,1,1,2,2,2,4,6])) // 4
// console.log(countUniqueValues([])) // 0

// const countUniqueValues = (arr) => {
//     let objCount = {}
//     for (let i = 0; i < arr.length; i++) {
//         objCount[arr[i]] ? objCount[arr[i]]++ : objCount[arr[i]] = 1
//     }
//     return Object.keys(objCount).length
// }

// // console.log(countUniqueValues([1,1,1,1,2])) // 2
// // console.log(countUniqueValues([1,1,1,1,2,2,2,4,6])) // 4
// // console.log(countUniqueValues([])) // 0


// function maxSubarraySum(arr, num){
//     let maxSum = 0
//     let tempSum = 0
//     // getting the initial maxSum of the first 3 values
//     for (let i = 0; i < num; i++) {
//       maxSum += arr[i]
//     }
//     // setting tempSum to maxSum
//     tempSum = maxSum
//     // looping from the number, changing tempSum by 'sliding the window'
//     for(let i = num; i < arr.length; i++) {
//       tempSum = tempSum - arr[i - num] + arr[i]
//       maxSum = Math.max(maxSum, tempSum)
//     }
//     return maxSum
//   }
  
// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))
  

// const sameFrequency = (num1, num2) => {
//     let obj1 = {}
//     let str1 = num1.toString();
//     let str2 = num2.toString();

//     for(let i = 0; i < str1.length; i++){
//         let num = str1[i]
//         obj1[num] = (obj1[num] || 0) + 1
//     }
//     console.log(obj1)
//     for(let i = 0; i < str2.length; i++){
//         let num2 = str2[i]
//         if(!obj1[num2]) {
//             return false
//         } else {
//             obj1[num2]--
//         }
//     }
//     return true
// }

// console.log(sameFrequency(182, 281))
// console.log(sameFrequency(34, 14))

// const areThereDuplicates = (...args) => {
//     const setArgs = new Set(args)
//     return setArgs.size !== args.length
// }

// console.log(areThereDuplicates(1,2,3))
// console.log(areThereDuplicates(1,2,2))
// console.log(areThereDuplicates('a','b','c','a'))

// const averagePair = (arr, num) => {
//     let i = 0
//     let j = arr.length - 1
//     while(i < j) {
//         let average = (arr[i] + arr[j]) / 2
//         if(average == num) return true
//         else if (average < num) i++
//         else j--
//     }
//     return false
// }

// console.log(averagePair([1,2,3], 2.5))

// const isSubsequence = (str1, str2) => {
//     let i = 0
//     let j = 0
//     while (j < str2.length) {
//         if(str1[i] === str2[j]) i++
//         if(i == str1.length) return true
//         j++
//     }
//     return false
// }

// console.log(isSubsequence('hello', 'hello world'))
// console.log(isSubsequence('sing', 'sting'))
// console.log(isSubsequence('abc', 'abracadabra'))
// console.log(isSubsequence('abc', 'cba'))

//!COMEBACKTOTHIS const maxSubarraySum = (arr, num) => {    // arr = [1,2,3,4], num = 2
//     if (arr.length < num) return null;    // arr.length > num, doesnt apply
 
//     let total = 0;                  // total = 6
//     for (let i=0; i<num; i++){     // i = 0 ; i < 2; i++
//        total += arr[i];
//     }
//     let currentTotal = total;      // currentTotal = 6
//     for (let i = num; i < arr.length; i++) {      // i = 2; i < 3; i++
//        currentTotal += arr[i] - arr[i-num];         // currentTotal = 3 - 
//        total = Math.max(total, currentTotal);
//     }
//     return total;
// }

// console.log(maxSubarraySum([1,2,3,4], 2))
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2))

// const minSubArrayLen = (array, number) => {

// }

// console.log(minSubArrayLen([2,3,1,2,4,3], 7))
// console.log(minSubArrayLen([2,1,6,5,4], 2))

// function reverse(string){
//     if(string.length === 0) return ''
//     let newString = ''
//     newString += string.slice(-1)
//     return newString.concat(reverse(string.slice(0,string.length-1)))
// }
  
// console.log(reverse('awesome')) // 'emosewa'

// function isPalindrome(string){
//     if(string.length === 1) return true
//     if(string.length === 2) return string[0] === string[1]
//     if(string[0] === string.slice(-1)) return isPalindrome(string.slice(1, -1))
//     return false
// }

// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false


// const isOdd = val => val % 2 !== 0;
// function someRecursive(array, callback){
//     if(array.length === 0) return false;
//     if(callback(array[0])) return true;
//     return someRecursive(array.slice(1), callback)
// }

// // SAMPLE INPUT / OUTPUT
// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)); // false

//HAVE SOMEONE EXPLAIN THIS ONE
// function flatten(oldArr){
//     var newArr = []
//     for(var i = 0; i < oldArr.length; i++){
//         if(Array.isArray(oldArr[i])){
//             newArr = newArr.concat(flatten(oldArr[i]))
//         } else {
//             newArr.push(oldArr[i])
//         }
//     } 
//     return newArr;
// }
  
// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3


// function capitalizeFirst (array) {
//     if (array.length === 1) return array[0].toUpperCase()
//     let newArray = []
//     newArray.push(array[0].charAt(0).toUpperCase() + array[0].slice(1))
//     return newArray.concat(newArray.slice(1))

// }
  
// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

// function linearSearch(array, num){
//     for(let i = 0; i < array.length; i++){
//         let val = array[i]
//         if (val === num) return array.indexOf(num)
//     }
//     return -1
// }

// function binarySearch(array, num){
//     let start = 0
//     let end = array.length - 1
//     let middle = Math.floor((start+end) / 2)
//     while (array[middle] !== num && start <= end) {
//         if(num < array[middle]) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//         middle = Math.floor((start + end) / 2)
//     }
//     if(array[middle] === num) return middle
//     return -1
// }

//bubbleSort => highest value bubbles to the top!

// function bubbleSort(arr){
//     let noSwaps;
//     for (let i = 0; i < arr.length; i++) {
//         noSwaps = true
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[j] > arr[j+1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                 noSwaps = false
//             }
//         }
//         if (noSwaps === true) break
//     }
//     return arr
// }

// bubbleSort([8,1,2,3,4,5,6,7]);

// const bubbleSort = (arr) => {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[j] > arr[j+1]) {
//                 swap(arr, j, j+1)
//             }
//         }
//     }
//     return arr
// }

// bubble sort optimization
// you can short circuit if you see that you have not made any swaps all the way through

// const bubbleSortOptimized = (arr) => {
//     let swap = (arr, idx1, idx2) => {
//         let temp = arr[idx1]
//         arr[idx1] = arr[idx2]
//         arr[idx2] = temp
//     }
//     let noSwaps
//     for(let i = 0; i < arr.length; i++){
//         noSwaps = true
//         for(let j = 0; j < arr.length; j++) {
//             if(arr[j] > arr[j+1]){
//                 swap(arr, j, j+1)
//                 noSwaps = false
//             }
//         }
//         console.log('ONE PASS COMPLETE')
//         if (noSwaps) break
//     }
//     return arr
// }

// console.log(bubbleSortOptimized([8,1,3,4,6,7,5,2]))

// selection sort swaps the lowest value instead of the highest

// const selectionSort = (arr) => {
//     const swap = (arr, idx1, idx2) => {
//         ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
//     }

//     for(let i = 0; i < arr.length; i++){
//         let lowest = i
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j
//             }
//         }
//         if (i !== lowest) swap(arr, i, lowest)
//     }
//     return arr
// }
// selectionSort([8,1,2,3,4,5,6,7]);

// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4])





//? MERGESORT
// first you need to be able to merge two sorted arrays, since 
// mergesort is breaking them down to arrays of length 1 then merging them together
//? first we have the merge helper function that is going to merge two sorted arrays

// const mergeArrays = (arr1, arr2) => {
//     let result = []
//     let i = 0
//     let j = 0
//     // while i and j are both less than the length of their respective arrays
//     while(i < arr1.length && j < arr2.length) {
//         // we are checking one value against the other and pushing the lower one into the result array
//         if(arr2[j] > arr1[i]) {
//             result.push(arr1[i])
//             i++
//         } else {
//             result.push(arr2[j])
//             j++
//         }
//     }
//     // this is meant to catch any of the extra numbers if one array was longer than another
//     while(i < arr1.length){
//         result.push(arr1[i])
//         i++
//     }
//     while(j < arr2.length){
//         result.push(arr2[j])
//         j++
//     }
//     return result
// }
// // console.log(mergeArrays([100,200], [1,2,3,5,6]))

// const mergeSort = (array) => {
//     if(array.length <= 1) return array
//     let mid = Math.floor(array.length / 2)
//     let right = mergeSort(array.slice(mid))
//     let left = mergeSort(array.slice(0, mid))
//     return mergeArrays(right, left)
// }
// console.log(mergeSort([100,200,1,2,3,5,6]))

// //! ABOVE IS ALL OF MERGESORT WITH THE HELPER FUNCTION

//mergesort again
// mergesort sorts by breaking down an array into two parts, when we get an array of length 1 or 0 then 
// we order those into a sorted array
// // mergesort uses a helper function to help it merge the arrays together, lets do that first
// const mergeArrays = (arr1, arr2) => {
//     //need the array that's gonna hold the sorted values
//     let results = []
//     //indices for both arrays that start at 0 so we can compare
//     let i = 0
//     let j = 0
//     // going to loop while the indices are smaller than the length of the arrays
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]){
//             results.push(arr1[i])
//             i++
//         } else {
//             results.push(arr2[j])
//             j++
//         }
//     }
//     // if we are done with the arrays at the same length and there is some layover we need to take that into account
//     while (i < arr1.length) {
//         results.push(arr1[i])
//         i++
//     }
//     //same thing for j and arr2
//     while (j < arr2.length) {
//         results.push(arr2[j])
//         j++
//     }
//     return results
// }
// // console.log(mergeArrays([100,200], [1,2,3,5,6]))
// // the actual mergesort is recursive, we are going to call this function on the right and left sides 
// // of a longer array in order to sort them
// const mergeSort = arr => {
//     if (arr.length <= 1) return arr
//     //need a midpoint to split the array
//     let mid = Math.floor(arr.length / 2)
//     let right = mergeSort(arr.slice(mid))
//     let left = mergeSort(arr.slice(0, mid))
//     return mergeArrays(right, left)
// }

// console.log(mergeSort([100,200,1,2,3,5,6]))


//? QUICKSORT
/*
procedure quickSort(left, right)

  if the length of the array is 0 or 1, return the array

  set the pivot to the first element of the array
  remove the first element of the array

  put all values less than the pivot value into an array called left
  put all values greater than the pivot value into an array called right

  call quick sort on left and assign the return value to leftSorted
  call quick sort on right and assign the return value to rightSorted

  return the concatenation of leftSorted, the pivot value, and rightSorted

end procedure
// */
// function quickSort(array) {
//     if (array.length <= 1) {
//         return array;
//     }

//     let pivot = array.shift();
//     let left = array.filter(el => el < pivot);
//     let right = array.filter(el => el >= pivot);

//     let leftSorted = quickSort(left);
//     let rightSorted = quickSort(right);

//     return leftSorted.concat([pivot]).concat(rightSorted);
// }

// function quickSort(array) {
//     if (array.length <= 1) {
//         return array;
//     }

//     let pivot = array.shift();
//     let left = array.filter(el => el < pivot);
//     let right = array.filter(el => el >= pivot);

//     let leftSorted = quickSort(left);
//     let rightSorted = quickSort(right);

//     return [ ...leftSorted, pivot, ...rightSorted ];
// }

// // a partition algorithm used above
// function partition(array, pivot) {
//     let left = array.filter(el => el < pivot);
//     let right = array.filter(el => el >= pivot);
//     return [ left, right ];
// }


// mergeSort, first we need a way to merge two arrays

// const mergeArrays = (arr1, arr2) => {
//     let results = []
//     let i = 0
//     let j = 0
//     while(i < arr1.length && j < arr2.length) {
//         if(arr1[i] < arr2[j]){
//             results.push(arr1[i])
//             i++
//         }else{
//             results.push(arr2[j])
//             j++
//         }
//     }
//     while(i < arr1.length){
//         results.push(arr1[i])
//         i++
//     }
//     while(j < arr2.length){
//         results.push(arr2[j])
//         j++
//     }
//     return results
// }

// const mergeSort = arr => {
//     if (arr.length <= 1) return arr
//     let mid = Math.floor(arr.length / 2)
//     let right = mergeSort(arr.slice(mid))
//     let left = mergeSort(arr.slice(0, mid))
//     return mergeArrays(left, right)
// }

// console.log(mergeSort([100,200,1,2,3,5,6]))
// // 

// quicksort uses a pivot instead of using two arrays that are merged together

// const quickSort = (arr) => {
//     if (arr.length <= 1) return arr

//     let pivot = arr.shift()
//     let left = arr.filter(el => el < pivot)
//     let right = arr.filter(el => el >= pivot)

//     let sortedLeft = quickSort(left)
//     let sortedRight = quickSort(right)

//     return [...sortedLeft, pivot, ...sortedRight]
// }

// console.log(quickSort([100,200,1,2,3,5,6]))



//mergeSort
// first you need to be able to merge two sorted arrays
// const mergeArrays = (arr1, arr2) => {
//     let results = []
//     let i = 0
//     let j = 0

//     while (i < arr1.length && j < arr2.length){
//         if (arr1[i] < arr2[j]) {
//             results.push(arr1[i])
//             i++
//         } else {
//             results.push(arr2[j])
//             j++
//         }
//     }
//     while (i < arr1.length) {
//         results.push(arr1[i])
//         i++
//     }
//     while (j < arr2.length) {
//         results.push(arr2[j])
//         j++
//     }
//     return results
// }

// // console.log(mergeArrays([100,200], [1,2,3,5,6]))

// const mergeSort = (arr) => {
//     if(arr.length <= 1) return arr
//     let mid = Math.floor(arr.length / 2)
//     let right = mergeSort(arr.slice(mid))
//     let left = mergeSort(arr.slice(0, mid))
//     return mergeArrays(left, right)
// }

// console.log(mergeSort([100,200,1,2,3,5,6]))


//quicksort
//need a pivot
const quickSort = arr => {
    if (arr.length <= 1) return arr

    let pivot = arr.shift()
    let left = arr.filter(ele => ele < pivot)
    let right = arr.filter(ele => ele >= pivot)

    let sortedLeft = quickSort(left)
    let sortedRight = quickSort(right)

    return [...sortedLeft, pivot, ...sortedRight]
}