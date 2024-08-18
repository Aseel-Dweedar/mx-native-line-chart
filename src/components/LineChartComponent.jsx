import { createElement, useState, useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import {
    toThousandsDivider,
    toKFormatting,
    toMFormatting,
    toInternationalSystemFormatting,
    validateHexColor,
    validateNumericsValue,
    defaultColor
} from "../helper/helperFunctions";

let minValuePosition = 0;
export default function LineChartComponent({
    // ========> Data source
    labelsDataSource,
    xLabel,
    dataSeries,

    // ========> Configuration
    bezier,
    yAxisFormate,
    decimalPlaces,
    segments,
    fromZero,
    hidePointsAtIndex,
    chartWidth,
    customWidth,
    chartHeight,
    chartRadius,

    // =======> Labels
    /* Y Labels */
    withHorizontalLabels,
    yLabelsColor,
    yLabelsFontSize,
    yLabelsFontWeight,
    horizontalLabelRotation,
    yLabelsOffset,
    yAxisLabel,
    yAxisSuffix,
    /* X Labels */
    withVerticalLabels,
    xLabelsColor,
    xLabelsFontSize,
    xLabelsFontWeight,
    verticalLabelRotation,
    xLabelsOffset,
    xAxisLabel,

    // =======> Backgrounds
    /* Chart Background*/
    backgroundGradientFrom,
    backgroundGradientTo,
    backgroundGradientFromOpacity,
    backgroundGradientToOpacity,
    /* Under Data Background*/
    withShadow,
    fillShadowGradientFrom,
    fillShadowGradientTo,
    fillShadowGradientFromOpacity,
    fillShadowGradientToOpacity,
    fillShadowGradientFromOffset,
    fillShadowGradientToOffset,

    // =======> Lines
    withInnerLines,
    withOuterLines,
    withVerticalLines,
    withHorizontalLines,
    dashedLinesColor,
    dashedLinesWidth,

    // =======> Dots
    /* Dots */
    withDots,
    dotsRadius,
    dotsColor,
    dotsStrokeWidth,
    dotsStrokeColor,
    renderDecoratorOnDotClick,
    decoratorXOffset,
    decoratorYOffset,
    decoratorMinHeight,
    renderDotContent,
    dotContentColor,
    dotContentYOffset,
    dotContentXOffset,

    // =======> Legends
    withLegends,
    legendsColor,
    legendsFontSize,
    legendsFontWeight
}) {
    const [dataSource, setDataSource] = useState(null);
    const [chartConfig, setChartConfig] = useState(null);
    const [isEmpty, setIsEmpty] = useState(true);
    const [currClickedDot, setCurrClickedDot] = useState(null);
    const [minValue, setMinValue] = useState(0);

    /**
     * This function formats numbers as required
     * @param   {number}    num   Accepts number
     * @returns   {string}    formatted number as a string
     */
    const yAxisFormatter = num => {
        switch (yAxisFormate) {
            case "thousandsDividerFormatting":
                return toThousandsDivider(num);
            case "internationalSystemFormatting":
                return toInternationalSystemFormatting(num);
            case "thousandsKFormatter":
                return toKFormatting(num);
            case "millionsMFormatter":
                return toMFormatting(num);
            default:
                return num;
        }
    };

    /**
     * This function is rendering the data points content
     * @param   {number}    x   x-position of the data point
     * @param   {number}    y   y-position of the data point
     * @param   {number}    indexData   data point value
     * @returns   {JSX}   returns the rendered data, each in the correct position with the correct data
     */
    const dotContent = (x, y, indexData) => (
        <View
            style={{
                position: "absolute",
                top: y - dotContentYOffset,
                left: x - dotContentXOffset
            }}
        >
            <Text style={{ color: validateHexColor(dotContentColor, defaultColor) }}>{indexData}</Text>
        </View>
    );

    /**
     * Content to render when clicking a data point
     */
    const decoratorContent = (
        <View
            style={{
                position: "absolute",
                top: currClickedDot?.y,
                left: currClickedDot?.x,
                height: Math.max(minValuePosition - currClickedDot?.originalY, decoratorMinHeight)
            }}
        >
            {currClickedDot?.contentToRender}
        </View>
    );

    /**
     * This function is handling the data points click event, set the decorator and execute the data point event
     * @param   {number}    index   the index of the clicked point in the dataset
     * @param   {number}    dataset   the dataset that contains the clicked point e.g. [5,8,9]
     * @param   {number}    x   x-position of the data point
     * @param   {number}    y   y-position of the data point
     */
    const onDataPointClick = (index, dataset, x, y) => {
        let contentToRender;
        let actinToCall;
        dataSource.datasets.forEach(item => {
            if (dataset.data === item.data) {
                contentToRender = item.widgetContent[index];
                actinToCall = item.onClickDot[index];
            }
        });
        if (renderDecoratorOnDotClick) {
            setCurrClickedDot({
                contentToRender: contentToRender,
                x: x + decoratorXOffset,
                y: y + decoratorYOffset,
                originalY: y
            });
        }
        if (actinToCall?.canExecute) {
            actinToCall.execute();
        }
    };

    useEffect(() => {
        // Setting the chart data and config
        let isReady = true;
        dataSeries.forEach(dataset => {
            if (dataset.datasetSource.status !== "available") {
                isReady = false;
                return;
            }
        });

        if (labelsDataSource?.status === "available" && isReady) {
            let minValueToSet = Number.MAX_SAFE_INTEGER;
            let emptyChart = false;
            let data = {
                labels: labelsDataSource.items.map(item => xLabel.get(item).displayValue),
                datasets: dataSeries.map(dataset => {
                    let data = [];
                    let onClickDot = [];
                    let widgetContent = [];

                    dataset?.datasetSource?.items?.forEach(item => {
                        let dataPointValue = Number(dataset.yAxisValue.get(item).displayValue);
                        if (dataPointValue < minValueToSet) {
                            minValueToSet = dataPointValue;
                        }
                        data.push(dataPointValue);
                        onClickDot.push(dataset.dataPointClick?.get(item));
                        widgetContent.push(dataset.decoratorContent ? dataset.decoratorContent.get(item) : null);
                    });
                    if (data.length === 0) {
                        emptyChart = true
                    }
                    return {
                        data: [...data],
                        color: (opacity = 1) => dataset.lineColor?.value,
                        strokeWidth: dataset.lineWidth,
                        onClickDot: [...onClickDot],
                        widgetContent: [...widgetContent]
                    };
                }),
                ...(withLegends && { legend: dataSeries.map(dataset => dataset.legend?.value) })
            };
            let config = {
                // =======> Chart Background
                backgroundGradientFrom,
                backgroundGradientTo,
                backgroundGradientFromOpacity: validateNumericsValue(backgroundGradientFromOpacity, 0, 1),
                backgroundGradientToOpacity: validateNumericsValue(backgroundGradientToOpacity, 0, 1),

                // =======> Under Data Background
                fillShadowGradientFrom,
                fillShadowGradientTo,
                fillShadowGradientFromOpacity: validateNumericsValue(fillShadowGradientFromOpacity, 0, 1),
                fillShadowGradientToOpacity: validateNumericsValue(fillShadowGradientToOpacity, 0, 1),
                fillShadowGradientFromOffset: parseFloat(validateNumericsValue(fillShadowGradientFromOffset, 0, 1)),
                fillShadowGradientToOffset: parseFloat(validateNumericsValue(fillShadowGradientToOffset, 0, 1)),

                // =======> Stroke and Labels
                color: (opacity = 1) => `rgba(0, 0, 0, ,${opacity})`,
                decimalPlaces: validateNumericsValue(decimalPlaces, 0, 20),

                // =======> legends style
                propsForLabels: {
                    fontSize: validateNumericsValue(legendsFontSize, 0, 50),
                    fontWeight: legendsFontWeight,
                    fill: legendsColor
                },

                // =======> X Label style
                propsForVerticalLabels: {
                    fontSize: validateNumericsValue(xLabelsFontSize, 0, 50),
                    fontWeight: xLabelsFontWeight,
                    fill: xLabelsColor
                },

                // =======> Y Label style
                propsForHorizontalLabels: {
                    fontSize: validateNumericsValue(yLabelsFontSize, 0, 50),
                    fontWeight: yLabelsFontWeight,
                    fill: yLabelsColor
                },

                // =======> dashed line style
                propsForBackgroundLines: {
                    stroke: validateHexColor(dashedLinesColor, defaultColor),
                    strokeWidth: dashedLinesWidth
                }
            };
            setIsEmpty(emptyChart);
            setMinValue(minValueToSet);
            setDataSource(data);
            setChartConfig(config);
        }

        return () => {
            setCurrClickedDot(null);
        };
    }, [dataSeries, labelsDataSource]);

    if (isEmpty || !chartConfig) {
        return (
            <View>
                <Text>Empty Chart</Text>
            </View>
        );
    } else {
        return (
            <LineChart
                data={dataSource}
                chartConfig={chartConfig}
                width={
                    chartWidth === "full"
                        ? Dimensions.get("window").width
                        : validateNumericsValue(customWidth, 0, Dimensions.get("window").width)
                }
                height={validateNumericsValue(chartHeight, 0, 2000)}
                withDots={withDots}
                withShadow={withShadow}
                bezier={bezier === "curvy"}
                withInnerLines={withInnerLines}
                withOuterLines={withOuterLines}
                withHorizontalLines={withHorizontalLines}
                withVerticalLines={withVerticalLines}
                segments={validateNumericsValue(segments, 1, 100)}
                hidePointsAtIndex={hidePointsAtIndex?.value?.split(",").map(index => Math.floor(parseInt(index)))}
                withHorizontalLabels={withHorizontalLabels}
                withVerticalLabels={withVerticalLabels}
                fromZero={fromZero}
                yAxisLabel={yAxisLabel}
                yAxisSuffix={yAxisSuffix}
                xAxisLabel={xAxisLabel}
                horizontalLabelRotation={horizontalLabelRotation}
                verticalLabelRotation={verticalLabelRotation}
                xLabelsOffset={xLabelsOffset}
                yLabelsOffset={yLabelsOffset}
                decorator={() => (currClickedDot ? decoratorContent : null)}
                onDataPointClick={({ index, value, dataset, x, y }) => onDataPointClick(index, dataset, x, y)}
                getDotColor={(dataPoint, dataPointIndex) => dotsColor} // used to calculate colors of dots in a line chart and takes
                renderDotContent={({ x, y, index, indexData }) => {
                    if (indexData === minValue) {
                        minValuePosition = y;
                    }
                    return renderDotContent ? dotContent(x, y, indexData) : null;
                }}
                getDotProps={(value, index) => ({
                    r: dotsRadius,
                    strokeWidth: dotsStrokeWidth,
                    stroke: dotsStrokeColor
                })}
                formatYLabel={y => `${yAxisFormatter(y)}`}
                style={{
                    borderRadius: validateNumericsValue(chartRadius, 0, 1000)
                    // paddingHorizontal:20,
                }}
            />
        );
    }
}
