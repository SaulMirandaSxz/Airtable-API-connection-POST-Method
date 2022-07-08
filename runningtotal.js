// change these names to pick a view:
let table = base.getTable('Invoices');
let view = table.getView('Grid view');
let result = await view.selectRecordsAsync();
let runningTotal = 0;
for (let record of result.records) {
    // change the field names here to adapt this script to your base
    runningTotal += record.getCellValue('Amount');
    await table.updateRecordAsync(record, {
        'Running total': runningTotal,
    });
}