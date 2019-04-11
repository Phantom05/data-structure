/*------------------------------------------ *
  * 퀵 정렬
  * x : 정렬할 배열
  * first: 정렬할 첫 번째 요소의 위치
  * last: 정렬할 마지막 요소의 위치
*------------------------------------------- */

function quicksort(x, first, last) {
  var p = x[Math.floor((first + last) / 2)]; // 배열의 가운데있는 값을 가져옴.
  for (var i = first, j = last; ; i++ , j--) { 
    while (x[i] < p) {
      i++;
      console.log('첫번째  while',p,x[i])
    } // 들어온 배열의 왼쪽부터 차례대로 p 이상의 요소를 검색 첫번쨰 p는 중간값은 1
    while (p < x[j]){
      console.log('두번째 while',p,x[j])
      j--;
    } // 오른쪽부터 차례대로 p 이하의 요소를 검색
    if (i >= j) break;    // i와 j가 교차하면 다음으로 이동
    var w = x[i];         // 발견하면 x[i]와 x[j]를 교환한다.
    x[i] = x[j];
    x[j] = w;
  }
  if (first < i - 1) quicksort(x, first, i - 1); // 왼쪽에 두 개 이상 남아 있으면 왼쪽을 다시 정렬
  if (j + 1 < last) quicksort(x, j + 1, last);   // 오른쪽에 두 개 이상 남아있으면 오른쪽을 다시 정렬
}

var a = [7, 2, 5, 1, 8, 9, 3];
quicksort(a, 0, a.length-1);// 시작하는 인덱스와 끝 인덱스를 넣는다.
console.log(a)
--
function isToday(date) {
  var today = new Date();
  var realToday = today.getDate();
  var realDate = date.getDate();
  return (realDate == realToday)? true:false
}


function bb(){
  bb.prototype.a = 'h'
  return `hello ${this}`
}

let a1 = new bb();
let a2 = new bb();
console.log(a1.a == a2.a);
console.log(a1)



let t1 = new Date();
let t2 = new Date();

console.log(t1.getTime() == t2.getTime())



 isToday= (date)=> date.toDateString() == new Date().toDateString();


console.log(isToday(new Date()))