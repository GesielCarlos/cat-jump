const mario = document.querySelector('.mario');
const cacto = document.querySelector('.cacto')

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
}

const loop = setInterval(() => {
    
    const posicaoCacto = cacto.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px','');

    if(posicaoCacto <= 120 && posicaoCacto > 0 && posicaoMario < 120){

        cacto.style.animation = 'none'
        cacto.style.left = `${posicaoCacto}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${posicaoMario}px`;

        mario.src = './imagens/game_over.png';
        mario.style.width = '105px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', pulo);