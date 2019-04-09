function binarySearch(x,a){
  let n = a.length;
  let left= 0, right = n-1;
  while(left < right ){
    let middle = Math.floor((left + right) /2);
    if(x <= a[middle]){
      right = middle;
    }else{
      left = middle +1;
    }
    if( x== a[right]) return right;
    return null;
  }
}

var a = [2,4,51,7,12,15,21,34,35,46,57,70,82,86,92,99];
a.sort((x,y)=>x-y);
console.log(binarySearch(35,a))