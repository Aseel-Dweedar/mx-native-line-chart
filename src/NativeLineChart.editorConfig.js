import { hideNestedPropertiesIn, hidePropertiesIn } from "@mendix/pluggable-widgets-tools";

import { curvyChart, sharpChart, legendsImg, xLabelsImg, yLabelsImg } from "./helper/images-creator";

export function getPreview(values, isDarkMode) {
    const {
        withInnerLines,
        withOuterLines,
        withVerticalLines,
        withHorizontalLines,
        withVerticalLabels,
        withDots,
        renderDotContent,
        withLegends,
        withHorizontalLabels,
        bezier,
        renderDecoratorOnDotClick,
        dataSeries
    } = values;

    const getDotsCode = () => {
        if (!withDots) return "1";
        return !renderDotContent ? "2" : "3";
    };

    const getLinesCode = () => {
        // No Lines (Axis or Inner Lines)
        if ((!withInnerLines && !withOuterLines) || (!withVerticalLines && !withHorizontalLines)) {
            return "1";
        }

        // Axis Lines (X,Y or one of them)
        if (!withInnerLines) {
            if (withVerticalLines && withHorizontalLines) {
                return "3";
            }
            return withHorizontalLines ? "4" : "5";
        }

        // Inner and Axis Lines (X,Y or one of them)
        if (withVerticalLines && withHorizontalLines) {
            return "2";
        }
        return withHorizontalLines ? "6" : "7";
    };

    const getPreviewImg = () => {
        return bezier === 'curvy'
            ? curvyChart[`${getLinesCode()}_${getDotsCode()}`]
            : sharpChart[`${getLinesCode()}_${getDotsCode()}`];
    };

    return {
        type: "Container",
        borders: true,
        children: [
            {
                type: "Container",
                backgroundColor: "#ffffff",

                children: [
                    ...(withLegends
                        ? [
                              {
                                  type: "Image",
                                  data: legendsImg
                              }
                          ]
                        : [{ type: "Container" }]),
                    {
                        type: "RowLayout",
                        columnSize: "grow",
                        children: [
                            ...(withHorizontalLabels
                                ? [
                                      {
                                          type: "Image",
                                          data: yLabelsImg,
                                          height: 160
                                      }
                                  ]
                                : [{ type: "Container" }]),
                            {
                                type: "Image",
                                data: getPreviewImg(),
                                height: 160
                            }
                        ]
                    },
                    ...(withVerticalLabels
                        ? [
                              {
                                  type: "Image",
                                  data: xLabelsImg
                              }
                          ]
                        : [{ type: "Container" }])
                ]
            },

            {
                type: "Container",
                children: [
                    ...(renderDecoratorOnDotClick
                        ? dataSeries
                              .map((Dataset, index) => [
                                  {
                                      type: "DropZone",
                                      property: Dataset.decoratorContent,
                                      placeholder: `Dataset/${index + 1}/OnClick Dot Content`
                                  }
                              ])
                              .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
                        : [{ type: "Container" }])
                ]
            }
        ]
    };
}

export function getProperties(values, defaultProperties, target) {
    const {
        withHorizontalLabels,
        withVerticalLabels,
        withDots,
        dataSeries,
        renderDecoratorOnDotClick,
        renderDotContent,
        withLegends,
        withInnerLines,
        withOuterLines,
        withShadow,
        yAxisFormate,
        chartWidth
    } = values;

    if (!withHorizontalLabels) {
        hidePropertiesIn(defaultProperties, values, [
            "yLabelsColor",
            "yLabelsFontSize",
            "yLabelsFontWeight",
            "decimalPlaces",
            "horizontalLabelRotation",
            "yLabelsOffset",
            "yAxisLabel",
            "yAxisSuffix"
        ]);
    }
    if (!withVerticalLabels) {
        hidePropertiesIn(defaultProperties, values, [
            "xLabelsColor",
            "xLabelsFontSize",
            "xLabelsFontWeight",
            "verticalLabelRotation",
            "xLabelsOffset",
            "xAxisLabel"
        ]);
    }
    if (!withDots) {
        hidePropertiesIn(defaultProperties, values, [
            "dotsRadius",
            "dotsColor",
            "dotsStrokeWidth",
            "dotsStrokeColor",
            "renderDecoratorOnDotClick",
            "decoratorXOffset",
            "decoratorYOffset",
            "decoratorMinHeight",
            "renderDotContent",
            "dotContentColor",
            "dotContentXOffset",
            "dotContentYOffset"
        ]);
        dataSeries.forEach((_, index) => {
            hideNestedPropertiesIn(defaultProperties, values, "dataSeries", index, ["dataPointClick"]);
        });
    }
    if (!renderDecoratorOnDotClick) {
        hidePropertiesIn(defaultProperties, values, ["decoratorXOffset", "decoratorYOffset", "decoratorMinHeight"]);
        dataSeries.forEach((_, index) => {
            hideNestedPropertiesIn(defaultProperties, values, "dataSeries", index, ["decoratorContent"]);
        });
    }
    if (!renderDotContent) {
        hidePropertiesIn(defaultProperties, values, ["dotContentColor", "dotContentXOffset", "dotContentYOffset"]);
    }
    if (!withLegends) {
        hidePropertiesIn(defaultProperties, values, ["legendsColor", "legendsFontSize", "legendsFontWeight"]);
        dataSeries.forEach((_, index) => {
            hideNestedPropertiesIn(defaultProperties, values, "dataSeries", index, ["legend"]);
        });
    }
    if (!withInnerLines && !withOuterLines) {
        hidePropertiesIn(defaultProperties, values, [
            "withVerticalLines",
            "withHorizontalLines",
            "dashedLinesColor",
            "dashedLinesWidth"
        ]);
    }
    if (!withShadow) {
        hidePropertiesIn(defaultProperties, values, [
            "fillShadowGradientFrom",
            "fillShadowGradientTo",
            "fillShadowGradientFromOpacity",
            "fillShadowGradientToOpacity",
            "fillShadowGradientFromOffset",
            "fillShadowGradientToOffset"
        ]);
    }
    if (
        yAxisFormate === "internationalSystemFormatting" ||
        yAxisFormate === "thousandsKFormatter" ||
        yAxisFormate === "millionsMFormatter"
    ) {
        hidePropertiesIn(defaultProperties, values, ["decimalPlaces"]);
    }
    if (chartWidth === "full") {
        hidePropertiesIn(defaultProperties, values, ["customWidth"]);
    }
    return defaultProperties;
}
