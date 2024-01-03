/*
센서를 정의 
*/
class Sensor{
    constructor(container, x, y, width, height){
        this.container=container; //어디에 부착할지 (누구를 부모(parent)로 둘지)
        this.div=document.createElement("div");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        //보더적용 
        this.div.style.border="1px solid red";
        this.div.style.boxSizing="border-box";        

        this.container.appendChild(this.div);
    }

    //내용이 채워져 있지 않은 즉 구체적인 코드가 없기 때문에 추상메서드라 한다..
    //Java와 같은 OOP에서는 추상메서드 정의 시 {브레이스} 생략해야 한다..
    move(){
    };

    //충돌체크 : 추후 각 자식마다 어떤 내용으로 작성될지를 예측할 수 없으므로, 
    //              추상메서드로 정의해놓고, 이 추상메서드를 재정의할 의무는 각 자식에게
    //              있는 것이다...
    hitTest(){        
    }
}