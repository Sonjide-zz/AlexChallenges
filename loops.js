//console.log("loopy")


//normal for loop
// for ([initialiasaition]; [condition]; [final-expression(incrementation or decrementation) (interate the counter)]){
//   "something happens here"
// }
//for loop
let array = [10,20,30]
for (let i=0; i < array.length; i++ ){
  //console.log(array[i])
}

//multi-dimensional array, allows you to use nested for loops to go through sub-arrays
//var arrayNestArr =[[1,3],[4,7],[9,8]]
let arrayNestArr =[[1,3],[4,7],[9,8]]
for(let i=0; i < arrayNestArr.length; i++){
for(let k=0; k < arrayNestArr[i].length; k++){
//console.log(arrayNestArr[[i],[k]]);
//console.log(arrayNestArr[[i]?[k]]); why did i get undefined space where the ? is counts as space that is why output is undefined
// console.log(arrayNestArr[[i , k]]); all are undefined ... now I am not sure TBH

//console.log(arrayNestArr[i][k]);
}
}

//seperate the even and odd numbers
let number = 8;
let x = [];
let y =[];
let evenOdd = [[x],[y]];


for (let i = 0; i < number.length; i++){
  if (i %2 === 0){
    //  console.log(x.push(i));
  }
}
//console.log(x)


// for (let i = 0; i < number.length; i++){
//   for (let j = 0; j < number[i].length; j++){
// console.log(x.push(i));
// console.log(y.push(j));
//   }
// }
//   console.log(evenOdd)

/* Write a new for loop, using chessboardLength.
   1. Print out a row that's as long as specified.
      If it's a black square, print "X"
      If it's a white square, print "."
      So for an 8-long row, print ".X.X.X.X"


   2. A real stretch goal: put this for loop in another for
      loop. And print out a row for everything. So, if
      chessboardLength = 4, print:
      ".X.X
       X.X.
       .X.X
       X.X."
       */
