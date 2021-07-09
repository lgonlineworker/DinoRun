//Principais variáveis do jogo
const $ = (x) => document.querySelector(x);
const dino = $('.dino');
const bgDino = $('.background');
const points = document.getElementById('#numberScore');



var speed = 10;
var score = 0;
var position = 0;

var isJumping = false;
var isGameOver = false;


//Funções do jogo

function handleKeyUp (event) {
    if (event.keyCode === 32){
        if(!isJumping){
        jump();
        }
    }
}

function jump () {
    position = 0;

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 160){
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                position-=20;
                dino.style.bottom = position + 'px';
                }
            }, 30)
        }else {
        position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 30)
}

function createCactus () {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random()*6000;

    if (isGameOver) return;

    cactus.classList.add('cactus');
    bgDino.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px'

    let leftInterval = setInterval (() => {
        if (cactusPosition < -60) {
            // Saiu da tela
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game over
            clearInterval(leftInterval);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
          }
        else {
            cactusPosition -= speed;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);

}

document.addEventListener('keyup', handleKeyUp);
createCactus();
