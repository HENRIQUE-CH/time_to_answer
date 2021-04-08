// </div>

import { Controller } from "stimulus"


export default class extends Controller {
    static targets = ["output"]

    connect() {

        let data = new ej.data.DataManager({
            url: document.getElementById('Grid').dataset.url,
            adaptor: new ej.data.ODataV4Adaptor()
        })


        ej.grids.Grid.Inject(ej.grids.Page, ej.grids.Selection, ej.grids.Toolbar)
        let grid = new ej.grids.Grid({
            dataSource: data,
            showColumnChooser: true,
            allowReordering: true,
            allowPaging: true,
            allowSorting: true,
            toolbar: ['ColumnChooser'],
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            columns: [
                { field: 'id', headerText: 'Admin ID', width: 50 },
                { field: 'email', headerText: 'Email', width: 100 },
                { headerText: 'Ações', width: 40, commands: [{ buttonOption: { content: 'Editar', cssClass: 'btn btn-primary btn-custom' } }] }
            ],
            height: 325,
        });

        grid.appendTo('#Grid');



    }







}
