class DownSensor extends Sensor{
    constructor(container, x, y, width, height){
        super(container, x, y, width, height);
    }

    move(){

        //x축 : 주인공x 축 + 주인공의 너비의 10% 만큼 
        this.div.style.left = hero.x + (hero.width*(10/100))+"px";

        //y축 : 주인공의 y축 + 주인공의 키 - 주인공키의 10% 
        this.div.style.top= (hero.y + hero.height) - (hero.height*(10/100))+"px";

    }
}