var rows = 3;
var columns = 3;

var currTile;
var otherTile; 

var turns = 0;


var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
          
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

      
            tile.addEventListener("touchstart", startEvent);
            tile.addEventListener("mousedown", startEvent);
            tile.addEventListener("touchmove", moveEvent);
            tile.addEventListener("mousemove", moveEvent);
            tile.addEventListener("touchend", endEvent);
            tile.addEventListener("mouseup", endEvent);

            document.getElementById("board").append(tile);
        }
    }
}

function startEvent(e) {
    currTile = this; 
}

function moveEvent(e) {
    e.preventDefault();
}

function endEvent(e) {
    otherTile = document.elementFromPoint(e.clientX, e.clientY);
   

    if (otherTile.tagName === "IMG") {
        if (!otherTile.src.includes("3.jpg")) {
            return;
        }

        let currCoords = currTile.id.split("-");
        let r = parseInt(currCoords[0]);
        let c = parseInt(currCoords[1]);

        let otherCoords = otherTile.id.split("-");
        let r2 = parseInt(otherCoords[0]);
        let c2 = parseInt(otherCoords[1]);

        let moveLeft = r == r2 && c2 == c - 1;
        let moveRight = r == r2 && c2 == c + 1;
        let moveUp = c == c2 && r2 == r - 1;
        let moveDown = c == c2 && r2 == r + 1;

        let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

        if (isAdjacent) {
            let currImg = currTile.src;
            let otherImg = otherTile.src;

            currTile.src = otherImg;
            otherTile.src = currImg;

            turns += 1;
            document.getElementById("turns").innerText = turns;
        }
    }
}



