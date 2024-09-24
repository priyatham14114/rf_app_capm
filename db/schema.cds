namespace rf_app_srv.db;

using {rf_App_Srvc} from '../srv/external/rf_App_Srvc';

// entity Hu_ContentSet  as
//   projection on rf_App_Srvc.Hu_ContentSet {
//     GVolume,
//     GWeight,
//     Height

//   };
entity C_ServiceSet {
  key Client       : String;
      Description  : String;
      DescriptionB : String;
      SystemId     : String;
      InstanceNo   : String;
      AppServer    : String;
      SapRouterStr : String;
      SapService   : String;
}

entity RESOURCESSet   as
  projection on rf_App_Srvc.RESOURCESSet {
    key Resourceid,
        Approveddate,
        Area,
        Email,
        Expirydate,
        Loginfirst,
        Notification,
        Notifysupervisor,
        Password,
        Phonenumber,
        Queue,
        Resourcegroup,
        Resourcename,
        Resourcetype,
        Status,
        Users,
        Validity,
        Warehouseno


  };

entity ProcessAreaSet as
  projection on rf_App_Srvc.ProcessAreaSet {
    Processarea,
    Processgroup,
    Processid,
    Queue
  };
