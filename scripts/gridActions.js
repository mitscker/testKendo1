let datas = [
    { emisora: "CEMEX.CPO", titulos_ini: 10000, titulos_act: 9000, costo_prom: 0.00, precio: 23.20, utilidad_per: "ND", porcentaje: "0.34", valor_mer: 165000 },
    { emisora: "ALFA.A", titulos_ini: 14000, titulos_act: 9000, costo_prom: 0.00, precio: 40.20, utilidad_per: "ND", porcentaje: "0.34", valor_mer: 165000 },
    { emisora: "ALPEK.A", titulos_ini: 10000, titulos_act: 9000, costo_prom: 0.00, precio: 53.20, utilidad_per: "ND", porcentaje: "0.34", valor_mer: 165000 },
    { emisora: "ALSEA.*", titulos_ini: 14000, titulos_act: 9000, costo_prom: 0.00, precio: 73.20, utilidad_per: "ND", porcentaje: "0.34", valor_mer: 165000 },
    { emisora: "AMX.L", titulos_ini: 14000, titulos_act: 9000, costo_prom: 0.00, precio: 90.20, utilidad_per: "ND", porcentaje: "0.34", valor_mer: 165000 },
    { emisora: "ASUR.B", titulos_ini: 23000, titulos_act: 9000, costo_prom: 0.00, precio: 12.20, utilidad_per: "ND", porcentaje: "0.34", valor_mer: 165000 },
    { emisora: "BIMBO.A", titulos_ini: 9000, titulos_act: 9000, costo_prom: 0.00, precio: 233.20, utilidad_per: "ND", porcentaje: "0.34", valor_mer: 165000 },
    { emisora: "ELEKTRA.*", titulos_ini: 10000, titulos_act: 9000, costo_prom: 0.00, precio: 213.20, utilidad_per: "ND", porcentaje: "0.34", valor_mer: 165000 }
];

// ventana
let windowcv = $('#compraventaw');
windowcv.kendoWindow({
    animation: {
        open: {
            effects: 'fade:in'
        },
        close: {
            effects: 'fade:out'
        },
    },
    visible: false,
    maxWidth: 1000,
    maxHeight: 700
});

function cv(e) {
    e.preventDefault();
    let getOption = e.data.commandName;
    console.log(getOption);

    if(getOption === "Comprar") {
        $('#compraventaw').data('kendoWindow').open();
    } else if(getOption === "Vender") {

    }

}

/* grid */ 
$("#gridData").kendoGrid({
    columns: [
        { command: [
                { 
                    name: "Comprar",
                    text: "C",
                    click: cv,
                    iconClass: "k-icon k-i-dollar"
                },
                {
                    name: "Vender",
                    text: "V",
                    click: cv,
                    iconClass: "k-icon k-i-invert-colors"
                }
            ],
            title: "Operar",
            width: 85
        },
    { field: "emisora", title: "Emisora", width: 90, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "titulos_ini", title: "Títulos <br/> iniciales", width: 60, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "titulos_act", title: "Títulos <br/> actuales", width: 60, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "costo_prom", title: "Último <br/> precio", width: 50, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "precio", title: "Precio", width: 60, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "utilidad_per", title: "Utilidad/Pérdida", width: 85, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "porcentaje", title: "%", width: 50, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "valor_mer", title: "Valor <br/> Mercado", width: 90, attributes: {class: "table-cell", style: "text-align:center"}}
    ],
    dataSource: {
    data: datas
    },
    sortable: true,
    reorderable: true,
    resizable: true,
    sort: function(e) {
    console.log(e.sort.field);
    console.log(e.sort.dir);
    }
});

