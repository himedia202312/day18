class UpSensor extends Sensor{
    constructor(container, x, y, width, height){
        super(container, x, y, width, height);
    }    

    move(){
        //x - 주인공x + 주인공너비의 10%
        //y - 주인공의 y축
        this.div.style.left = hero.x + (hero.width*(10/100)) +"px";
        this.div.style.top = hero.y+"px";

        this.x = parseInt(this.div.style.left);
        this.y = parseInt(this.div.style.top);
        
        this.hitTest();        
    }

    hitTest(){
        
        for(let i=0; i<brickArray.length;i++){
            
            let result = collisionCheck(this, brickArray[i]);

            if(result){
                console.log(i, "번째 벽돌과 마주쳤어");
                hero.y = brickArray[i].y + brickArray[i].height;
            }
        }

    }        
}