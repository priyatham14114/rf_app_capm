sap.ui.define(
    [
      "sap/ui/core/mvc/Controller"
    ],
    function (BaseController) {
      "use strict";
   
      return BaseController.extend("com.app.rfapp.controller.Receivingofhubyco", {
        onInit: function () {
   
        const oTable = this.getView().byId("idROHCOTable");
              oTable.attachBrowserEvent("dblclick", this.onRowDoubleClick.bind(this));
             
          },
          onRowDoubleClick: function () {
              debugger
              var oSelected = this.byId("idROHCOTable").getSelectedItem();
              // var ID = oSelected.getBindingContext().getObject()
              this.getView().byId("idROHCOScanManufacturingorder").setVisible(false);
              this.getView().byId("idROHCODeliverydetailsPage2").setVisible(true);
          },
        onAfterRendering: function () {
          this.byId("idROHCOScanManufacturingorder").setVisible(true);
        },
        //Back Btn from 1st ScrollContainer Page 1 =>idPage1ScannerFormBox
        onPressScanCObackbtn: function () {
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("Supervisor");
        },
   
        //Back Btn from ScrollContainer Page 2 =>idROHCODeliverydetailsPage2
        OnpressManuDelDetailsBackbutton: function () {
          var oScrollContainer1 = this.byId("idROHCOScanManufacturingorder");
          var oScrollContainer2 = this.byId("idROHCODeliverydetailsPage2");
   
          // show the Scanner form VBox
          oScrollContainer1.setVisible(true);
   
          //Hide the HUDetails scroll container
          oScrollContainer2.setVisible(false);
        },
   
        //Back Btn from ScrollContainer Page 3=>idROHCOHUListPage3
        OnpressROHCOHUlistBackbtn: function () {
          var oScrollContainer3 = this.byId("idROHCOHUListPage3");
          var oScrollContainer2 = this.byId("idROHCODeliverydetailsPage2");
   
          // show the HUDetails Page2
          oScrollContainer2.setVisible(true);
   
          //Hide the HUListTable Page3
          oScrollContainer3.setVisible(false);
        },
   
        //Back Btn from ScrollContainer Page 4=>idROHCONewHUPage4
        OnpressROHCONewHuBackbutton: function () {
          var oScrollContainer4 = this.byId("idROHCONewHUPage4");
          var oScrollContainer2 = this.byId("idROHCODeliverydetailsPage2");
   
          // show the HUDetails Page2
          oScrollContainer2.setVisible(true);
   
          //Hide the NewHuNumber Page3
          oScrollContainer4.setVisible(true);
        },
   
        //Back Btn from ScrollContainer Page 5=>idROHCONewHUPage4
        OnpressAfterNextBackbutton: function () {
          var oScrollContainer5 = this.byId("idROHCOnextOrEnterpage5");
          var oScrollContainer4 = this.byId("idROHCONewHUPage4");
   
          // show the HUDetails Page2
          oScrollContainer4.setVisible(true);
   
          //Hide the NewHuNumber Page3
          oScrollContainer5.setVisible(false);
        },
   
        //Back Btn from ScrollContainer Page 6=>idROHCOGRpage6
        OnpressROHCOGRBackbutton: function () {
          var oScrollContainer6 = this.byId("idROHCOGRpage6");
          var oScrollContainer5 = this.byId("idROHCOnextOrEnterpage5");
   
          // show the VerifyHUNumber Page5
          oScrollContainer5.setVisible(true);
   
          //Hide the GoodsReceiptGR Page6
          oScrollContainer6.setVisible(false);
        },
   
        //Back Btn from ScrollContainer Page 7=>idROHCOUnloadpage7
        OnpressROHCOUnloadBackbutton: function () {
          var oScrollContainer7 = this.byId("idROHCOUnloadpage7");
          var oScrollContainer5 = this.byId("idROHCOnextOrEnterpage5");
   
          // show the UnLoadPage Page7
          oScrollContainer5.setVisible(true);
   
          //Hide the VerifyHuNmber Page5
          oScrollContainer7.setVisible(false);
        },
   
        //Submit Btn from ScrollContainer Page 1=> idPage1ScannerFormBox..
        onPressROHCOSubmitbtn: function () {
          var oScrollContainer1 = this.byId("idROHCOScanManufacturingorder");
          var oScrollContainer2 = this.byId("idROHCOPanel");
   
          // Hide the Scanner form VBox
         
   
          // Show the HUDetails scroll container
          oScrollContainer2.setVisible(true);
        },
   
        //HUListTableBtn from ScrollContainer Page 2 =>idROHCODeliverydetailsPage2
        onPressROHCOHUListPress: function () {
          var oScrollContainer2 = this.byId("idROHCODeliverydetailsPage2");
          var oScrollContainer3 = this.byId("idROHCOHUListPage3");
   
          // Hide the form VBox
          oScrollContainer2.setVisible(false);
          //oScrollContainer.setVisible(false);
   
          // Show the scroll container
          oScrollContainer3.setVisible(true);
        },
   
        //NewHUNumberBtn from ScrollContainer Page 2=>idROHCODeliverydetailsPage2
        onPressROHCONewHU: function () {
          var oScrollContainer4 = this.byId("idROHCONewHUPage4");
          var oScrollContainer2 = this.byId("idROHCODeliverydetailsPage2");
          // Hide the form VBox
          oScrollContainer2.setVisible(false);
   
          // Show the scroll container
          oScrollContainer4.setVisible(true);
        },
   
        onPressROHCOEnter: function(){
          var oScrollContainer5 = this.byId("idROHCOnextOrEnterpage5");
          var oScrollContainer4 = this.byId("idROHCONewHUPage4");
          // Hide the form VBox
          oScrollContainer4.setVisible(false);
   
          // Show the scroll container
          oScrollContainer5.setVisible(true);
        },
   
        //GRBtn from from ScrollContainer Page 5=>idROHCOGRpage6
        onPressEnterROHCOGRButton: function(){
          var oScrollContainer5 = this.byId("idROHCOnextOrEnterpage5");
          var oScrollContainer6 = this.byId("idROHCOGRpage6");
          // Hide the form VBox
          oScrollContainer5.setVisible(false);
   
          // Show the scroll container
          oScrollContainer6.setVisible(true);
        },
   
        //UnLoad Btn from from ScrollContainer Page 5=>idROHCOGRpage6
        onPressEnterROHCOUnloadButton: function(){
          var oScrollContainer5 = this.byId("idROHCOnextOrEnterpage5");
          var oScrollContainer7 = this.byId("idROHCOUnloadpage7");
          // Hide the form VBox
          oScrollContainer5.setVisible(false);
   
          // Show the scroll container
          oScrollContainer7.setVisible(true);
        }
   
      });
    }
  );