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

    //주인공의 좌표를 따라다녀야 한다..
    move(x, y){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";                
    }
}