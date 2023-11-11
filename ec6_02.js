// EC6 객체지향 캡슐화로 isWeight = true 특정 property값을 false로 강제로 외부에서 접근하여 변경되지 않도록 get
class FontStyle {
    // 두번째 인수로 Boolean값 전달시 해당 값은 this.isWeight라는 인스턴스객체의 property에 등록되고
    constructor(el) {
        this.el = document.querySelector(el);
        this.isWeight = true;
    }

    // isWeight라는 프로퍼티에 접근하여 읽을때 실행되는 매서드
    get isWeight() {
        return this.value;
    }

    // isWeight라는 프로퍼티에 접근하여 값을 담으려고 할때 실행되는 메서드 
    set isWeight(value) {
        this.value = value === true ? value : (value = true);
    }

    changeSize(size) {
        // 해당 property값에 따라서 내부 메서드가 다르게 실행됨
        if(!this.isWeight) return console.error('not working...');
        this.el.style.fontSize = size;
    }
    changeColor(color) {
        this.el.style.color = color;
    }
}

const instance1 = new FontStyle('#tit1');
console.dir(instance1);
instance1.isWeight = false;

instance1.changeSize('100px');

/*
    프로퍼티 접근자
    get: 생성자가 특정 프로퍼티를 읽을때 실행될 합수 등록시
    set: 생성자가 해당 프로퍼티에 value값을 담으려 할때 싫애될 함수 등록시

    프로퍼티 접근자를 쓰는 이유
    - 생성자 안쪽에서 함수로 변경이 안되는 프로퍼티를 인스턴스에서 변경하려고 할떄 변경하지 못하도록 강제

*/