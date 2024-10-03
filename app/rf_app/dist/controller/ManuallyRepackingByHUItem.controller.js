sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("com.app.rfapp.controller.ManuallyRepackingByHUItem",{onInit:function(){const e=this.getOwnerComponent().getRouter();e.attachRoutePatternMatched(this.onResourceDetailsLoad,this)},onResourceDetailsLoad:async function(e){const{id:i}=e.getParameter("arguments");this.ID=i},onAfterRendering:function(){this.byId("idScrollContainerScreen1").setVisible(false)},onBackBtnPressScreen1:async function(){var e=this.getOwnerComponent().getRouter();var i=this.getOwnerComponent().getModel();await i.read("/RESOURCESSet('"+this.ID+"')",{success:function(i){let t=i.Users.toLowerCase();if(t==="resource"){e.navTo("RouteResourcePage",{id:this.ID})}else{e.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){MessageToast.show("User does not exist")}})},onPressHUListTable:function(){var e=this.byId("idPage2HUDetails");var i=this.byId("idPage3HUListTable");e.setVisible(false);i.setVisible(true)},onPressNewHUNumberBtn:function(){var e=this.byId("idPage4NewHUNumber");var i=this.byId("idPage3HUListTable");i.setVisible(false);e.setVisible(true)},onEnterNewHUNUmberPress:function(){var e=this.byId("idPage5VerifyHUNumber");var i=this.byId("idPage4NewHUNumber");i.setVisible(false);e.setVisible(true)},onGRBtnPressVerifyHUNumber:function(){var e=this.byId("idPage5VerifyHUNumber");var i=this.byId("idPage6GoodsReceiptGR");e.setVisible(false);i.setVisible(true)},onUnloadPressVerifyHUNumber:function(){var e=this.byId("idPage5VerifyHUNumber");var i=this.byId("idPage7UnLoadPage");e.setVisible(false);i.setVisible(true)},onBackPressGoodsReceipt:function(){var e=this.byId("idPage6GoodsReceiptGR");var i=this.byId("idPage5VerifyHUNumber");i.setVisible(true);e.setVisible(false)},onBackPressUnLoadPage:function(){var e=this.byId("idPage7UnLoadPage");var i=this.byId("idPage5VerifyHUNumber");i.setVisible(true);e.setVisible(false)},onBackBtnPressScreen1:async function(){var e=this.getOwnerComponent().getRouter();var i=this.getOwnerComponent().getModel();await i.read("/RESOURCESSet('"+this.ID+"')",{success:function(i){let t=i.Users.toLowerCase();if(t==="resource"){e.navTo("RouteResourcePage",{id:this.ID})}else{e.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){MessageToast.show("User does not exist")}})},onNxtBtnPressScreen1:function(){this.byId("idScrollContainerScreen1").setVisible(false);this.byId("idScrollContainerScreen2").setVisible(true)},onNxtBtnPressScreen2:function(){this.byId("idScrollContainerScreen2").setVisible(false);this.byId("idScrollContainerScreen3").setVisible(true)},onNxtBtnPressScreen3:function(){this.byId("idScrollContainerScreen3").setVisible(false);this.byId("idScrollContainerScreen4").setVisible(true)},onNxtBtnPressScreen4:function(){this.byId("idScrollContainerScreen4").setVisible(false);this.byId("idScrollContainerScreen5").setVisible(true)},onNxtBtnPressScreen5:function(){this.byId("idScrollContainerScreen5").setVisible(false);this.byId("idScrollContainerScreen6").setVisible(true)},onNxtBtnPressScreen6:function(){this.byId("idScrollContainerScreen6").setVisible(false);this.byId("idScrollContainerScreen7").setVisible(true)},onNxtBtnPressScreen7:function(){this.byId("idScrollContainerScreen7").setVisible(false);this.byId("idScrollContainerScreen8").setVisible(true)},onNxtBtnPressScreen8:function(){this.byId("idScrollContainerScreen8").setVisible(false);this.byId("idScrollContainerScreen9").setVisible(true)},onNxtBtnPressScreen9:function(){this.byId("idScrollContainerScreen9").setVisible(false);this.byId("idScrollContainerScreen10").setVisible(true)},onBackBtnPressScreen2:function(){this.byId("idScrollContainerScreen1").setVisible(true);this.byId("idScrollContainerScreen2").setVisible(false)},onBackBtnPressScreen3:function(){this.byId("idScrollContainerScreen2").setVisible(true);this.byId("idScrollContainerScreen3").setVisible(false)},onBackBtnPressScreen4:function(){this.byId("idScrollContainerScreen3").setVisible(true);this.byId("idScrollContainerScreen4").setVisible(false)},onBackBtnPressScreen5:function(){this.byId("idScrollContainerScreen4").setVisible(true);this.byId("idScrollContainerScreen5").setVisible(false)},onBackBtnPressScreen6:function(){this.byId("idScrollContainerScreen5").setVisible(true);this.byId("idScrollContainerScreen6").setVisible(false)},onBackBtnPressScreen7:function(){this.byId("idScrollContainerScreen6").setVisible(true);this.byId("idScrollContainerScreen7").setVisible(false)},onBackBtnPressScreen8:function(){this.byId("idScrollContainerScreen7").setVisible(true);this.byId("idScrollContainerScreen8").setVisible(false)},onBackBtnPressScreen9:function(){this.byId("idScrollContainerScreen8").setVisible(true);this.byId("idScrollContainerScreen9").setVisible(false)},onBackBtnPressScreen10:function(){this.byId("idScrollContainerScreen9").setVisible(true);this.byId("idScrollContainerScreen10").setVisible(false)}})});
//# sourceMappingURL=ManuallyRepackingByHUItem.controller.js.map