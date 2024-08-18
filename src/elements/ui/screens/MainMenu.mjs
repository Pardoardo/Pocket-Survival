export class MAIN_MENU{
    constructor(canW, canH){
        this.size = {w: 154, h:20}
        this.pos = {x: canW/2 - 84, y: canH/2 - 98}
        this.sprite = new Image()
        this.sprite.src = "../res/icons.png"
        //18, 2
        this.update = function(){
            
        }
        this.render = function(ctx){
            ctx.drawImage(this.sprite, 18, 2, 64, 10, this.pos.x, this.pos.y, this.size.w, this.size.h);
            //ctx.drawImage(this.sprite, this.pos.x, this.pos.y, this.size.w, this.size.h, 0, 2, 62, 10);
            //ctx.drawImage(this.sprite, this.pos.x, this.pos.y, 18, 2, this.size.w, this.size.h) //this.size.w, this.size.h)
            
        }
    }
}