export class PLR_CONTROLS{
    constructor(documentToAppend, currentSpace, spaceChangeCallBack, plr){
        
        this.append = function(){
            documentToAppend.addEventListener("keydown", (e) => {
                let key = e.key.toUpperCase()
                
                switch (key) {
                    case 'W':
                        plr.angularVelocity.y = - plr.walkSpeed
                    break
                    case 'A':
                        plr.angularVelocity.x = - plr.walkSpeed
                    break
                    case 'S':
                        plr.angularVelocity.y = plr.walkSpeed
                    break
                    case 'D':
                        plr.angularVelocity.x = plr.walkSpeed
                    break
                }
            })

            documentToAppend.addEventListener("keyup", (e) => {
                let key = e.key.toUpperCase()
                
                switch (key) {
                    case 'W':
                        plr.angularVelocity.y = 0
                    break
                    case 'A':
                        plr.angularVelocity.x = 0
                    break
                    case 'S':
                        plr.angularVelocity.y = 0
                    break
                    case 'D':
                        plr.angularVelocity.x = 0
                    break
                }
            })
        }
    }
}