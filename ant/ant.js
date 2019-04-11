
function solution(s) {
  let arr1 = [];
  let arr2 = [];

  while (s.length !== 0) {

    if (s[0] === s[1]) {
      arr2.push(s[0]);
      s = s.replace(s[0], "");
    } else {
      arr2.push(s[0]);
      s = s.replace(s[0], "");
      arr1.push(arr2);
      arr2 = [];
    }
  }
  let answer = "";
  arr1.forEach(val => answer += `${val[0]}${val.length}`);
  console.log(answer)
  return answer;
}

function ant(n) {
  return (n === 1)? '1':solution(ant(n - 1));
}

ant(5)
// solution(solution(solution(solution(ant(n-1)))); 이구조

console.clear()
/**
 * ant(5) 실행
-> return soultion(
 soultion(ant(4-1))...
)
 */

/*
return n === 1 ? '1':solution(ant(n - 1)) 에서 n이 1이 아니면 solution(ant(n - 1)) 얘가 콜되는데
안쪽부터 풀리니까 ant(n - 1) 얘를 먼저 타고,
Solution(ant(5 - 1)) 은 ant(5 - 1) 이 Solution(ant(4 - 1))을 리턴해주니까
Solution(Solution(ant(4 - 1))) 되고,
다시 ant(4 - 1) 부터 콜되고 Solution(Solution(Solution(ant(3 - 1))))이 되는 식으로 계속 타다가
n === 1 조건이 충족되면 ant(n - 1)를 더이상 타지 않고 1을 리턴하니 solution 을 탐
*/