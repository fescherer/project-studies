class Inimigo extends Entidade{
  constructor(qntLinha, qntColuna, imagem, x, scale, larguraSprite, alturaSprite, frequenciaFramesMaximo){
    super(qntLinha, qntColuna, imagem, x, scale, larguraSprite, alturaSprite, frequenciaFramesMaximo);
    this.speed;
  }

  move(){
    this.x = this.x - this.speed;
  }

  aparece(){
    this.x = width;
  }



  draw(){
    this.exibir();
    this.anima();
    this.move();
  }

}
