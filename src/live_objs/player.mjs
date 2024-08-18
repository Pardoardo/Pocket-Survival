import { PLR_CONTROLS } from "../controls/controls.plr.mjs"

export class PLAYER{
    constructor(x, y, docToAppend, currentSpace, changeSpaceCallback){
        this.pos = {x, y}
        this.angularVelocity = {x: 0, y:0}
        this.walkSpeed = 7

        this.plrCtrls = new PLR_CONTROLS(docToAppend, currentSpace, changeSpaceCallback, this)
        this.plrCtrls.append()

        this.boxSize = {w: 20, h: 30}

        this.update = function(){
            this.pos.x += this.angularVelocity.x
            this.pos.y += this.angularVelocity.y
        }

        this.render = function(ctx){
            ctx.fillStyle = 'green'
            ctx.fillRect(this.pos.x, this.pos.y, this.boxSize.w, this.boxSize.h)           
        }
    }
}