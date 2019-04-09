/**
 * 이진검색
 * 이진 검색을 가장 많이 사용하는 경우는 배열에서 어떤 항목을 찾아야 할 때입니다. 
 * 
 */
function binarySearch(x, a) {
  let left = 0, right = a.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (x <= a[middle]) {
      right = middle;
    } else {
      left = middle + 1;
    }
    if (x == a[right]) return right;
  }
  return null;
}

function getLinearSearch(x, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) return i
  }
  return null;
}

let primas = [];
for (let i = 0; i < 50000; i++) { // 천만데이터
  primas.push(i)
}

setTimeout(() => {
  let t0 = performance.now();
  binarySearch(10000, primas)
  let t1 = performance.now();
  console.log("binarySearch: " + (t1 - t0) + 'ms')
  //숫자가 커질수록 속도가 월등히 빨라짐. 최대 20배까지 빠른 상황 확인.
  //반대로 숫자가 적을떈 Linear와 비슷하거나 미세하게 느림.
  //힘이 닿는다면 무조건 이진트리 자료구조를 사용하는것이 좋은듯.
}, 0);

setTimeout(() => {
  let t2 = performance.now();
  getLinearSearch(10000, primas)
  let t3 = performance.now();
  console.log("getLinearSearch: " + (t3 - t2) + 'ms')
}, 0);


function f1(n,t){
  for(; n--;) {
    if(n==1) console.log('done',t)
  }
}
setTimeout(() => {
  f1(20020,'t1');
}, 0);

setTimeout(() => {
  f1(100,'t2')
}, 0);


// var a = [2, 4, 51, 7, 12, 15, 21, 34, 35, 46, 57, 70, 82, 86, 92, 99];
// a.sort((x, y) => x - y);
// console.log(binarySearch(35,a));


// let findMenuForm = document.getElementById('findMenuForm');
// findMenuForm.addEventListener('submit',function(e){
//   e.preventDefault();
//   console.log(this.getMenu.value.trim())

//   let menuListArr = Array.from(document.getElementsByClassName('menuList'));

//   console.log(menuListArr);
//   binarySearchElContent(this.getMenu.value.trim(),menuListArr)


//   this.getMenu.value='';
// })


// function binarySearchElContent(x,a){
//   let n = a.length;
//   let left= 0, right = n-1;
//   while(left < right ){
//     let middle = Math.floor((left + right) /2);

//     if(x <= a[middle]){
//       right = middle;
//     }else{
//       left = middle +1;
//     }
//     if( x== a[right]) return right;
//     return null;
//   }
// }


/**
 * min=1m, i, n, equals, 1, max = nmax=nm, a, x, equals, n으로 둡니다.
maxmaxm, a, x 와 minminm, i, n의 평균을 구하되, 정수가 되도록 내림합니다.
추측이 맞으면 끝냅니다. 숫자를 찾았습니다!
추측값이 너무 작으면 minminm, i, n을 추측값보다 1 크게 설정합니다.
추측값이 너무 크면 maxmaxm, a, x를 1 작게 설정합니다.
2 단계로 돌아갑니다.
 */


let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];



function getBinarySearch(x, arr) {
  let min = 0;
  let max = arr.length - 1;

  while (min < max) {
    console.group('반복문 min :', min, 'max : ', max)
    let guess = Math.floor((min + max) / 2);
    console.log('guess middle index: ', guess, 'value :', arr[guess])
    if (arr[guess] == x) return `res : ${guess}`;

    if (arr[guess] <= x) {
      min = guess + 1;
      console.log('x가 더 큼 앞을 줄여라 min: ', min)
    } else {
      max = guess - 1;
      console.log('x가 더 작음 뒤를 줄여라 max: ', max)
    }
    console.groupEnd()
  }
  return null
}

// 인덱스반환

console.log(
  getBinarySearch(19,primes)
)