import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { TEXT_STYLE } from "zosLoader:./index.page.[pf].layout.js";

const logger = Logger.getLogger("helloworld");
Page({
  onInit() {
    logger.debug("page onInit invoked");
  },
  build() {
    logger.debug("page build invoked");
    hmUI.createWidget(hmUI.widget.TEXT, TEXT_STYLE);
    const canvas = hmUI.createWidget(hmUI.widget.CANVAS, {
      x: 0,
      y: 0,
      w: 300,
      h: 400
    })

    canvas.setPaint({
      color: 0xffffff,
      line_width: 10
    })

    canvas.drawLine({
      x1: 100,
      y1: 100,
      x2: 200,
      y2: 100,
      color: 0xffffff
    })
  },
  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
