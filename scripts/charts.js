function createChart() {
            
    let arrayData = [{data: []}]
    for(let i of data["tt-Grafica"]) {
        arrayData[0].data.push(i["PU"])
    }
/* grafica */
$("#chart").kendoChart({
    title: {
        text: "IPC"
    },
    legend: {
        visible: false
    },
    seriesDefaults: {
        type: "line",
        stack: false
    },
    dataSource: {
        data: data["tt-Grafica"]
    },
    series: [{
        field: "PU"
    }],
    valueAxis: {
        max: 43500,
        min: 43200,
        line: {
            visible: false
        },
        minorGridLines: {
            visible: false
        }
    },
    categoryAxis: {
        categories: [],
        majorGridLines: {
            visible: false
        }
    },
    tooltip: {
        visible: true,
        template: "#= dataItem.Fecha # <br /> #= value #"
    }
    });
}



$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);
