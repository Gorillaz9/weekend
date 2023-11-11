// EC6 객체지향 캡슐화
class FontStyle {
    constructor(el, size, color = 'hotpink') {
        this.weight = 'nomal';
        this.el.style.fontWeight = this.weight;
        this.el = document.querySelector(el);
        this.changeSize(size);
        this.changeColor(color);
    }
    changeSize(size) {
        this.el.style.fontSize = size;
    }
    changeColor(color) {
        this.el.style.color = color;
    }
}

// const el1 = new FontStyle('#tit1');
// el1.changeSize('100px');
// el1.changeColor('hotpink');

new FontStyle('#tit1', '100px');
new FontStyle('#tit2', '30px', 'green');

const instance1 = new FontStyle('#tit1');
instance1.weight = 0;
console.log(instance1);
instance1.changeSize('100px');

/*
    프로퍼티 접근자
    get: 생성자가 특정 프로퍼티를 읽을때 실행될 합수 등록시
    set: 생성자가 해당 프로퍼티에 value값을 담으려 할때 싫애될 함수 등록시

    프로퍼티 접근자를 쓰는 이유
    - 생성자 안쪽에서 함수로 변경이 안되는 프로퍼티를 인스턴스에서 변경하려고 할떄 변경하지 못하도록 강제

*/