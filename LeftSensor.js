class LeftSensor extends Sensor{
    constructor(container, x, y, width, height){
        super(container, x, y, width, height);

        //센서의 div의 위치만 변경하지 말고, 센서의 x, y값도 변경해줘야 한다..
        this.x=parseFloat(this.div.style.left);
        this.y=parseFloat(this.div.style.top);

        this.hitTest();

    }    

    //부모의 메서드와 완전히 동일한 메서드를 자식이 재정의 하는 기법을 오버라이딩이라 한다
    //부모의 메서드를 나한테 맞게 끔 재정의..(다시 작성 == 업그레이드)
    move(){
        //x - 주인공의 x축과 동일
        this.div.style.left= hero.x+"px";

        //y - 주인공의 y축에서 주인공 높이의 10% 내려간 위치
        this.div.style.top=hero.y + hero.height *(10/100)+"px";

        //센서의 div의 위치만 변경하지 말고, 센서의 x, y값도 변경해줘야 한다..
        this.x=parseFloat(this.div.style.left);
        this.y=parseFloat(this.div.style.top);

        this.hitTest();

    }
    //우측 충돌에 대한 처리 
    hitTest(){
        //게임에 등장하는 모든 벽돌을 대상으로...충돌체크 
        for(let i=0;i<brickArray.length;i++){
            let result = collisionCheck(this, brickArray[i]);

            if(result){ //충돌이 되었다면...
                console.log("좌측 충돌 발견");
                hero.x = brickArray[i].x + brickArray[i].width;
            }
        }
    }    
}