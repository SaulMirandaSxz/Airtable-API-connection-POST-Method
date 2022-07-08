let table = base.getTable("Offers");
let query = await table.selectRecordsAsync({fields: ['Full Name']});
let view = table.getView("Accepted");
console.log(query.records);
let acceptedFilter = await view.selectRecordAsync('base_id', {fields: ['Full Name']});
console.log(acceptedFilter);


// query for all the records in a table
let table2 = base.getTable("Offers");
let queryResult = await table.selectRecordsAsync({
    sorts: [
       // sort by "Description" in ascending order
       {field: "Full Name", direction: "asc"},
       // then by "Priority" in descending order.
       {field: "Status", direction: "asc"},
    ]
});


// print ID & "Description" from each record:
for (let record of queryResult.records) {
    console.log(`
**${record.id}**
${record.getCellValueAsString("Full Name")}
${record.getCellValueAsString("Status")}
`);
}










// Get a field by name:
let field2 = base.getTable("Offers").getField("Status");

let records = field2.options.choices[4];

const tableValidation = (a) => ( field2 == base.getTable("Offers").getField("Status") ) ? console.log('Valid') : console.log('invalid');

tableValidation();


 let filteredMembers = query;

 let acceptedStatus = 'filter';
const tableFilter = (x, y) => (x == x && y == y) ? 
    
    console.log('0') 
    : 
    console.log('Invalid Filter');
 
 tableFilter(filteredMembers, acceptedStatus);

