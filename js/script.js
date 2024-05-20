
//MENU HAMBURGUER
//DECLARANDO A VARIAVEL E PEGANDO O  ID
const btnMobile = document.querySelector("#btnMobile");
//FUNÇÃO MENU
function Menu(){
    //DECLARANDO A VARIAVEL E PEGANDO O  ID
   const navBar = document.querySelector(".nav");
   //RETORNA UMA LISTA ATIVA
    navBar.classList.toggle("active");
}
//EVENTO QUE AO CLICAR CHAMA FUNÇÃO MENU
btnMobile.addEventListener("clique", Menu);


/*criando o slideShow */

//declarando o objeto de imagens em um array
let imagenns = ['img/Carro1.png', 'img/Carro2.png', 'img/Carro3.png'];
//declarando a posição de inicio
let Index = 0;
//declarando o tempo que as imagens vão passar em milesegundos
let time = 3000;

//criando a função chamanda slideshow

function slideShow() {
  //pegando o id da imagem no html para poder carregar as imagens usando DOM
  document.getElementById('img').src = imagens[Index];
  //incremento das imagens e sua posição
  Index++;

  //se a posição da imagem for imagem e a quantidade de imagens no array

  if (Index == imagens.lenght) {
    Index = 0;
  }
  //setTimeout é uma função que executa o tempo, nesse caso vai chamar função e aplicar o time
  setTimeout('slideshow()', time);
}
//executar toda a função
slideshow();



function openModal(){
    const modal =document.querySelector("#modal");
    modal.style.display ="block";
}
function closeModal(){
    const modal=document.querySelector("#modal");
    modal.style.display ="none";
}