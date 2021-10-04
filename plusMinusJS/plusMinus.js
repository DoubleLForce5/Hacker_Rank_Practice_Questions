var arr = [-4, -3, -9, 0, 4, 1]

function plusMinus(arr){
  var positive = 0;
  var negative = 0;
  var zero = 0;
  
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      positive += 1
    } else if (arr[i] < 1){
      negative += 1
    } else {
      zero += 1
    }
  }
  
  pos = positive / arr.length 
  neg = negative / arr.length 
  z = zero / arr.length 
  
  // toFixed() method formats a number using fixed-point notation aka a particular number of digits after the decimal point. 
  
  console.log(pos.toFixed(6) + '\n' + neg.toFixed(6) + '\n' + z.toFixed(6))
  
}

plusMinus(arr)