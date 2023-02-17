class Credits{


  constructor(){
    this.textSize = 60

    this.linkFontCredit = createA('https://www.fontspace.com/midnight-minutes-font-f40471', 'Font in homescreen', '_blank');
    this.linkFontCredit.position(width/2, height/2);

    this.linkAssets = createA("https://pixel-frog.itch.io/pixel-adventure-2", "Enemies", "_blank");
    this.linkAssets.position(width/2 - 250, height/2);

    this.linkStyle(this.linkFontCredit);
    this.linkStyle(this.linkAssets);

    this.voltar = new Button(imagemButtonBack, width/2 - 342/4, height - height/3, 342 , 100, imagemInvertedButtonBack);
  }

  click(){
    if(this.voltar.isInterecting()){
      gameState = 'HOMESCREEN';
    }
  }

  showLink(){
    this.linkFontCredit.show();
    this.linkAssets.show();
  }
  hideLink(){
    this.linkAssets.hide();
    this.linkFontCredit.hide();
  }

  draw(){

    fill('white');
    textSize(this.textSize);
    textFont('Georgia');
    textAlign(CENTER);
    text('Game made by Felipe Scherer', width/2 , height/2 - 2*this.textSize );
    textSize(this.textSize/2)
    this.voltar.draw();

    text('All sprites, other than the enemies, were created by me', width/2 , height/2 - 2*this.textSize + 50 );
    textSize(this.textSize/3)
  }

  linkStyle(link){
    link.style('color', 'white');
    link.style('fontSize', '50px');
    link.style('text-decoration', 'underline overline');


  }

}
