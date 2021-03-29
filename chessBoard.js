console.log("chessBoard")

// let array = [1,2,3,4,5,6,7,8]

// for (let i = 0; i < array.length; i++){
// if (array[i] %2 === 0){
//  console.log(array[i],"x");
// }
// else console.log(array[i],'.')
// }

//let array = [1,5,2,3,7,4,6,8]
//let sortedArr = array.sort() //[1,2,3,4,5,6, 7,8]
                             //i=[1, 2, 4, 16]

//console.log(sortedArr);
// for loop is only to go through the elements
// for (let i =0; i < sortedArr.length; i++){
//     if (sortedArr[i] %2 === 0){
//         console.log(sortedArr[i],'x')
//     } else console.log(sortedArr[i],".")
// }

//this for loop is skipping by multiples my index by 2 - the counted to be changed by any operation *, /, %, + , -
// for (let i= 1; i < sortedArr.length; i*= 2){
//     if (sortedArr[i] %2 === 0){
//         console.log(sortedArr[i],'x')
//     } else console.log(sortedArr[i],".")
// }

//this for is checks the array in the reverse order
    //[1,2,3,4,5,6,7,8]
//i=[0,1,2,3,4,5,6,7]
// for (let i = sortedArr.length; i >= 0; i--){
//     if (sortedArr[i] %2 === 0){
//         console.log(sortedArr[i],'x')
//     } else console.log(sortedArr[i],".")
// }
//[8,7,6,5,4,3,2,1]


//nested for loop - for loop 1st checks the row, then checks columns
//[6,7,8,9,
//6,7,8,9,
//6,7,8,9,
//6,7,8,9]

// the first for loop checks the row, the nested for loop checks the column
let rowColumnArr = [1,2,3,4]
for (let i=0; i < rowColumnArr.length; i++){
    for(let k=0; k < rowColumnArr.length; k++){
console.log(rowColumnArr)
 }
}


// for (let i = 0; i <rowColumnArr.length; i++){
// //conditional
// if (rowColumnArr[i] %2 === 0){
// console.log('x');
// }
// else console.log('.');
// }