// /* grid data */
// var orderData = [
//     { OrderID: 1, OrderDate: "2017-11-06T12:00:00", Freight: 12.34, ShipCity: "Antwerp", ShipCountry: "Belgium" },
//     { OrderID: 2, OrderDate: "2019-03-02T12:00:00", Freight: 23.45, ShipCity: "Singapore", ShipCountry: "Singapore" },
//     { OrderID: 3, OrderDate: "2019-06-26T12:00:00", Freight: 34.56, ShipCity: "Shanghai", ShipCountry: "China" },
//     { OrderID: 4, OrderDate: "2017-09-20T12:00:00", Freight: 45.67, ShipCity: "Hamburg", ShipCountry: "Germany" },
//     { OrderID: 5, OrderDate: "2017-12-12T12:00:00", Freight: 56.78, ShipCity: "Mumbai", ShipCountry: "India" },
//     { OrderID: 6, OrderDate: "2018-02-08T12:00:00", Freight: 67.89, ShipCity: "Shanghai", ShipCountry: "China" },
//     { OrderID: 7, OrderDate: "2018-05-05T12:00:00", Freight: 78.90, ShipCity: "Tokyo", ShipCountry: "Japan" },
//     { OrderID: 8, OrderDate: "2019-08-03T12:00:00", Freight: 89.01, ShipCity: "Port Klang", ShipCountry: "Malaysia" },
//     { OrderID: 9, OrderDate: "2018-10-29T12:00:00", Freight: 90.12, ShipCity: "Rotterdam", ShipCountry: "Netherlands" },
//     { OrderID: 10, OrderDate: "2018-01-23T12:00:00", Freight: 10.32, ShipCity: "Vancouver", ShipCountry: "Canada" },
//     { OrderID: 11, OrderDate: "2018-04-17T12:00:00", Freight: 21.43, ShipCity: "Colón", ShipCountry: "Panama" },
//     { OrderID: 12, OrderDate: "2017-07-11T12:00:00", Freight: 32.54, ShipCity: "Manila", ShipCountry: "Philippines" },
//     { OrderID: 13, OrderDate: "2017-10-24T12:00:00", Freight: 43.65, ShipCity: "Singapore", ShipCountry: "Singapore" },
//     { OrderID: 14, OrderDate: "2018-03-11T12:00:00", Freight: 54.76, ShipCity: "Busan", ShipCountry: "South Korea" },
//     { OrderID: 15, OrderDate: "2018-06-17T12:00:00", Freight: 65.87, ShipCity: "Shenzhen", ShipCountry: "China" },
//     { OrderID: 16, OrderDate: "2018-10-13T12:00:00", Freight: 76.98, ShipCity: "Hong Kong", ShipCountry: "China" },
//     { OrderID: 17, OrderDate: "2019-04-19T12:00:00", Freight: 87.09, ShipCity: "Dubai", ShipCountry: "UAE" },
//     { OrderID: 18, OrderDate: "2019-07-25T12:00:00", Freight: 98.21, ShipCity: "Felixstowe", ShipCountry: "UK" },
//     { OrderID: 19, OrderDate: "2017-09-22T12:00:00", Freight: 13.24, ShipCity: "Los Angeles", ShipCountry: "USA" },
//     { OrderID: 20, OrderDate: "2018-12-09T12:00:00", Freight: 35.46, ShipCity: "New York", ShipCountry: "USA" },
//     { OrderID: 21, OrderDate: "2018-02-04T12:00:00", Freight: 57.68, ShipCity: "Guangzhou", ShipCountry: "China" },
//     { OrderID: 22, OrderDate: "2019-05-16T12:00:00", Freight: 9.87, ShipCity: "Long Beach", ShipCountry: "USA" },
//     { OrderID: 23, OrderDate: "2019-08-18T12:00:00", Freight: 24.13, ShipCity: "Singapore", ShipCountry: "Singapore" }
//     ];

//     var gridDataSource = new kendo.data.DataSource({
//         data: orderData,
//         schema: {
//             model: {
//             fields: {
//                 OrderID: { type: "number" },
//                 Freight: { type: "number" },
//                 OrderDate: { type: "date" },
//                 ShipCountry: { type: "string" },
//                 ShipCity: { type: "string" }
//             }
//             }
//         },
//         pageSize: 10,
//         sort: {
//             field: "OrderDate",
//             dir: "desc"
//         }
//     });

//     $("#gridData").kendoGrid({
//         dataSource: gridDataSource
//     });