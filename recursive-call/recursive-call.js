console.log('헬로 재귀')

function recursiveCall(n){
  console.log(n)
  if(n ==1) return n;
  return recursiveCall(n-1)
}

console.log(
  recursiveCall(5)
)