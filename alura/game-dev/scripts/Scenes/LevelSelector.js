class LevelSelector{

  constructor(player){
    this.level = gameState;
    this.cenario = 0;
    this.ui = new UI(player);
    this.mechanics = new Mechanics();
    this.offSet = 70;
    this.play = new Button(imagemButtonPlay, width/2 - 342/4, height/2 + this.offSet, 342 , 100, imagemInvertedButtonPlay);
    this.help = new Button(imagemButtonHelp, width/2 - 342/4, height/2 + this.offSet + (100/4)*2, 342 , 100, imagemInvertedButtonHelp);
    this.credits = new Button(imagemButtonCredits, width/2 - 342/4, height/2 + this.offSet + (100/4)*4 , 342 , 100, imagemInvertedButtonCredits);
    this.creditsClass = new Credits();
    this.helpClass = new Help();
    this.fase = 1;
  }

  unPause(){
    switch(this.fase){
      case 1:
      gameState = 'FASE1';
      break;

      case 2:
      gameState = 'FASE2';
      break;

      case 3:
      gameState = 'FASE3';
      break;
    }
  }

  moveCenario(){
    switch(this.cenario){
      case 0:
      cenarioF1P1.move();
      cenarioF1P2.move();
      cenarioF1P3.move();
      cenarioF1P1.exibir();
      cenarioF1P2.exibir();
      cenarioF1P3.exibir();

      break;

      case 1:
      cenarioF2P1.move();
      cenarioF2P3.move();
      cenarioF2P1.exibir();
      image(imagemF2sol, windowWidth - 376, windowHeight - 600, 150, 150);
      cenarioF2P3.exibir();

      break;

      case 2:
      cenarioF3P1.move();
      cenarioF3P2.move();
      cenarioF3P3.move();
      cenarioF3P1.exibir();
      cenarioF3P2.exibir();
      cenarioF3P3.exibir();
      break;
    }
  }

  click(){
    if(this.play.isInterecting()){
      gameState = 'WAITING';
    }
    if(this.credits.isInterecting()){
      gameState = 'CREDITS';
    }
    if(this.help.isInterecting()){
      gameState = 'HELP';
    }


  }

  draw(){
    this.level = gameState;
    if(gameState != "Credits"){
      this.creditsClass.hideLink();
    }
    switch(this.level){

      case 'HOMESCREEN': //Home Screen
      cenarioHomeScreen.move();
      cenarioHomeScreen.exibir();
      image(imagemhomeScreen, 0, 0, width, height);
      this.play.draw();
      this.help.draw();
      this.credits.draw();
      break;

      case 'WAITING':
      switch(this.cenario){
        case 0:
        cenarioF1P1.exibir();
        cenarioF1P2.exibir();
        cenarioF1P3.exibir();
        this.fase = 1;
        break;

        case 1:
        cenarioF2P1.exibir();
        image(imagemF2sol, windowWidth - 376, windowHeight - 600, 150, 150);
        cenarioF2P3.exibir();
        this.fase = 2;
        break;

        case 2:
        cenarioF3P1.exibir();
        cenarioF3P2.exibir();
        cenarioF3P3.exibir();
        this.fase = 3;
        break;

      }
      this.ui.waitingMenu();
      this.ui.GameModePause();
      this.mechanics.drawWithoutMotion();
      break;

      case 'FASE1': //Level 1
      this.cenario = 0;
      this.moveCenario();
      this.mechanics.draw();
      this.ui.GameModeNormal();
      break;

      case 'FASE2': //Level 2
      this.cenario = 1;
      this.moveCenario();
      this.mechanics.draw();
      this.ui.GameModeNormal();
      break;

      case 'FASE3': //Level 3
      this.cenario = 2;
      this.moveCenario();
      this.mechanics.draw();
      this.ui.GameModeNormal();
      break;

      case 'FASE4':
      this.cenario = sceneNumber;
      this.moveCenario();
      this.mechanics.randomEnemy();
      this.ui.GameModeNormal();

      break;

      case 'CREDITS':
      cenarioHomeScreen.move();
      cenarioHomeScreen.exibir();
      this.creditsClass.draw();
      this.creditsClass.showLink();
      break;

      case 'HELP':
      cenarioHomeScreen.move();
      cenarioHomeScreen.exibir();
      this.helpClass.draw();
      break;

      case 'GAME-OVER': // Game OVER
      this.moveCenario();
      this.ui.GameModeGameOver();
      break;

    }


  }


}
