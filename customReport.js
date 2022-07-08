let table = base.getTable('Design projects');
let result = await table.selectRecordsAsync();
output.markdown('# Project report generator');
let type = await input.buttonsAsync(
    'Which report would you like to generate?',
    [
        'Completed Projects',
        'Incomplete Projects',
    ],
);
output.clear();
output.markdown(`# ${type} Report`);
let records;
if (type === 'Completed Projects') {
    records = result.records.filter(record => record.getCellValue('Complete'));
} else {
    records = result.records.filter(record => !record.getCellValue('Complete'));
}
function countByField(records, groupByField) {
    let counts = {};
    for (let record of records) {
        let key = record.getCellValueAsString(groupByField);
        if (key in counts) {
            counts[key] = counts[key] + 1;
        } else {
            counts[key] = 1;
        }
    }
    return counts;
}