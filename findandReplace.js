// edit these values to customize your script!
let table = base.getTable("Candidates");
let field = table.getField("Full Name");
let findText = await input.textAsync('Enter text to find:');
let replaceText = await input.textAsync('Enter to replace matches with:');
// Load all of the records in the table
let result = await table.selectRecordsAsync();
// Find every record we need to update
let replacements = [];
for (let record of result.records) {
    let originalValue = record.getCellValue(field);
    // Skip records which don't have the value set, so the value is null
    if (!originalValue) {
        continue;
    }
    let newValue = originalValue.replace(findText, replaceText);
    if (originalValue !== newValue) {
        replacements.push({
            record,
            before: originalValue,
            after: newValue,
        });
    }
}
if (!replacements.length) {
    output.text('No replacements found');
} else {
    output.markdown('## Replacements');
    output.table(replacements);
    let shouldReplace = await input.buttonsAsync('Are you sure you want to save these changes?', [
        {label: 'Save', variant: 'danger'},
        {label: 'Cancel'},
    ]);
    if (shouldReplace === 'Save') {
        // Update the records
        let updates = replacements.map(replacement => ({
            id: replacement.record.id,
            fields: {
                [field.id]: replacement.after,
            }
        }));
        // Only up to 50 updates are allowed at one time, so do it in batches
        while (updates.length > 0) {
            await table.updateRecordsAsync(updates.slice(0, 50));
            updates = updates.slice(50);
        }
    }
}