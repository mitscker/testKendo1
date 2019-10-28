let datos = [
    { emisora: "CEMEX.CPO", titulos_ini: 10000, titulos_act: 9000, costo_prom: 0.00, ultimo_pr: 4500, utilidad_per: "ND", porcentaje: "hola", valor_mer: 165000 },
    { emisora: "CEMEX.CPO", titulos_ini: 10000, titulos_act: 9000, costo_prom: 0.00, ultimo_pr: 4500, utilidad_per: "ND", porcentaje: "", valor_mer: 165000 },
    { emisora: "CEMEX.CPO", titulos_ini: 10000, titulos_act: 9000, costo_prom: 0.00, ultimo_pr: 4500, utilidad_per: "ND", porcentaje: "", valor_mer: 165000 },
    { emisora: "CEMEX.CPO", titulos_ini: 10000, titulos_act: 9000, costo_prom: 0.00, ultimo_pr: 4500, utilidad_per: "ND", porcentaje: "", valor_mer: 165000 },
    { emisora: "CEMEX.CPO", titulos_ini: 10000, titulos_act: 9000, costo_prom: 0.00, ultimo_pr: 4500, utilidad_per: "ND", porcentaje: "", valor_mer: 165000 },
    { emisora: "CEMEX.CPO", titulos_ini: 10000, titulos_act: 9000, costo_prom: 0.00, ultimo_pr: 4500, utilidad_per: "ND", porcentaje: "", valor_mer: 165000 },
    { emisora: "CEMEX.CPO", titulos_ini: 10000, titulos_act: 9000, costo_prom: 0.00, ultimo_pr: 4500, utilidad_per: "ND", porcentaje: "", valor_mer: 165000 },
    { emisora: "CEMEX.CPO", titulos_ini: 10000, titulos_act: 9000, costo_prom: 0.00, ultimo_pr: 4500, utilidad_per: "ND", porcentaje: "", valor_mer: 165000 }
];

/* grid */ 
$("#grid").kendoGrid({
    columns: [
        { command: [
            { 
                name: "Comprar",
                text: "C",
                click: function() {
                    alert('Comprando..')
                },
                iconClass: "k-icon k-i-dollar"
            },
            {
                name: "Vender",
                text: "V",
                click: function() {
                    alert('Vendiendo..')
                },
                iconClass: "k-icon k-i-invert-colors"
            }
        ],
        title: "Operar",
        width: 75
    },
    { field: "emisora", title: "Emisora", width:75, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "titulos_ini", title: "Títulos <br/> iniciales", width: 60, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "titulos_act", title: "Títulos <br/> actuales", width: 60, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "costo_prom", title: "Costo <br/> promedio", width: 60, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "ultimo_pr", title: "Último <br/> precio", width: 50, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "utilidad_per", title: "Utilidad/Pérdida", width: 85, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "porcentaje", title: "%", width: 50, attributes: {class: "table-cell", style: "text-align:center"}},
    { field: "valor_mer", title: "Valor <br/> Mercado", width: 90, attributes: {class: "table-cell", style: "text-align:center"}}
    ],
    dataSource: {
    data: datos
    },
    sortable: true,
    reorderable: true,
    resizable: true,
    sort: function(e) {
    console.log(e.sort.field);
    console.log(e.sort.dir);
    }
});