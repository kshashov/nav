import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { TEXT_STYLE } from "zosLoader:./index.page.[pf].layout.js";
import { Geolocation } from '@zos/sensor'

const logger = Logger.getLogger("helloworld");
Page({
  state: {
    top: 53.2095,
    left: 50.0824,
    bottom: 53.1633,
    right: 50.1956,
    offsetTop: 0,
    offsetLeft: 0,
    x: 0,
    y: 0,
    canvas: null,
    geolocation: null,
    text: null
  },
  onInit() {
    this.state.geolocation = new Geolocation()
    const callback = () => {
      if (this.state.geolocation.getStatus() === 'A') {
        this.state.y =  this.state.geolocation.getLatitude()
        this.state.x =  this.state.geolocation.getLongitude()
        // const text = hmUI.createWidget(hmUI.widget.TEXT, TEXT_STYLE);
        // text.text = this.state.x
      }
    }   
    this.state.geolocation.start()
    this.state.geolocation.onChange(callback)
    logger.debug("page onInit invoked");
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
        this.state.offsetLeft -= 50
        this.renderPosition(1)
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
        this.state.offsetLeft += 50
        this.renderPosition(1)
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
        this.state.offsetTop += 50
        this.renderPosition(1)
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
        this.state.offsetTop -= 50
        this.renderPosition(1)
      }
    })

    this.state.text = hmUI.createWidget(hmUI.widget.TEXT, TEXT_STYLE);

    // canvas.setPaint({
    //   color: 0xffffff,
    //   line_width: 10
    // })

    // this.renderAll(1)
    this.renderPosition(scale)
  },
  renderPosition(scale) {
    // logger.error(this.state.geolocation.getLatitude({format: "DD"}))

    this.state.text.setProperty(hmUI.prop.MORE, {
      text: this.state.geolocation.getLatitude() + " " + this.state.geolocation.getLongitude()
    })
    // this.renderMap(scale, 53.1906, 50.1579)
    this.renderMap(scale,  this.state.geolocation.getLatitude(), this.state.geolocation.getLongitude())
  },
  renderMap(scale, top, left) {
    const width = 1318
    const height = 896

    // TODO check if the current position in bounds

    const longWidth = Math.abs(this.state.right - this.state.left)
    const latHeight = Math.abs(this.state.top - this.state.bottom)

    // const latPosition = left - Math.min(this.state.top , this.state.bottom)
    // const longPosition = left - Math.min(this.state.right , this.state.left)



    // if (this.state.top > this.state.bottom) {
      
    // } else {
    //   const latPosition = top - this.state.top
    // }

    const latPosition = Math.abs(this.state.top - top)
    const longPosition = Math.abs(this.state.left - left)


    const x = width*longPosition/longWidth
    const y = height*latPosition/latHeight

    this.state.canvas.clear({
      x: 0,
      y: 0,
      width: 480,
      height: 480
    });

    this.state.canvas.drawRect({
      x1: 0,
      y1: 0,
      x2: 480,
      y2: 480,
      color: 0x000000
    })

    this.state.canvas.drawImage({
      x: this.state.offsetLeft,
      y: this.state.offsetTop,
      w: width,
      h: height,
      // alpha: 255,
      image: 'image/map0.png'
    })

    this.state.canvas.drawCircle({
      center_x: x + this.state.offsetLeft,
      center_y: y + this.state.offsetTop,
      radius: 5,
      color: 0xff0000
    })

  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
