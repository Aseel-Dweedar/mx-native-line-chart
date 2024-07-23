export function getProperties(values, defaultProperties, target) {
    if (!values.withHorizontalLabels) {
        hidePropertiesIn(defaultProperties, values, [
            "yLabelsColor",
            "yLabelsFontSize",
            "yLabelsFontWeight",
            "fromZero",
            "decimalPlaces",
            "horizontalLabelRotation",
            "yLabelsOffset",
            "yAxisLabel",
            "yAxisSuffix"
        ]);
    }
    if (!values.withVerticalLabels) {
        hidePropertiesIn(defaultProperties, values, [
            "xLabelsColor",
            "xLabelsFontSize",
            "xLabelsFontWeight",
            "verticalLabelRotation",
            "xLabelsOffset",
            "xAxisLabel"
        ]);
    }
    if (!values.withDots) {
        hidePropertiesIn(defaultProperties, values, [
            "dotsRadius",
            "dotsColor",
            "dotsStrokeWidth",
            "dotsStrokeColor",
            "renderDecoratorOnDotClick",
            "decoratorXOffset",
            "decoratorYOffset",
            "decoratorMinHeight"
        ]);
    }
    if (!values.renderDecoratorOnDotClick) {
        hidePropertiesIn(defaultProperties, values, ["decoratorXOffset", "decoratorYOffset", "decoratorMinHeight"]);
    }
    if (!values.renderDotContent) {
        hidePropertiesIn(defaultProperties, values, ["dotContentColor", "dotContentXOffset", "dotContentYOffset"]);
    }
    if (!values.withLegends) {
        hidePropertiesIn(defaultProperties, values, ["legendsColor", "legendsFontSize", "legendsFontWeight"]);
    }
    if (!values.withInnerLines && !values.withOuterLines) {
        hidePropertiesIn(defaultProperties, values, [
            "withVerticalLines",
            "withHorizontalLines",
            "dashedLinesColor",
            "dashedLinesWidth"
        ]);
    }
    if (!values.withShadow) {
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
        values.yAxisFormate === "internationalSystemFormatting" ||
        values.yAxisFormate === "thousandsKFormatter" ||
        values.yAxisFormate === "millionsMFormatter"
    ) {
        hidePropertiesIn(defaultProperties, values, ["decimalPlaces"]);
    }
    if (values.chartWidth === "full") {
        hidePropertiesIn(defaultProperties, values, ["customWidth"]);
    }
    return defaultProperties;
}

function hidePropertiesIn(propertyGroups, _value, keys) {
    keys.forEach(key =>
        modifyProperty((_, index, container) => container.splice(index, 1), propertyGroups, key, undefined, undefined)
    );
}

function modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey) {
    propertyGroups.forEach(propGroup => {
        if (propGroup.propertyGroups) {
            modifyProperty(modify, propGroup.propertyGroups, key, nestedPropIndex, nestedPropKey);
        }

        propGroup.properties?.forEach((prop, index, array) => {
            if (prop.key === key) {
                if (nestedPropIndex === undefined || nestedPropKey === undefined) {
                    modify(prop, index, array);
                } else if (prop.objects) {
                    modifyProperty(modify, prop.objects[nestedPropIndex].properties, nestedPropKey);
                } else if (prop.properties) {
                    modifyProperty(modify, prop.properties[nestedPropIndex], nestedPropKey);
                }
            }
        });
    });
}
