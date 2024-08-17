const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

function Update(){

}

function Render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function GameLoop(){
    Render()
    Update()
    window.requestAnimationFrame(GameLoop)
}
window.onload = function(){
    GameLoop()
}