class Entidade {
  constructor(qntLinha, qntColuna, imagem, x, scale, larguraSprite, alturaSprite, frequenciaFramesMaximo){
    this.qntLinha = qntLinha - 1;
    this.qntColuna = qntColuna - 1;
    this.imagem = imagem;
    this.largura = larguraSprite * scale;
    this.altura = alturaSprite * scale;
    this.x = x;
    this.y = height - this.altura -30;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.qntFrames = 0;
    this.linhaAtual = 0;
    this.colunaAtual = 0;
    this.frequenciaFramesMaximo = frequenciaFramesMaximo;

    this.hitbox = new Hitbox(this.x, this.y, this.largura, this.altura);

  }

  exibir(){
    this.hitbox.update(this.x + this.largura/2, this.y + this.altura/2);
    //this.hitbox.display();
    this.pontoX = this.linhaAtual * this.larguraSprite;
    this.pontoY = this.colunaAtual * this.alturaSprite;
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.pontoX, this.pontoY, this.larguraSprite, this.alturaSprite);



    // //debug
    // console.log("X:" + this.pontoX + "y:" + this.pontoY)
    //
    // console.log("linha atual:" + this.linhaAtual + "coluna atual:" + this.colunaAtual)
    //
    // console.log(this.qntColuna + "quantidade coluna")
  }

  anima(){
    //Com a quantidade de frames, conseguimos fazer com que o frameRate da personagem seja diferente do frameRate padão. Como estamos falando que ele só irá trocar a linha, caso o qntFrames seja 2, estamos dizendo que para cada 2 frames do projeto, mudamos 1 frame da personagem, então, caso seja 60 de frameRate, a personagem estará rodando a 30 frames

    this.qntFrames++
    if(this.qntFrames >= this.frequenciaFramesMaximo){
      this.linhaAtual++;
      this.qntFrames = 0;
    }


    if(this.linhaAtual >= this.qntLinha){
      this.linhaAtual = 0;
      this.colunaAtual++
    }

    if(this.colunaAtual >= this.qntColuna)
      this.colunaAtual = 0;
  }
}
