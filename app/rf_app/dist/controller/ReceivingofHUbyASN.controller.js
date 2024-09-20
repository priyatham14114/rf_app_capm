sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/Device"],function(e,i){"use strict";return e.extend("com.app.rfapp.controller.ReceivingofHUbyASN",{onInit:function(){const e=this.getOwnerComponent().getRouter();e.attachRoutePatternMatched(this.onResourceDetailsLoad,this)},onResourceDetailsLoad:async function(e){const{id:i}=e.getParameter("arguments");this.ID=i},Onpressback0:async function(){var e=this.getOwnerComponent().getRouter();var i=this.getOwnerComponent().getModel();await i.read("/RESOURCESSet('"+this.ID+"')",{success:function(i){let s=i.Users.toLowerCase();if(s==="resource"){e.navTo("RouteResourcePage",{id:this.ID})}else{e.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){MessageToast.show("User does not exist")}})},Onpresssubmit:function(){this.getView().byId("page1ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page2ReceiveHUbyASN_RHUASN").setVisible(true)},Onpressback1:function(){this.getView().byId("page1ReceiveHUbyASN_RHUASN").setVisible(true);this.getView().byId("page2ReceiveHUbyASN_RHUASN").setVisible(false)},onHUListPress:function(){this.getView().byId("page1ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page2ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page3ReceiveHUbyASN_RHUASN").setVisible(true)},Onpressback2:function(){this.getView().byId("page1ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page2ReceiveHUbyASN_RHUASN").setVisible(true);this.getView().byId("page3ReceiveHUbyASN_RHUASN").setVisible(false)},onNewHUPress:function(){this.getView().byId("page1ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page2ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page3ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page4ReceiveHUbyASN_RHUASN").setVisible(true);this.getView().byId("page5ReceiveHUbyASN_RHUASN").setVisible(false)},Onpressback3:function(){this.getView().byId("page1ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page2ReceiveHUbyASN_RHUASN").setVisible(true);this.getView().byId("page4ReceiveHUbyASN_RHUASN").setVisible(false)},onNextEnterpress:function(){this.getView().byId("page5ReceiveHUbyASN_RHUASN").setVisible(true);this.getView().byId("page4ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page1ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page2ReceiveHUbyASN_RHUASN").setVisible(false)},Onpressback4:function(){this.getView().byId("page1ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page5ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page4ReceiveHUbyASN_RHUASN").setVisible(true);this.getView().byId("page3ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page2ReceiveHUbyASN_RHUASN").setVisible(false)},onGRPress:function(){this.getView().byId("page6ReceiveHUbyASN_RHUASN").setVisible(true);this.getView().byId("page5ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page4ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page1ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page2ReceiveHUbyASN_RHUASN").setVisible(false)},Onpressback5:function(){this.getView().byId("page1ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page5ReceiveHUbyASN_RHUASN").setVisible(true);this.getView().byId("page6ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page4ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page2ReceiveHUbyASN_RHUASN").setVisible(false)},onUnloadPress:function(){this.getView().byId("page6ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page5ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page4ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page7ReceiveHUbyASN_RHUASN").setVisible(true);this.getView().byId("page1ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page2ReceiveHUbyASN_RHUASN").setVisible(false)},Onpressback6:function(){this.getView().byId("page1ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page5ReceiveHUbyASN_RHUASN").setVisible(true);this.getView().byId("page7ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page6ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page3ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page4ReceiveHUbyASN_RHUASN").setVisible(false);this.getView().byId("page2ReceiveHUbyASN_RHUASN").setVisible(false)}})});
//# sourceMappingURL=ReceivingofHUbyASN.controller.js.map