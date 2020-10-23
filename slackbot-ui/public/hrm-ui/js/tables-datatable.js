$(function () {
    var dataTable = $('#datatable1').DataTable({
        responsive: {
            details: false,
            ordering: false
        }
        
    }
    );

    $(document).on('sidebarChanged', function () {
        dataTable.columns.adjust();
        dataTable.responsive.recalc();
        dataTable.responsive.rebuild();
    });

});

