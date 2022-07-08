//EXAMPLE USING ENVIRONMENT VARIABLE
// Shell:

$export AIRTABLE_API_KEY=key8EGyjgLsDAH3Qt

// Node:
const base = require('airtable').base('appTo27zo77ojv0eP');
// EXAMPLE USING CUSTOM CONFIGURATION
var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key8EGyjgLsDAH3Qt'
});
var base = Airtable.base('appTo27zo77ojv0eP');

