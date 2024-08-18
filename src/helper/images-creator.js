import curvyAxisLinesDots from "../assets/images/curvy chart/curvy-axisLines-dots.png";
import curvyAxisLinesDotsContent from "../assets/images/curvy chart/curvy-axisLines-dots-content.png";
import curvyAxisLinesNoDots from "../assets/images/curvy chart/curvy-axisLines-noDots.png";
import curvyFullLinesDots from "../assets/images/curvy chart/curvy-fullLines-dots.png";
import curvyFullLinesDotsContent from "../assets/images/curvy chart/curvy-fullLines-dots-content.png";
import curvyFullLinesNoDots from "../assets/images/curvy chart/curvy-fullLines-noDots.png";
import curvyHLineDots from "../assets/images/curvy chart/curvy-hLine-dots.png";
import curvyHLineDotsContent from "../assets/images/curvy chart/curvy-hLine-dots-content.png";
import curvyHLineNoDots from "../assets/images/curvy chart/curvy-hLine-noDots.png";
import curvyNoLinesDots from "../assets/images/curvy chart/curvy-noLines-dots.png";
import curvyNoLinesDotsContent from "../assets/images/curvy chart/curvy-noLines-dots-content.png";
import curvyNoLinesNoDots from "../assets/images/curvy chart/curvy-noLines-noDots.png";
import curvyVLineDots from "../assets/images/curvy chart/curvy-vLine-dots.png";
import curvyVLineDotsContent from "../assets/images/curvy chart/curvy-vLine-dots-content.png";
import curvyVLineNoDots from "../assets/images/curvy chart/curvy-vLine-noDots.png";
import curvyXLinesDots from "../assets/images/curvy chart/curvy-xLines-dots.png";
import curvyXLinesDotsContent from "../assets/images/curvy chart/curvy-xLines-dots-content.png";
import curvyXLinesNoDots from "../assets/images/curvy chart/curvy-xLines-noDots.png";
import curvyYLinesDots from "../assets/images/curvy chart/curvy-yLines-dots.png";
import curvyYLinesDotsContent from "../assets/images/curvy chart/curvy-yLines-dots-content.png";
import curvyYLinesNoDots from "../assets/images/curvy chart/curvy-yLines-noDots.png";
///////////////////////////////////////////////
import sharpAxisLinesDots from "../assets/images/sharp chart/sharp-axisLines-dots.png";
import sharpAxisLinesDotsContent from "../assets/images/sharp chart/sharp-axisLines-dots-content.png";
import sharpAxisLinesNoDots from "../assets/images/sharp chart/sharp-axisLines-noDots.png";
import sharpFullLinesDots from "../assets/images/sharp chart/sharp-fullLines-dots.png";
import sharpFullLinesDotsContent from "../assets/images/sharp chart/sharp-fullLines-dots-content.png";
import sharpFullLinesNoDots from "../assets/images/sharp chart/sharp-fullLines-noDots.png";
import sharpHLineDots from "../assets/images/sharp chart/sharp-hLine-dots.png";
import sharpHLineDotsContent from "../assets/images/sharp chart/sharp-hLine-dots-content.png";
import sharpHLineNoDots from "../assets/images/sharp chart/sharp-hLine-noDots.png";
import sharpNoLinesDots from "../assets/images/sharp chart/sharp-noLines-dots.png";
import sharpNoLinesDotsContent from "../assets/images/sharp chart/sharp-noLines-dots-content.png";
import sharpNoLinesNoDots from "../assets/images/sharp chart/sharp-noLines-noDots.png";
import sharpVLineDots from "../assets/images/sharp chart/sharp-vLine-dots.png";
import sharpVLineDotsContent from "../assets/images/sharp chart/sharp-vLine-dots-content.png";
import sharpVLineNoDots from "../assets/images/sharp chart/sharp-vLine-noDots.png";
import sharpXLinesDots from "../assets/images/sharp chart/sharp-xLines-dots.png";
import sharpXLinesDotsContent from "../assets/images/sharp chart/sharp-xLines-dots-content.png";
import sharpXLinesNoDots from "../assets/images/sharp chart/sharp-xLines-noDots.png";
import sharpYLinesDots from "../assets/images/sharp chart/sharp-yLines-dots.png";
import sharpYLinesDotsContent from "../assets/images/sharp chart/sharp-yLines-dots-content.png";
import sharpYLinesNoDots from "../assets/images/sharp chart/sharp-yLines-noDots.png";
///////////////////////////////////////////////
import legends from "../assets/images/legends.png";
import xLabels from "../assets/images/x-labels.png";
import yLabels from "../assets/images/y-labels.png";

/**
 * The "Slice" is to remove the "data:image/png;base64," from the beaning of base64 image code.
 */
export const legendsImg = legends.slice(legends.indexOf(",") + 1);

export const yLabelsImg = yLabels.slice(yLabels.indexOf(",") + 1);

export const xLabelsImg = xLabels.slice(xLabels.indexOf(",") + 1);

/**
 * Lines legend:
 * 1: No lines 
 * 2: Full Lines (Inner and Axis)
 * 3: Axis Lines Only
 * 4: Horizontal Axis Line
 * 5: Vertical Axis Line
 * 6: Horizontal Axis and Inner Line
 * 7: Horizontal Axis and Inner Line
 * 
 * Dots Legend:
 * 1: No Dots
 * 2: with Dots
 * 3: with Dots with Content
 * 
 * e.g., "1_1" refers to a chart image with no lines and no dots. 
 */
