export default class MapLoader {
    maps = [
        {
            "key": "small",
            "grid": {
                top: 53.249900,
                left: 50.062100,
                bottom: 53.149900,
                right: 50.212100,
                width: 2385,
                height: 2650,
                rows: 10,
                columns: 15,
                tileWidth: 159,
                tileHeight: 265,
            }
        },
        {
            "key": "big",
            "grid": {
                "top": 53.287000,
                "left": 50.075900,
                "bottom": 53.137000, 
                "right": 50.275900, 
                "width": 3960,
                "height": 4980,
                "rows": 15,
                "columns": 20, 
                "tileWidth": 198,
                "tileHeight": 332
            }
        }
    ]

    load(key) {
        for (let k = 0; k < this.maps.length; k++) {
            const map = this.maps[k];
            if (map.key === key) {
                return map
            }
        }

        return undefined;
    }
}