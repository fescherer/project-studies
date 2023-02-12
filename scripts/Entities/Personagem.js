class Personagem extends Entidade{

  constructor(qntLinha, qntColuna, imagem, x, xMaximo, scale, larguraSprite, alturaSprite, frequenciaFramesMaximo){
    super(qntLinha, qntColuna, imagem, x, scale, larguraSprite, alturaSprite, frequenciaFramesMaximo);
    this.gravidade = 3;
    this.velocidadeDoPulo = 0;
    this.yInicial = height - this.altura -30;
    this.xMaximo = width - this.largura;
    this.lifeC = new Life(3);
    this.invencible = false;
  }

  pula(){
    if(this.y == this.yInicial)
      this.velocidadeDoPulo = -50;
  }

  anda(){
    this.x += 5;
    if(this.x > this.xMaximo)
      this.x = this.xMaximo;
  }

  volta(){
    this.x -= 5;
    if(this.x < 50)
      this.x = 50;
  }

  aplicaGravidade(){
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if(this.y > this.yInicial)
      this.y = this.yInicial;
  }

  beInvencible(){
    this.invencible = true;
    setTimeout(() => {
      this.invencible = false
    }, 1000)
  }

  verificaColisao(inimigo) {
    this.inimigo = inimigo;
    if((this.hitbox.x < this.inimigo.hitbox.x + this.inimigo.hitbox.largura) &&
        (this.hitbox.x + this.hitbox.largura > this.inimigo.hitbox.x) &&
        (this.hitbox.y < this.inimigo.hitbox.y + this.inimigo.hitbox.altura) &&
        (this.hitbox.y + this.hitbox.altura > this.inimigo.hitbox.y)){
          if(!this.invencible){
            //console.log(this.lifeC.vidas );
            this.lifeC.loseLife();
            this.beInvencible();
          }

      }
    if(this.lifeC.vidas <= 0){
      gameState = 'GAME-OVER';
    }
  }

  draw(inimigo){
    this.exibir();
    this.anima();
    this.verificaColisao(inimigo);
    this.aplicaGravidade();
    if (keyIsDown(RIGHT_ARROW))
      personagem.anda();
    if (keyIsDown(LEFT_ARROW))
      personagem.volta();

  }

}
