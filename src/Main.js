import { ARCADE_FILTER } from "./gfx/ArcadeFilter.mjs"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let fps = 0
let fps_temp = 0

let arcade_filter = new ARCADE_FILTER(canvas.width, canvas.height)

function Update(){
    console.log(`FPS: ${fps}`)

    arcade_filter.update(fps)
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

    arcade_filter.render(ctx)
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