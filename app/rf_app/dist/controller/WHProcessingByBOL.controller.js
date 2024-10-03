sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/ui/core/UIComponent"],function(e,i,t){"use strict";return e.extend("com.app.rfapp.controller.WHProcessingByBOL",{onInit:function(){const e=this.getOwnerComponent().getRouter();e.attachRoutePatternMatched(this.onResourceDetailsLoad,this)},onResourceDetailsLoad:async function(e){const{id:i}=e.getParameter("arguments");this.ID=i},onFirstBOLbackbtnPress:async function(){var e=t.getRouterFor(this);var s=this.getOwnerComponent().getModel();await s.read("/RESOURCESSet('"+this.ID+"')",{success:function(i){let t=i.Users.toLowerCase();if(t==="resource"){e.navTo("RouteResourcePage",{id:this.ID})}else{e.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){i.show("User does not exist")}})},onBolQueriesPress:function(){this.getView().byId("idFirstBOLPage").setVisible(false);this.getView().byId("idSecondBOLPage").setVisible(true);this.getView().byId("idFirstBOLbackbtn").setVisible(false);this.getView().byId("idSecondBOLbackbtn").setVisible(true)},onSecondBOLbackbtnPress:function(){this.getView().byId("idFirstBOLPage").setVisible(true);this.getView().byId("idSecondBOLPage").setVisible(false);this.getView().byId("idFirstBOLbackbtn").setVisible(true);this.getView().byId("idSecondBOLbackbtn").setVisible(false)},onBOLEnterPress:function(){this.getView().byId("idSecondBOLPage").setVisible(false);this.getView().byId("idThirdBOLPage").setVisible(true);this.getView().byId("idSecondBOLbackbtn").setVisible(false);this.getView().byId("idThirdBOLbackbtn").setVisible(true)},onThirdBOLbackbtnPress:function(){this.getView().byId("idSecondBOLPage").setVisible(true);this.getView().byId("idThirdBOLPage").setVisible(false);this.getView().byId("idSecondBOLbackbtn").setVisible(true);this.getView().byId("idThirdBOLbackbtn").setVisible(false)},onBOLEnterPress1:function(){this.getView().byId("idThirdBOLPage").setVisible(false);this.getView().byId("idFourthBOLPage").setVisible(true);this.getView().byId("idThirdBOLbackbtn").setVisible(false);this.getView().byId("idFourthBOLbackbtn").setVisible(true)},onFourthBOLbackbtnPress:function(){this.getView().byId("idThirdBOLPage").setVisible(true);this.getView().byId("idFourthBOLPage").setVisible(false);this.getView().byId("idThirdBOLbackbtn").setVisible(true);this.getView().byId("idFourthBOLbackbtn").setVisible(false)}})});
//# sourceMappingURL=WHProcessingByBOL.controller.js.map