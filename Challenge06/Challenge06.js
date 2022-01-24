'use strict';

// 1) ---------------------
// 
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//  
// ------------------------

const findMax = (arr)=>{
    let max;
    max =0;
    for (let i = 0; i < arr.length ; i++){
        if (arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}

// 2) ---------------------
// 
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//  
// ------------------------

const sumNums = (arr)=>{
    let sum;
    sum =0
    for( let i =0; i <arr.length; i ++){
        if(typeof arr[i] == 'number'){
           sum = sum +arr[i];
        }
        
        
    }
    return sum;
}

// // 3) ---------------------
// // 
// //  using the (reverseArray) function; return provided array reversed
// //  without using build-in functions
// //  EX:
// //  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
// // 
// // ------------------------
const reverseArray = (arr)=>{
//     let start = 0 
//    let end = arr.length - 1 
//     // while (start < end) {
    //     let temp = arr[start]
    //     arr[start] = arr[end]
    //     arr[end] = temp
    //     start = start + 1
    //     end = end - 1
    // }

    // let arr = [1, 2, 3, 4];
let   arr1 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
    
}

    return arr1;
}

module.exports = {findMax , sumNums, reverseArray};