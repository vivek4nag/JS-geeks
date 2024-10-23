function destroyer(arr, a, b) {

    for(let i = 0; i< arr.length; i++){
      if(arr[i] === a || arr[i] === b){
        arr.splice(i , 1);
        if( i !== 0) i--;
      }
    }
  
    return arr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
  
  