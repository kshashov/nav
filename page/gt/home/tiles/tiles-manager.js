import Tile from "./tile"
import { showToast } from '@zos/interaction'
import { readFileSync } from '@zos/fs'
import { openAssetsSync, O_RDONLY } from '@zos/fs'
import { openSync, readSync } from '@zos/fs'
import MapLoader from "../../../maploader"

// https://render.openstreetmap.org/cgi-bin/export?bbox=50.0824,53.1633,50.1956,53.2095&scale=20000&format=png

export default class TilesManager {

    loader = new MapLoader()

    constructor() {
        this.map = this.loader.load("small")  
        this.map.grid.longWidth = Math.abs(this.map.grid.right - this.map.grid.left);
        this.map.grid.latHeight = Math.abs(this.map.grid.top - this.map.grid.bottom);
    }

    // We have to round all pixel maths to not to accumulate error on complex maps with a lot of tiles
    getTileWidth(scale) {
        return Math.floor(this.map.grid.tileWidth*scale)
    }

    getTileHeight(scale) {
        return Math.floor(this.map.grid.tileHeight*scale)
    }

    getMapWidth(scale) {
        return this.getTileWidth(scale)*this.map.grid.columns
    }

    getMapHeight(scale) {
        return this.getTileHeight(scale)*this.map.grid.rows
    }

    // find tile that should be in the window in any way
    findTileForPx(x, y, x1, y1, scale) {
        let windowX = x;
        let windowY = y;

        if (x < 0){
            if (x1 < 0) {
                // left of the map
                return null
            } else {
                windowX = x1
            }
        }

        if (y < 0){
            if (y1 < 0) {
                // above the map 
                return null
            } else {
                windowY = y1
            }
        }

        if (x > this.getMapWidth(scale)) {
            // right of the map
            return null
        }

        if (y > this.getMapHeight(scale)) {
            // below the map
            return null
        }


        let column = Math.floor(windowX / this.getTileWidth(scale))
        let row = Math.floor(windowY / this.getTileWidth(scale))

        // showToast({content: 'no tiles for ' + x + " " + y});

        return this.createTile(row, column)
    }

    createTile(row, column) {
        return {
            column: column,
            row: row,
            image: "small/map"+row+"_"+column+".png"
        }
    }

    getAbove(tile) {
        if (tile.row > 0) {
            return this.createTile(tile.row - 1, tile.column)
        }    
        return null;
    }

    getBelow(tile) {
        if (tile.row < this.map.grid.rows - 1) {
            return this.createTile(tile.row + 1, tile.column)
        }    
        return null;
    }

    getLeft(tile) {
        if (tile.column > 0) {
            return this.createTile(tile.row, tile.column - 1)
        }
        return null;
    }

    getRight(tile) {
        if (tile.column < (this.map.grid.columns - 1)) {
            return this.createTile(tile.row, tile.column + 1)
        }
        return null;
    }
  }