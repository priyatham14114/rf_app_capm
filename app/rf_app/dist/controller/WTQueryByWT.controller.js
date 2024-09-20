sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent"],function(t,e){"use strict";return t.extend("com.app.rfapp.controller.WTQueryByWT",{onInit:function(){const t=this.getOwnerComponent().getRouter();t.attachRoutePatternMatched(this.onResourceDetailsLoad,this)},onResourceDetailsLoad:async function(t){const{id:e}=t.getParameter("arguments");this.ID=e},onWtQBWtfirstBackBtnPress:async function(){var t=e.getRouterFor(this);var i=this.getOwnerComponent().getModel();await i.read("/RESOURCESSet('"+this.ID+"')",{success:function(e){let i=e.Users.toLowerCase();if(i==="resource"){t.navTo("RouteResourcePage",{id:this.ID})}else{t.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){MessageToast.show("User does not exist")}})},onWtQBWtWhLiveChange:function(){this.getView().byId("idWtQBWtFirstSC").setVisible(false);this.getView().byId("idWtQBWtWhSecondsc").setVisible(true);this.getView().byId("idWtQBWtfirstbackbtn").setVisible(false);this.getView().byId("idWtQBWtSecondbackbtn").setVisible(true)},onWtQBWtSecondBackBtnPress:function(){this.getView().byId("idWtQBWtWhSecondsc").setVisible(false);this.getView().byId("idWtQBWtFirstSC").setVisible(true);this.getView().byId("idWtQBWtSecondbackbtn").setVisible(false);this.getView().byId("idWtQBWtfirstbackbtn").setVisible(true)},onWtQBWtDetailBtnPress:function(){this.getView().byId("idWtQBWtWhSecondsc").setVisible(false);this.getView().byId("idWtQBWtWhThirdsc").setVisible(true);this.getView().byId("idWtQBWtSecondbackbtn").setVisible(false);this.getView().byId("idWtQBWtThirdbackbtn").setVisible(true)},onWtQBWtThirdBackBtnPress:function(){this.getView().byId("idWtQBWtWhSecondsc").setVisible(true);this.getView().byId("idWtQBWtWhThirdsc").setVisible(false);this.getView().byId("idWtQBWtSecondbackbtn").setVisible(true);this.getView().byId("idWtQBWtThirdbackbtn").setVisible(false)}})});
//# sourceMappingURL=WTQueryByWT.controller.js.map