sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/ui/core/UIComponent"],function(t,e,i){"use strict";return t.extend("com.app.rfapp.controller.AdhocProductWt",{onInit:function(){const t=this.getOwnerComponent().getRouter();t.attachRoutePatternMatched(this.onResourceDetailsLoad,this)},onResourceDetailsLoad:function(t){var e=this;const{id:i}=t.getParameter("arguments");this.ID=i;console.log(this.ID)},onPressSubmitInAdhocHuWt:function(){this.getView().byId("idProductScanning").setVisible(false);this.getView().byId("idProductDetails").setVisible(true);this.getView().byId("idBackButtoninAdhocProductWtScan").setVisible(false);this.getView().byId("idBackButtoninAdhocProductWtProductDetails").setVisible(true)},onBeforeRendering:function(){this.getView().byId("idBackButtoninAdhocProductWtScan").setVisible(true)},onPressBackButtoninAdhocProductWtProductDetails:function(){this.getView().byId("idProductScanning").setVisible(true);this.getView().byId("idProductDetails").setVisible(false);this.getView().byId("idBackButtoninAdhocProductWtProductDetails").setVisible(false);this.getView().byId("idBackButtoninAdhocProductWtScan").setVisible(true)},onPressBackButtoninAdhocProductWtProductScan:async function(){var t=i.getRouterFor(this);var o=this.getOwnerComponent().getModel();await o.read("/RESOURCESSet('"+this.ID+"')",{success:function(e){let i=e.Users.toLowerCase();if(i==="resource"){t.navTo("RouteResourcePage",{id:this.ID})}else{t.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){e.show("User does not exist")}})}})});
//# sourceMappingURL=AdhocProductWt.controller.js.map