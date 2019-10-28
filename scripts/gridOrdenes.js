/* gridOrdenes */ 
$("#gridOrdenes").kendoGrid({
    columns: [
        { field: "id" },
        { field: "Tipo" },
        { field: "Costo" }
    ],
    dataSource: {
    data: [
        { id: 1, Tipo: "Compra", Costo: 22.34 },
        { id: 2, Tipo: "Compra", Costo: 30 },
        { id: 3, Tipo: "Venta", Costo: 30 },
        { id: 4, Tipo: "Compra", Costo: 22.34 },
        { id: 5, Tipo: "Venta", Costo: 30 },
        { id: 6, Tipo: "Venta", Costo: 22.34 },
        { id: 7, Tipo: "Compra", Costo: 30 },
        { id: 8, Tipo: "Compra", Costo: 22.34 },
        { id: 9, Tipo: "Venta", Costo: 33 }
    ],
    schema: {
        model: { id: "id" }
    }
    },
    sortable: true,
    reorderable: true,
    sort: function(e) {
    console.log(e.sort.field);
    console.log(e.sort.dir);
    }
});

$("#export").click(function(e) {
    let grid = $("#gridOrdenes").data("kendoGrid")
    grid.saveAsPDF()
});