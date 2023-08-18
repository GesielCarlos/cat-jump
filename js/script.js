const cat = document.querySelector('.cat')
const hydrant = document.querySelector('.hydrant')

const final_screen = document.querySelector('.game-screen')
const ground = document.querySelector('.ground')

const audio_jump = new Audio('../sounds/jump-sound.mp3')
const audio_collision = new Audio('../sounds/collision-sound.mp3')

const score = document.querySelector('.score-value')
const finalScore = document.querySelector('.final-score > span')
const menu = document.querySelector('.menu-screen')
const buttonPlay = document.querySelector('.btn-play')

const jump = () => {
    
    cat.classList.add('jump')

    setTimeout(() => {
        
        cat.classList.remove('jump')

    }, 500);
}

const incrementScore = () =>{
    
    score.innerHTML = +score.innerHTML + 5

}

const loop = setInterval(() => {
    
    const hydrantPosition = hydrant.offsetLeft
    const catPosition = +window.getComputedStyle(cat).bottom.replace('px','')

    if(hydrantPosition <= 80 && hydrantPosition > 0 && catPosition < 120){

        audio_collision.play()

        hydrant.style.left = `${hydrantPosition}px`

        cat.style.marginLeft = '50px'
        cat.style.bottom = `${catPosition}px`
        cat.src = './images/game_over.gif'

        final_screen.style.filter = "blur(2.5px)"
        ground.style.filter = "blur(2.5px)"

        menu.style.display = 'flex'
        finalScore.innerHTML = score.innerHTML

        clearInterval(loop)
    }

}, 10);

document.addEventListener('keydown', ({ key }) => {
    
    if(key == 'ArrowUp' || key == ' '){
        
        jump()
        audio_jump.play()
        incrementScore()

    }
})

buttonPlay.addEventListener('click', () => {
    
    window.location.reload()

})