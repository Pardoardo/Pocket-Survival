export class MenuControls{
    constructor(documentToAppend, currentSpace, spaceChangeCallback){
        this.apply = function() {
            documentToAppend.addEventListener("keydown", (e) => {
                let key = e.key.toUpperCase()

                switch (currentSpace) {
                    case 'menu':
                        spaceChangeCallback('world')  
                    break
                }
            })
        }
    }
}