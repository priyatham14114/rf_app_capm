const { getService } = require("./srvc");
const cds = require("@sap/cds");

// Read call
const getData = async (req) => {
  const oSrv = await getService("rf_App_Srvc");
  return oSrv.tx(req).run(req.query);
};

// Resource entity operations start

// create working
const createResourceData = async (req) => {
  const oSrv = await getService("rf_App_Srvc");
  const oPayload = req.data;
  const oResult = await oSrv.send("POST", "/RESOURCESSet", oPayload);
  return oResult;
}

// update 

const updateResourceData = async (req) => {
  const oSrv = await getService("rf_App_Srvc");
  const oPayload = req.data;
  const resourceId = oPayload.Resourceid; // Assuming ResourceID is the key field
  const oResult = await oSrv.send("PUT", `/RESOURCESSet('${resourceId}')`, oPayload);
  console.log("Response from ABAP:", oResult);
  return oResult;
}


// const updateResourceData = async (req) => {
//   console.log("Update Triggered");
//   const oSrv = await getService("rf_App_Srvc");
//   const oPayload = req.data;

//   const resourceKey = oPayload.Resourceid;
//   console.log("resourceKey " + resourceKey);

//   const oResult = await oSrv.send("PUT",`/RESOURCESSet('${resourceKey}')`, oPayload);

//   if (oResult) {
//     console.log("Updated");
//   } else {
//     console.log("Update failed");
//   }
//   return oResult;
// };


// delete working
const deleteResourceData = async (req) => {
  const oSrv = await getService("rf_App_Srvc");

  const resourceKey = req.params[0].Resourceid
  console.log("resourceKey:", resourceKey);
  if (typeof resourceKey !== 'string') {
    throw new Error('Invalid resourceKey format: ' + JSON.stringify(resourceKey));
  }
  const oResult = await oSrv.send("DELETE", `/RESOURCESSet('${resourceKey}')`);

  return oResult;
};
// Resource entity operations end

// ProcessArea entity operations start

// create working
const createProcessAreaData = async (req) => {
  const oSrv = await getService("rf_App_Srvc");
  const oPayload = req.data;
  const oResult = await oSrv.send("POST", "/ProcessAreaSet", oPayload);
  return oResult;
}

// update
const updateProcessAreaData = async (req) => {
  console.log("Update Triggered");
  const oSrv = await getService("rf_App_Srvc");
  const oPayload = req.data;
  const resourceKey = oPayload.Resourceid;
  // const resourceKey = req.params[0].Resourceid
  console.log("resourceKey " + resourceKey);
  const oResult = await oSrv.send("PUT", `/ProcessAreaSet('${resourceKey}')`, oPayload);
  return oResult;
};

// delete working
const deleteProcessAreaData = async (req) => {
  const oSrv = await getService("rf_App_Srvc");
  const resourceKey = req.params[0].Resourceid
  console.log("resourceKey:", resourceKey);
  if (typeof resourceKey !== 'string') {
    throw new Error('Invalid resourceKey format: ' + JSON.stringify(resourceKey));
  }
  const oResult = await oSrv.send("DELETE", `/ProcessAreaSet('${resourceKey}')`);

  return oResult;
};
// ProcessArea entity operations end





module.exports = {
  getData,
  createResourceData,
  updateResourceData,
  deleteResourceData
};