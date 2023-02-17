class Life {
  constructor(total) {
    this.life = total;
    this.width = 32 * scale * 5;
    this.height = 32 * scale * 5;
    this.vidas = this.life;
    this.inicialX = 0;
  }

  loseLife(){
    this.vidas--;
  }

  draw(){
    for(let i = 0; i < this.vidas; i++){
      const magin = i * 80;
      const position = this.inicialX * (i + 1)

      image(imagemVida, position + magin, 20, this.width , this.height);
    }

  }
}
