class RightSensor extends Sensor{
    constructor(container, x, y, width, height){
        super(container, x, y, width, height);
    }

    move(){
        //센서의 위치 
        //x축위치 - hero.x 축에 hero.width -  hero.width*(10/100) 
        this.div.style.left = (hero.x+hero.width) - (hero.width*(10/100))+"px";
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
                console.log("우측 충돌 발견");

                //x축: 충돌한 벽돌의x 보다 - 주인공의 너비만큼
                hero.x = brickArray[i].x - hero.width;
            }
        }
    }
}