sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent"],function(t,e){"use strict";return t.extend("com.app.rfapp.controller.WTQueryByWO",{onInit:function(){const t=this.getOwnerComponent().getRouter();t.attachRoutePatternMatched(this.onResourceDetailsLoad,this);const e=this.getView().byId("idWtQBWoWhTable");e.attachBrowserEvent("dblclick",this.onRowDoubleClick.bind(this))},onResourceDetailsLoad:async function(t){const{id:e}=t.getParameter("arguments");this.ID=e},onWtQBWofirstBackBtnPress:async function(){var t=e.getRouterFor(this);var i=this.getOwnerComponent().getModel();await i.read("/RESOURCESSet('"+this.ID+"')",{success:function(e){let i=e.Users.toLowerCase();if(i==="resource"){t.navTo("RouteResourcePage",{id:this.ID})}else{t.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){MessageToast.show("User does not exist")}})},onWtQBWoWhLiveChange:function(){this.getView().byId("idWtQBWoFirstSC").setVisible(false);this.getView().byId("idWtQBWoWhSecondsc").setVisible(true);var t=this.getView().byId("idWtQBWoWhInput").getValue();this.getView().byId("idWtQBWoWh2Input").setValue(t);this.getView().byId("idWtQBWoWh2Input").setEditable(false);this.getView().byId("idWtQBWofirstbackbtn").setVisible(false);this.getView().byId("idWtQBWoSecondbackbtn").setVisible(true)},onWtQBWoSecondBackBtnPress:function(){this.getView().byId("idWtQBWoFirstSC").setVisible(true);this.getView().byId("idWtQBWoWhSecondsc").setVisible(false);this.getView().byId("idWtQBWofirstbackbtn").setVisible(true);this.getView().byId("idWtQBWoSecondbackbtn").setVisible(false)},onBtnPress:function(){this.getView().byId("idWtQBWoWhThirdsc").setVisible(true);this.getView().byId("idWtQBWoWhSecondsc").setVisible(false);this.getView().byId("idWtQBWoThirdbackbtn").setVisible(true);this.getView().byId("idWtQBWoSecondbackbtn").setVisible(false)},onWtQBWoThirdBackBtnPress:function(){this.getView().byId("idWtQBWoWhThirdsc").setVisible(false);this.getView().byId("idWtQBWoWhSecondsc").setVisible(true);this.getView().byId("idWtQBWoSecondbackbtn").setVisible(true);this.getView().byId("idWtQBWoThirdbackbtn").setVisible(false)},onWtQBWoDetailBtnPress:function(){this.getView().byId("idWtQBWoWhThirdsc").setVisible(false);this.getView().byId("idWtQBWoWhFourthsc").setVisible(true);this.getView().byId("idWtQBWoThirdbackbtn").setVisible(false);this.getView().byId("idWtQBWoFourthbackbtn").setVisible(true)},onWtQBWoFourthBackBtnPress:function(){this.getView().byId("idWtQBWoWhThirdsc").setVisible(true);this.getView().byId("idWtQBWoWhFourthsc").setVisible(false);this.getView().byId("idWtQBWoThirdbackbtn").setVisible(true);this.getView().byId("idWtQBWoFourthbackbtn").setVisible(false)},onWtQBWoOpenBtnPress:function(){this.getView().byId("idWtQBWoWhThirdsc").setVisible(false);this.getView().byId("idWtQBWoWhFifthsc").setVisible(true);this.getView().byId("idWtQBWoThirdbackbtn").setVisible(false);this.getView().byId("idWtQBWoFifthbackbtn").setVisible(true)},onWtQBWoFifthBackBtnPress:function(){this.getView().byId("idWtQBWoWhThirdsc").setVisible(true);this.getView().byId("idWtQBWoWhFifthsc").setVisible(false);this.getView().byId("idWtQBWoThirdbackbtn").setVisible(true);this.getView().byId("idWtQBWoFifthbackbtn").setVisible(false)},onWtQBWoConfBtnPress:function(){this.getView().byId("idWtQBWoWhThirdsc").setVisible(false);this.getView().byId("idWtQBWoWhSixthsc").setVisible(true);this.getView().byId("idWtQBWoThirdbackbtn").setVisible(false);this.getView().byId("idWtQBWoSixththbackbtn").setVisible(true)},onWtQBWoSixthBackBtnPress:function(){this.getView().byId("idWtQBWoWhThirdsc").setVisible(true);this.getView().byId("idWtQBWoWhSixthsc").setVisible(false);this.getView().byId("idWtQBWoThirdbackbtn").setVisible(true);this.getView().byId("idWtQBWoSixththbackbtn").setVisible(false)},onRowDoubleClick:function(t){var e=this.getView().byId("idWtQBWoWhTable");var i=e.getSelectedItem();if(i){this.getView().byId("idWtQBWoWhThirdsc").setVisible(true);this.getView().byId("idWtQBWoWhSecondsc").setVisible(false);this.getView().byId("idWtQBWoThirdbackbtn").setVisible(true);this.getView().byId("idWtQBWoSecondbackbtn").setVisible(false)}},onWtQBWoAllBtnPress:function(){this.getView().byId("idWtQBWoWhThirdsc").setVisible(false);this.getView().byId("idWtQBWoWhSeventhsc").setVisible(true);this.getView().byId("idWtQBWoThirdbackbtn").setVisible(false);this.getView().byId("idWtQBWoSevenththbackbtn").setVisible(true)},onWtQBWoSeventhBackBtnPress:function(){this.getView().byId("idWtQBWoWhThirdsc").setVisible(true);this.getView().byId("idWtQBWoWhSeventhsc").setVisible(false);this.getView().byId("idWtQBWoThirdbackbtn").setVisible(true);this.getView().byId("idWtQBWoSevenththbackbtn").setVisible(false)}})});
//# sourceMappingURL=WTQueryByWO.controller.js.map