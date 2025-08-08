const p1Button = document.querySelector('#p1-btn')
const p2Button = document.querySelector('#p2-btn')
const p1Display = document.querySelector('#p1-display')
const p2Display = document.querySelector('#p2-display')
const resetButton = document.querySelector('#reset')
const winPointOption = document.querySelector('#winpoint')



let p1Score = 0;
let p2Score = 0;
let winPoint = 3
let isOver = false

function reset() {
    p1Score = 0;
    p2Score = 0;
    isOver = false;
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score
}

p1Button.addEventListener('click', function() {
    if(!isOver){
        p1Score += 1
        if(p1Score === winPoint) {
            isOver = true
        }
        p1Display.textContent = p1Score
    }
})

p2Button.addEventListener('click', function() {
    if(!isOver){
        p2Score += 1
        if(p2Score === winPoint) {
            isOver = true
        }
        p2Display.textContent = p2Score
    }
})

resetButton.addEventListener('click', reset)

winPointOption.addEventListener('change', function() {
    winPoint = parseInt(this.value);
    reset();
})






