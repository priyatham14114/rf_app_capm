using rf_App_Srvc as db  from '../db/schema';

@path: '/RF_App_Service'
service RF_app_service {
    entity RESOURCESSet as projection on db.RESOURCESSet;
    entity ProcessAreaSet as projection on db.ProcessAreaSet;
    // entity Hu_ContentSet as projection on db.Hu_ContentSet;
}
