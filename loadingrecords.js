
//This script gets all the records from a specific table in your 
//base and displays them in a tabular format.


let table = base.getTable("Candidates");
let query = await table.selectRecordsAsync();
output.table(query.records);
