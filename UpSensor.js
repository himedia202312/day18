class UpSensor extends Sensor{
    constructor(container, x, y, width, height){
        super(container, x, y, width, height);

        
    }   
    
    move(){
        //x축 : 주인공.x + (주인공.width * (10/100))
        this.div.style.left= hero.x + (hero.width *(10/100))+"px";
        
        //y축 : 주인공.y 
        this.div.style.top = hero.y+"px";
        
        //센서의 div의 위치만 변경하지 말고, 센서의 x, y값도 변경해줘야 한다..
        this.x=parseFloat(this.div.style.left);
        this.y=parseFloat(this.div.style.top);
    
        this.hitTest();
    }

    hitTest(){
        //게임에 등장하는 모든 벽돌을 대상으로...충돌체크 
        for(let i=0;i<brickArray.length;i++){
            let result = collisionCheck(this, brickArray[i]);

            if(result){ //충돌이 되었다면...
                console.log("위측 충돌 발견");
                hero.y = brickArray[i].y + brickArray[i].height;
            }
        }
    }      
}