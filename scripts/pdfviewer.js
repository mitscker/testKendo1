/* visor de pdf */
$(document).ready(function() {
    $("#pdfviewer").kendoPDFViewer({
        pdfjsProcessing: {
            file: ".//content//web//pdfViewer//sample.pdf"
        },
        width: "80%",
        height: 800,
        toolbar: {
            items: [
                "pager",
                "spacer",
                "download",
                "print"
            ]
        }
    })
})