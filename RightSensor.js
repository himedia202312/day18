class RightSensor extends Sensor{
    constructor(container, x, y, width, height){
        super(container, x, y, width, height);

    }    

    move(){

        
        //x - (주인공의 x축+주인공의 너비) - 너비의10%
        //y - 주인공의 y축
        this.div.style.left = (hero.x+hero.width) - (hero.width*(10/100)) +"px";
        this.div.style.top = hero.y+(hero.height*(10/100))+"px";
        
        
        this.x = parseInt(this.div.style.left);
        this.y = parseInt(this.div.style.top);
        
        this.hitTest();
    }

    hitTest(){
        
        for(let i=0; i<brickArray.length;i++){
            
            let result = collisionCheck(this, brickArray[i]);

            if(result){
                console.log(i, "번째 벽돌과 마주쳤어");
                hero.x = brickArray[i].x - hero.width -1;
            }
        }

    }    
}