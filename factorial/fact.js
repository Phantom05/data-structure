console.log('hello factorials');

/**
 * 팩토리얼 n!
 * 이는 1부터 n까지의 정수를 곱하는 단순 연산.
 * 예를 들어 5!는 1 ⋅ 2 ⋅ 3 ⋅ 4 ⋅ 5  즉 120입니다. (주의사항: 팩토리얼 함수를 언급할 때 나오는 모든 느낌표는 강조의 뜻이 아니라 팩토리얼 함수를 의미합니다)
 */

 // 일반적인 반복문 팩토리얼
console.group('fact1')
function fact1(n){
  let k = 1, i = 1;
  while(i < n) {
    console.log(`i = ${i}, k = ${k}`)
    k *= (++i); //i는 증가시키고 k에다가 i의 곱을 대입 해준다.
  }
  return k;
}
console.log(
  fact1(5)
)
console.groupEnd()

// 재귀를 이용한 팩토리얼
console.group('reFact1')
function reFact1(n){
  if( n == 1){
    return n;
  }else{
    return n * reFact1(n -1);
  }
}

console.log(
  reFact1(5)
)
console.groupEnd()

// 퍼포먼스를 위해 캐시를 이용한 팩토리얼
console.group('fact2')

let fact2 = function(){
  let cache = {'0' : 1};
  let inFunc = function(n){
    let res = 0;

    if(typeof(cache[n] === 'number')){
      res = cache[n];
    }else{
      res = cache[n] = n * inFunc(n-1);
    }
    return res;
  }
  return inFunc;
}();
console.log(fact2(5));

console.groupEnd()

