import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz.js";

class RadarChartComponent extends React.Component{

    componentDidMount() {

        /* Chart code */
        // Themes begin
        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);
        // Themes end

        let chart = am4core.create("radarChart", am4charts.RadarChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        let label = chart.createChild(am4core.Label);
        label.text = "Drag slider to change radius";
        label.exportable = false;

        chart.data = [
            {
                category: "Delhi",
                value1: 11,
                value2: 4,
                value3: 2,
                value4: 4,
                value5: 10
            },

            {
                category: "New York City",
                value1: 8,
                value2: 2,
                value3: 4,
                value4: 3,
                value5: 10
            },
            {
                category: "Mexico City",
                value1: 12,
                value2: 10,
                value3: 5,
                value4: 1,
                value5: 10
            },
            {
                category: "Bangkok",
                value1: 7,
                value2: 6,
                value3: 6,
                value4: 2,
                value5: 10
            },
            {
                category: "Paris",
                value1: 13,
                value2: 8,
                value3: 3,
                value4: 2,
                value5: 10
            }
        ];
        chart.radius = am4core.percent(95);
        chart.startAngle = 270 - 180;
        chart.endAngle = 270 + 180;
        chart.innerRadius = am4core.percent(60);

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.labels.template.location = 0.5;
        categoryAxis.renderer.grid.template.strokeOpacity = 0.1;
        categoryAxis.renderer.axisFills.template.disabled = true;
        categoryAxis.mouseEnabled = false;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.grid.template.strokeOpacity = 0.05;
        valueAxis.renderer.axisFills.template.disabled = true;
        valueAxis.renderer.axisAngle = 260;
        valueAxis.renderer.labels.template.horizontalCenter = "right";
        valueAxis.min = 0;

        let series1 = chart.series.push(new am4charts.RadarColumnSeries());
        series1.columns.template.radarColumn.strokeOpacity = 1;
        series1.name = "Environment";
        series1.dataFields.categoryX = "category";
        series1.columns.template.tooltipText = "{name}: {valueY.value}";
        series1.dataFields.valueY = "value1";
        series1.stacked = true;

        let series2 = chart.series.push(new am4charts.RadarColumnSeries());
        series2.columns.template.radarColumn.strokeOpacity = 1;
        series2.columns.template.tooltipText = "{name}: {valueY.value}";
        series2.name = "Crime";
        series2.dataFields.categoryX = "category";
        series2.dataFields.valueY = "value2";
        series2.stacked = true;

        let series3 = chart.series.push(new am4charts.RadarColumnSeries());
        series3.columns.template.radarColumn.strokeOpacity = 1;
        series3.columns.template.tooltipText = "{name}: {valueY.value}";
        series3.name = "Politics";
        series3.dataFields.categoryX = "category";
        series3.dataFields.valueY = "value3";
        series3.stacked = true;

        let series4 = chart.series.push(new am4charts.RadarColumnSeries());
        series4.columns.template.radarColumn.strokeOpacity = 1;
        series4.columns.template.tooltipText = "{name}: {valueY.value}";
        series4.name = "Social Unrest";
        series4.dataFields.categoryX = "category";
        series4.dataFields.valueY = "value4";
        series4.stacked = true;

        let series5 = chart.series.push(new am4charts.RadarColumnSeries());
        series5.columns.template.radarColumn.strokeOpacity = 1;
        series5.columns.template.tooltipText = "{name}: {valueY.value}";
        series5.name = "Infrastructure";
        series5.dataFields.categoryX = "category";
        series5.dataFields.valueY = "value5";
        series5.stacked = true;

        chart.seriesContainer.zIndex = -1;

        let slider = chart.createChild(am4core.Slider);
        slider.start = 0.5;
        slider.exportable = false;
        slider.events.on("rangechanged", () => {
            let start = slider.start;

            chart.startAngle = 270 - start * 179 - 1;
            chart.endAngle = 270 + start * 179 + 1;

            valueAxis.renderer.axisAngle = chart.startAngle;
        });
        this.chart = chart;
    }

    render() {
        return (
            <div id={'radarChart'} style={{height: "500px" }}></div>
        )
    }
}

export default RadarChartComponent;