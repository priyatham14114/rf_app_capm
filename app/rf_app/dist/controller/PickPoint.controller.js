sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/ui/core/UIComponent"],function(e,i,t){"use strict";return e.extend("com.app.rfapp.controller.PickPoint",{onInit:function(){const e=this.getOwnerComponent().getRouter();e.attachRoutePatternMatched(this.onResourceDetailsLoad,this)},onResourceDetailsLoad:function(e){var i=this;const{id:t}=e.getParameter("arguments");this.ID=t;console.log(this.ID)},onFirstPPbackbtnPress:async function(){var e=t.getRouterFor(this);var s=this.getOwnerComponent().getModel();await s.read("/RESOURCESSet('"+this.ID+"')",{success:function(i){let t=i.Users.toLowerCase();if(t==="resource"){e.navTo("RouteResourcePage",{id:this.ID})}else{e.navTo("Supervisor",{id:this.ID})}}.bind(this),error:function(){i.show("User does not exist")}})},onWorkCenterLiveChange:function(){this.getView().byId("idFirstPPPage").setVisible(false);this.getView().byId("idSecondHUPPPage").setVisible(true);this.getView().byId("idPPSecondbackbtn").setVisible(true);this.getView().byId("idFirstPPbackbtn").setVisible(false)},onPPSecondbackbtnPress:function(){this.getView().byId("idPPSecondbackbtn").setVisible(false);this.getView().byId("idFirstPPbackbtn").setVisible(true);this.getView().byId("idFirstPPPage").setVisible(true);this.getView().byId("idSecondHUPPPage").setVisible(false)},onHUPPLiveChange:function(){this.getView().byId("idSecondHUPPPage").setVisible(false);this.getView().byId("idFirstPPPage").setVisible(false);this.getView().byId("idThirdPPPage").setVisible(true);this.getView().byId("idPPSecondbackbtn").setVisible(false);this.getView().byId("idPPThirdbackbtn").setVisible(true)},onPPThirdbackbtnPress:function(){this.getView().byId("idSecondHUPPPage").setVisible(true);this.getView().byId("idThirdPPPage").setVisible(false);this.getView().byId("idPPSecondbackbtn").setVisible(true);this.getView().byId("idPPThirdbackbtn").setVisible(false)},onPPWorkloadScrPress:function(){this.getView().byId("idFourthPPPage").setVisible(true);this.getView().byId("idThirdPPPage").setVisible(false);this.getView().byId("idPPThirdbackbtn").setVisible(false);this.getView().byId("idPPFourthbackbtn").setVisible(true)},onPPFourthbackbtnPress:function(){this.getView().byId("idFourthPPPage").setVisible(false);this.getView().byId("idThirdPPPage").setVisible(true);this.getView().byId("idPPThirdbackbtn").setVisible(true);this.getView().byId("idPPFourthbackbtn").setVisible(false)},onPPHuCreateBtnPress:function(){this.getView().byId("idFifthPPPage").setVisible(true);this.getView().byId("idThirdPPPage").setVisible(false);this.getView().byId("idPPThirdbackbtn").setVisible(false);this.getView().byId("idPPFifthbackbtn").setVisible(true)},onPPFiftthbackbtnPress:function(){this.getView().byId("idPPFifthbackbtn").setVisible(false);this.getView().byId("idThirdPPPage").setVisible(true);this.getView().byId("idPPThirdbackbtn").setVisible(true);this.getView().byId("idFifthPPPage").setVisible(false)},onppPtlBtnPress:function(){this.getView().byId("idPPSixthPage").setVisible(true);this.getView().byId("idThirdPPPage").setVisible(false);this.getView().byId("idPPThirdbackbtn").setVisible(false);this.getView().byId("idPPSixthbackbtn").setVisible(true)},onPPSixthbackbtnPress:function(){this.getView().byId("idPPSixthPage").setVisible(false);this.getView().byId("idThirdPPPage").setVisible(true);this.getView().byId("idPPThirdbackbtn").setVisible(true);this.getView().byId("idPPSixthbackbtn").setVisible(false)},onPPDetailScrnBtnPress:function(){this.getView().byId("idPPSeventhPage").setVisible(true);this.getView().byId("idThirdPPPage").setVisible(false);this.getView().byId("idPPThirdbackbtn").setVisible(false);this.getView().byId("idPPSeventhbackbtn").setVisible(true)},onPPSeventhbackbtnPress:function(){this.getView().byId("idPPSeventhPage").setVisible(false);this.getView().byId("idThirdPPPage").setVisible(true);this.getView().byId("idPPThirdbackbtn").setVisible(true);this.getView().byId("idPPSeventhbackbtn").setVisible(false)},onPPSerialNoLocBtnPress:function(){this.getView().byId("idPPEigthPage").setVisible(true);this.getView().byId("idThirdPPPage").setVisible(false);this.getView().byId("idPPThirdbackbtn").setVisible(false);this.getView().byId("idPPEigthbackbtn").setVisible(true)},onPPEigthbackbtnPress:function(){this.getView().byId("idPPEigthPage").setVisible(false);this.getView().byId("idThirdPPPage").setVisible(true);this.getView().byId("idPPThirdbackbtn").setVisible(true);this.getView().byId("idPPEigthbackbtn").setVisible(false)},onSetRangeBtnPress:function(){this.getView().byId("idPPNinthPage").setVisible(true);this.getView().byId("idPPEigthPage").setVisible(false);this.getView().byId("idPPEigthbackbtn").setVisible(false);this.getView().byId("idPPNinthbackbtn").setVisible(true)},onPPNinthbackbtnPress:function(){this.getView().byId("idPPNinthPage").setVisible(false);this.getView().byId("idPPEigthPage").setVisible(true);this.getView().byId("idPPEigthbackbtn").setVisible(true);this.getView().byId("idPPNinthbackbtn").setVisible(false)},onSnSelByListBtnPress:function(){this.getView().byId("idPPTenthPage").setVisible(true);this.getView().byId("idPPEigthPage").setVisible(false);this.getView().byId("idPPEigthbackbtn").setVisible(false);this.getView().byId("idPPTenthbackbtn").setVisible(true)},onPPTenthbackbtnPress:function(){this.getView().byId("idPPTenthPage").setVisible(false);this.getView().byId("idPPEigthPage").setVisible(true);this.getView().byId("idPPEigthbackbtn").setVisible(true);this.getView().byId("idPPTenthbackbtn").setVisible(false)},onTransOrdPress:function(){this.getView().byId("idPPSixthPage").setVisible(false);this.getView().byId("idThirdPPPage").setVisible(true);this.getView().byId("idPPThirdbackbtn").setVisible(true);this.getView().byId("idPPSixthbackbtn").setVisible(false)},onEnterBtnPress:function(){this.getView().byId("idPPEleventhPage").setVisible(true);this.getView().byId("idFourthPPPage").setVisible(false);this.getView().byId("idPPFourthbackbtn").setVisible(false);this.getView().byId("idPPEleventhbackbtn").setVisible(true)},onPPEleventhbackbtnPress:function(){this.getView().byId("idPPEleventhPage").setVisible(false);this.getView().byId("idFourthPPPage").setVisible(true);this.getView().byId("idPPFourthbackbtn").setVisible(true);this.getView().byId("idPPEleventhbackbtn").setVisible(false)},onEnter1Press:function(){this.getView().byId("idPPTwelvethPage").setVisible(true);this.getView().byId("idPPTenthPage").setVisible(false);this.getView().byId("idPPTenthbackbtn").setVisible(false);this.getView().byId("idPPTwelthbackbtn").setVisible(true)},onPPTwelthbackbtnPress:function(){this.getView().byId("idPPTwelvethPage").setVisible(false);this.getView().byId("idPPTenthPage").setVisible(true);this.getView().byId("idPPTenthbackbtn").setVisible(true);this.getView().byId("idPPTwelthbackbtn").setVisible(false)},onserNoColBtnPress:function(){this.getView().byId("idPPEigthPage").setVisible(true);this.getView().byId("idPPTwelvethPage").setVisible(false);this.getView().byId("idPPEigthbackbtn").setVisible(true);this.getView().byId("idPPTwelthbackbtn").setVisible(false)},onEnterPress3:function(){this.getView().byId("idPPThirteenPage").setVisible(true);this.getView().byId("idPPTwelvethPage").setVisible(false);this.getView().byId("idPPThirteenbackbtn").setVisible(true);this.getView().byId("idPPTwelthbackbtn").setVisible(false)},onPPThirteenbackbtnPress:function(){this.getView().byId("idPPThirteenPage").setVisible(false);this.getView().byId("idPPTwelvethPage").setVisible(true);this.getView().byId("idPPThirteenbackbtn").setVisible(false);this.getView().byId("idPPTwelthbackbtn").setVisible(true)}})});
//# sourceMappingURL=PickPoint.controller.js.map