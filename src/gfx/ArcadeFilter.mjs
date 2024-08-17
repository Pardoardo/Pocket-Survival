export class ARCADE_FILTER{
    constructor(canW, CanH){
        this.offset = -860

        this.update = function(fps){
            if(this.offset < canW){
                this.offset += fps
            } else{
                this.offset = -860
            }
                
        }

        this.render = function(ctx){

            //A única forma que encontrei de replicar este efeito sem comprometer a perfomance foi renderizar cada linha.

            //fundo 
            ctx.fillStyle = 'rgba(161, 161, 161, 0.269)'
            ctx.fillRect(0, 0, canW, CanH)

            //barras
            ctx.fillStyle = 'rgba(0, 0, 0, 0.969)'

            //1
            ctx.fillRect(0, 4 + this.offset, canW, 0.12)
            ctx.fillRect(0, 8 + this.offset, canW, 0.12)
            ctx.fillRect(0, 12 + this.offset, canW, 0.12)
            ctx.fillRect(0, 16 + this.offset, canW, 0.12)
            ctx.fillRect(0, 20 + this.offset, canW, 0.12)
            ctx.fillRect(0, 24 + this.offset, canW, 0.12)
            ctx.fillRect(0, 28 + this.offset, canW, 0.12)
            ctx.fillRect(0, 32 + this.offset, canW, 0.12)
            ctx.fillRect(0, 36 + this.offset, canW, 0.12)
            ctx.fillRect(0, 40 + this.offset, canW, 0.12)
            ctx.fillRect(0, 44 + this.offset, canW, 0.12)
            ctx.fillRect(0, 48 + this.offset, canW, 0.12)
            ctx.fillRect(0, 52 + this.offset, canW, 0.12)
            ctx.fillRect(0, 56 + this.offset, canW, 0.12)
            ctx.fillRect(0, 60 + this.offset, canW, 0.12)
            ctx.fillRect(0, 64 + this.offset, canW, 0.12)
            ctx.fillRect(0, 68 + this.offset, canW, 0.12)
            ctx.fillRect(0, 72 + this.offset, canW, 0.12)
            ctx.fillRect(0, 76 + this.offset, canW, 0.12)
            ctx.fillRect(0, 80 + this.offset, canW, 0.12)
            ctx.fillRect(0, 84 + this.offset, canW, 0.12)
            ctx.fillRect(0, 88 + this.offset, canW, 0.12)
            ctx.fillRect(0, 92 + this.offset, canW, 0.12)
            ctx.fillRect(0, 96 + this.offset, canW, 0.12)
            ctx.fillRect(0, 100 + this.offset, canW, 0.12)
            ctx.fillRect(0, 104 + this.offset, canW, 0.12)
            ctx.fillRect(0, 108 + this.offset, canW, 0.12)
            ctx.fillRect(0, 112 + this.offset, canW, 0.12)
            ctx.fillRect(0, 116 + this.offset, canW, 0.12)
            ctx.fillRect(0, 120 + this.offset, canW, 0.12)
            ctx.fillRect(0, 124 + this.offset, canW, 0.12)
            ctx.fillRect(0, 128 + this.offset, canW, 0.12)
            ctx.fillRect(0, 132 + this.offset, canW, 0.12)
            ctx.fillRect(0, 136 + this.offset, canW, 0.12)
            ctx.fillRect(0, 140 + this.offset, canW, 0.12)
            ctx.fillRect(0, 144 + this.offset, canW, 0.12)
            ctx.fillRect(0, 148 + this.offset, canW, 0.12)
            ctx.fillRect(0, 152 + this.offset, canW, 0.12)
            ctx.fillRect(0, 156 + this.offset, canW, 0.12)
            ctx.fillRect(0, 160 + this.offset, canW, 0.12)
            ctx.fillRect(0, 164 + this.offset, canW, 0.12)
            ctx.fillRect(0, 168 + this.offset, canW, 0.12)
            ctx.fillRect(0, 172 + this.offset, canW, 0.12)
            ctx.fillRect(0, 176 + this.offset, canW, 0.12)
            ctx.fillRect(0, 180 + this.offset, canW, 0.12)
            ctx.fillRect(0, 184 + this.offset, canW, 0.12)
            ctx.fillRect(0, 188 + this.offset, canW, 0.12)
            ctx.fillRect(0, 192 + this.offset, canW, 0.12)
            ctx.fillRect(0, 196 + this.offset, canW, 0.12)
            ctx.fillRect(0, 200 + this.offset, canW, 0.12)
            ctx.fillRect(0, 204 + this.offset, canW, 0.12)
            ctx.fillRect(0, 208 + this.offset, canW, 0.12)
            ctx.fillRect(0, 212 + this.offset, canW, 0.12)
            ctx.fillRect(0, 216 + this.offset, canW, 0.12)
            ctx.fillRect(0, 220 + this.offset, canW, 0.12)
            ctx.fillRect(0, 224 + this.offset, canW, 0.12)
            ctx.fillRect(0, 228 + this.offset, canW, 0.12)
            ctx.fillRect(0, 232 + this.offset, canW, 0.12)
            ctx.fillRect(0, 236 + this.offset, canW, 0.12)
            ctx.fillRect(0, 240 + this.offset, canW, 0.12)
            ctx.fillRect(0, 244 + this.offset, canW, 0.12)
            ctx.fillRect(0, 248 + this.offset, canW, 0.12)
            ctx.fillRect(0, 252 + this.offset, canW, 0.12)
            ctx.fillRect(0, 256 + this.offset, canW, 0.12)
            ctx.fillRect(0, 260 + this.offset, canW, 0.12)

            //Estáticas
            ctx.fillRect(0, 4, canW, 0.12)
            ctx.fillRect(0, 8, canW, 0.12)
            ctx.fillRect(0, 12, canW, 0.12)
            ctx.fillRect(0, 16, canW, 0.12)
            ctx.fillRect(0, 20, canW, 0.12)
            ctx.fillRect(0, 24, canW, 0.12)
            ctx.fillRect(0, 28, canW, 0.12)
            ctx.fillRect(0, 32, canW, 0.12)
            ctx.fillRect(0, 36, canW, 0.12)
            ctx.fillRect(0, 40, canW, 0.12)
            ctx.fillRect(0, 44, canW, 0.12)
            ctx.fillRect(0, 48, canW, 0.12)
            ctx.fillRect(0, 52, canW, 0.12)
            ctx.fillRect(0, 56, canW, 0.12)
            ctx.fillRect(0, 60, canW, 0.12)
            ctx.fillRect(0, 64, canW, 0.12)
            ctx.fillRect(0, 68, canW, 0.12)
            ctx.fillRect(0, 72, canW, 0.12)
            ctx.fillRect(0, 76, canW, 0.12)
            ctx.fillRect(0, 80, canW, 0.12)
            ctx.fillRect(0, 84, canW, 0.12)
            ctx.fillRect(0, 88, canW, 0.12)
            ctx.fillRect(0, 92, canW, 0.12)
            ctx.fillRect(0, 96, canW, 0.12)
            ctx.fillRect(0, 100, canW, 0.12)
            ctx.fillRect(0, 104, canW, 0.12)
            ctx.fillRect(0, 108, canW, 0.12)
            ctx.fillRect(0, 112, canW, 0.12)
            ctx.fillRect(0, 116, canW, 0.12)
            ctx.fillRect(0, 120, canW, 0.12)
            ctx.fillRect(0, 124, canW, 0.12)
            ctx.fillRect(0, 128, canW, 0.12)
            ctx.fillRect(0, 132, canW, 0.12)
            ctx.fillRect(0, 136, canW, 0.12)
            ctx.fillRect(0, 140, canW, 0.12)
            ctx.fillRect(0, 144, canW, 0.12)
            ctx.fillRect(0, 148, canW, 0.12)
            ctx.fillRect(0, 152, canW, 0.12)
            ctx.fillRect(0, 156, canW, 0.12)
            ctx.fillRect(0, 160, canW, 0.12)
            ctx.fillRect(0, 164, canW, 0.12)
            ctx.fillRect(0, 168, canW, 0.12)
            ctx.fillRect(0, 172, canW, 0.12)
            ctx.fillRect(0, 176, canW, 0.12)
            ctx.fillRect(0, 180, canW, 0.12)
            ctx.fillRect(0, 184, canW, 0.12)
            ctx.fillRect(0, 188, canW, 0.12)
            ctx.fillRect(0, 192, canW, 0.12)
            ctx.fillRect(0, 196, canW, 0.12)
            ctx.fillRect(0, 200, canW, 0.12)
            ctx.fillRect(0, 204, canW, 0.12)
            ctx.fillRect(0, 208, canW, 0.12)
            ctx.fillRect(0, 212, canW, 0.12)
            ctx.fillRect(0, 216, canW, 0.12)
            ctx.fillRect(0, 220, canW, 0.12)
            ctx.fillRect(0, 224, canW, 0.12)
            ctx.fillRect(0, 228, canW, 0.12)
            ctx.fillRect(0, 232, canW, 0.12)
            ctx.fillRect(0, 236, canW, 0.12)
            ctx.fillRect(0, 240, canW, 0.12)
            ctx.fillRect(0, 244, canW, 0.12)
            ctx.fillRect(0, 248, canW, 0.12)
            ctx.fillRect(0, 252, canW, 0.12)
            ctx.fillRect(0, 256, canW, 0.12)
            ctx.fillRect(0, 260, canW, 0.12)
            ctx.fillRect(0, 264, canW, 0.12)
            ctx.fillRect(0, 268, canW, 0.12)
            ctx.fillRect(0, 272, canW, 0.12)
            ctx.fillRect(0, 276, canW, 0.12)
            ctx.fillRect(0, 280, canW, 0.12)
            ctx.fillRect(0, 284, canW, 0.12)
            ctx.fillRect(0, 288, canW, 0.12)
            ctx.fillRect(0, 292, canW, 0.12)
            ctx.fillRect(0, 296, canW, 0.12)
            ctx.fillRect(0, 300, canW, 0.12)
            ctx.fillRect(0, 304, canW, 0.12)
            ctx.fillRect(0, 308, canW, 0.12)
            ctx.fillRect(0, 312, canW, 0.12)
            ctx.fillRect(0, 316, canW, 0.12)
            ctx.fillRect(0, 320, canW, 0.12)
            ctx.fillRect(0, 324, canW, 0.12)
            ctx.fillRect(0, 328, canW, 0.12)
            ctx.fillRect(0, 332, canW, 0.12)
            ctx.fillRect(0, 336, canW, 0.12)
            ctx.fillRect(0, 340, canW, 0.12)
            ctx.fillRect(0, 344, canW, 0.12)
            ctx.fillRect(0, 348, canW, 0.12)
            ctx.fillRect(0, 352, canW, 0.12)
            ctx.fillRect(0, 356, canW, 0.12)
            ctx.fillRect(0, 360, canW, 0.12)
            ctx.fillRect(0, 364, canW, 0.12)
            ctx.fillRect(0, 368, canW, 0.12)
            ctx.fillRect(0, 372, canW, 0.12)
            ctx.fillRect(0, 376, canW, 0.12)
            ctx.fillRect(0, 380, canW, 0.12)
            ctx.fillRect(0, 384, canW, 0.12)
            ctx.fillRect(0, 388, canW, 0.12)
            ctx.fillRect(0, 392, canW, 0.12)
            ctx.fillRect(0, 396, canW, 0.12)
            ctx.fillRect(0, 400, canW, 0.12)
            ctx.fillRect(0, 404, canW, 0.12)
            ctx.fillRect(0, 408, canW, 0.12)
            ctx.fillRect(0, 412, canW, 0.12)
            ctx.fillRect(0, 416, canW, 0.12)
            ctx.fillRect(0, 420, canW, 0.12)
            ctx.fillRect(0, 424, canW, 0.12)
            ctx.fillRect(0, 428, canW, 0.12)
            ctx.fillRect(0, 432, canW, 0.12)
            ctx.fillRect(0, 436, canW, 0.12)
            ctx.fillRect(0, 440, canW, 0.12)
            ctx.fillRect(0, 444, canW, 0.12)
            ctx.fillRect(0, 448, canW, 0.12)
            ctx.fillRect(0, 452, canW, 0.12)
            ctx.fillRect(0, 456, canW, 0.12)
            ctx.fillRect(0, 460, canW, 0.12)
            ctx.fillRect(0, 464, canW, 0.12)
            ctx.fillRect(0, 468, canW, 0.12)
            ctx.fillRect(0, 472, canW, 0.12)
            ctx.fillRect(0, 476, canW, 0.12)
            ctx.fillRect(0, 480, canW, 0.12)
            ctx.fillRect(0, 484, canW, 0.12)
            ctx.fillRect(0, 488, canW, 0.12)
            ctx.fillRect(0, 492, canW, 0.12)
            ctx.fillRect(0, 496, canW, 0.12)
            ctx.fillRect(0, 500, canW, 0.12)
            ctx.fillRect(0, 504, canW, 0.12)
            ctx.fillRect(0, 508, canW, 0.12)
            ctx.fillRect(0, 512, canW, 0.12)
            ctx.fillRect(0, 516, canW, 0.12)
            ctx.fillRect(0, 520, canW, 0.12)
            ctx.fillRect(0, 524, canW, 0.12)
            ctx.fillRect(0, 528, canW, 0.12)
            ctx.fillRect(0, 532, canW, 0.12)
            ctx.fillRect(0, 536, canW, 0.12)
        }
    }
}