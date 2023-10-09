const mainTile = document.querySelector(".mainTile");
const colors = ['teal', 'crimson', 'greenyellow'];
const sixColor = [...colors, ...colors];
const tileCount = sixColor.length;


let count = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function creatingTiles(color){
    const tiles = document.createElement('div');

    tiles.classList.add('tiles');
    tiles.setAttribute('data-color', color)

    tiles.addEventListener('click', function(){     
        if(awaitingEndOfMove){
            return;
        }

        tiles.style.backgroundColor = color;

        if(!activeTile){
            activeTile = tiles;
            return;
        }

        const sameTile = activeTile.getAttribute('data-color')
        if(sameTile == color){
            awaitingEndOfMove = false;
            activeTile = null;
            
            count += 2;
            if(count === tileCount){
                alert(`You Win!`);
            }

            return;
        }

        setTimeout(function(){
            activeTile.style.backgroundColor = null;
            tiles.style.backgroundColor = null;

            awaitingEndOfMove = false;
            activeTile = null;
           
        }, 1000);

        awaitingEndOfMove = true;
    })
    
    return tiles;
}

for(let i=0; i<tileCount; i++){
    
    const randomColor = Math.floor(Math.random() * sixColor.length);
    const color = sixColor[randomColor];
    sixColor.splice(randomColor,1);
    const tile = creatingTiles(color)
    mainTile.appendChild(tile);
}