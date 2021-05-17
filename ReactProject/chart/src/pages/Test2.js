import React, {useEffect} from "react";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";


const data = [{
    "country": "Lithuania",
    "litres": 501,
    "units": 250
}, {
    "country": "Czech Republic",
    "litres": 301,
    "units": 222
}, {
    "country": "Ireland",
    "litres": 266,
    "units": 179
}, {
    "country": "Germany",
    "litres": 165,
    "units": 298
}, {
    "country": "Australia",
    "litres": 139,
    "units": 299
}, {
    "country": "Austria",
    "litres": 336,
    "units": 185
}, {
    "country": "UK",
    "litres": 290,
    "units": 150
}, {
    "country": "Belgium",
    "litres": 325,
    "units": 382
}, {
    "country": "The Netherlands",
    "litres": 40,
    "units": 172
}];

const Test2 = () =>{

    useEffect(()=> {
        let chart = am4core.create("chartdiv2", am4charts.RadarChart);
        chart.data=data;

        /* Create axes */
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        /* Create and configure series */
        let series = chart.series.push(new am4charts.RadarSeries());
        series.dataFields.valueY = "litres";
        series.dataFields.categoryX = "country";
        series.name = "Sales";
        series.strokeWidth = 3;
        series.zIndex = 2;

        let series2 = chart.series.push(new am4charts.RadarColumnSeries());
        series2.dataFields.valueY = "units";
        series2.dataFields.categoryX = "country";
        series2.name = "Units";
        series2.strokeWidth = 0;
        series2.columns.template.fill = am4core.color("#CDA2AB");
        series2.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    },[]);


    return(
        <div id="chartdiv2" style={{ width: "100%", height: "500px" }}></div>
    )
}

export default Test2;