export const curvyChart = {
    // No Lines
    "1_1": curvyNoLinesNoDots.slice(curvyNoLinesNoDots.indexOf(",") + 1),
    "1_2": curvyNoLinesDots.slice(curvyNoLinesDots.indexOf(",") + 1),
    "1_3": curvyNoLinesDotsContent.slice(curvyNoLinesDotsContent.indexOf(",") + 1),
    // Full Lines (Inner and Axis)
    "2_1": curvyFullLinesNoDots.slice(curvyFullLinesNoDots.indexOf(",") + 1),
    "2_2": curvyFullLinesDots.slice(curvyFullLinesDots.indexOf(",") + 1),
    "2_3": curvyFullLinesDotsContent.slice(curvyFullLinesDotsContent.indexOf(",") + 1),
    // Axis Lines Only
    "3_1": curvyAxisLinesNoDots.slice(curvyAxisLinesNoDots.indexOf(",") + 1),
    "3_2": curvyAxisLinesDots.slice(curvyAxisLinesDots.indexOf(",") + 1),
    "3_3": curvyAxisLinesDotsContent.slice(curvyAxisLinesDotsContent.indexOf(",") + 1),
    // Horizontal Axis Line
    "4_1": curvyHLineNoDots.slice(curvyHLineNoDots.indexOf(",") + 1),
    "4_2": curvyHLineDots.slice(curvyHLineDots.indexOf(",") + 1),
    "4_3": curvyHLineDotsContent.slice(curvyHLineDotsContent.indexOf(",") + 1),
    // Vertical Axis Line
    "5_1": curvyVLineNoDots.slice(curvyVLineNoDots.indexOf(",") + 1),
    "5_2": curvyVLineDots.slice(curvyVLineDots.indexOf(",") + 1),
    "5_3": curvyVLineDotsContent.slice(curvyVLineDotsContent.indexOf(",") + 1),
    // Horizontal Axis and Inner Line
    "6_1": curvyXLinesNoDots.slice(curvyXLinesNoDots.indexOf(",") + 1),
    "6_2": curvyXLinesDots.slice(curvyXLinesDots.indexOf(",") + 1),
    "6_3": curvyXLinesDotsContent.slice(curvyXLinesDotsContent.indexOf(",") + 1),
    // Vertical Axis and Inner Line
    "7_1": curvyYLinesNoDots.slice(curvyYLinesNoDots.indexOf(",") + 1),
    "7_2": curvyYLinesDots.slice(curvyYLinesDots.indexOf(",") + 1),
    "7_3": curvyYLinesDotsContent.slice(curvyYLinesDotsContent.indexOf(",") + 1),
};

export const sharpChart = {
    // No Lines
    "1_1": sharpNoLinesNoDots.slice(sharpNoLinesNoDots.indexOf(",") + 1),
    "1_2": sharpNoLinesDots.slice(sharpNoLinesDots.indexOf(",") + 1),
    "1_3": sharpNoLinesDotsContent.slice(sharpNoLinesDotsContent.indexOf(",") + 1),
    // Full Lines (Inner and Axis)
    "2_1": sharpFullLinesNoDots.slice(sharpFullLinesNoDots.indexOf(",") + 1),
    "2_2": sharpFullLinesDots.slice(sharpFullLinesDots.indexOf(",") + 1),
    "2_3": sharpFullLinesDotsContent.slice(sharpFullLinesDotsContent.indexOf(",") + 1),
    // Axis Lines
    "3_1": sharpAxisLinesNoDots.slice(sharpAxisLinesNoDots.indexOf(",") + 1),
    "3_2": sharpAxisLinesDots.slice(sharpAxisLinesDots.indexOf(",") + 1),
    "3_3": sharpAxisLinesDotsContent.slice(sharpAxisLinesDotsContent.indexOf(",") + 1),
    // Horizontal Axis Line
    "4_1": sharpHLineNoDots.slice(sharpHLineNoDots.indexOf(",") + 1),
    "4_2": sharpHLineDots.slice(sharpHLineDots.indexOf(",") + 1),
    "4_3": sharpHLineDotsContent.slice(sharpHLineDotsContent.indexOf(",") + 1),
    // Vertical Axis Line
    "5_1": sharpVLineNoDots.slice(sharpVLineNoDots.indexOf(",") + 1),
    "5_2": sharpVLineDots.slice(sharpVLineDots.indexOf(",") + 1),
    "5_3": sharpVLineDotsContent.slice(sharpVLineDotsContent.indexOf(",") + 1),
    // Horizontal Axis and Inner Line
    "6_1": sharpXLinesNoDots.slice(sharpXLinesNoDots.indexOf(",") + 1),
    "6_2": sharpXLinesDots.slice(sharpXLinesDots.indexOf(",") + 1),
    "6_3": sharpXLinesDotsContent.slice(sharpXLinesDotsContent.indexOf(",") + 1),
    // Vertical Axis and Inner Line
    "7_1": sharpYLinesNoDots.slice(sharpYLinesNoDots.indexOf(",") + 1),
    "7_2": sharpYLinesDots.slice(sharpYLinesDots.indexOf(",") + 1),
    "7_3": sharpYLinesDotsContent.slice(sharpYLinesDotsContent.indexOf(",") + 1),
};