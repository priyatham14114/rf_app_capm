sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/Device","sap/ui/model/json/JSONModel","sap/m/MessageToast","sap/ui/core/UIComponent","sap/ui/core/BusyIndicator"],function(e,t,a,s,o,r){"use strict";return e.extend("com.app.rfapp.controller.Supervisor",{onInit:function(){this.bOtpVerified=true;this.bCreate=true;var e=new a(sap.ui.require.toUrl("com/app/rfapp/model/data1.json"));this.getView().setModel(e);var t=this.getOwnerComponent().getModel();this.getView().byId("pageContainer").setModel(t);this._fetchUniqueProcessAreas();this.byId("idEmppInput").attachLiveChange(this.onEmployeeIdLiveChange,this);const s=this.getOwnerComponent().getRouter();s.attachRoutePatternMatched(this.onSupervisorDetailsLoad,this)},onSupervisorDetailsLoad:async function(e){const{id:t}=e.getParameter("arguments");this.ID=t},onTilePress:function(e){var t=e.getSource();if(t instanceof sap.m.Button){e.stopPropagation();this.onPaletteIconPress(e)}else{this.onTilePressPutawayByWO(e)}},onPaletteIconPress:function(e){this._currentTileId=e.getSource().getParent().getParent().getId();this.byId("themeTileDialog").open();e.stopPropagation()},onAfterRendering:function(){debugger;var e=localStorage.getItem("themeColor");if(e){this.applyThemeColor(e)}var t=JSON.parse(localStorage.getItem("tileColors")||"{}");for(var a in t){var s=t[a];var o=this._extractLocalId(a);var r=this.byId(o);if(r){r.addEventDelegate({onAfterRendering:function(){var e=r.getDomRef();if(e){e.style.backgroundColor=s}}})}else{console.warn("Tile with ID '"+o+"' not found.")}}},_extractLocalId:function(e){var t=e.split("--");return t.length>1?t[t.length-1]:e},onOpenThemeDialog:function(){this.byId("themeTileDialog").open()},onApplyColor:function(){var e=this.getView();var t=e.byId("colorPicker");var a=t.getColorString();var s=[];var o=this.byId("colorOptions").getItems();o.forEach(function(e){if(e instanceof sap.m.CheckBox&&e.getSelected()){var t=e.getCustomData()[0].getValue();s.push(t)}});if(s.length>0){if(s.length>1){sap.m.MessageToast.show("You can only select one color.");return}if(t.getVisible()){sap.m.MessageToast.show("Please deselect the checkbox before using the custom color picker.");return}var r=s[0];if(this._currentTileId){this.applyColorToTile(this._currentTileId,r);sap.m.MessageToast.show("Tile color applied successfully!");this._currentTileId=null}else{this.applyThemeColor(r);sap.m.MessageToast.show("Theme color applied successfully!")}}else if(this._isValidColor(a)){if(this._currentTileId){this.applyColorToTile(this._currentTileId,a);sap.m.MessageToast.show("Tile color applied successfully!");this._currentTileId=null}else{this.applyThemeColor(a);sap.m.MessageToast.show("Theme color applied successfully!")}}else{sap.m.MessageToast.show("Invalid color format. Please use a valid color code.")}this.resetDialogBox();this.byId("themeTileDialog").close()},onColorOptionSelect:function(e){var t=e.getSource();var a=this.byId("colorOptions").getItems();a.forEach(function(e){if(e instanceof sap.m.CheckBox&&e!==t){e.setSelected(false)}});this.byId("colorPicker").setVisible(!t.getSelected())},applyThemeColor:function(e){var t=[this.byId("toolPage"),this.byId("idSideNavigation"),this.byId("idToolHeader"),this.byId("pageContainer")];var a="customThemeStyle";var s=document.getElementById(a);if(s){s.remove()}var o=document.createElement("style");o.id=a;o.textContent=".customTheme { background-color: "+e+" !important; }";document.head.appendChild(o);t.forEach(function(e){if(e){e.addStyleClass("customTheme")}});localStorage.setItem("themeColor",e)},applyColorToTile:function(e,t){var a=this.byId(e);if(!a)return;var s=a.getDomRef();if(s){s.style.backgroundColor="";s.style.backgroundColor=t;var o=JSON.parse(localStorage.getItem("tileColors")||"{}");for(var r in o){if(r!==e){delete o[r]}}o[e]=t;localStorage.setItem("tileColors",JSON.stringify(o))}},_isValidColor:function(e){var t=/^#([0-9A-Fa-f]{3}){1,2}$/;var a=/^rgb\(\d{1,3},\d{1,3},\d{1,3}\)$/;return t.test(e)||a.test(e)},onCancelColorDialog:function(){this.byId("themeTileDialog").close();this.resetDialogBox()},resetDialogBox:function(){var e=this.getView();var t=e.byId("colorPicker");var a=this.byId("colorOptions").getItems();a.forEach(function(e){if(e instanceof sap.m.CheckBox){e.setSelected(false)}});t.setColorString("#FFFFFF");t.setVisible(true)},onPressLanguageChangeApp:function(){var e=this.byId("idLanguageSelectorComboBox");var t=e.getVisible();e.setVisible(!t)},onRefreshRequestedData:function(){this.onRequestedData();this.onUserData()},onRequestedData:function(){var e=this.byId("idRequestedData");if(e){var t=e.getBinding("items");if(t){t.refresh()}}},onUserData:function(){var e=this.byId("idUserDataTable");if(e){var t=e.getBinding("items");if(t){t.refresh()}}},onItemSelect:function(e){var t=e.getParameter("item");this.byId("pageContainer").to(this.getView().createId(t.getKey()))},onSideNavButtonPress:function(){var e=this.byId("toolPage");var t=e.getSideExpanded();this._setToggleButtonTooltip(t);e.setSideExpanded(!e.getSideExpanded())},_setToggleButtonTooltip:function(e){var t=this.byId("sideNavigationToggleButton");if(e){t.setTooltip("Large Size Navigation")}else{t.setTooltip("Small Size Navigation")}},onApproveUserBtnPress:async function(){debugger;var e=this.getView();if(this.byId("idRequestedData").getSelectedItems().length<1){s.show("Please Select atleast one Resource");return}else if(this.byId("idRequestedData").getSelectedItems().length>1){s.show("Please Select only one Resource");return}var t=this.byId("idRequestedData").getSelectedItem().getBindingContext().getObject();console.log(t);this.oApproveForm??=await this.loadFragment({name:"com.app.rfapp.fragments.ApproveDetails"});this.oApproveForm.open();if(t.Email){e.byId("idEmailInputF").setText(t.Email)}else{e.byId("idEmailInputF").setVisible(false);e.byId("idEmployeeEmailLabelF").setVisible(false)}e.byId("idEmployeeIDInputF").setText(t.Resourceid);e.byId("idNameInputF").setText(t.Resourcename);e.byId("idEmailInputF").setText(t.Email);e.byId("idPhoneInputF").setText(t.Phonenumber);e.byId("idRoesurcetypeInputF").setText(t.Resourcetype);var a=this.getOwnerComponent().getModel();a.read("/ProcessAreaSet",{success:function(e){var t=e.results;var a=new Set;t.forEach(function(e){a.add(e.Processarea)});var s=Array.from(a).map(function(e){return{Processarea:e}});var o=new sap.ui.model.json.JSONModel({ProcessAreas:s});var r=this.byId("idAreaSelect");if(!r){r=sap.ui.core.Fragment.byId("fragmentId","idAreaSelect")}if(r){r.setModel(o);r.bindItems({path:"/ProcessAreas",template:new sap.ui.core.Item({key:"{Processarea}",text:"{Processarea}"})})}else{console.error("MultiComboBox with id 'idAreaSelect' not found.")}this.onRequestedData();this.onUserData()}.bind(this),error:function(e){console.error("Error reading AreaSet:",e)}})},onClose:function(){this.oApproveForm.close()},onApprove:function(){var e=this.byId("idEmployeeIDInputF").getText();var t=this.byId("idNameInputF");var a=this.byId("idEmailInputF");var s=this.byId("idPhoneInputF");var o=this.byId("idRoesurcetypeInputF");var r=this.byId("idAreaSelect");var i=this.byId("idGroupSelect");var n=this.byId("idQueueSelect");var u=t.getText();var l=a.getText();var c=s.getText();var d=o.getText();var h=r.getSelectedKeys().join(",");var f=i.getSelectedKeys().join(",");var p=n.getSelectedKeys().join(",");var g=true;if(!u){t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Name is required.");g=false}else{t.setValueState(sap.ui.core.ValueState.None);t.setValueStateText("")}if(l){var v=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!v.test(l)){a.setValueState(sap.ui.core.ValueState.Error);a.setValueStateText("Invalid email format.");g=false}else{a.setValueState(sap.ui.core.ValueState.None);a.setValueStateText("")}}else{a.setValueState(sap.ui.core.ValueState.None);a.setValueStateText("")}if(!c){s.setValueState(sap.ui.core.ValueState.Error);s.setValueStateText("Phone number is required.");g=false}else if(s.length!==10||!/^\d+$/.test(s)){s.setValueState(sap.ui.core.ValueState.Error);s.setValueStateText("Mobile number must be a 10-digit numeric value")}else{s.setValueState(sap.ui.core.ValueState.None);if(this.bOtpVerified){sap.m.MessageToast.show("Please verify your phone number with the OTP before submitting.");return}}if(!d){o.setValueState(sap.ui.core.ValueState.Error);o.setValueStateText("Resource type is required.");g=false}else{o.setValueState(sap.ui.core.ValueState.None);o.setValueStateText("")}if(h.length===0){r.setValueState(sap.ui.core.ValueState.Error);r.setValueStateText("At least one area must be selected.");g=false}else{r.setValueState(sap.ui.core.ValueState.None);r.setValueStateText("")}if(f.length===0){i.setValueState(sap.ui.core.ValueState.Error);i.setValueStateText("At least one group must be selected.");g=false}else{i.setValueState(sap.ui.core.ValueState.None);i.setValueStateText("")}if(p.length===0){n.setValueState(sap.ui.core.ValueState.Error);n.setValueStateText("At least one queue must be selected.");g=false}else{n.setValueState(sap.ui.core.ValueState.None);n.setValueStateText("")}if(!g){sap.m.MessageToast.show("Please correct the errors before proceeding.");return}function m(){const e=/[A-Za-z@!#$%&]/;const t=8;let a="";for(let s=0;s<t;s++){let t="";while(!t.match(e)){t=String.fromCharCode(Math.floor(Math.random()*94)+33)}a+=t}return a}var S=m();var y=new Date;if(d==="Permanent Employee"){y.setFullYear(y.getFullYear()+1)}else if(d==="Contract Employee"){y.setMonth(y.getMonth()+2)}var I=new Date;var b=this.formatDate(I);var T=this.formatDate(y);var V={Area:h,Email:l,Notification:"your request has been Approved",Phonenumber:c,Queue:p,Resourcegroup:f,Resourceid:e,Resourcename:u,Resourcetype:d,Approveddate:b,Expirydate:T,Password:S,Status:"true",Loginfirst:true};var P=this.getOwnerComponent().getModel();P.update(`/RESOURCESSet('${e}')`,V,{success:function(){sap.m.MessageToast.show("Password updated successfully!");this.resetForm();this.onRequestedData();this.onUserData();this.oApproveForm.close()}.bind(this),error:function(){sap.m.MessageToast.show("Error updating user login status.")}})},_updateComboBoxItems:function(){var e=this.byId("_IDGenComboBox1");var t=this.getView().getModel();var a=t.getProperty("/ProcessAreaSet");var s=[];var o=new Set;a.forEach(function(e){if(!o.has(e.Processarea)){o.add(e.Processarea);s.push(e)}});var r=new sap.ui.model.json.JSONModel({ProcessAreaSet:s});e.setModel(r)},_fetchUniqueProcessAreas:function(){var e=this.getOwnerComponent().getModel();e.read("/ProcessAreaSet",{success:function(e){var t=e.results;var a=new Set;t.forEach(function(e){a.add(e.Processarea)});var s=Array.from(a).map(function(e){return{Processarea:e}});var o=new sap.ui.model.json.JSONModel({ProcessAreas:s});var r=this.byId("AreaSelect");if(!r){r=sap.ui.core.Fragment.byId("fragmentId","AreaSelect")}if(r){r.setModel(o);r.bindItems({path:"/ProcessAreas",template:new sap.ui.core.Item({key:"{Processarea}",text:"{Processarea}"})})}else{console.error("MultiComboBox with id 'AreaSelect' not found.")}}.bind(this),error:function(e){console.error("Error reading AreaSet:",e)}})},onCheckBoxSelect:function(){debugger;var e=this.byId("AreaSelect");var t=e.getSelectedItems();var a=[];t.forEach(function(e){var t=e.getText();a.push(new sap.ui.model.Filter("Processarea",sap.ui.model.FilterOperator.EQ,t))});var s=new sap.ui.model.Filter({filters:a,and:false});var o=this.byId("GroupSelect");var r=this.getOwnerComponent().getModel();r.read("/ProcessAreaSet",{filters:[s],success:function(e){var t=[];var a={};e.results.forEach(function(e){var s=e.Processgroup;if(!a[s]){a[s]=true;t.push({key:s,text:s})}});o.removeAllItems();t.forEach(function(e){o.addItem(new sap.ui.core.Item({key:e.key,text:e.text}))});o.setVisible(true)},error:function(e){sap.m.MessageToast.show("Failed to fetch data.")}})},onRejectUserBtnPress:function(){var e=this.getView();var t=this.byId("idRequestedData").getSelectedItems();if(t.length!==1){s.show("Please select exactly one Resource");return}var a=t[0].getBindingContext().getObject();var o=a.Resourceid;var r=this.getOwnerComponent().getModel();r.remove("/RESOURCESSet('"+o+"')",{method:"DELETE",success:function(){s.show("Resource deleted successfully")},error:function(e){s.show("Error deleting resource");console.error("Error deleting resource:",e)}})},onPressCreateArea:function(){this.getView().byId("page1").setVisible(false);this.getView().byId("_IDGenTswfd_able1").setVisible(true)},onCheckBoxSelectGroup:function(){debugger;var e=this.byId("AreaSelect");var t=this.byId("GroupSelect");var a=this.byId("_IDGenComboBox10");var s=e.getSelectedItems();var o=t.getSelectedItems();var r=[];o.forEach(function(e){var t=e.getText();r.push(new sap.ui.model.Filter("Processgroup",sap.ui.model.FilterOperator.EQ,t))});var i=new sap.ui.model.Filter({filters:r,and:false});var n=this.getOwnerComponent().getModel();n.read("/ProcessAreaSet",{filters:[i],success:function(e){var r=[];var i={};var n={};e.results.forEach(function(e){var t=e.Queue;var a=e.Processarea;var s=e.Processgroup;if(!n[a]){n[a]={}}if(!n[a][s]){n[a][s]=[]}n[a][s].push(t);if(!i[t]){i[t]=true;r.push({key:t,text:t})}});var u=true;s.forEach(function(e){var a=e.getText();var s=o.some(function(e){var t=e.getText();return n[a]&&n[a][t]});if(!s){u=false;t.setValueState("Error");t.setValueStateText("Please select at least one group related to the selected areas.");sap.m.MessageToast.show("Please select at least one group related to the selected areas.")}});if(!u){a.removeAllItems();return}t.setValueState("None");a.removeAllItems();r.forEach(function(e){a.addItem(new sap.ui.core.Item({key:e.key,text:e.text}))});a.setVisible(true)},error:function(e){sap.m.MessageToast.show("Failed to fetch data.")}})},onCheckBoxSelectQueue:function(){debugger;var e=this.byId("GroupSelect");var t=this.byId("_IDGenComboBox10");var a=e.getSelectedItems();var s=t.getSelectedItems();var o=[];s.forEach(function(e){var t=e.getText();o.push(new sap.ui.model.Filter("Queue",sap.ui.model.FilterOperator.EQ,t))});var r=new sap.ui.model.Filter({filters:o,and:false});var i=this.getOwnerComponent().getModel();i.read("/ProcessAreaSet",{filters:[r],success:function(e){var o={};var r=true;e.results.forEach(function(e){var t=e.Processgroup;var a=e.Queue;if(!o[t]){o[t]=[]}o[t].push(a)});a.forEach(function(e){var a=e.getText();var i=s.some(function(e){var t=e.getText();return o[a]&&o[a].includes(t)});if(!i){r=false;t.setValueState("Error");t.setValueStateText("Please select at least one queue related to the selected groups.");sap.m.MessageToast.show("Please select at least one queue related to the selected groups.")}});if(!r){return}t.setValueState("None")},error:function(e){sap.m.MessageToast.show("Failed to fetch data.")}})},onApprovePress:function(){debugger;var e=this.byId("idEmppInput").getValue();var t=this.byId("idNameInput");var a=this.byId("idEmailInput");var s=this.byId("idPhoneInput");var o=this.byId("idRoesurcetypeInput");var r=this.byId("AreaSelect");var i=this.byId("GroupSelect");var n=this.byId("_IDGenComboBox10");var u=t.getValue();var l=a.getValue();var c=s.getValue();var d=o.getValue();var h=r.getSelectedKeys().join(",");var f=i.getSelectedKeys().join(",");var p=n.getSelectedKeys().join(",");var g=true;if(!u){t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Name is required.");g=false}else{t.setValueState(sap.ui.core.ValueState.None);t.setValueStateText("")}if(l){var v=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!v.test(l)){a.setValueState(sap.ui.core.ValueState.Error);a.setValueStateText("Invalid email format.");g=false}else{a.setValueState(sap.ui.core.ValueState.None);a.setValueStateText("")}}else{a.setValueState(sap.ui.core.ValueState.None);a.setValueStateText("")}debugger;if(!c){s.setValueState(sap.ui.core.ValueState.Error);s.setValueStateText("Phone number is required.");g=false}else if(c.length!==10||!/^\d+$/.test(c)){s.setValueState(sap.ui.core.ValueState.None);s.setValueStateText("")}else{s.setValueState("None");if(!this.bOtpVerified){sap.m.MessageToast.show("Please verify your phone number with the OTP before submitting.");return}}if(!d){o.setValueState(sap.ui.core.ValueState.Error);o.setValueStateText("Resource type is required.");g=false}else{o.setValueState(sap.ui.core.ValueState.None);o.setValueStateText("")}if(h.length===0){r.setValueState(sap.ui.core.ValueState.Error);r.setValueStateText("At least one area must be selected.");g=false}else{r.setValueState(sap.ui.core.ValueState.None);r.setValueStateText("")}if(f.length===0){i.setValueState(sap.ui.core.ValueState.Error);i.setValueStateText("At least one group must be selected.");g=false}else{i.setValueState(sap.ui.core.ValueState.None);i.setValueStateText("")}if(p.length===0){n.setValueState(sap.ui.core.ValueState.Error);n.setValueStateText("At least one queue must be selected.");g=false}else{n.setValueState(sap.ui.core.ValueState.None);n.setValueStateText("")}if(!g){sap.m.MessageToast.show("Please correct the errors before proceeding.");return}function m(){const e=/[A-Za-z@!#$%&]/;const t=8;let a="";for(let s=0;s<t;s++){let t="";while(!t.match(e)){t=String.fromCharCode(Math.floor(Math.random()*94)+33)}a+=t}return a}var S=m();var y=new Date;if(d==="PermanentEmployee"){y.setFullYear(y.getFullYear()+1)}else if(d==="temporaryemployee"){y.setMonth(y.getMonth()+2)}var I=new Date;var b=this.formatDate(I);var T=this.formatDate(y);var V={Area:h,Email:l,Notification:"your request has been Approved",Phonenumber:c,Queue:p,Resourcegroup:f,Resourceid:e,Resourcename:u,Resourcetype:d,Approveddate:b,Expirydate:T,Password:S,Status:"true",Loginfirst:true};var P=this.getOwnerComponent().getModel();if(!this.bCreate){P.update(`/RESOURCESSet('${e}')`,V,{success:function(){sap.m.MessageToast.show(`${e} request is Accpeted!`);this.resetForm();this.bCreate=true;this.onRequestedData();this.onUserData()}.bind(this),error:function(){sap.m.MessageToast.show("Error updating user login status.")}})}else{P.create("/RESOURCESSet",V,{success:function(){sap.m.MessageToast.show("successfully Created");this.resetForm();this.onRequestedData();this.onUserData();this.bCreate=true}.bind(this),error:function(){sap.m.MessageToast.show("Error updating user login status.")}})}},formatDate:function(e){var t=e.getFullYear();var a=("0"+(e.getMonth()+1)).slice(-2);var s=("0"+e.getDate()).slice(-2);return`${t}-${a}-${s}`},resetForm:function(){this.byId("idEmppInput").setValue("");this.byId("idNameInput").setValue("");this.byId("idEmailInput").setValue("");this.byId("idPhoneInput").setValue("");this.byId("idRoesurcetypeInput").setValue("");this.byId("verficationIdicon").setVisible(false);this.byId("getotpsv").setVisible(false);this.byId("_IDGenComboBox10").setVisible(false);this.byId("GroupSelect").setVisible(false);this.byId("AreaSelect").setSelectedKeys([]);this.byId("GroupSelect").setSelectedKeys([]);this.byId("_IDGenComboBox10").setSelectedKeys([]);this.byId("idNameInput").setValueState(sap.ui.core.ValueState.None);this.byId("idEmailInput").setValueState(sap.ui.core.ValueState.None);this.byId("idPhoneInput").setValueState(sap.ui.core.ValueState.None);this.byId("idRoesurcetypeInput").setValueState(sap.ui.core.ValueState.None);this.byId("AreaSelect").setValueState(sap.ui.core.ValueState.None);this.byId("GroupSelect").setValueState(sap.ui.core.ValueState.None);this.byId("_IDGenComboBox10").setValueState(sap.ui.core.ValueState.None);this._queueSelectError=null;this._groupSelectError=null},onEmployeeIdLiveChange:function(e){debugger;var t=e.getSource();var a=t.getValue();var s=this.getOwnerComponent().getModel();if(a.length!==6){t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Employee ID must be exactly 6 characters long.");this.byId("idNameInput").setEditable(true).setValue("");this.byId("idEmailInput").setEditable(true).setValue("");this.byId("idPhoneInput").setEditable(true).setValue("");this.byId("getotpsv").setVisible(true);this.bOtpVerified=false;this.byId("idRoesurcetypeInput").setEditable(true).setValue("");return}else{t.setValueState(sap.ui.core.ValueState.None);t.setValueStateText("")}var o=new sap.ui.model.Filter("Resourceid",sap.ui.model.FilterOperator.EQ,a);var r=this;s.read("/RESOURCESSet",{filters:[o],success:function(e){if(e.results.length>0){if(e.results[0].Area){t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Employee ID is already approved.");r.byId("idNameInput").setEditable(false).setValue(s);r.byId("idEmailInput").setEditable(false).setValue(a);r.byId("idPhoneInput").setEditable(false).setValue(o);r.byId("idRoesurcetypeInput").setEditable(false).setValue(i);r.byId("getotpsv").setVisible(false);r.byId("idOtpInputsv").setVisible(false)}else{t.setValueState(sap.ui.core.ValueState.Success);t.setValueStateText("Employee ID already exists.");r.bCreate=false;var a=e.results[0].Email;var s=e.results[0].Resourcename;var o=e.results[0].Phonenumber;var i=e.results[0].Resourcetype;r.byId("idNameInput").setEditable(false).setValue(s);r.byId("idEmailInput").setEditable(false).setValue(a);r.byId("idPhoneInput").setEditable(false).setValue(o);r.byId("idRoesurcetypeInput").setEditable(false).setValue(i);r.byId("getotpsv").setVisible(false);r.byId("idOtpInputsv").setVisible(false);r.bOtpVerified=true}}else{t.setValueState(sap.ui.core.ValueState.Success);t.setValueStateText("Employee ID is available.")}},error:function(e){t.setValueState(sap.ui.core.ValueState.None);sap.m.MessageToast.show("Error fetching data.");console.error("Error: ",e)}})},onSelectProcesAarea:function(){var e=this.byId("idAreaSelect");var t=e.getSelectedItems();var a=[];t.forEach(function(e){var t=e.getText();a.push(new sap.ui.model.Filter("Processarea",sap.ui.model.FilterOperator.EQ,t))});var s=new sap.ui.model.Filter({filters:a,and:false});var o=this.byId("idGroupSelect");var r=this.getOwnerComponent().getModel();r.read("/ProcessAreaSet",{filters:[s],success:function(e){var t=[];var a={};e.results.forEach(function(e){var s=e.Processgroup;if(!a[s]){a[s]=true;t.push({key:s,text:s})}});o.removeAllItems();t.forEach(function(e){o.addItem(new sap.ui.core.Item({key:e.key,text:e.text}))});o.setVisible(true)},error:function(e){sap.m.MessageToast.show("Failed to fetch data.")}})},onSelectGroup:function(){var e=this.byId("idAreaSelect");var t=this.byId("idGroupSelect");var a=this.byId("idQueueSelect");var s=e.getSelectedItems();var o=t.getSelectedItems();var r=[];o.forEach(function(e){var t=e.getText();r.push(new sap.ui.model.Filter("Processgroup",sap.ui.model.FilterOperator.EQ,t))});var i=new sap.ui.model.Filter({filters:r,and:false});var n=this.getOwnerComponent().getModel();n.read("/ProcessAreaSet",{filters:[i],success:function(e){var r=[];var i={};var n={};e.results.forEach(function(e){var t=e.Queue;var a=e.Processarea;var s=e.Processgroup;if(!n[a]){n[a]={}}if(!n[a][s]){n[a][s]=[]}n[a][s].push(t);if(!i[t]){i[t]=true;r.push({key:t,text:t})}});var u=true;s.forEach(function(e){var a=e.getText();var s=o.some(function(e){var t=e.getText();return n[a]&&n[a][t]});if(!s){u=false;t.setValueState("Error");t.setValueStateText("Please select at least one group related to the selected areas.");sap.m.MessageToast.show("Please select at least one group related to the selected areas.")}});if(!u){a.removeAllItems();return}t.setValueState("None");a.removeAllItems();r.forEach(function(e){a.addItem(new sap.ui.core.Item({key:e.key,text:e.text}))});a.setVisible(true)},error:function(e){sap.m.MessageToast.show("Failed to fetch data.")}})},onSelectQueue:function(){var e=this.byId("idGroupSelect");var t=this.byId("idQueueSelect");var a=e.getSelectedItems();var s=t.getSelectedItems();var o=[];s.forEach(function(e){var t=e.getText();o.push(new sap.ui.model.Filter("Queue",sap.ui.model.FilterOperator.EQ,t))});var r=new sap.ui.model.Filter({filters:o,and:false});var i=this.getOwnerComponent().getModel();i.read("/ProcessAreaSet",{filters:[r],success:function(e){var o={};var r=true;e.results.forEach(function(e){var t=e.Processgroup;var a=e.Queue;if(!o[t]){o[t]=[]}o[t].push(a)});a.forEach(function(e){var a=e.getText();var i=s.some(function(e){var t=e.getText();return o[a]&&o[a].includes(t)});if(!i){r=false;t.setValueState("Error");t.setValueStateText("Please select at least one queue related to the selected groups.");sap.m.MessageToast.show("Please select at least one queue related to the selected groups.")}});if(!r){return}t.setValueState("None")},error:function(e){sap.m.MessageToast.show("Failed to fetch data.")}})},OnPressHUQuery:function(){var e=o.getRouterFor(this);e.navTo("HuQuery",{id:this.ID});var t=this.byId("_IDGenInput1");if(t){t.focus()}},OnPressStockBinQueryByBin:function(){debugger;var e=o.getRouterFor(this);e.navTo("StockBinQueryByBin",{id:this.ID})},onReceivingofHUbyASN:function(){var e=o.getRouterFor(this);e.navTo("ReceivingofHUbyASN",{id:this.ID})},onUnloadingBYASN:function(){this.getOwnerComponent().getRouter().navTo("RouteUnloadingASNDetails",{id:this.ID})},onReceivingofHUbyDoor:function(){var e=o.getRouterFor(this);e.navTo("ReceivingOfHuByDoor",{id:this.ID})},onPutawayByHU:function(){var e=o.getRouterFor(this);e.navTo("RoutePutawayByHU",{id:this.ID})},onReceivingofHUbyDelivery:function(){var e=o.getRouterFor(this);e.navTo("RecevingOfHUbyDelivery",{id:this.ID})},onTilePressPutawayByWO:function(){var e=o.getRouterFor(this);e.navTo("PutawayByWO",{id:this.ID})},OnPressAvailableHandlingUnitsOnBinQuery:function(){var e=o.getRouterFor(this);e.navTo("AvailableHandlingUnitsOnBinQuery",{id:this.ID})},OnPressWTquerybyHU:function(){var e=o.getRouterFor(this);e.navTo("WTQueryByHU",{id:this.ID})},onPressAutomaticallyRepackHUItem:function(){var e=o.getRouterFor(this);e.navTo("AutomaticallyRepackHUItem",{id:this.ID})},onReceivingofHUbyBillofLading:function(){var e=o.getRouterFor(this);e.navTo("RouteBillofLading",{id:this.ID})},onUnloadingByDoorTilePress:function(){var e=this.getOwnerComponent().getRouter();e.navTo("UnloadingByDoor")},onUnloadingByConsignmentOrderTilePress:function(){var e=this.getOwnerComponent().getRouter();e.navTo("UnloadingByConsignmentOrder")},onChangeQueueTilePress:function(){debugger;var e=this.getOwnerComponent().getRouter();e.navTo("ChangeQueue")},onChangeResourceGroupTilePress:function(){const e=this.getOwnerComponent().getRouter();e.navTo("ChangeResourceGroup")},onUnloadingByBillofLadingPress:function(){var e=o.getRouterFor(this);e.navTo("UnloadingByBillofLading",{id:this.ID})},onDeconsolidationAutomaticallypress:function(){var e=o.getRouterFor(this);e.navTo("DeconsolidationAutomatically",{id:this.ID})},onDeconsolidationManuallypress:function(){var e=o.getRouterFor(this);e.navTo("DeconsolidationManually",{id:this.ID})},OnPressAdhocInventoryCreation:function(){var e=o.getRouterFor(this);e.navTo("AdhocInventoryCreation",{id:this.ID})},onCreationOfSingleHUpress:function(){var e=o.getRouterFor(this);e.navTo("CreationOfSingleHU",{id:this.ID})},OnpressMaintainHU:function(){var e=o.getRouterFor(this);e.navTo("MaintainHU",{id:this.ID})},onPressManuallyRepackHU:function(){var e=o.getRouterFor(this);e.navTo("ManuallyRepackHU",{id:this.ID})},onPressManuallyRepackAllHUItems:function(){var e=o.getRouterFor(this);e.navTo("ManuallyRepackAllHUItems",{id:this.ID})},OnpressMaintainHU:function(){var e=o.getRouterFor(this);e.navTo("MaintainHU",{id:this.ID})},onUnloadingByShipmentPress:function(){var e=o.getRouterFor(this);e.navTo("UnloadingByShipment",{id:this.ID})},onUnloadingByTUPress:function(){var e=o.getRouterFor(this);e.navTo("UnloadingByTU",{id:this.ID})},onPressCreateAdhocHUWTInAdhocWT:function(){var e=o.getRouterFor(this);e.navTo("AdhocHuWt",{id:this.ID})},onPressCreateAdhocProductWTInAdhocWT:function(){var e=o.getRouterFor(this);e.navTo("AdhocProductWt")},OnPressUnloadByDelivery:function(){var e=o.getRouterFor(this);e.navTo("UnloadByDelivery",{id:this.ID})},onPressCreateAdhocProductWTInAdhocWT:function(){var e=o.getRouterFor(this);e.navTo("AdhocProductWt")},onPressCreateAdhocProductWTInAdhocWT:function(){var e=o.getRouterFor(this);e.navTo("AdhocProductWt")},OnPressCreateandConfirmAdhocHUWT:function(){var e=o.getRouterFor(this);e.navTo("CreateConfirmAdhocHu",{id:this.ID})},onReceivingofHUbyConsignementOrder:function(){var e=o.getRouterFor(this);e.navTo("Receivingofhubyco")},onPressWTQuerybyQueue:function(){var e=o.getRouterFor(this);e.navTo("WTQueryByQueue")},onGetOTP:function(){var e=this.byId("idPhoneInput").getValue();if(!e){sap.m.MessageToast.show("Please enter a valid phone number.");return}var t="+91"+e;const a="AC21c2f98c918eae4d276ffd6268a75bcf";const s="b0825bb59321ebdf831fda7a8507dc45";const o="VA104b5a334e3f175333acbd45c5065910";const r=`https://verify.twilio.com/v2/Services/${o}/Verifications`;const i={To:t,Channel:"sms"};var n=this;$.ajax({url:r,type:"POST",headers:{Authorization:"Basic "+btoa(a+":"+s),"Content-Type":"application/x-www-form-urlencoded"},data:$.param(i),success:function(e){console.log("OTP sent successfully:",e);sap.m.MessageToast.show("OTP sent successfully! Please check your phone.");n.byId("idOtpInputsv").setVisible(true);this._storedPhoneNumber=t}.bind(this),error:function(e,t,a){console.error("Error sending OTP:",a);sap.m.MessageToast.show("Failed to send OTP: "+a)}})},onSubmitOtp:function(){var e=this.byId("idPhoneInput");var t=this.byId("idOtpInputsv");var a=this.byId("verficationIdicon");var s=this.byId("getotpsv");var o=t.getValue();t.setValueState(sap.ui.core.ValueState.None);t.setValueStateText("");if(!o){t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Please enter the OTP.");sap.m.MessageToast.show("Please enter the OTP.");return}var r=/^\d{6}$/;if(!r.test(o)){t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Please enter a valid 6-digit OTP.");sap.m.MessageToast.show("Please enter a valid 6-digit OTP.");return}const i="AC21c2f98c918eae4d276ffd6268a75bcf";const n="b0825bb59321ebdf831fda7a8507dc45";const u="VA104b5a334e3f175333acbd45c5065910";const l=`https://verify.twilio.com/v2/Services/${u}/VerificationCheck`;const c={To:this._storedPhoneNumber,Code:o};$.ajax({url:l,type:"POST",headers:{Authorization:"Basic "+btoa(i+":"+n),"Content-Type":"application/x-www-form-urlencoded"},data:$.param(c),success:function(o){if(o.status==="approved"){sap.m.MessageToast.show("OTP verified successfully!");t.setValueState(sap.ui.core.ValueState.Success).setEditable(false);e.setValueState(sap.ui.core.ValueState.Success);e.setEditable(false);a.setVisible(true);s.setVisible(false);setTimeout(function(){t.setVisible(false)},5e3);t.setValueStateText("OTP verified successfully");this.bOtpVerified=true}else{t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Invalid OTP. Please try again.");sap.m.MessageToast.show("Invalid OTP. Please try again.");e.setValueState(sap.ui.core.ValueState.Error);e.setValueStateText("Recheck your Mobile Number")}}.bind(this),error:function(e,t,a){console.error("Error verifying OTP:",a);sap.m.MessageToast.show("Failed to verify OTP: "+a)}})},onReceivingofHUbyShipment:function(){var e=o.getRouterFor(this);e.navTo("ReceivingofHUbyShipment",{id:this.ID})},OnPressWTQuerybyWO:function(){var e=o.getRouterFor(this);e.navTo("WTQueryByWO",{id:this.ID})},OnPressSerialnumberLocation:function(){var e=o.getRouterFor(this);e.navTo("SerialNumberLocation",{id:this.ID})},OnPressWTQuerybyWT:function(){var e=o.getRouterFor(this);e.navTo("WTQueryByWT",{id:this.ID})},onReceivingofHUbyTU:function(){var e=o.getRouterFor(this);e.navTo("ReceivingofHUbyTU",{id:this.ID})},onPressCreateShippingHU:function(){var e=o.getRouterFor(this);e.navTo("CreateShippingHU",{id:this.ID})},onPressCreateShippingHUWOWC:function(){var e=o.getRouterFor(this);e.navTo("CreateShippingHUWOWC",{id:this.ID})},onReceivingofTUorDoor:function(){var e=o.getRouterFor(this);e.navTo("RecevingOfHUbyTUorDoor",{id:this.ID})},onReceivingofHUbyManufacturingOrder:function(){var e=o.getRouterFor(this);e.navTo("RecevingOfHUbyManufacturingOrder",{id:this.ID})},onPressCreateAdhocHUWTInAdhocWT:function(){var e=o.getRouterFor(this);e.navTo("AdhocHuWt",{id:this.ID})},OnPressCreateandConfirmAdhocProductWT:function(){var e=o.getRouterFor(this);e.navTo("CreateConfirmAdhocProduct",{id:this.ID})},OnPressStockOrBinQuerybyProduct:function(){var e=o.getRouterFor(this);e.navTo("StockBinQueryByProduct",{id:this.ID})},onCreatePutawayHusforDeconsolidation:function(){var e=o.getRouterFor(this);e.navTo("CreatePutawayHusforDeconsolidate",{id:this.ID})},onCreatePutawayHusManually:function(){var e=o.getRouterFor(this);e.navTo("CreatePutawayHusManually",{id:this.ID})},OnPressProductInspectionByHU:function(){var e=o.getRouterFor(this);e.navTo("ProductInspectionByHU",{id:this.ID})},OnPressProductInspectionByStorageBin:function(){var e=o.getRouterFor(this);e.navTo("ProductInspectionByStorageBin",{id:this.ID})}})});
//# sourceMappingURL=Supervisor.controller.js.map