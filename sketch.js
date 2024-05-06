function preload() {
  tabela =
    loadTable ("Spells_Amigos_05.05.csv","csv","header");
  img1 = loadImage('castar.svg');
  img2 = loadImage('alcance.svg');
  img3 = loadImage('componentes.svg');
  img4 = loadImage('duracao.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(29, 29, 27);
  
  //Parâmetros da URL//
  
  getURLParams();
  var params = getURLParams();
  
  //Variáveis//
  
  var x = windowWidth / 2;
  var w = windowWidth * 0.8 + 16;
  var f = windowWidth * 0.75;
    
  //Div Externo//
  
  var divCaixa = createDiv('');
  divCaixa.position(0, 180);
  divCaixa.addClass('caixa');
  divCaixa.center('horizontal');
  
  //Div Interno//
  
  let innerDiv = createDiv('');
  innerDiv.addClass('fundo');
  
  //Enfiar Div Interno no div Externo//
  
  innerDiv.parent(divCaixa);
  
  //Corpo do Texto//
  
  let p0 = createP ('');
  
  let m1 = createSpan(tabela.get(params.magia,9));
  let m2 = createSpan(tabela.get(params.magia,10));
  
  m1.addClass('spanCorpoBold');
  m2.addClass('spanCorpo');
  
  m1.parent(p0);
  m2.parent(p0);
  
  let p1 = createP(tabela.get(params.magia,11));
  let p2 = createP(tabela.get(params.magia,12));
  let p3 = createP(tabela.get(params.magia,13));
  let p4 = createP(tabela.get(params.magia,14));
  let pV = createP(tabela.get(params.magia,15));
  let p6 = createP(tabela.get(params.magia,16));
  let p7 = createP(tabela.get(params.magia,17));
  let p8 = createP(tabela.get(params.magia,18));
  
  p1.addClass('corpo');
  p2.addClass('corpoBold');
  p3.addClass('corpo');
  p4.addClass('corpoBold');
  pV.addClass('corpo');
  p6.addClass('corpoBold');
  p7.addClass('corpo');
  p8.addClass('corpoBold');
  
  p0.parent(innerDiv);
  p1.parent(innerDiv);
  p2.parent(innerDiv);
  p3.parent(innerDiv);
  p4.parent(innerDiv);
  pV.parent(innerDiv);
  p6.parent(innerDiv);
  
  //Definindo Tamanhos//
  
  var h = innerDiv.elt.offsetHeight;
  var z = 175 + h - 25;
  var y = z + 15 + 20 + 5;
  
  //Segunda Seção//
  
  rectMode(CENTER);
  
  stroke(0);
  strokeWeight (2);
  
  fill (139, 151, 250);
  let outerRect = rect(x, y / 2, w + 12, y);

  fill (255, 250, 244);
  let innerRect = rect(x, y / 2, w, y - 10);
  
  noStroke();
  
  //Título//
  
  fill (0);
  textAlign(LEFT);
  textFont('Work Sans');
  textSize (25);
  textStyle(BOLD);
  text ((tabela.get(params.magia,1)), x - w / 2 + 15, 45);
  
  //Categoria//
  
  textSize (12);
  textStyle(ITALIC);
  
  let m = "Magia de      ";
  let l = textWidth(m);
  
  text (m, x - w / 2 + 15, 70);
  
  textStyle(BOLDITALIC);
  fill (139, 151, 250);
  
  text ((tabela.get(params.magia,3)), x - w / 2 + l, 70);
  
  //Informações//
  
  fill (0);
  
  textSize (12);
  textStyle(NORMAL);
  textAlign(CENTER);
  
    //Variáveis//
  
  let spacing = 100;
  var descriptions = [tabela.get(params.magia,4), tabela.get(params.magia,5), tabela.get(params.magia,6), tabela.get(params.magia,8)];
  var imagens = [img1, img2, img3, img4];
  var num = descriptions.length;
  
    //Array//
  
  let Space = width / num;
  radius = Space - spacing - (spacing/num);
  
    for (let i = 0; i < num; i+=1) {
    text(descriptions[i], (radius/2) + spacing + i*(radius + spacing), 165)
  }
  
  //Array de Ícones//
  
  imageMode(CENTER);
  noSmooth();
  
  img1.resize(50, 49);
  img2.resize(50, 49);
  img3.resize(50, 49);
  img4.resize(50, 49);
  
  for (let e = 0; e < num; e+=1) {
    image(imagens[e], (radius/2) + spacing + e*(radius + spacing), 125);
  }
  
  //Voltar Texto ao Normal depois do Array//
  
    textAlign(LEFT);
  
  //Terceira Seção//
  
  fill (139, 151, 250);
  stroke(0);
  strokeWeight (1.5);
  
  //Bandeira//
  
  beginShape();
  vertex(f, 0);
  vertex(f, 80);
  vertex(f + 25, 60)
  vertex(f + 50, 80);
  vertex(f + 50, 0);
  endShape(CLOSE);
  
  noStroke();
  
  //Nível//
  
  fill (255);
  textAlign(CENTER);
  textFont('Work Sans');
  textSize (50);
  textStyle(BOLD);
  text ((tabela.get(0,2)), f + 25, 50);
  
  stroke(139, 151, 250);
  strokeWeight(2);
  
  
  line (x - w / 2 + 15, 95, x - w / 2 + windowWidth * 0.8, 95);
  
  line (x - w / 2 + 15, 175, x - w / 2 + windowWidth * 0.8, 175);
  
  //Stop//
  
  noLoop();
  
}

function windowResized() {
  resizeCanvas(windowWidth, y + 20);}
