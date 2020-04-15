//논리 연산자를 이용한 조건부 실행
//표현식 && 표현식
//둘다 참일 때만 참이다.
//표현식은 앞에 먼저 평가하고, 뒤에를 평가한다.
//앞 표현식을 평가해서 참일 때에만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행된다.
let n = 5;
n % 5 === 0 && console.log("5로 나누어 떨어질 때만 실행");

//앞 표현식의 평가 결과가 거짓일 때에는 뒤 표현식을 평가할 필요가 없어서 실행하지 않는다.

n = 6;
n % 5 === 0 && console.log("5로 나누어 떨어질 때만 실행");

//표현식 || 표현식
//둘 중에 하나만 참이면 참이다.
//앞 표현식을 평가해서 참이면, 뒤 표현식을 평가할 필요가없어서 뒤 조건을 실행하지 않아도 된다.
n = 5;
n % 5 === 0 || console.log("5로 나누어 떨어지지 않을 때만 실행");

//앞 표현식을 평가해서 거짓일 때에만, 뒤표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행된다.
n = 6;
n % 5 === 0 || console.log("5로 나누어 떨어지지 않을 때만 실행");
