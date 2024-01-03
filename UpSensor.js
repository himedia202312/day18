class UpSensor extends Sensor{
    constructor(container, x, y, width, height){
        super(container, x, y, width, height);
    }   
    
    move(){
        //x축 : 주인공.x + (주인공.width * (10/100))
        this.div.style.left= hero.x + (hero.width *(10/100))+"px";

        //y축 : 주인공.y 
        this.div.style.top = hero.y+"px";

    }
}