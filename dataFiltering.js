let table = base.getTable('Candidates');
let result = await table.selectRecordsAsync();

output.markdown('# Project report generator');
let type = await input.buttonsAsync(
    'Which report would you like to generate?',
    [
        'Approved',
        'Status',
    ],
);

output.clear();

output.markdown(`# ${type} Report`);

let records;
if (type === 'Approved') {
    records = result.records.filter(record => record.getCellValue('Status'));
} else {
    records = result.records.filter(record => !record.getCellValue('Employment Type'));
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

output.markdown('## Categories');
let categoryCounts = countByField(records, 'flds48o0GOkEJyynF');
output.table(categoryCounts);

output.markdown('## Projects');
output.table(
    records.map(record => ({
        Name: record.getCellValue('fldwJG7rdvfY3UeaS'),
        Category: record.getCellValue('flds48o0GOkEJyynF'),
        'Status': record.getCellValue('fld8096HEFYzNixHz'),
        Client: record.getCellValue('fldM4gXExQK2ZBFai'),
    })),
);

output.markdown(`**Total**: ${records.length}`);