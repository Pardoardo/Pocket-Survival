import { RENDER_TEST_BLOCK } from "../blocks/render_test_block.mjs"

export class WORLD{
    constructor(){
        this.width = 1740
        this.height = this.width

        this.blocks = [ new RENDER_TEST_BLOCK(0, 0)]

        this.update = function(){
            this.blocks.forEach((blck) => {
                blck.update()
            })
        }
        
        this.render = function(ctx){
            this.blocks.forEach((blck) => {
                blck.render(ctx)
            })
        }
    }

}