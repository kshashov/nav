import Tile from "./tile"
import { showToast } from '@zos/interaction'

// https://render.openstreetmap.org/cgi-bin/export?bbox=50.0824,53.1633,50.1956,53.2095&scale=20000&format=png

export default class TilesManager {
    tiles = [];
    rows = 13;
    columns = 13;
    map = {
        top: 53.2095,
        left: 50.0824,
        bottom: 53.1633,
        right: 50.1956,
        width: 1318*10,
        height: 896*10,
        longWidth: null,
        latHeight: null
    };

    constructor() {
        this.map.longWidth = Math.abs(this.map.right - this.map.left);
        this.map.latHeight = Math.abs(this.map.top - this.map.bottom);


        let tileHeight = this.map.height/this.rows;
        let tileWidth = this.map.width/this.columns;
        let tileLongWight = this.map.longWidth/this.rows;
        let tileLatHeight = this.map.latHeight/this.columns;
    
        for (let i = 0; i < this.rows; i++) {
            let columns = []
            for (let j = 0; j < this.columns; j++) {
                const tile = new Tile(
                    53.2095 + (i + 1) * tileLatHeight,
                    50.0824 + j * tileLongWight,
                    53.1633 + i * tileLatHeight,
                    50.0824 + (j + 1) * tileLongWight,
                    tileWidth,
                    tileHeight,
                    'image/map0.png'
                );
                tile.y = i;
                tile.x = j;
                columns.push(tile)
            }
            this.tiles.push(columns)
        }

    }

    // checkTileForPosition(tile, x, y) {
    //     return (y >= tile.top) && (y <= tile.bottom) && (x >= tile.left) && (x <= tile.right)
    // }

    findTileForPx(x, y, x1, y1) {
        let test = 0;
        let currentY = 0
        for (let i = 0; i < this.rows; i++) {
            let currentX = 0
            for (let j = 0; j < this.columns; j++) {
                const tile = this.tiles[i][j];
                if ((x <= currentX + tile.width) && (x1 > currentX) 
                    && (y <= currentY + this.tiles[i][j].height) && (y1 > currentY)) {
                    return this.tiles[i][j]
                }
                currentX += this.tiles[i][j].width
            }
            currentY += this.tiles[i][0].height
            test = i;
        }
        // showToast({content: 'no tiles for ' + x + " " + y});
        return null
    }

    getAbove(tile) {
        if (tile.y > 0) {
            return this.tiles[tile.y - 1][tile.x]
        }    
        return null;
    }

    getBelow(tile) {
        if (tile.y < this.rows - 1) {
            return this.tiles[tile.y + 1][tile.x]
        }    
        return null;
    }

    getLeft(tile) {
        if (tile.x > 0) {
            return this.tiles[tile.y][tile.x - 1]
        }
        return null;
    }

    getRight(tile) {
        if (tile.x < (this.columns - 1)) {
            return this.tiles[tile.y][tile.x + 1]
        }
        return null;
    }

    static generateTile() {
        return new Tile(
            53.2095,
            50.0824,
            53.1633,
            50.1956,
            1318,
            896,
            'image/map0.png'
        )
    }
  }