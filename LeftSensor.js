class LeftSensor extends Sensor{
    constructor(container, x, y, width, height){
        super(container, x, y, width, height);
    }    

    //부모의 메서드와 완전히 동일한 메서드를 자식이 재정의 하는 기법을 오버라이딩이라 한다
    //부모의 메서드를 나한테 맞게 끔 재정의..(다시 작성 == 업그레이드)
    move(){
        //x - 주인공의 x축과 동일
        this.div.style.left= hero.x+"px";

        //y - 주인공의 y축에서 주인공 높이의 10% 내려간 위치
        this.div.style.top=hero.y + hero.height *(10/100)+"px";

    }
}