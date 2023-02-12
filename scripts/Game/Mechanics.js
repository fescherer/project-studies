class Mechanics{

  constructor(){
    this.mapa = configFase1.mapa;
    this.indice = 0;
    this.enemyCount = 0;
  }


  draw(){
    const linhaAtual = this.mapa[this.indice];
    const inimigo = manager.inimigos[linhaAtual.inimigo];
    const isInimigoOut = inimigo.x < - inimigo.largura;

    if(isInimigoOut){
      this.indice++;
      inimigo.aparece();
      if(this.indice > this.mapa.length - 1){
        switch (gameState) {
          case 'FASE1':
            this.mapa = configFase2.mapa;
            gameState = 'FASE2';
            break;
          case 'FASE2':
            this.mapa = configFase3.mapa;
            gameState = 'FASE3';
            break;
          case 'FASE3':
            gameState = 'FASE4';
            break;
        }

        this.indice = 0;
      }

    }
    personagem.draw(inimigo);
    inimigo.speed = linhaAtual.velocidade;
    inimigo.draw();
  }

  drawWithoutMotion(){
    personagem.exibir();
    if(!(inimigo === undefined)){
      inimigo.exibir();
    }
  }

  randomEnemy(){
    const isOut = inimigoAtual.x < - inimigoAtual.largura;
    if(isOut){
      trocaInimigo = true;
      inimigoAtual.x = width;
    }
    if(trocaInimigo){
      trocaInimigo = false;
      this.indice = this.randomInimigo()
      inimigoAtual = manager.inimigos[this.indice];
      inimigoAtual.speed =  parseInt(random(7, 25));;
      this.randomScene();
      if(inimigoAtual instanceof InimigoVoador ){
        if(inimigoAtual.yAleatorio){
          inimigoAtual.definiY();
        }
      }
      //console.log(this.enemyCount);
    }
    inimigoAtual.draw();
    personagem.draw(inimigoAtual);
  }

  randomInimigo(){
      return parseInt(random(0, manager.inimigos.length));
  }

  randomScene(){
    this.enemyCount++;
    if(this.enemyCount > 5){
      this.numberScene = parseInt(random(1, 10));
      if(this.numberScene > 3){
        //Escolhe um cenário aleatório
        this.enemyCount = 0;
        sceneNumber = parseInt(random(0, 3));
      }
    }
  }


}
