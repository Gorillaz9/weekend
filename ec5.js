// EC5버젼의 객체지향 코드변경 순서
// 1. 생성자함수 이름은 무조건 대문자로 시작
// 2. 생성자함수로 전달된 인수값을 생성자 내부에서 this객체에 옮겨담음 (불필요한 전역변수를 생성하지 않으면서 this객체로 그룹화)
// 3. 생성자안쪽의 prototype에 재활용될 함수 등록
// 4. 생성자함수를 new 연산자로 호출해서 prototype매서드를 호출할 수 있는 인스턴스 객체 생성

// 생성자 안쪽의 this객체의 의미 - 
// 생성자로부터 인스턴스를 복사하기 전 : this -> window
// 생성자로부터 인스턴스를 복사 후 : this -> 해당 생성자로 복사된 인스턴스 객체를 의미

// 메모리 저장 - callstack - 메모리를 하나도 만들지 않음
// 윈도우 객체로 부터 받아옮???

function FontStyle(el) {
    this.el = document.querySelector(el);
}

FontStyle.prototype.changeSize = function(size) {
    this.el.style.fontSize = size;
}

FontStyle.prototype.changeColor = function(color) {
    this.el.style.color = color;
}

// new 생성자 - 복사본 만들기
// 객체 안쪽의 지역변수 멤버변수
const instance1 = new FontStyle('#tit1');
const instance2 = new FontStyle('#tit2');


instance1.el = 'abc';
console.log(instance1.el); // <p id="tit1" style="font-size: 30px; color: red;">Hello</p> '30px'

// console.log(instance1);
// instance1.el = null;

instance1.changeSize('100px');
instance2.changeSize('10px');
instance1.changeColor('red');
instance2.changeColor('blue');

// 기존 ES5객체지향에서의 단점
// 1. 일반함수와 생성자함수의 구분이 애매함
// 2. 일일이 생성자명에 prototype을 호출하고 매서드를 등록해야 되는 번거로움
// 3. 인스턴스 객체에서 캡슐화 및 은닉화 안됨 (객체에 의도하지 않은 변형이 올수 있암)