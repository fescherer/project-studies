class Button{


  constructor(imagem, x, y, width, height, imagemInvertedButtonPlay){
    this.imagem = imagem;
    this.x = x;
    this.y = y;
    this.width = width * scale;
    this.height = height * scale;
    this.invertedImagem = imagemInvertedButtonPlay;
    this.teste = true;
  }




  isInterecting(){
    if(mouseX > this.x && mouseY > this.y &&
        mouseX < this.x + this.width && mouseY < this.y + this.height){
      // console.log("Clicou");
      return true;
    } else {
      return false;
    }
  }


  draw(){
    imageMode(CORNER);
    if(this.isInterecting()){
      image(this.invertedImagem, this.x , this.y, this.width, this.height);
    } else
      image(this.imagem, this.x , this.y, this.width, this.height);

  }


}
