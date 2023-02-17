class Pontos {
  constructor(){
    this.pontos = 0;
  }

  aumentaPontos(){
    this.pontos += 0.02;
  }

  mostraPontos(){
    this.justShowPoints()
    this.aumentaPontos();
  }

  justShowPoints(){
    this.tamanhoTexto = 80;
    textSize(this.tamanhoTexto);
    textAlign(RIGHT);
    text(parseInt(this.pontos), width, 0 + this.tamanhoTexto);
  }
}
