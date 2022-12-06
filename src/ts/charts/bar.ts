import { colors, darkenHexColor } from "../color";
import { Chart, ChartProperties, FontProperties } from "./chart";

const FONT_DYNAMIC: number = -1;
export { FONT_DYNAMIC };

////////////////////////////////////////////////////////////////////////

export interface BarProperties extends ChartProperties, FontProperties {
  /**
   * The distance of the height (bottom and top) to the edge of the canvas
   * @default 0
   */
  barMarginHeight?: number;

  /**
   * The distance of the width (left and right) to the edge of the canvas
   * @default 0
   */
  barMarginWidth?: number;

  /**
   * The top and bottom distance between
   * the outline of the ProgressBar and the filled in
   * @default 5
   */
  strokeMarginHeight?: number;

  /**
   * The left and right distance between
   * the outline of the ProgressBar and the filled in
   * @default 5
   */
  strokeMarginWidth?: number;

  /**
   * The colors from this array are gradually used for the colors of the values of the bar.
   * If there are less colors in the array than values,
   * the next color is taken from the beginning again.
   * @default {../color.ts::colors}
   */
  valueColors?: string[];

  /**
   * This color is used for the border of the bar.
   * @default #34495e (light gray)
   */
  strokeColor?: string;

  /**
   * How often should the contour be drawn? (Or also: the thickness of the stroke)
   */
  strokeIterations?: number;

  /**
   * Round the value?
   */
  textRound?: boolean;
}

const defaultBarProperties: BarProperties = {
  elementId: "",
  barMarginHeight: 10,
  barMarginWidth: 10,
  strokeMarginHeight: 5,
  strokeMarginWidth: 5,
  valueColors: colors,
  strokeColor: "#34495e",
  strokeIterations: 1,
  fontSize: FONT_DYNAMIC,
  fontFamily: "courier",
  fontSizeFactor: 1.8,
  fontColorFactor: 0.65,
  textRound: true,
};

////////////////////////////////////////////////////////////////////////

