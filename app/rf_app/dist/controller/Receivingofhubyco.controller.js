sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],function(e,t){"use strict";return e.extend("com.app.rfapp.controller.Receivingofhubyco",{onInit:function(){const e=this.getView().byId("idROHCOTable");e.attachBrowserEvent("dblclick",this.onRowDoubleClick.bind(this));const t=this.getOwnerComponent().getRouter();t.attachRoutePatternMatched(this.onResourceDetailsLoad,this)},onResourceDetailsLoad:async function(e){const{id:t}=e.getParameter("arguments");this.ID=t},onRowDoubleClick:function(){debugger;var e=this.byId("idROHCOTable").getSelectedItem();this.getView().byId("idROHCOScanManufacturingorder").setVisible(false);this.getView().byId("idROHCODeliverydetailsPage2").setVisible(true)},onAfterRendering:function(){this.byId("idROHCOScanManufacturingorder").setVisible(true)},onPressScanCObackbtn:async function(){var e=this.getOwnerComponent().getRouter();var i=this.getOwnerComponent().getModel();await i.read("/RESOURCESSet('"+this.ID+"')",{success:function(t){let i=t.Users.toLowerCase();if(i==="resource"){e.navTo("RouteResourcePage",{id:this.ID})}else{e.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){t.show("User does not exist")}})},OnpressManuDelDetailsBackbutton:function(){var e=this.byId("idROHCOScanManufacturingorder");var t=this.byId("idROHCODeliverydetailsPage2");e.setVisible(true);t.setVisible(false)},OnpressROHCOHUlistBackbtn:function(){var e=this.byId("idROHCOHUListPage3");var t=this.byId("idROHCODeliverydetailsPage2");t.setVisible(true);e.setVisible(false)},OnpressROHCONewHuBackbutton:function(){var e=this.byId("idROHCONewHUPage4");var t=this.byId("idROHCODeliverydetailsPage2");t.setVisible(true);e.setVisible(true)},OnpressAfterNextBackbutton:function(){var e=this.byId("idROHCOnextOrEnterpage5");var t=this.byId("idROHCONewHUPage4");t.setVisible(true);e.setVisible(false)},OnpressROHCOGRBackbutton:function(){var e=this.byId("idROHCOGRpage6");var t=this.byId("idROHCOnextOrEnterpage5");t.setVisible(true);e.setVisible(false)},OnpressROHCOUnloadBackbutton:function(){var e=this.byId("idROHCOUnloadpage7");var t=this.byId("idROHCOnextOrEnterpage5");t.setVisible(true);e.setVisible(false)},onPressROHCOSubmitbtn:function(){var e=this.byId("idROHCOScanManufacturingorder");var t=this.byId("idROHCOPanel");t.setVisible(true)},onPressROHCOHUListPress:function(){var e=this.byId("idROHCODeliverydetailsPage2");var t=this.byId("idROHCOHUListPage3");e.setVisible(false);t.setVisible(true)},onPressROHCONewHU:function(){var e=this.byId("idROHCONewHUPage4");var t=this.byId("idROHCODeliverydetailsPage2");t.setVisible(false);e.setVisible(true)},onPressROHCOEnter:function(){var e=this.byId("idROHCOnextOrEnterpage5");var t=this.byId("idROHCONewHUPage4");t.setVisible(false);e.setVisible(true)},onPressEnterROHCOGRButton:function(){var e=this.byId("idROHCOnextOrEnterpage5");var t=this.byId("idROHCOGRpage6");e.setVisible(false);t.setVisible(true)},onPressEnterROHCOUnloadButton:function(){var e=this.byId("idROHCOnextOrEnterpage5");var t=this.byId("idROHCOUnloadpage7");e.setVisible(false);t.setVisible(true)}})});
//# sourceMappingURL=Receivingofhubyco.controller.js.map