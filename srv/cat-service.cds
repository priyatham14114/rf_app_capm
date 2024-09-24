using rf_App_Srvc as db  from '../db/schema';
using rf_app_srv.db as db_2 from '../db/schema';
  



@path: '/RF_App_Service'
service RF_app_service {
    entity RESOURCESSet as projection on db.RESOURCESSet;
    entity ProcessAreaSet as projection on db.ProcessAreaSet;
    // entity Hu_ContentSet as projection on db.Hu_ContentSet;
    // entity C_ServiceSet as projection on db_2.C_ServiceSet;
    entity C_ServiceSet as projection on db_2.C_ServiceSet;
}
