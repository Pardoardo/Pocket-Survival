import { ARCADE_FILTER } from "./gfx/ArcadeFilter.mjs"
import { WORLD } from "./spaces/World.mjs"
import { MAIN_MENU } from "./elements/ui/screens/MainMenu.mjs"
import { PLAYER } from "./live_objs/player.mjs"

import { MenuControls } from "./controls/controls.menu.mjs"


const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let fps = 0
let fps_temp = 0

let arcade_filter = new ARCADE_FILTER(canvas.width, canvas.height)
let world = new WORLD()
let main_menu = new MAIN_MENU(canvas.width, canvas.height)

let current_space = 'menu'

function LoadNewSpace(spaceName){
    switch (spaceName) {
        case 'menu':
            current_space = 'menu'
            menu_control.apply()    
        break
        case 'world':
            current_space = 'world'
        break
    }
}

let menu_control = new MenuControls(document, current_space, LoadNewSpace)

let plr = new PLAYER(50, 50, document, current_space, LoadNewSpace)

function Update(){
    console.log(`FPS: ${fps}`)

    switch (current_space) {
        case 'menu':
            main_menu.update(fps)
        break
        case 'world':
            plr.update()
            arcade_filter.update(fps)
        break
    
        default:

        break
    }

    world.update()
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

    switch (current_space) {
        case 'menu':
            main_menu.render(ctx)
        break

        case 'world':
            world.render(ctx)

            //Renderizar o player sempre na frente
            plr.render(ctx)
        break
    
        default:

        break
    }

    //Arcade filter sempre por último!
    arcade_filter.render(ctx)
}

function GameLoop(){
    Render()
    Update()
    window.requestAnimationFrame(GameLoop)
}
window.onload = function(){
    LoadNewSpace(current_space)
    GameLoop()
    FpsCalc()
}