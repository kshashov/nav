import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const TEXT_STYLE = {
  text: "No GPS",
  x: px(42),
  y: px(30),
  w: DEVICE_WIDTH - px(42) * 2,
  h: px(30),
  color: 0xFF0000,
  text_size: px(20),
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.WRAP,
};
