
function Hitbox(x, y, largura, altura){
  this.precision = 0.8;
  this.x = x;
  this.y = y;
  this.largura = largura * this.precision;
  this.altura = altura * this.precision;

  this.display = function(){
    stroke(255);
    rectMode(CENTER);
    noFill();
    rect(this.x, this.y, this.largura, this.altura);

  }

  this.update = function(x, y){
    this.x = x;
    this.y = y;
  }



}
