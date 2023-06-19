const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano')
const derrota = document.querySelector('.perdeu');
const jogarNovamente = document.querySelector('.btn');

let elemento = document.querySelector('#contador');
let contador = 1;
let pontos = setInterval(() => elemento.innerHTML = contador++, 1500);

const pula = () => {
    mario.classList.add('pulo');
    setTimeout(() => {
        mario.classList.remove('pulo')
    }, 500);
}

const loop = setInterval(() => {

    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if(canoPosition <= 100 && canoPosition > 0 && marioPosition < 100) {

        cano.style.animation = 'none'
        cano.style.left = `${canoPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${canoPosition}px`

        mario.src = "/src/img/game-over.png"
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        derrota.style.display = 'block'
        jogarNovamente.style.display = 'block'

        clearInterval(pontos)
        
    }
}, 10)

document.addEventListener('keydown', pula)

const button = document.querySelector("button");
button.addEventListener("click", () => {
    window.location.reload();
})