let buttonA, buttonC, buttonD;
let recommendations = [];
let title = "Escolha um Gênero de Filme";
let genresYPosition = 150; // Posição vertical dos botões

function setup() {
  createCanvas(600, 400);
  
  // Estilo inicial
  background(240);
  
  // Título do projeto
  textSize(30);
  fill(50);
  textAlign(CENTER, CENTER);
  text(title, width / 2, 50);
  
  // Botões para os gêneros
  buttonA = createButton('Ação');
  buttonA.position(100, genresYPosition);
  buttonA.size(150, 50);
  buttonA.style('font-size', '20px');
  buttonA.mousePressed(recommendAction);

  buttonC = createButton('Comédia');
  buttonC.position(250, genresYPosition);
  buttonC.size(150, 50);
  buttonC.style('font-size', '20px');
  buttonC.mousePressed(recommendComedy);

  buttonD = createButton('Drama');
  buttonD.position(400, genresYPosition);
  buttonD.size(150, 50);
  buttonD.style('font-size', '20px');
  buttonD.mousePressed(recommendDrama);
}

function recommendAction() {
  recommendations = ["Vingadores", "Missão Impossível", "John Wick"];
  displayRecommendations();
}

function recommendComedy() {
  recommendations = ["Superbad", "The Hangover", "Ligeiramente Grávidos"];
  displayRecommendations();
}

function recommendDrama() {
  recommendations = ["A Origem", "O Poderoso Chefão", "Cidadão Kane"];
  displayRecommendations();
}

function displayRecommendations() {
  background(240);
  
  // Exibir as recomendações
  textSize(20);
  fill(50);
  textAlign(CENTER, CENTER);
  
  // Título das recomendações
  text("Recomendações de Filmes:", width / 2, genresYPosition + 100);
  
  // Exibindo as recomendações de filmes
  let yOffset = genresYPosition + 150; // Começo da lista de filmes
  
  for (let i = 0; i < recommendations.length; i++) {
    text(recommendations[i], width / 2, yOffset + i * 40); // Ajuste na posição Y dos filmes
  }
}
