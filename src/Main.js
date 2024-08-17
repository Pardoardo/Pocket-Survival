const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let fps = 0
let fps_temp = 0

function Update(){
    console.log(`FPS: ${fps}`)
}

function FpsCalc(){
    fps = fps_temp
    fps_temp = 0
    setTimeout(FpsCalc, 1000)
}

function Render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    fps_temp++
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
    FpsCalc()
}