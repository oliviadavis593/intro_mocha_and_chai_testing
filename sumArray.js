
//Objective: 
//Function sum => accepts an array of values 
//Returns a Promise that resolves the sum of the values in the array 
//The array may contain numbers & strings
//If strings can safely be converted to nuumbers then use the converted numbers as part of the sum
//Otherwise => ignore them 
//sum([1, '2', 'a', 3]) => should resolve to 6

//This correctly returns a promise that'll resolve to the sum if the array only contained numbers
function sum(arr) {
    return new Promise((resolve, reject) => {
      const ans = arr.reduce((acc, curr) => {
          //We've modified the code to perform arithmetic addition rather than String concantenation
          const num = parseFloat(curr);
        //return acc + curr;
        return acc + (isNaN(num) ? 0 : num);
      }, 0);
      resolve(ans);
    });
  }
  
module.exports = sum;