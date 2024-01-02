class LeftSensor extends Sensor{
    constructor(container, x, y, width, height){
        super(container, x, y, width, height);
    }    

    move(){
        //넘겨받은 좌표값을 보관해야, 충돌 체크가 가능
        
        //x - 주인공의 x축과 동일
        //y - 주인공의 y축에서 주인공 높이의 10% 내려간 위치
        this.div.style.left = hero.x+"px";
        this.div.style.top = hero.y+hero.height*(10/100)+"px";
        
        this.x = parseInt(this.div.style.left);
        this.y = parseInt(this.div.style.top);        
        
        this.hitTest();
    }

    hitTest(){
        //화면에 등장한 벽과 마추쳤는지 여부를 따져본다 
        //주인공의 우측영역이 벽과 마주치면? 
        //벽의 x축보다, 주인공의 너비만큼 음수방향으로 이동 
        //결론: x값 조정
        
        for(let i=0; i<brickArray.length;i++){
            
            let result = collisionCheck(this, brickArray[i]);

            if(result){
                console.log(i, "번째 벽돌과 마주쳤어");
                hero.x = (brickArray[i].x+brickArray[i].width)+1;
            }
        }

    }
}