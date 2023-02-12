class Help{


  constructor(){
    this.textSize = 60;
    this.voltar = new Button(imagemButtonBack, width/2 - 342/4, height - height/4, 342 , 100, imagemInvertedButtonBack);
  }

  click(){
    if(this.voltar.isInterecting()){
      gameState = 'HOMESCREEN';
    }
  }


  draw(){

    fill('white');
    textSize(20);
    text('There are 3 stages with certain enemies, after that, they are all random', width/2 , height/2 - 2*this.textSize - 100);
    textSize(this.textSize);
    textFont('Georgia');
    textAlign(CENTER);
    text('Controls', width/2 , height/2 - 2*this.textSize);
    textSize(this.textSize/2)
    text('Move character right: Arrow Right or "D"', width/2 , height/2 - 2*this.textSize + 50);
    text('Move character left: Arrow Left or "A"', width/2 , height/2 - 2*this.textSize + 100);
    text('Move character up: Arrow Up or "W"', width/2 , height/2 - 2*this.textSize + 150);
    text('Pause Game: "ESCAPE"', width/2 , height/2 - 2*this.textSize + 200);
    this.voltar.draw();
  }


}
