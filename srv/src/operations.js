const { getService } = require("./srvc");
const cds = require("@sap/cds");

// Read call
const getData = async (req) => {
  try {
    const oSrv = await getService("rf_App_Srvc");
    return oSrv.tx(req).run(req.query);
  } catch (error) {
    console.error("Error while reading entity", error);
    throw new Error("Failed to read entity");

  }
};

// Resource entity operations start

// create working
const createResourceData = async (req) => {
  const oSrv = await getService("rf_App_Srvc");
  const oPayload = req.data;
  try {
    const oResult = await oSrv.send("POST", "/RESOURCESSet", oPayload);
    return oResult;

  } catch (error) {
    console.error("Error while creating RESOURCESSet:", error);
    throw new Error("Failed to create entry in RESOURCESSet");
  }
}

// update 
const updateResourceData = async (req) => {
  const oSrv = await getService("rf_App_Srvc");
  const oPayload = req.data;
  const resourceId = oPayload.Resourceid;
  try {
    const oResult = await oSrv.send("PUT", `/RESOURCESSet('${resourceId}')`, oPayload);
    return oResult;

  } catch (error) {
    console.error("Error while updating RESOURCESSet:", error);
    throw new Error("Failed to update entry in RESOURCESSet");

  }
}
// delete working
const deleteResourceData = async (req) => {
  // const oSrv = await cds.connect.to('parkingsrv');
  const oSrv = await getService("rf_App_Srvc");
  const resourceKey = req.params[0].Resourceid
  try {
    const oResult = await oSrv.send("DELETE", `/RESOURCESSet('${resourceKey}')`);
    return oResult;


  } catch (error) {
    console.error("Error while deleting RESOURCESSet:", error);
    throw new Error("Failed to delete entry in RESOURCESSet");
  }

};
// Resource entity operations end


// ProcessArea entity operations start

// create working
const createProcessAreaData = async (req) => {
  // const oSrv = await cds.connect.to('parkingsrv');
  const oSrv = await getService("rf_App_Srvc");
  const oPayload = req.data;
  try {
    const oResult = await oSrv.send("POST", "/ProcessAreaSet", oPayload);
    return oResult;


  } catch (error) {
    console.error("Error while creating ProcessAreaSet:", error);
    throw new Error("Failed to create entry in ProcessAreaSet");

  }
}

// update
const updateProcessAreaData = async (req) => {
  const oSrv = await getService("rf_App_Srvc");
  const oPayload = req.data;
  const resourceKey = oPayload.Processid;
  try {
    const oResult = await oSrv.send("PUT", `/ProcessAreaSet('${resourceKey}')`, oPayload);
    return oResult;


  } catch (error) {
    console.error("Error while updating ProcessAreaSet:", error);
    throw new Error("Failed to update entry in ProcessAreaSet");

  }
};

// delete working
const deleteProcessAreaData = async (req) => {
  const oSrv = await getService("rf_App_Srvc");
  const resourceKey = req.params[0].Processid
  try {
    const oResult = await oSrv.send("DELETE", `/ProcessAreaSet('${resourceKey}')`);
    return oResult;

  } catch (error) {
    console.error("Error while deleting ProcessAreaSet:", error);
    throw new Error("Failed to delete entry in ProcessAreaSet");

  }
};
// ProcessArea entity operations end


// ServiceSet entity operations start

// create working
const createServiceSetData = async (req) => {
  // Connect to the service using getService or cds.connect
  const oSrv = await getService("rf_App_Srvc");
  const oPayload = req.data;
  try {
    const oResult = await oSrv.send("POST", "/ServiceSet", oPayload);
    return oResult;
  } catch (error) {
    // Handle any error that occurs during the create operation
    console.error("Error while creating ServiceSet:", error);
    throw new Error("Failed to create entry in ServiceSet");
  }
};


// update
const updateServiceSetData = async (req) => {
  const oSrv = await getService("rf_App_Srvc");
  const oPayload = req.data;
  const resourceKey = req.params[0].Client
  try {
    const oResult = await oSrv.send("PUT", `/ServiceSet('${resourceKey}')`, oPayload);
    return oResult;

  } catch (error) {
    console.error("Error while deleting ServiceSet:", error);
    throw new Error("Failed to delte");
  }
};

const deleteServiceSetData = async (req) => {
  const oSrv = await getService("rf_App_Srvc");
  const resourceKey = req.params[0].Client
  console.log(resourceKey)
  try {
    const oResult = await oSrv.send("DELETE", `/ServiceSet('${resourceKey}')`);
    return oResult;

  } catch (error) {
    console.error("Error while deleting ServiceSet:", error);
    throw new Error("Failed to delete");
  }
};
// ServiceSet entity operations end





module.exports = {
  getData,

  createResourceData,
  updateResourceData,
  deleteResourceData,

  createProcessAreaData,
  updateProcessAreaData,
  deleteProcessAreaData,

  createServiceSetData,
  updateServiceSetData,
  deleteServiceSetData

};