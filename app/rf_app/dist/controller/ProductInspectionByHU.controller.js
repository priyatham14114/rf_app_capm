sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent"],function(e,t){"use strict";return e.extend("com.app.rfapp.controller.ProductInspectionByHU",{onInit:function(){const e=this.getOwnerComponent().getRouter();e.attachRoutePatternMatched(this.onResourceDetailsLoad,this)},onResourceDetailsLoad:async function(e){const{id:t}=e.getParameter("arguments");this.ID=t},OnpressbackPIBHU1:async function(){var e=t.getRouterFor(this);var s=this.getOwnerComponent().getModel();await s.read("/RESOURCESSet('"+this.ID+"')",{success:function(t){let s=t.Users.toLowerCase();if(s==="resource"){e.navTo("RouteResourcePage",{id:this.ID})}else{e.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){MessageToast.show("User does not exist")}})},OnpressPIBHUsubmit:function(){this.getView().byId("_IDGenbackButtonPIBHU1").setVisible(false);this.getView().byId("scrollContainerPIBHU1").setVisible(false);this.getView().byId("scrollContainerPIBHU2").setVisible(true);this.getView().byId("_IDGenbackButtonPIBHU2").setVisible(true)},OnpressbackbolPIBHU2:function(){this.getView().byId("_IDGenbackButtonPIBHU1").setVisible(true);this.getView().byId("scrollContainerPIBHU1").setVisible(true);this.getView().byId("scrollContainerPIBHU2").setVisible(false);this.getView().byId("_IDGenbackButtonPIBHU2").setVisible(false)}})});
//# sourceMappingURL=ProductInspectionByHU.controller.js.map