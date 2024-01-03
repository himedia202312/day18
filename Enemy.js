/* 적군 정의 */
class Enemy extends GameObject{
    constructor(container, src, x, y, width, height, velX, velY){
        super(container, src, x, y, width, height, velX, velY);

        this.leftSensor=new LeftSensor(container, x, y+height*(10/100), width*(10/100), height*(80/100) );
        this.rightSensor=new RightSensor(container, x + width- (width*(10/100)),  y+height*(10/100), width*(10/100), height*(80/100) );
        this.upSensor=new UpSensor(container, x + width*(10/100), y, width*(80/100), height*(10/100));
        this.downSensor=new DownSensor(container, x + width*(10/100), y+height - (height*(10/100)), width*(80/100), height*(10/100));
    }

    move(){
        this.x += this.velX;
        this.y += this.velY;

        //주인공이 보유한 4개의 센서의 move() 호출
        this.leftSensor.move();
        this.rightSensor.move();
        this.downSensor.move();
        this.upSensor.move();
                
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }

}