class InimigoVoador extends Inimigo{
  constructor(qntLinha, qntColuna, imagem, x, scale, larguraSprite, alturaSprite, frequenciaFramesMaximo, yAleatorio){
    super(qntLinha, qntColuna, imagem, x, scale, larguraSprite, alturaSprite, frequenciaFramesMaximo);
    this.yAleatorio = yAleatorio;
    this.definiY();
  }

  definiY(){
    if(this.yAleatorio){
      this.y = parseInt(random(0, height - 50 - this.altura));
    } else
      this.y = 150;
  }


}
