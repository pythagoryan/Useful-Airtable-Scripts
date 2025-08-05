// The only required input variable is the record ID of the record to delete
// Be sure to replace "TABLE NAME" with the actual name of your Airtable table

// Declarations & initializations
let table = base.getTable("TABLE NAME");
const inputConfig = input.config();
const recordId = inputConfig[''];

// Deletes the specified record from the Airtable table
await table.deleteRecordAsync(inputConfig.recordId);