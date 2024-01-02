/*주인공 정의*/
class Hero extends GameObject{
    constructor(container, src, x, y, width, height, velX, velY){
        super(container, src, x, y, width, height, velX, velY);

        //주인공이 보유한 4개의 센서
        //container, x, y, width, height
        this.leftSensor=new LeftSensor(container, x, y+height*(10/100), width*(10/100), height*(80/100));
        this.rightSensor=new RightSensor(container, x + width- (width*(10/100)),  y+height*(10/100), width*(10/100), height*(80/100) );
        this.upSensor=new UpSensor(container, x + width*(10/100), y, width*(80/100), height*(10/100));
        this.downSensor=new DownSensor(container, x + width*(10/100), y+height - (height*(10/100)), width*(80/100), height*(10/100));
    }
    //부모로 부터 물려받은 메서드가, 현재 객체의 움직임에 적절하지 않을때
    //부모의 메서드를 재정의 할 수 있는데, 객체지향의 이러한 메서드 정의
    //기법을 가리켜, Overriding 이라 한다 (=메서드 업그레이드)
    move(){
        this.x += this.velX;
        this.y += this.velY;

        this.leftSensor.move();
        this.rightSensor.move();
        this.upSensor.move();
        this.downSensor.move();
       
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }

}