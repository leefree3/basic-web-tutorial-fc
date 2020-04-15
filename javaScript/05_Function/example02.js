//함수 만들 때 사용하는 키워드
//const hello = function(){}

const hello1 = function () {
  console.log("hello1");
};

console.log(hello1, typeof hello1);

// 함수의 매개변수
// 함수를 호출할 때 값을 지정
const hello2 = function (name) {
  console.log("hello2", name);
};

// 함수의 리턴
// 함수를 실행하면 얻어지는 값
const hello3 = function (name) {
  return `hello3 ${name}`;
};

hello2("minhee");
console.log(hello3("mini"));
