sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent"],function(e,t){"use strict";return e.extend("com.app.rfapp.controller.ProductInspectionByStorageBin",{onInit:function(){const e=this.getOwnerComponent().getRouter();e.attachRoutePatternMatched(this.onResourceDetailsLoad,this)},onResourceDetailsLoad:async function(e){const{id:t}=e.getParameter("arguments");this.ID=t},OnpressbackPIBSB1:async function(){var e=t.getRouterFor(this);var s=this.getOwnerComponent().getModel();await s.read("/RESOURCESSet('"+this.ID+"')",{success:function(t){let s=t.Users.toLowerCase();if(s==="resource"){e.navTo("RouteResourcePage",{id:this.ID})}else{e.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){MessageToast.show("User does not exist")}})},OnpressPIBSBsubmit:function(){this.getView().byId("_IDGenbackButtonPIBSB1").setVisible(false);this.getView().byId("scrollContainerPIBSB1").setVisible(false);this.getView().byId("scrollContainerPIBSB2").setVisible(true);this.getView().byId("_IDGenbackButtonPIBSB2").setVisible(true)},OnpressbackbolPIBHU2:function(){this.getView().byId("_IDGenbackButtonPIBSB1").setVisible(true);this.getView().byId("scrollContainerPIBSB1").setVisible(true);this.getView().byId("scrollContainerPIBSB2").setVisible(false);this.getView().byId("_IDGenbackButtonPIBSB2").setVisible(false)}})});
//# sourceMappingURL=ProductInspectionByStorageBin.controller.js.map