sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent"],function(e,t){"use strict";return e.extend("com.app.rfapp.controller.CreateShippingHU",{onInit:function(){const e=this.getOwnerComponent().getRouter();e.attachRoutePatternMatched(this.onResourceDetailsLoad,this)},onResourceDetailsLoad:async function(e){const{id:t}=e.getParameter("arguments");this.ID=t},OnpressbackCSHU1:async function(){var e=t.getRouterFor(this);var s=this.getOwnerComponent().getModel();await s.read("/RESOURCESSet('"+this.ID+"')",{success:function(t){let s=t.Users.toLowerCase();if(s==="resource"){e.navTo("RouteResourcePage",{id:this.ID})}else{e.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){MessageToast.show("User does not exist")}})},OnpressCSHUsubmit:function(){this.getView().byId("scrollContainerCSHU1").setVisible(false);this.getView().byId("_IDGenbackButtonCSHU1").setVisible(false);this.getView().byId("scrollContainerCSHU2").setVisible(true);this.getView().byId("_IDGenbackButtonCSHU2").setVisible(true)},Ondesthupress:function(){this.getView().byId("scrollContainerCSHU2").setVisible(false);this.getView().byId("_IDGenbackButtonCSHU2").setVisible(false);this.getView().byId("scrollContainerCSHU3").setVisible(true);this.getView().byId("_IDGenbackButtonCSHU3").setVisible(true)},OnpressbackbolCSHU3:function(){this.getView().byId("scrollContainerCSHU2").setVisible(true);this.getView().byId("_IDGenbackButtonCSHU2").setVisible(true);this.getView().byId("scrollContainerCSHU3").setVisible(false);this.getView().byId("_IDGenbackButtonCSHU3").setVisible(false)},OnpressbackbolCSHU2:function(){this.getView().byId("scrollContainerCSHU1").setVisible(true);this.getView().byId("_IDGenbackButtonCSHU1").setVisible(true);this.getView().byId("scrollContainerCSHU2").setVisible(false);this.getView().byId("_IDGenbackButtonCSHU2").setVisible(false)}})});
//# sourceMappingURL=CreateShippingHU.controller.js.map