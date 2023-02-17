class Manager {
  constructor(){
    this.setup();
    gameState = 'HOMESCREEN';
  }

  setup(){
    this.inimigoTree = new Inimigo(14, 1, imagemInimigo, width - 52, 2, 50, 32, 3);
    this.inimigoPorco = new Inimigo(12, 1, imagemInimigoPorco, width - 52, 6, 36, 30, 3 );
    this.inimigoVoador = new InimigoVoador(9, 1, imagemInimigoVoador, width - 52, 2, 32, 32, 3, false);
    this.inimigoVoador2 = new InimigoVoador(7, 1, imagemInimigoMorcego, width - 52, 2, 46, 30, 3, true);
    cenarioF1P3 = new Cenario(imagemF1CenarioChao, 10 );
    cenarioF1P2 = new Cenario(imagemF1CenarioArvores, 8);
    cenarioF1P1 = new Cenario(imagemF1CenarioCeu, 5)
    cenarioF2P3 = new Cenario(imagemF2CenarioChao, 7);
    cenarioF2P1 = new Cenario(imagemF2CenarioCeu, 4);
    cenarioF3P1 = new Cenario(imagemF3CenarioCeu, 4)
    cenarioF3P2 = new Cenario(imagemF3CenarioMontanha, 6)
    cenarioF3P3 = new Cenario(imagemF3CenarioChao, 8)
    cenarioHomeScreen = new Cenario(imagemhomescreenSky, 5);

    personagem = new Personagem(8, 1, imagemPersonagem,50, windowWidth - margin, 2, 64, 64, 5);
    levelSelector = new LevelSelector(personagem);
    //somJogo.loop();
    this.inimigos = [this.inimigoTree, this.inimigoVoador, this.inimigoPorco, this.inimigoVoador2];
  }




  draw(){
    levelSelector.draw();
  }

}
