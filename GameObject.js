/*
게임에 등장하는 모든 주체의 최상위 객체를 정의
*/
class GameObject{
    constructor(container, src, x, y, width, height, velX, velY){
        this.container=container; //어디에 부착할지 (누구를 부모(parent)로 둘지)
        this.div=document.createElement("div");
        this.src=src; //이미지의 주소
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        //css 
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.div.style.background="url("+this.src+")";
        this.div.style.backgroundSize=this.width+"px   "+this.height+"px";

        //보더적용 
        this.div.style.border="1px solid red";
        this.div.style.boxSizing="border-box";

        //컨테이너(parent)에 부착 
        this.container.appendChild(this.div);
    }

    //추후, 이 클래스를 상속받는 자식이 누가 될지 모르므로, 
    //구체적인 내용을 작성할 수 없다..따라서 move() 추상적으로 정의만
    //해놓자 , 이러한 메서드 정의 기법을 추상메서드라한다... 
    //ES6 에서 지원하는 클래스는 java, C# 과 같은 완전한 OOP가 아니므로
    //브레이스 생략 불가능하다..
    move(){};
}