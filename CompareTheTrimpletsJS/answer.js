a = [1, 2, 3]
b = [3, 2, 1]

function compareTriplets(a, b) {
  
  var alice = 0;
  var bob = 0;
  
  for(let i = 0; i < a.length; i++){
    if(a[i] > b[i]){
      alice++
    } else if (a[i] < b[i]) {
      bob++
    }
  }
  
   console.log(alice, bob)
   return (alice, bob) 
}

compareTriplets(a, b)