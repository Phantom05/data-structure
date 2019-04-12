
// Code #0 단순한 구조의 조건 비교
function number_range(value) {
  let range = "";
  if(value <= 10) {
      range = "~10";
  } else if(value <= 20) {
      range = "11~20";
  } else if(value <= 30) {
      range = "21~30";
  } else if(value <= 40) {
      range = "31~40";
  } else if(value <= 50) {
      range = "41~50";
  } else if(value <= 60) {
      range = "51~60";
  } else if(value <= 70) {
      range = "61~70";
  } else {
      range = "71~";
  }
  return range;
}
console.log(
  number_range(42)
)


// Code #1 배열을 활용한 조건 비교
function number_range(value) {
  let arr_range = ["~10", "11~20", "21~30", "31~40", "41~50", "51~60", "61~70", "71~"];

  let arr_range_index = Math.ceil(value/10) -1;
  if (arr_range_index < 0) {
      arr_range_index = 0;
  } else if (arr_range_index >= (arr_range.length)) {
      arr_range_index = arr_range.length - 1;
  }
  return arr_range[arr_range_index];
}

console.log(
  number_range(52)
)


// Code #2 해시 객체를 활용한 조건 비교
function number_range(value) {
  let hash_range = {2:"11~20", 3:"21~30", 4:"31~40", 5:"41~50", 6:"51~60", 7:"61~70"};
  let hash_range_key = Math.ceil(value/10);
    if (hash_range[hash_range_key]) {
        return hash_range[hash_range_key];
    }
    if (value <= 10) {
        return "~10";
    }
    return "71~";
}
 
console.log(
  number_range(42)
)

