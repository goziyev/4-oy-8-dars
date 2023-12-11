// 1-masala
// function multiple (arr){
//     let sum = 1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 == 0  || arr[i] % 5 == 0) {
//             sum*= arr[i];
//         }
//     }
//     return sum
// }

// console.log(multiple([3,5,9,10,11]));

// 2-masala
function texts(text) {
  let newArr = [];
  let NewArr = [];
  for (let i = 0; i < text.length; i++) {
    newArr.push(text[i].charAt(0));
  }
  return newArr;
}
// console.log(texts(["Salimjon ","alisher","lazizbek","omadbek","muzaffar"]));

// 3-masala
function theNumber(arg) {
  let newArr = [];
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] % 2 == 1) {
      newArr.push(arg[i]);
    }
  }
  return newArr;
}
// console.log(theNumber([1,2,3,4,5]));
// 4-masala
function oddNumber(arg) {
  let count = 0;
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] % 2 == 1) {
      count++;
    }
  }
  return count;
}
// console.log(oddNumber([1,2,3,4,5,6,7,8]));

// 5-masala
let arr = ["hello","hi","bye","Number","String"]
 
let arr1 = arr.filter(value  => {
    return value.length > 5;
});

console.log(arr1);
// 6-masala

function primeNumber(son) {
  let sum = 0;
  for (let i = 0; i < son.length; i++) {
    let count = 0;
  
    for (let s = 1; s <= son [i]; s++) {
      if (son[i] % s == 0) {
        count++;
      }
    }
    if (count == 2) {
      sum++;
    } 
  }
  return sum;
}

// console.log(primeNumber([12,10,17,13,11,7,3,5,6,8,9,10]));

// 7-masala
function multipleSeven(arr) {
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 7 == 0 && arr[i] % 3 == 0) {
      sum *= arr[i];
    }
  }
  return sum;
}
// console.log(multipleSeven([21,1,5,6,7,8,9]));
