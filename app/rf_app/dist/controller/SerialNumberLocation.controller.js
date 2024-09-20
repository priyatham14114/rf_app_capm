sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/ui/core/UIComponent"],function(e,t,i){"use strict";return e.extend("com.app.rfapp.controller.SerialNumberLocation",{onInit:function(){const e=this.getOwnerComponent().getRouter();e.attachRoutePatternMatched(this.onResourceDetailsLoad,this)},onResourceDetailsLoad:function(e){var t=this;const{id:i}=e.getParameter("arguments");this.ID=i;console.log(this.ID)},onSNLfirxtBackBtnPress:async function(){var e=i.getRouterFor(this);var s=this.getOwnerComponent().getModel();await s.read("/RESOURCESSet('"+this.ID+"')",{success:function(t){let i=t.Users.toLowerCase();if(i==="resource"){e.navTo("RouteResourcePage",{id:this.ID})}else{e.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){t.show("User does not exist")}})},onSNLproductLiveChange:function(){this.getView().byId("idSNLFirstSC").setVisible(false);this.getView().byId("idSNLsecondSC").setVisible(true);var e=this.getView().byId("idSNLproductInput").getValue();this.getView().byId("idSNLProInput").setValue(e);this.getView().byId("idSNLProInput").setEditable(false);this.getView().byId("idSNLSecondBackBtn").setVisible(true);this.getView().byId("idSNLfirstBackBtn").setVisible(false)},onSNLSecondBackBtnPress:function(){this.getView().byId("idSNLFirstSC").setVisible(true);this.getView().byId("idSNLsecondSC").setVisible(false);this.getView().byId("idSNLSecondBackBtn").setVisible(false);this.getView().byId("idSNLfirstBackBtn").setVisible(true)},onSNLsnoLiveChange:function(){this.getView().byId("idSNLthirdSC").setVisible(true);this.getView().byId("idSNLsecondSC").setVisible(false);var e=this.getView().byId("idSNLsnoInput").getValue();this.getView().byId("idSNLsnoInput1").setValue(e);var t=this.getView().byId("idSNLproductInput").getValue();this.getView().byId("idSNLProInput1").setValue(t);this.getView().byId("idSNLProInput1").setEditable(false);this.getView().byId("idSNLsnoInput1").setEditable(false);this.getView().byId("idSNLSecondBackBtn").setVisible(false);this.getView().byId("idSNLthirdBackBtn").setVisible(true)},onSNLthirdBackBtnPress:function(){this.getView().byId("idSNLSecondBackBtn").setVisible(true);this.getView().byId("idSNLthirdBackBtn").setVisible(false);this.getView().byId("idSNLthirdSC").setVisible(false);this.getView().byId("idSNLsecondSC").setVisible(true)},onSNLPreDePress:function(){this.getView().byId("idSNLthirdSC").setVisible(false);this.getView().byId("idSNLfourthSC").setVisible(true);this.getView().byId("idSNLfourthBackBtn").setVisible(true);this.getView().byId("idSNLthirdBackBtn").setVisible(false)},onSNLfourthBackBtnPress:function(){this.getView().byId("idSNLthirdSC").setVisible(true);this.getView().byId("idSNLfourthSC").setVisible(false);this.getView().byId("idSNLfourthBackBtn").setVisible(false);this.getView().byId("idSNLthirdBackBtn").setVisible(true)},onSNLBinDePress:function(){this.getView().byId("idSNLthirdSC").setVisible(false);this.getView().byId("idSNLFifthSC").setVisible(true);this.getView().byId("idSNLfifthBackBtn").setVisible(true);this.getView().byId("idSNLthirdBackBtn").setVisible(false)},onSNLfifthBackBtnPress:function(){this.getView().byId("idSNLthirdSC").setVisible(true);this.getView().byId("idSNLFifthSC").setVisible(false);this.getView().byId("idSNLfifthBackBtn").setVisible(false);this.getView().byId("idSNLthirdBackBtn").setVisible(true)}})});
//# sourceMappingURL=SerialNumberLocation.controller.js.map