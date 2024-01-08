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
    tile: null,
    input: {
      offsetTop: 0,
      offsetLeft: 0,
      scale: 1
    },
    location: {
      x: 50.0928,
      y: 53.1881,
      status: 'A'
    },
    offset: 50,
    firstLocation: true,
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
      if (!this.state.firstLocation) {
        this.onTimer()
      }
    }, 5*1000)
  },
  build() {
    logger.debug("page build invoked");
    // hmUI.createWidget(hmUI.widget.TEXT, TEXT_STYLE);
    this.state.canvas = hmUI.createWidget(hmUI.widget.CANVAS, {
      x: 0,
      y: 0,
      w: 480,
      h: 480
    })

    onGesture({
      callback: (event) => {
        if (event === GESTURE_UP) {
          this.state.input.offsetTop--
          this.onTileUpdate()
        } else if (event === GESTURE_DOWN) {
          this.state.input.offsetTop++
          this.onTileUpdate()
        } else if (event === GESTURE_LEFT) {
          this.state.input.offsetLeft--
          this.onTileUpdate()
        } else if (event === GESTURE_RIGHT) {
          this.state.input.offsetLeft++
          this.onTileUpdate()
        }
        return true
      },
    })

    hmUI.createWidget(hmUI.widget.BUTTON, {
      x: 480-100,
      y: 480-150,
      w: 50,
      h: 50,
      text: 'c',
      color: 0xff0000,
      normal_color: 0xffffffff,
      press_color: 0x00ffffff,
      click_func: (button_widget) => {
        this.onCenter( 50.0928, 53.1881)
      }
    })

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
        if (this.state.input.scale < 10) {
          this.state.input.scale += 0.3
          this.onTileUpdate()
        }
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
          this.state.input.scale -= 0.3
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
      y: 480-30,
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

    this.state.text = hmUI.createWidget(hmUI.widget.TEXT, TEXT_STYLE);

    // canvas.setPaint({
    //   color: 0xffffff,
    //   line_width: 10
    // })

    this.state.mapRenderer = new MapRenderer(this.state.canvas, 480, 480, this.state.offset)

    this.renderTile()

    this.state.geolocation.onChange(() => {
      const {location} = this.state

      if (this.state.geolocation.getStatus() === 'A') {
        // location.x =  this.state.geolocation.getLongitude()
        // location.y = this.state.geolocation.getLatitude()
        location.status = this.state.geolocation.getStatus()

        if (this.state.firstLocation) {
          this.state.firstLocation = false
          this.onCenter()
          // this.renderLocation(location.x, location.y)
        }
      }
    })
  },
  onTimer() {
    const {location} = this.state

    this.renderTile()
    this.renderLocation(location.x, location.y)
  },
  onTileUpdate() {
    const {location} = this.state


    this.renderTile()
    this.renderLocation(location.x, location.y)
  },
  renderTile() {
    const {offsetLeft, offsetTop, scale} = this.state.input

    // TODO check if the current position in bounds
    // otherwise get a new tile for the currect position
    // otherwise show current tile

    this.state.mapRenderer.render(offsetTop, offsetLeft, scale)

    // TODO check if other tiles should be displayed
  },
  renderLocation(x, y) {
    const {width, height, left, top, bottom, right, longWidth, latHeight} = this.state.map
    const {offsetLeft, offsetTop, scale} = this.state.input
    const {canvas, location, offset} = this.state

    if (location.status != 'A') {
      logger.debug("skip location with status" + location.status);
      return
    }

    this.state.text.setProperty(hmUI.prop.MORE, { 
      text: location.x + " " + location.y
    })

    // TODO check if the current position in bounds 
    // otherwise if user did not move map away - get a new tile for the current position
    // otherwise do not show location and print message

    const latPosition = Math.abs(top - y)
    const longPosition = Math.abs(left - x)

    x = width*scale*longPosition/longWidth
    y = height*scale*latPosition/latHeight

    canvas.drawCircle({
      center_x: x + offsetLeft*scale*offset,
      center_y: y + offsetTop*scale*offset,
      radius: 5,
      color: 0xff0000
    })

  },
  onCenter() {
      const {width, height, left, top, bottom, right, longWidth, latHeight} = this.state.map
      const {offsetLeft, offsetTop, scale} = this.state.input
      const {canvas, location, offset} = this.state
      var x = location.x
      var y = location.y
  
      if (location.status != 'A') {
        logger.debug("skip location with status" + location.status);
        return
      }
  
      // TODO check if the current position in bounds 
      // otherwise if user did not move map away - get a new tile for the current position
      // otherwise do not show location and print message
  
      // const longWidth = Math.abs(right - left)
      // const latHeight = Math.abs(top - bottom)
  
      const latPosition = Math.abs(top - y)
      const longPosition = Math.abs(left - x)
  
      x = width*scale*longPosition/longWidth //+ offsetLeft*scale*offset
      y = height*scale*latPosition/latHeight //+ offsetTop*scale*offset

      showToast({content: y + "for " + height*scale}) 

      const newTop = y - 240
      const newLeft = x - 240
      this.state.input.offsetLeft = -Math.floor(newLeft/(offset*scale))
      this.state.input.offsetTop = -Math.floor(newTop/(offset*scale))

      // showToast({content:  this.state.input.offsetLeft  + ' ' + this.state.input.offsetTop});

      this.onTileUpdate()

  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
    clearInterval(this.state.intervalId)
    this.state.geolocation.stop()
  },
});
