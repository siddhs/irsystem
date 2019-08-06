import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class MapChartComponent  extends React.Component{

    componentDidUpdate() {
        /* Chart code */
// Themes begin
        am4core.useTheme(am4themes_animated);
// Themes end

        /**
         * Define SVG path for target icon
         */
        let targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

// Create map instance
        let chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
        chart.geodata = am4geodata_worldLow;

// Set projection
        chart.projection = new am4maps.projections.Miller();

// Create map polygon series
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Exclude Antartica
        polygonSeries.exclude = ["AQ"];

// Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

// Configure series
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.fill = chart.colors.getIndex(0).brighten(0.5).saturate(0.2);
        polygonTemplate.strokeOpacity = 0.5;
        polygonTemplate.strokeWidth = 0.5;

// create capital markers
        let imageSeries = chart.series.push(new am4maps.MapImageSeries());

// define template
        let imageSeriesTemplate = imageSeries.mapImages.template;
        let circle = imageSeriesTemplate.createChild(am4core.Sprite);
        circle.scale = 0.6;
        circle.fill = chart.colors.getIndex(3).saturate(0.1).lighten(-0.5)
        circle.path = targetSVG;
// what about scale...

// set propertyfields
        imageSeriesTemplate.propertyFields.latitude = "latitude";
        imageSeriesTemplate.propertyFields.longitude = "longitude";

        imageSeriesTemplate.horizontalCenter = "middle";
        imageSeriesTemplate.verticalCenter = "middle";
        imageSeriesTemplate.align = "center";
        imageSeriesTemplate.valign = "middle";
        imageSeriesTemplate.width = 8;
        imageSeriesTemplate.height = 8;
        imageSeriesTemplate.nonScaling = true;
        imageSeriesTemplate.tooltipText = "{title}";
        imageSeriesTemplate.fill = am4core.color("#000");
        imageSeriesTemplate.background.fillOpacity = 0;
        imageSeriesTemplate.background.fill = "#fff";
        imageSeriesTemplate.setStateOnChildren = true;
        imageSeriesTemplate.states.create("hover");

        imageSeries.data = [{
            "title": "Vienna",
            "latitude": 48.2092,
            "longitude": 16.3728,
            "number": 1234
        }, {
            "title": "Minsk",
            "latitude": 53.9678,
            "longitude": 27.5766,
            "number": 1234
        }];
        this.chart = chart;
    }

    render() {
        return (
            <div id={'chartdiv'} style={{ width: "100%", height: "500px" }}></div>
        )
    }

}

export default MapChartComponent;