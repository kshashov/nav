import TilesManager from "./tiles/tiles-manager";
import { showToast } from '@zos/interaction'

export default class MapRenderer {
    canvas = null;
    widthPx = 480; // canvas
    heightPx = 480; // canvas
    offsetPx = 50; // single offset step
    tilesManager = new TilesManager();

    constructor(canvas, width, height, offset) {
        this.canvas = canvas;
        this.widthPx = width;
        this.heightPx = height;
        this.offsetPx = offset;
    }

    render(offsetTop, offsetLeft, scale) {
  
        clear
        this.canvas.clear({
            x: 0,
            y: 0,
            width: 480,
            height: 480
          });
      
        this.canvas.drawRect({
            x1: 0,
            y1: 0,
            x2: 480,
            y2: 480,
            color: 0x000000
          });
      
        const x = offsetLeft * this.offsetPx * scale;
        const y = offsetTop * this.offsetPx * scale;

        // find any tile in the current offset window without scaling for simplicity
        let tile = this.tilesManager.findTileForPx(-x, -y, -x + this.widthPx, -y + this.heightPx)

        if (tile) {
            // showToast({content: "tile: " + tile.x + " " + tile.y})
            this.renderTile(tile, x + tile.x*tile.width*scale, y + tile.y*tile.height*scale, scale, true, true, true, true);
        }

    }

    renderTile(tile, x, y, scale, checkTop, checkLeft, checkRight, checkBottom) {

        const width = tile.width * scale;
        const height = tile.height * scale;

        this.canvas.drawImage({
            x: x,
            y: y,
            w: width,
            h: height,
            // alpha: 255,
            image: tile.image
          });



            // this.canvas.setPaint({
            // color: 0xffffff,
            // line_width: 10
            // })

          this.canvas.drawLine({
            x1: x,
            y1: y,
            x2: x,
            y2: y + height,
            color: 0xff0000
          });

          this.canvas.drawLine({
            x1: x,
            y1: y,
            x2: x + width,
            y2: y,
            color: 0xff0000
          });

          if (checkTop) {
            if (y > 0) { // empty space on top on the current tile 
                let topTile = this.tilesManager.getAbove(tile); 

                if (topTile) {
                    // | |o| |
                    // | |x| |
                    // | | | |
                    this.renderTile(topTile, x, y-height, scale, true, false, false, false)
                }
            }   
          }

          if (checkLeft) {
            if (x > 0) { // empty space on left on the current tile 
                let leftTile = this.tilesManager.getLeft(tile); 

                if (leftTile) {
                    // |o|o| |
                    // |o|x| |
                    // |o| | |
                    this.renderTile(leftTile, x - width, y, scale, true, true, false, true)
                }
            }
          }

          if (checkBottom) {

            if ((y + height) < this.heightPx) { // empty space on bottom on the current tile 
                let bottomTile = this.tilesManager.getBelow(tile); 

                
                if (bottomTile) {
                    // |o|o| |
                    // |o|x| |
                    // |o|o| |
                    this.renderTile(bottomTile, x, y + height, scale, false, false, false, true)
                }
            }   
          }

          if (checkRight) {

            if ((x + width) < this.widthPx) { // empty space on right on the current tile 
                let rightTile = this.tilesManager.getRight(tile); 

                if (rightTile) {
                    // |o|o|o|
                    // |o|x|o|
                    // |o|o|o|
                    this.renderTile(rightTile, x + width, y, scale, true, false, true, true)
                }
            }   
          }
    }
}