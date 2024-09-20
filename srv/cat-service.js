const cds = require("@sap/cds");
const { getData, deleteResourceData, createResourceData, updateResourceData} = require("./src/operations");

module.exports = cds.service.impl(async function () {

  // Read
  this.on("READ", "RESOURCESSet", getData); 
  this.on("READ", "ProcessAreaSet", getData);

  // Resource CUD operations
  this.on("CREATE", "RESOURCESSet", createResourceData);
  this.on("PUT", "RESOURCESSet", updateResourceData);
  this.on("DELETE", "RESOURCESSet", deleteResourceData);

  // Process area CUD operations
  // this.on("CREATE", "ProcessAreaSet", createProcessAreaData);
  // this.on("PUT", "ProcessAreaSet", updateProcessAreaData);


})