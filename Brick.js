/*블럭을 정의*/
class Brick extends GameObject{
    /*
    constrctor(){
        super()    //상속관계에서의 부모는 super 용어를 써야함
    }
    */
   constructor(container, src, x, y, width, height, velX, velY){
        //부모의 클래스에는 더이상, 디폴트 생성자인 super()가 없고 
        //아래와 같이 매개변수가 정의된 생성자만 존재하므로, 
        //부모의 생성자 호출 시 매개변수를 반드시 넘겨야 한다..
        //정리) 상속관계에서 부모의 생성자가 매개변수가 존재할 경우 
        //자식은 해당 매개변수를 함께 넘기도록 하자!!!
        super(container, src, x, y, width, height, velX, velY); 
   }
}