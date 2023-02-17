
function preload(){
    imagemF1CenarioCeu = loadImage('imagens/cenario/Fase1-part1.png');
    imagemF1CenarioArvores = loadImage('imagens/cenario/Fase1-part2.png');
    imagemF1CenarioChao = loadImage('imagens/cenario/Fase1-part3.png');

    imagemF2CenarioCeu = loadImage('imagens/cenario/Fase2-part1.png');
    imagemF2sol = loadImage('imagens/cenario/Fase2-partStatic.png');
    imagemF2CenarioChao = loadImage('imagens/cenario/Fase2-part2.png');

    imagemF3CenarioCeu = loadImage('imagens/cenario/Fase3-part1.png');
    imagemF3CenarioMontanha = loadImage('imagens/cenario/Fase3-part2.png');
    imagemF3CenarioChao = loadImage('imagens/cenario/Fase3-part3.png');

    imagemhomescreenSky = loadImage('imagens/cenario/HomeScreen-Sky.png')
    imagemhomeScreen = loadImage('imagens/cenario/HomeScreen.png')

    imagemVida = loadImage('imagens/assets/Vida.png')

    imagemButtonPlay = loadImage('imagens/cenario/Button-Play.png');
    imagemInvertedButtonPlay = loadImage('imagens/cenario/Button-Play.png');
    imagemButtonHelp = loadImage('imagens/cenario/Button-Help.png');
    imagemInvertedButtonHelp =  loadImage('imagens/cenario/Button-Help.png');
    imagemButtonCredits = loadImage('imagens/cenario/Button-Credit.png');
    imagemInvertedButtonCredits = loadImage('imagens/cenario/Button-Credit.png');

    imagemButtonBack = loadImage('imagens/cenario/Button-Back.png');
    imagemInvertedButtonBack = loadImage('imagens/cenario/Button-Back.png');

    imagemPersonagem = loadImage('imagens/personagem/character.png');
    imagemInimigo = loadImage('imagens/inimigos/Tronco.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/PassaroAzul.png');
    imagemInimigoPorco = loadImage('imagens/inimigos/porquinho.png');
    imagemInimigoMorcego = loadImage('imagens/inimigos/Morcego.png');
    somJogo = loadSound('sons/trilha_jogo.mp3');
    imagemGameOver = loadImage('imagens/assets/game-over.png');

    configFase1 = loadJSON('Fases/fase1.json');
    configFase2 = loadJSON('Fases/fase2.json');
    configFase3 = loadJSON('Fases/fase3.json');
}
