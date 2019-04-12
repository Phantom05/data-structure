/**
 * 삽입 정렬은 첫 숫자를 놔두고, 두번째 자리 숫자부터 뽑아서 그 숫자가 첫 숫자보다 크면 첫숫자의 오른쪽에, 작으면 왼쪽에 넣는 정렬 방법
 */











 
var insertionSort = function(array) {
  for (let i = 1,j,temp ; i < array.length; i++) {
    temp = array[i]; // 새로운 숫자를 선택함
    for (j = i - 1; j >= 0 && temp < array[j]; j--) { 
      // 선택한 숫자를 이미 정렬된 숫자들과 비교하며 넣을 위치를 찾는 과정, 선택한 숫자가 정렬된 숫자보다 작으면
      array[j + 1] = array[j]; // 한 칸씩 뒤로 밀어낸다
    }
    array[j + 1] = temp; // 마지막 빈 칸에 선택한 숫자를 넣어준다.
  }
  return array;
};
console.log(
  insertionSort([5, 6, 1, 2, 4, 3])
); // [1, 2, 3, 4, 5, 6]



/**
 * 
 */