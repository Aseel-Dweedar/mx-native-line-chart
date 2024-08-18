# Native Line Chart

Quickly create beautiful, Fully configurable Line Charts.

## Features


*   **Curvy or Sharp Chart.**

*   **Hide and Show Elements:** Such as grid lines, labels, Legends, data points...

*   **Different Y-Axis Formats:**
    * Defualt Numbers Formatting, e.g., 15000, 2000, 173000
    * Thousands Divider Formatting, e.g., 15,000, 2,000, 173,000
    * International System Formatting, e.g., 1K, 1M, 1B
    * Thousands K Formatting, e.g., 15K, 2K, 173K
    * Millions M Formatting, e.g., 15M, 2M, 173M

*   **Configured Y-Axis Decimal Places.** 

*   **Configured Number of Segments:** The amount of numeric divisions along the Y-axis.

* **Choose to Start From Zero or the Minimum Value.**

* **Hide Dots At a Specific Indexes.**

* **Configured Chart Width, Height, and border Radius.**

*   **Configured X,Y Labels Style:**
    *   Color
    *   Font Size
    *   Font Weight
    *   Orientation
    *   Offsite
    *   After/Before label text

*   **Gradient Chart/Under-Data Backgrounds.**

*   **Configured Axis and Inner Lines**.
    *   colors
    *   width
    *   stroke
 
*   **Configured Dots Style:**
    *   Color
    *   Radius
    *   Stroke
  
*   **onClick Dot Action.**

*   **Configured onClick Dot Content.**

*   **Render Above Dot Content.**

*   **Configured Legends Style:**
    *   Color
    *   Font Size
    *   Font Weight

## Usage

1. Specify labels data source, which the chart will iterate over the data source and set the labels sequentially.

    ![labels-set](/src/assets/images/labels%20set.png)

2. Add your data series, with each series representing a dataset that appears as a line in your chart.

    ![labels-set](/src/assets/images/data-series.png)

3. Edit all other properties as desired.

## Issues, suggestions

*   **Data Source Order:** Ensure that the labels data source and the dataset data source are in the correct order. The chart iterates over these sources sequentially, so any mismatch can lead to incorrect data display.
    
*   **Dot Content Height:** The content that appears upon clicking a dot will occupy the height of the area under it down to the x-axis. If the bottom value disappears, you may need to set a minimum height from the widget configurations to maintain visibility.
    
*   **Y-Axis Min and Max Values:** You can specify a minimum and maximum value for the y-axis by adding an extra dataset with one value each (the min and max value) and setting `withDots: false` or `Hide Dots At Index 0`. This will ensure that the y-axis displays your desired range without affecting the Datasets.

***************
 LinkedIn [Aseel Dweedar](https://www.linkedin.com/in/aseel-dweedar)