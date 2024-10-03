const cds = require("@sap/cds");
const { 
  getData,
  
  createResourceData,
  updateResourceData,
  deleteResourceData,

  createProcessAreaData,
  updateProcessAreaData,
  deleteProcessAreaData,

  createServiceSetData,
  updateServiceSetData,
  deleteServiceSetData } = require("./src/operations");

module.exports = cds.service.impl(async function () {

  // Read
  this.on("READ", "RESOURCESSet", getData);
  this.on("READ", "ProcessAreaSet", getData);
  this.on("READ", "ServiceSet", getData);

  // Resource CUD operations
  this.on("CREATE", "RESOURCESSet", createResourceData);
  this.on("PUT", "RESOURCESSet", updateResourceData);
  this.on("DELETE", "RESOURCESSet", deleteResourceData);

  // ServiceSet CUD operations
  this.on("CREATE", "ServiceSet", createServiceSetData);
  this.on("PUT", "ServiceSet", updateServiceSetData);
  this.on("DELETE", "ServiceSet", deleteServiceSetData);

  // ProcessArea CUD operations
  this.on("CREATE", "ProcessArea", createProcessAreaData);
  this.on("PUT", "ProcessArea", updateProcessAreaData);
  this.on("DELETE", "ProcessArea", deleteProcessAreaData);

})