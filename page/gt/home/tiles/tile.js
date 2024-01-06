export default class Tile {
    top = 53.2095;
    left = 50.0824;
    bottom = 53.1633;
    right= 50.1956;
    width= 1318;
    height= 896;
    image = '';
    longWidth = 0;
    latHeight = 0;
    topTile = null;
    leftTile = null;
    bottomTile = null;
    rightTile = null;

    constructor(top, left, right, bottom, width, height, image) {
        this.top = top;
        this.left = left;
        this.bottom= bottom;
        this.right= right;
        this.width= width;
        this.height= height;
        this.image = image;
        this.longWidth = Math.abs(right - left)
        this.latHeight = Math.abs(top - bottom)
    }
  }