export class RENDER_TEST_BLOCK{
    constructor(x, y){
        this.pos = {x, y}
        this.size = {w: 13, h: 13}
        this.sprite = new Image()
        this.sprite.src = "../res/icons.png"
        
        this.update = function(){

        }

        this.render = function(ctx){
            ctx.drawImage(this.sprite, this.pos.x, this.pos.y, this.size.w, this.size.h, 0, 0, 23, 23)
        }
    }
}