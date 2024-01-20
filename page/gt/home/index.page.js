import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { TEXT_STYLE } from "zosLoader:./index.page.[pf].layout.js";
import { Geolocation } from '@zos/sensor'
import { onGesture, GESTURE_UP, GESTURE_RIGHT, GESTURE_DOWN, GESTURE_LEFT, showToast } from '@zos/interaction'
import { getDeviceInfo } from "@zos/device";
import MapRenderer from "./maprenderer";
import TilesManager from "./tiles/tiles-manager";



const logger = Logger.getLogger("helloworld");
Page({
  state: {
    isSimulator: true,
    input: {
      offsetTop: 0,
      offsetLeft: 0,
      scale: 1
    },
    location: {
    },
    settings: {
      updateSeconds: 5
    },
    offset: 50,
    canvas: null,
    geolocation: null,
    text: null,
    mapRenderer: null,
    tilesManager: new TilesManager()
  },

  onInit() {
    logger.debug("page onInit invoked");

    this.state.geolocation = new Geolocation()
    this.state.geolocation.start()

    this.state.map = this.state.tilesManager.map;

    this.state.intervalId = setInterval(() => {
      if (this.state.location.status) {
        // already got any locaction from geolocation
        this.onTimer()
      }
    }, this.state.settings.updateSeconds * 1000)
  },

  build() {
    logger.debug("page build invoked");

    this.state.canvas = hmUI.createWidget(hmUI.widget.CANVAS, {
      x: 0,
      y: 0,
      w: 480,
      h: 480
    })

    this.state.canvas.addEventListener(hmUI.event.MOVE_IN, (info) => {
      this.updateScale(0.3)
      this.onTileUpdate()
    })

    this.state.canvas.addEventListener(hmUI.event.MOVE_OUT, (info) => {
      this.updateScale(-0.3)
      this.onTileUpdate()
    })

    this.state.canvas.addEventListener(hmUI.event.MOVE, (info) => {
      this.state.input.offsetLeft += Math.floor((info.x - this.state.input.pressX)) //diffX
      this.state.input.offsetTop += Math.floor((info.y - this.state.input.pressY)) //diffY
      this.state.input.pressX = info.x
      this.state.input.pressY = info.y
      this.onTileUpdate()

    })

    this.state.canvas.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
      this.state.input.pressX = info.x
      this.state.input.pressY = info.y
    })

    // onKey({
    //   callback: (key, keyEvent) => {
    //     if (key) {
    //       showToast({content: 'key ' + key})
    //     }
    //     return true
    //   },
    // })

    // this.state.canvas.addEventListener(hmUI.event.CLICK_UP, (info) => {
    //   this.state.input.offsetLeft+=Math.floor((info.x - this.state.input.pressX)) //diffX
    //   this.state.input.offsetTop+=Math.floor((info.y - this.state.input.pressY)) //diffY
    //   this.onTileUpdate()
    // })

    onGesture({
      callback: (event) => {
        if (event === GESTURE_UP) {
          // this.state.input.offsetTop-=this.state.offset*this.state.input.scale
          // this.onTileUpdate()
        } else if (event === GESTURE_DOWN) {
          // this.state.input.offsetTop+=this.state.offset*this.state.input.scale
          // this.onTileUpdate()
        } else if (event === GESTURE_LEFT) {
          // this.state.input.offsetLeft-=this.state.offset*this.state.input.scale
          // this.onTileUpdate()
        } else if (event === GESTURE_RIGHT) {
          // this.state.input.offsetLeft+=this.state.offset*this.state.input.scale
          // this.onTileUpdate()
        }
        return true
      },
    })

    if (this.state.isSimulator) {
      this.buildSimulator()
    }

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 480 - 100,
      y: 480 - 150,
      w: 50,
      h: 50,
      text: 'c',
      color: 0xff0000,
      normal_color: 0xffffffff,
      press_color: 0x00ffffff,
      click_func: (button_widget) => {
        this.onCenter(50.0928, 53.1881)
      }
    })

    this.state.text = hmUI.createWidget(hmUI.widget.TEXT, TEXT_STYLE);

    // canvas.setPaint({
    //   color: 0xffffff,
    //   line_width: 10
    // })

    this.state.mapRenderer = new MapRenderer(this.state.canvas, 480, 480)

    this.renderTile()

    this.state.geolocation.onChange(() => {
      // if (this.state.geolocation.getStatus() === 'A') {
      const firstLocation = this.state.location.status ? false: true

      if (this.state.isSimulator) {
        this.state.location = {
            // x: 50.0883,
            // y: 53.186,
            // x: 50.1261,
            // y: 53.2031,
            // x: 50.126901,
            // y: 53.168001,
            //x: 50.09317,
            //y: 53.18978,

            x: 50.179878333,
            y: 53.208288333,
            status: 'A'
          }
      } else {
        this.state.location = {
            x: this.state.geolocation.getLongitude(),
            y: this.state.geolocation.getLatitude(),
            status: this.state.geolocation.getStatus()
          }
      }


      if (firstLocation && (this.state.geolocation.getStatus() === 'A')) {
        this.onCenter()
        this.renderLocation()
      }
    })
  },

  buildSimulator() {
    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 50,
      y: 100,
      w: 50,
      h: 50,
      text: '+',
      color: 0xff0000,
      normal_color: 0xffffffff,
      press_color: 0x00ffffff,
      click_func: (button_widget) => {
        this.updateScale(0.3)
        this.onTileUpdate()
      }
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 100,
      y: 100,
      w: 50,
      h: 50,
      text: '-',
      color: 0xff0000,
      normal_color: 0xffffffff,
      press_color: 0x00ffffff,
      click_func: (button_widget) => {
        if (this.state.input.scale > 0.3) {        
          this.updateScale(-0.3)
          this.onTileUpdate()
        }
      }
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 480 - 30,
      y: 225,
      w: 30,
      h: 30,
      text: '→',
      color: 0xff0000,
      normal_color: 0xffffffff,
      press_color: 0x00ffffff,
      click_func: (button_widget) => {
        this.state.input.offsetLeft--
        this.onTileUpdate()
      }
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 0,
      y: 225,
      w: 30,
      h: 30,
      text: '←',
      color: 0xff0000,
      normal_color: 0xffffffff,
      press_color: 0x00ffffff,
      click_func: (button_widget) => {
        this.state.input.offsetLeft++
        this.onTileUpdate()
      }
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 225,
      y: 0,
      w: 30,
      h: 30,
      text: '↑',
      color: 0xff0000,
      normal_color: 0xffffffff,
      press_color: 0x00ffffff,
      click_func: (button_widget) => {
        this.state.input.offsetTop++
        this.onTileUpdate()
      }
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 225,
      y: 480 - 30,
      w: 30,
      h: 30,
      text: '↓',
      color: 0xff0000,
      normal_color: 0xffffffff,
      press_color: 0x00ffffff,
      click_func: (button_widget) => {
        this.state.input.offsetTop--
        this.onTileUpdate()
      }
    })
  },

  onTimer() {
    const { location } = this.state

    this.renderLocation(location.x, location.y)
  },
  onTileUpdate() {
    const { location } = this.state


    this.renderTile()
    this.renderLocation(location.x, location.y)
  },
  renderTile() {
    const { offsetLeft, offsetTop, scale } = this.state.input

    this.state.mapRenderer.render(offsetTop, offsetLeft, scale)
  },
  renderLocation() {
    const { grid } = this.state.map
    const { offsetLeft, offsetTop, scale } = this.state.input
    const { canvas, location, tilesManager} = this.state
    var x = location.x
    var y = location.y

    if (!location.status)  {
      // Do not render until any location is set
      logger.debug("skip location with null status");
      return
    }

    if (location.status != 'A') {
      this.setStatusText("No GPS")
    } else {
      this.setStatusText(x + " " + y)
    }

    // TODO check if the current position in bounds 
    // otherwise if user did not move map away - get a new tile for the current position
    // otherwise do not show location and print message

    const latPosition = Math.abs(grid.top - y)
    const longPosition = Math.abs(grid.left - x)

    x = tilesManager.getMapWidth(scale) * longPosition * 1.0 / grid.longWidth
    y = tilesManager.getMapHeight(scale) * latPosition * 1.0 / grid.latHeight

    canvas.drawCircle({
      center_x: x + offsetLeft,
      center_y: y + offsetTop,
      radius: 5,
      color:  0xff0000 //location.status != 'A' ? 0xcccccc : 0xff0000
    })

  },
  onCenter() {
    const { grid } = this.state.map
    const { scale } = this.state.input
    const { location, tilesManager } = this.state
    var x = location.x
    var y = location.y


    if (!location.status) {
      logger.debug("skip location with null status ");
      return
    }

    const latPosition = Math.abs(grid.top - y)
    const longPosition = Math.abs(grid.left - x)

    // if ((latPosition > grid.latHeight) || (longPosition > grid.longPosition)) {
    //   // ? do nothing if outside grid bounds
    //   logger.debug("skip location outside grid bounds " + x + " " + y);
    //   return
    // }

    x = - tilesManager.getMapWidth(scale) * longPosition / grid.longWidth
    y = - tilesManager.getMapHeight(scale) * latPosition / grid.latHeight

    this.state.input.offsetLeft = x + 240
    this.state.input.offsetTop =  y + 240

    this.onTileUpdate()

  },
  updateScale(diff) {
    if (this.state.input.offsetLeft > 0) {
      // black space on left
    } else if (this.state.input.offsetLeft + this.state.tilesManager.getMapWidth(this.state.input.scale) < 480){
      // black space on right
      this.state.input.offsetLeft += Math.floor(this.state.tilesManager.getMapWidth(this.state.input.scale) - this.state.tilesManager.getMapWidth(this.state.input.scale + diff))
    } else {
      this.state.input.offsetLeft = (this.state.input.scale + diff)*(this.state.input.offsetLeft -240)/this.state.input.scale + 240
    }  

    if (this.state.input.offsetTop > 0) { 
      // black space on top
    } else  if (this.state.input.offsetTop + this.state.tilesManager.getMapHeight(this.state.input.scale) < 480){
      // black space on bottom
      this.state.input.offsetTop += Math.floor(this.state.tilesManager.getMapHeight(this.state.input.scale) - this.state.tilesManager.getMapHeight(this.state.input.scale + diff))
    } else {
      this.state.input.offsetTop = (this.state.input.scale + diff)*(this.state.input.offsetTop -240)/this.state.input.scale + 240
    }

    this.state.input.scale += diff
  },
  setStatusText(text){
    this.state.text.setProperty(hmUI.prop.MORE, {
      text: text
    })
  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
    clearInterval(this.state.intervalId)
    this.state.geolocation.stop()
  },
});
