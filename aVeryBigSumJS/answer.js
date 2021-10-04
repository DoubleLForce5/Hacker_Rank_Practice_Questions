ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
  
// print and return the sum of the array 
function aVeryBigSum(ar) {
  // create bucket to hold sum 
  var sum = 0; 
  
  // Get all the values in the array 
  var n = ar.length 
  
  for(var i = 0; i < n; i++){
    var number = ar[i]
    
    sum += number 
  }
  // console.log(sum)
  return sum;
}

aVeryBigSum(ar)