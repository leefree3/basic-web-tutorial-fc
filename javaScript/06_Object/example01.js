//함수, 클래스(틀) => 객체, 개체, object
//생성자 함수로 객체 만들기
//function 틀(){} => new 틀()

function A() {}

const a = new A();
console.log(a, typeof a);
console.log(A()); //return 값이 없기 때문에 undefined가 찍힘

// 생성하면서 데이터 넣기
function B(name, age) {
  console.log(name, age);
}

const b = new B();
const c = new B("mini", 37);

console.log(B());
