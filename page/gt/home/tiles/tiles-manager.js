import Tile from "./tile"
import { showToast } from '@zos/interaction'

// https://render.openstreetmap.org/cgi-bin/export?bbox=50.0824,53.1633,50.1956,53.2095&scale=20000&format=png

export default class TilesManager {
    tiles = [[{
        top: 53.287000,
        left: 50.075900,
        bottom: 53.277000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map0_0.png',
        x: 0,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.085900,
        bottom: 53.277000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map0_1.png',
        x: 1,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.095900,
        bottom: 53.277000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map0_2.png',
        x: 2,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.105900,
        bottom: 53.277000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map0_3.png',
        x: 3,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.115900,
        bottom: 53.277000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map0_4.png',
        x: 4,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.125900,
        bottom: 53.277000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map0_5.png',
        x: 5,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.135900,
        bottom: 53.277000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map0_6.png',
        x: 6,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.145900,
        bottom: 53.277000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map0_7.png',
        x: 7,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.155900,
        bottom: 53.277000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map0_8.png',
        x: 8,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.165900,
        bottom: 53.277000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map0_9.png',
        x: 9,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.175900,
        bottom: 53.277000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map0_10.png',
        x: 10,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.185900,
        bottom: 53.277000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map0_11.png',
        x: 11,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.195900,
        bottom: 53.277000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map0_12.png',
        x: 12,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.205900,
        bottom: 53.277000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map0_13.png',
        x: 13,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.215900,
        bottom: 53.277000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map0_14.png',
        x: 14,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.225900,
        bottom: 53.277000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map0_15.png',
        x: 15,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.235900,
        bottom: 53.277000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map0_16.png',
        x: 16,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.245900,
        bottom: 53.277000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map0_17.png',
        x: 17,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.255900,
        bottom: 53.277000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map0_18.png',
        x: 18,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.287000,
        left: 50.265900,
        bottom: 53.277000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map0_19.png',
        x: 19,
        y: 0,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.277000,
        left: 50.075900,
        bottom: 53.267000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map1_0.png',
        x: 0,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.085900,
        bottom: 53.267000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map1_1.png',
        x: 1,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.095900,
        bottom: 53.267000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map1_2.png',
        x: 2,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.105900,
        bottom: 53.267000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map1_3.png',
        x: 3,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.115900,
        bottom: 53.267000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map1_4.png',
        x: 4,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.125900,
        bottom: 53.267000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map1_5.png',
        x: 5,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.135900,
        bottom: 53.267000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map1_6.png',
        x: 6,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.145900,
        bottom: 53.267000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map1_7.png',
        x: 7,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.155900,
        bottom: 53.267000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map1_8.png',
        x: 8,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.165900,
        bottom: 53.267000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map1_9.png',
        x: 9,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.175900,
        bottom: 53.267000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map1_10.png',
        x: 10,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.185900,
        bottom: 53.267000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map1_11.png',
        x: 11,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.195900,
        bottom: 53.267000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map1_12.png',
        x: 12,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.205900,
        bottom: 53.267000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map1_13.png',
        x: 13,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.215900,
        bottom: 53.267000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map1_14.png',
        x: 14,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.225900,
        bottom: 53.267000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map1_15.png',
        x: 15,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.235900,
        bottom: 53.267000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map1_16.png',
        x: 16,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.245900,
        bottom: 53.267000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map1_17.png',
        x: 17,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.255900,
        bottom: 53.267000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map1_18.png',
        x: 18,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.277000,
        left: 50.265900,
        bottom: 53.267000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map1_19.png',
        x: 19,
        y: 1,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.267000,
        left: 50.075900,
        bottom: 53.257000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map2_0.png',
        x: 0,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.085900,
        bottom: 53.257000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map2_1.png',
        x: 1,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.095900,
        bottom: 53.257000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map2_2.png',
        x: 2,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.105900,
        bottom: 53.257000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map2_3.png',
        x: 3,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.115900,
        bottom: 53.257000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map2_4.png',
        x: 4,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.125900,
        bottom: 53.257000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map2_5.png',
        x: 5,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.135900,
        bottom: 53.257000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map2_6.png',
        x: 6,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.145900,
        bottom: 53.257000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map2_7.png',
        x: 7,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.155900,
        bottom: 53.257000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map2_8.png',
        x: 8,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.165900,
        bottom: 53.257000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map2_9.png',
        x: 9,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.175900,
        bottom: 53.257000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map2_10.png',
        x: 10,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.185900,
        bottom: 53.257000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map2_11.png',
        x: 11,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.195900,
        bottom: 53.257000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map2_12.png',
        x: 12,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.205900,
        bottom: 53.257000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map2_13.png',
        x: 13,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.215900,
        bottom: 53.257000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map2_14.png',
        x: 14,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.225900,
        bottom: 53.257000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map2_15.png',
        x: 15,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.235900,
        bottom: 53.257000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map2_16.png',
        x: 16,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.245900,
        bottom: 53.257000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map2_17.png',
        x: 17,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.255900,
        bottom: 53.257000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map2_18.png',
        x: 18,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.267000,
        left: 50.265900,
        bottom: 53.257000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map2_19.png',
        x: 19,
        y: 2,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.257000,
        left: 50.075900,
        bottom: 53.247000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map3_0.png',
        x: 0,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.085900,
        bottom: 53.247000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map3_1.png',
        x: 1,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.095900,
        bottom: 53.247000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map3_2.png',
        x: 2,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.105900,
        bottom: 53.247000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map3_3.png',
        x: 3,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.115900,
        bottom: 53.247000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map3_4.png',
        x: 4,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.125900,
        bottom: 53.247000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map3_5.png',
        x: 5,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.135900,
        bottom: 53.247000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map3_6.png',
        x: 6,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.145900,
        bottom: 53.247000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map3_7.png',
        x: 7,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.155900,
        bottom: 53.247000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map3_8.png',
        x: 8,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.165900,
        bottom: 53.247000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map3_9.png',
        x: 9,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.175900,
        bottom: 53.247000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map3_10.png',
        x: 10,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.185900,
        bottom: 53.247000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map3_11.png',
        x: 11,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.195900,
        bottom: 53.247000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map3_12.png',
        x: 12,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.205900,
        bottom: 53.247000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map3_13.png',
        x: 13,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.215900,
        bottom: 53.247000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map3_14.png',
        x: 14,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.225900,
        bottom: 53.247000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map3_15.png',
        x: 15,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.235900,
        bottom: 53.247000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map3_16.png',
        x: 16,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.245900,
        bottom: 53.247000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map3_17.png',
        x: 17,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.255900,
        bottom: 53.247000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map3_18.png',
        x: 18,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.257000,
        left: 50.265900,
        bottom: 53.247000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map3_19.png',
        x: 19,
        y: 3,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.247000,
        left: 50.075900,
        bottom: 53.237000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map4_0.png',
        x: 0,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.085900,
        bottom: 53.237000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map4_1.png',
        x: 1,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.095900,
        bottom: 53.237000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map4_2.png',
        x: 2,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.105900,
        bottom: 53.237000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map4_3.png',
        x: 3,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.115900,
        bottom: 53.237000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map4_4.png',
        x: 4,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.125900,
        bottom: 53.237000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map4_5.png',
        x: 5,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.135900,
        bottom: 53.237000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map4_6.png',
        x: 6,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.145900,
        bottom: 53.237000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map4_7.png',
        x: 7,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.155900,
        bottom: 53.237000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map4_8.png',
        x: 8,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.165900,
        bottom: 53.237000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map4_9.png',
        x: 9,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.175900,
        bottom: 53.237000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map4_10.png',
        x: 10,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.185900,
        bottom: 53.237000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map4_11.png',
        x: 11,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.195900,
        bottom: 53.237000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map4_12.png',
        x: 12,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.205900,
        bottom: 53.237000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map4_13.png',
        x: 13,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.215900,
        bottom: 53.237000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map4_14.png',
        x: 14,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.225900,
        bottom: 53.237000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map4_15.png',
        x: 15,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.235900,
        bottom: 53.237000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map4_16.png',
        x: 16,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.245900,
        bottom: 53.237000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map4_17.png',
        x: 17,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.255900,
        bottom: 53.237000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map4_18.png',
        x: 18,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.247000,
        left: 50.265900,
        bottom: 53.237000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map4_19.png',
        x: 19,
        y: 4,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.237000,
        left: 50.075900,
        bottom: 53.227000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map5_0.png',
        x: 0,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.085900,
        bottom: 53.227000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map5_1.png',
        x: 1,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.095900,
        bottom: 53.227000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map5_2.png',
        x: 2,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.105900,
        bottom: 53.227000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map5_3.png',
        x: 3,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.115900,
        bottom: 53.227000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map5_4.png',
        x: 4,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.125900,
        bottom: 53.227000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map5_5.png',
        x: 5,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.135900,
        bottom: 53.227000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map5_6.png',
        x: 6,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.145900,
        bottom: 53.227000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map5_7.png',
        x: 7,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.155900,
        bottom: 53.227000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map5_8.png',
        x: 8,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.165900,
        bottom: 53.227000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map5_9.png',
        x: 9,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.175900,
        bottom: 53.227000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map5_10.png',
        x: 10,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.185900,
        bottom: 53.227000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map5_11.png',
        x: 11,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.195900,
        bottom: 53.227000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map5_12.png',
        x: 12,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.205900,
        bottom: 53.227000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map5_13.png',
        x: 13,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.215900,
        bottom: 53.227000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map5_14.png',
        x: 14,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.225900,
        bottom: 53.227000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map5_15.png',
        x: 15,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.235900,
        bottom: 53.227000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map5_16.png',
        x: 16,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.245900,
        bottom: 53.227000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map5_17.png',
        x: 17,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.255900,
        bottom: 53.227000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map5_18.png',
        x: 18,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.237000,
        left: 50.265900,
        bottom: 53.227000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map5_19.png',
        x: 19,
        y: 5,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.227000,
        left: 50.075900,
        bottom: 53.217000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map6_0.png',
        x: 0,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.085900,
        bottom: 53.217000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map6_1.png',
        x: 1,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.095900,
        bottom: 53.217000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map6_2.png',
        x: 2,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.105900,
        bottom: 53.217000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map6_3.png',
        x: 3,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.115900,
        bottom: 53.217000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map6_4.png',
        x: 4,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.125900,
        bottom: 53.217000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map6_5.png',
        x: 5,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.135900,
        bottom: 53.217000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map6_6.png',
        x: 6,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.145900,
        bottom: 53.217000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map6_7.png',
        x: 7,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.155900,
        bottom: 53.217000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map6_8.png',
        x: 8,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.165900,
        bottom: 53.217000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map6_9.png',
        x: 9,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.175900,
        bottom: 53.217000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map6_10.png',
        x: 10,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.185900,
        bottom: 53.217000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map6_11.png',
        x: 11,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.195900,
        bottom: 53.217000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map6_12.png',
        x: 12,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.205900,
        bottom: 53.217000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map6_13.png',
        x: 13,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.215900,
        bottom: 53.217000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map6_14.png',
        x: 14,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.225900,
        bottom: 53.217000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map6_15.png',
        x: 15,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.235900,
        bottom: 53.217000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map6_16.png',
        x: 16,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.245900,
        bottom: 53.217000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map6_17.png',
        x: 17,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.255900,
        bottom: 53.217000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map6_18.png',
        x: 18,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.227000,
        left: 50.265900,
        bottom: 53.217000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map6_19.png',
        x: 19,
        y: 6,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.217000,
        left: 50.075900,
        bottom: 53.207000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map7_0.png',
        x: 0,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.085900,
        bottom: 53.207000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map7_1.png',
        x: 1,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.095900,
        bottom: 53.207000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map7_2.png',
        x: 2,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.105900,
        bottom: 53.207000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map7_3.png',
        x: 3,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.115900,
        bottom: 53.207000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map7_4.png',
        x: 4,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.125900,
        bottom: 53.207000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map7_5.png',
        x: 5,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.135900,
        bottom: 53.207000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map7_6.png',
        x: 6,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.145900,
        bottom: 53.207000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map7_7.png',
        x: 7,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.155900,
        bottom: 53.207000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map7_8.png',
        x: 8,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.165900,
        bottom: 53.207000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map7_9.png',
        x: 9,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.175900,
        bottom: 53.207000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map7_10.png',
        x: 10,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.185900,
        bottom: 53.207000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map7_11.png',
        x: 11,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.195900,
        bottom: 53.207000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map7_12.png',
        x: 12,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.205900,
        bottom: 53.207000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map7_13.png',
        x: 13,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.215900,
        bottom: 53.207000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map7_14.png',
        x: 14,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.225900,
        bottom: 53.207000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map7_15.png',
        x: 15,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.235900,
        bottom: 53.207000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map7_16.png',
        x: 16,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.245900,
        bottom: 53.207000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map7_17.png',
        x: 17,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.255900,
        bottom: 53.207000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map7_18.png',
        x: 18,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.217000,
        left: 50.265900,
        bottom: 53.207000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map7_19.png',
        x: 19,
        y: 7,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.207000,
        left: 50.075900,
        bottom: 53.197000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map8_0.png',
        x: 0,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.085900,
        bottom: 53.197000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map8_1.png',
        x: 1,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.095900,
        bottom: 53.197000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map8_2.png',
        x: 2,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.105900,
        bottom: 53.197000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map8_3.png',
        x: 3,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.115900,
        bottom: 53.197000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map8_4.png',
        x: 4,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.125900,
        bottom: 53.197000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map8_5.png',
        x: 5,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.135900,
        bottom: 53.197000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map8_6.png',
        x: 6,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.145900,
        bottom: 53.197000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map8_7.png',
        x: 7,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.155900,
        bottom: 53.197000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map8_8.png',
        x: 8,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.165900,
        bottom: 53.197000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map8_9.png',
        x: 9,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.175900,
        bottom: 53.197000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map8_10.png',
        x: 10,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.185900,
        bottom: 53.197000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map8_11.png',
        x: 11,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.195900,
        bottom: 53.197000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map8_12.png',
        x: 12,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.205900,
        bottom: 53.197000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map8_13.png',
        x: 13,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.215900,
        bottom: 53.197000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map8_14.png',
        x: 14,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.225900,
        bottom: 53.197000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map8_15.png',
        x: 15,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.235900,
        bottom: 53.197000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map8_16.png',
        x: 16,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.245900,
        bottom: 53.197000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map8_17.png',
        x: 17,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.255900,
        bottom: 53.197000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map8_18.png',
        x: 18,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.207000,
        left: 50.265900,
        bottom: 53.197000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map8_19.png',
        x: 19,
        y: 8,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.197000,
        left: 50.075900,
        bottom: 53.187000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map9_0.png',
        x: 0,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.085900,
        bottom: 53.187000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map9_1.png',
        x: 1,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.095900,
        bottom: 53.187000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map9_2.png',
        x: 2,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.105900,
        bottom: 53.187000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map9_3.png',
        x: 3,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.115900,
        bottom: 53.187000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map9_4.png',
        x: 4,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.125900,
        bottom: 53.187000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map9_5.png',
        x: 5,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.135900,
        bottom: 53.187000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map9_6.png',
        x: 6,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.145900,
        bottom: 53.187000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map9_7.png',
        x: 7,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.155900,
        bottom: 53.187000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map9_8.png',
        x: 8,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.165900,
        bottom: 53.187000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map9_9.png',
        x: 9,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.175900,
        bottom: 53.187000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map9_10.png',
        x: 10,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.185900,
        bottom: 53.187000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map9_11.png',
        x: 11,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.195900,
        bottom: 53.187000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map9_12.png',
        x: 12,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.205900,
        bottom: 53.187000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map9_13.png',
        x: 13,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.215900,
        bottom: 53.187000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map9_14.png',
        x: 14,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.225900,
        bottom: 53.187000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map9_15.png',
        x: 15,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.235900,
        bottom: 53.187000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map9_16.png',
        x: 16,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.245900,
        bottom: 53.187000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map9_17.png',
        x: 17,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.255900,
        bottom: 53.187000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map9_18.png',
        x: 18,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.197000,
        left: 50.265900,
        bottom: 53.187000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map9_19.png',
        x: 19,
        y: 9,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.187000,
        left: 50.075900,
        bottom: 53.177000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map10_0.png',
        x: 0,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.085900,
        bottom: 53.177000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map10_1.png',
        x: 1,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.095900,
        bottom: 53.177000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map10_2.png',
        x: 2,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.105900,
        bottom: 53.177000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map10_3.png',
        x: 3,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.115900,
        bottom: 53.177000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map10_4.png',
        x: 4,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.125900,
        bottom: 53.177000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map10_5.png',
        x: 5,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.135900,
        bottom: 53.177000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map10_6.png',
        x: 6,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.145900,
        bottom: 53.177000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map10_7.png',
        x: 7,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.155900,
        bottom: 53.177000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map10_8.png',
        x: 8,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.165900,
        bottom: 53.177000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map10_9.png',
        x: 9,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.175900,
        bottom: 53.177000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map10_10.png',
        x: 10,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.185900,
        bottom: 53.177000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map10_11.png',
        x: 11,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.195900,
        bottom: 53.177000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map10_12.png',
        x: 12,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.205900,
        bottom: 53.177000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map10_13.png',
        x: 13,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.215900,
        bottom: 53.177000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map10_14.png',
        x: 14,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.225900,
        bottom: 53.177000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map10_15.png',
        x: 15,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.235900,
        bottom: 53.177000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map10_16.png',
        x: 16,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.245900,
        bottom: 53.177000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map10_17.png',
        x: 17,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.255900,
        bottom: 53.177000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map10_18.png',
        x: 18,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.187000,
        left: 50.265900,
        bottom: 53.177000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map10_19.png',
        x: 19,
        y: 10,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.177000,
        left: 50.075900,
        bottom: 53.167000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map11_0.png',
        x: 0,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.085900,
        bottom: 53.167000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map11_1.png',
        x: 1,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.095900,
        bottom: 53.167000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map11_2.png',
        x: 2,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.105900,
        bottom: 53.167000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map11_3.png',
        x: 3,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.115900,
        bottom: 53.167000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map11_4.png',
        x: 4,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.125900,
        bottom: 53.167000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map11_5.png',
        x: 5,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.135900,
        bottom: 53.167000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map11_6.png',
        x: 6,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.145900,
        bottom: 53.167000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map11_7.png',
        x: 7,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.155900,
        bottom: 53.167000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map11_8.png',
        x: 8,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.165900,
        bottom: 53.167000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map11_9.png',
        x: 9,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.175900,
        bottom: 53.167000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map11_10.png',
        x: 10,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.185900,
        bottom: 53.167000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map11_11.png',
        x: 11,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.195900,
        bottom: 53.167000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map11_12.png',
        x: 12,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.205900,
        bottom: 53.167000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map11_13.png',
        x: 13,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.215900,
        bottom: 53.167000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map11_14.png',
        x: 14,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.225900,
        bottom: 53.167000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map11_15.png',
        x: 15,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.235900,
        bottom: 53.167000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map11_16.png',
        x: 16,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.245900,
        bottom: 53.167000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map11_17.png',
        x: 17,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.255900,
        bottom: 53.167000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map11_18.png',
        x: 18,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.177000,
        left: 50.265900,
        bottom: 53.167000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map11_19.png',
        x: 19,
        y: 11,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.167000,
        left: 50.075900,
        bottom: 53.157000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map12_0.png',
        x: 0,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.085900,
        bottom: 53.157000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map12_1.png',
        x: 1,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.095900,
        bottom: 53.157000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map12_2.png',
        x: 2,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.105900,
        bottom: 53.157000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map12_3.png',
        x: 3,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.115900,
        bottom: 53.157000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map12_4.png',
        x: 4,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.125900,
        bottom: 53.157000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map12_5.png',
        x: 5,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.135900,
        bottom: 53.157000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map12_6.png',
        x: 6,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.145900,
        bottom: 53.157000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map12_7.png',
        x: 7,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.155900,
        bottom: 53.157000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map12_8.png',
        x: 8,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.165900,
        bottom: 53.157000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map12_9.png',
        x: 9,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.175900,
        bottom: 53.157000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map12_10.png',
        x: 10,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.185900,
        bottom: 53.157000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map12_11.png',
        x: 11,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.195900,
        bottom: 53.157000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map12_12.png',
        x: 12,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.205900,
        bottom: 53.157000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map12_13.png',
        x: 13,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.215900,
        bottom: 53.157000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map12_14.png',
        x: 14,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.225900,
        bottom: 53.157000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map12_15.png',
        x: 15,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.235900,
        bottom: 53.157000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map12_16.png',
        x: 16,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.245900,
        bottom: 53.157000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map12_17.png',
        x: 17,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.255900,
        bottom: 53.157000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map12_18.png',
        x: 18,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.167000,
        left: 50.265900,
        bottom: 53.157000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map12_19.png',
        x: 19,
        y: 12,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.157000,
        left: 50.075900,
        bottom: 53.147000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map13_0.png',
        x: 0,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.085900,
        bottom: 53.147000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map13_1.png',
        x: 1,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.095900,
        bottom: 53.147000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map13_2.png',
        x: 2,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.105900,
        bottom: 53.147000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map13_3.png',
        x: 3,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.115900,
        bottom: 53.147000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map13_4.png',
        x: 4,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.125900,
        bottom: 53.147000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map13_5.png',
        x: 5,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.135900,
        bottom: 53.147000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map13_6.png',
        x: 6,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.145900,
        bottom: 53.147000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map13_7.png',
        x: 7,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.155900,
        bottom: 53.147000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map13_8.png',
        x: 8,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.165900,
        bottom: 53.147000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map13_9.png',
        x: 9,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.175900,
        bottom: 53.147000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map13_10.png',
        x: 10,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.185900,
        bottom: 53.147000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map13_11.png',
        x: 11,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.195900,
        bottom: 53.147000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map13_12.png',
        x: 12,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.205900,
        bottom: 53.147000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map13_13.png',
        x: 13,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.215900,
        bottom: 53.147000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map13_14.png',
        x: 14,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.225900,
        bottom: 53.147000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map13_15.png',
        x: 15,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.235900,
        bottom: 53.147000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map13_16.png',
        x: 16,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.245900,
        bottom: 53.147000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map13_17.png',
        x: 17,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.255900,
        bottom: 53.147000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map13_18.png',
        x: 18,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.157000,
        left: 50.265900,
        bottom: 53.147000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map13_19.png',
        x: 19,
        y: 13,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ],[{
        top: 53.147000,
        left: 50.075900,
        bottom: 53.137000,
        right: 50.085900,
        width: 198,
        height: 332,
        image: 'map14_0.png',
        x: 0,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.085900,
        bottom: 53.137000,
        right: 50.095900,
        width: 198,
        height: 332,
        image: 'map14_1.png',
        x: 1,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.095900,
        bottom: 53.137000,
        right: 50.105900,
        width: 198,
        height: 332,
        image: 'map14_2.png',
        x: 2,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.105900,
        bottom: 53.137000,
        right: 50.115900,
        width: 198,
        height: 332,
        image: 'map14_3.png',
        x: 3,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.115900,
        bottom: 53.137000,
        right: 50.125900,
        width: 198,
        height: 332,
        image: 'map14_4.png',
        x: 4,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.125900,
        bottom: 53.137000,
        right: 50.135900,
        width: 198,
        height: 332,
        image: 'map14_5.png',
        x: 5,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.135900,
        bottom: 53.137000,
        right: 50.145900,
        width: 198,
        height: 332,
        image: 'map14_6.png',
        x: 6,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.145900,
        bottom: 53.137000,
        right: 50.155900,
        width: 198,
        height: 332,
        image: 'map14_7.png',
        x: 7,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.155900,
        bottom: 53.137000,
        right: 50.165900,
        width: 198,
        height: 332,
        image: 'map14_8.png',
        x: 8,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.165900,
        bottom: 53.137000,
        right: 50.175900,
        width: 198,
        height: 332,
        image: 'map14_9.png',
        x: 9,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.175900,
        bottom: 53.137000,
        right: 50.185900,
        width: 198,
        height: 332,
        image: 'map14_10.png',
        x: 10,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.185900,
        bottom: 53.137000,
        right: 50.195900,
        width: 198,
        height: 332,
        image: 'map14_11.png',
        x: 11,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.195900,
        bottom: 53.137000,
        right: 50.205900,
        width: 198,
        height: 332,
        image: 'map14_12.png',
        x: 12,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.205900,
        bottom: 53.137000,
        right: 50.215900,
        width: 198,
        height: 332,
        image: 'map14_13.png',
        x: 13,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.215900,
        bottom: 53.137000,
        right: 50.225900,
        width: 198,
        height: 332,
        image: 'map14_14.png',
        x: 14,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.225900,
        bottom: 53.137000,
        right: 50.235900,
        width: 198,
        height: 332,
        image: 'map14_15.png',
        x: 15,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.235900,
        bottom: 53.137000,
        right: 50.245900,
        width: 198,
        height: 332,
        image: 'map14_16.png',
        x: 16,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.245900,
        bottom: 53.137000,
        right: 50.255900,
        width: 198,
        height: 332,
        image: 'map14_17.png',
        x: 17,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.255900,
        bottom: 53.137000,
        right: 50.265900,
        width: 198,
        height: 332,
        image: 'map14_18.png',
        x: 18,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ,{
        top: 53.147000,
        left: 50.265900,
        bottom: 53.137000,
        right: 50.275900,
        width: 198,
        height: 332,
        image: 'map14_19.png',
        x: 19,
        y: 14,
        longWidth: 0.010000,
        latHeight: 0.010000
    }
    ]]
    map = {
        top: 53.287000,
        left: 50.075900,
        bottom: 53.137000, 
        right: 50.275900, 
        width: 3960,
        height: 4980
    };

    constructor() {
        this.map.longWidth = Math.abs(this.map.right - this.map.left);
        this.map.latHeight = Math.abs(this.map.top - this.map.bottom);
        this.rows = this.tiles.length
        this.columns = this.tiles[0].length

        // let tileHeight = this.map.height/this.rows;
        // let tileWidth = this.map.width/this.columns;
        // let tileLongWight = this.map.longWidth/this.rows;
        // let tileLatHeight = this.map.latHeight/this.columns;
    
        // for (let i = 0; i < this.rows; i++) {
        //     let columns = []
        //     for (let j = 0; j < this.columns; j++) {
        //         const tile = new Tile(
        //             53.2095 + (i + 1) * tileLatHeight,
        //             50.0824 + j * tileLongWight,
        //             53.1633 + i * tileLatHeight,
        //             50.0824 + (j + 1) * tileLongWight,
        //             tileWidth,
        //             tileHeight,
        //             'image/map0.png'
        //         );
        //         tile.y = i;
        //         tile.x = j;
        //         columns.push(tile)
        //     }
        //     this.tiles.push(columns)
        // }

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
        showToast({content: 'no tiles for ' + x + " " + y});
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