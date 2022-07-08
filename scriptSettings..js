// Click the "gear" icon in the top right to view settings
let config = input.config({
    title: 'Your script with settings',
    description: 'A script that uses settings',
    items: [
        input.config.table('selectedTable', {
            label: 'Table to use',
            description: 'Pick any table in this base!',
        }),
        input.config.field('selectedField', {
            label: 'Field inside the above table',
            parentTable: 'selectedTable',
        }),
        input.config.view('selectedView', {
            label: 'View inside the above table',
            parentTable: 'selectedTable',
        })
    ]
});
// The returned config object will contain the settings selected by the user
let selectedField = config.selectedField;
let selectedView = config.selectedView;
// Get the records (sorted the same as in the view)
let query = await selectedView.selectRecordsAsync({
    // Only get the field specified by the user
    fields: [selectedField]
});
// Print field from each record
for (let record of query.records) {
    let cellString = record.getCellValueAsString(selectedField)
    output.text(cellString)
}