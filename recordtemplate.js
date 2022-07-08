EXAMPLE
// pick tables from your base here
let projects = base.getTable('Design projects');
let tasks = base.getTable('Tasks');
// prompt the user to pick a template for our project
output.markdown('# New project');
let name = await input.textAsync('Project name');
// create the project - change the field name to one in your base
let projectId = await projects.createRecordAsync({
    'Name': name,
});
// create the tasks - change the field names to ones from your base.
// the [{id: projectId}] links the newly created records back to our project
await tasks.createRecordsAsync([
    {
        fields: {
            'Name': 'The first task',
            'Design project': [{id: projectId}],
        },
    },
    {
        fields: {
            'Name': 'Another task',
            'Design project': [{id: projectId}],
        },
    },
    {
        fields: {
            'Name': 'The final task',
            'Design project': [{id: projectId}],
        },
    }
])
output.text('Done!');