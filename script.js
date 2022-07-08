//EXAMPLE USING ENVIRONMENT VARIABLE
// Shell:

$export AIRTABLE_API_KEY=API_KEY

// Node:
const base = require('airtable').base('base_id');
// EXAMPLE USING CUSTOM CONFIGURATION
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'API_KEY'
});
var base = Airtable.base('base_id');

