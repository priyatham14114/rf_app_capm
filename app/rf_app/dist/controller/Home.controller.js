sap.ui.define(["./BaseController","sap/m/MessageBox","sap/m/MessageToast","sap/ui/core/BusyIndicator","com/app/rfapp/utils/Constant"],function(e,t,s,a,r){"use strict";return e.extend("com.app.rfapp.controller.Home",{onInit:function(){this.bOtpVerified=false},onLoginPress:async function(){var e=this.getView();var t=e.byId("idHUInput").getValue();var a=e.byId("idUserIDInput").getValue();var r=e.byId("idPasswordInput").getValue();if(!t){s.show("Please enter the Warehouse Number.");return}if(!a){s.show("Please enter the Resource ID.");return}if(!r){s.show("Please enter the Password.");return}var o=this.getOwnerComponent().getModel();var i=this;try{await o.read("/RESOURCESSet('"+a+"')",{success:function(e){if(e.Resourceid===a&&e.Password===r){if(e.Loginfirst===true){sap.m.MessageToast.show("Welcome! It seems this is your first login.");i.sample()}else{sap.m.MessageToast.show("Welcome back!");let t=e.Users.toLowerCase();if(t==="supervisor"){i.getRouter().navTo("Supervisor",{id:a})}else{i.getRouter().navTo("RouteResourcePage",{id:a})}}}else{s.show("Invalid Resource ID or Password.")}}.bind(this),error:function(){s.show("User does not exist.")}})}catch(e){s.show("An error occurred while checking the user.")}},onClearPress:function(){var e=this.getView();e.byId("idUserIDInput").setValue("");e.byId("idPasswordInput").setValue("")},onPressSignupBtn:async function(){this.oSignupForm??=await this.loadFragment({name:"com.app.rfapp.fragments.SignUpDetails"});this.oSignupForm.open()},onCloseRegisterSubmitDialog:function(){this.oSignupForm.close()},onVerify:function(){var e=this.byId("idInputPhoneNumber").getValue();if(!e){sap.m.MessageToast.show("Please enter a valid phone number.");return}this.OnGenereateOTP(e);this.byId("idOtpInput").setVisible(true)},OnGenereateOTP:function(e){var t="+91"+e;const s=r.oAccountSID;const a=r.oAuthToken;const o=r.oServiceID;const i=`https://verify.twilio.com/v2/Services/${o}/Verifications`;const n={To:t,Channel:"sms"};var u=this;$.ajax({url:i,type:"POST",headers:{Authorization:"Basic "+btoa(s+":"+a),"Content-Type":"application/x-www-form-urlencoded"},data:$.param(n),success:function(e){console.log("OTP sent successfully:",e);sap.m.MessageToast.show("OTP sent successfully! Please check your phone.");u._storedPhoneNumber=t}.bind(u),error:function(e,t,s){console.error("Error sending OTP:",s);sap.m.MessageToast.show("Failed to send OTP: "+s)}})},handleEscape:function(){this.byId("idOtpDialog").close()},onSubmitOtp:function(){var e=this.byId("idInputPhoneNumber");var t=this.byId("idOtpInput");var s=this.byId("verficationId");var a=this.byId("VerifyButton");var o=t.getValue();t.setValueState(sap.ui.core.ValueState.None);t.setValueStateText("");if(!o){t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Please enter the OTP.");sap.m.MessageToast.show("Please enter the OTP.");return}var i=/^\d{6}$/;if(!i.test(o)){t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Please enter a valid 6-digit OTP.");sap.m.MessageToast.show("Please enter a valid 6-digit OTP.");return}const n=r.oAccountSID;const u=r.oAuthToken;const l=r.oServiceID;const d=`https://verify.twilio.com/v2/Services/${l}/VerificationCheck`;const c={To:this._storedPhoneNumber,Code:o};$.ajax({url:d,type:"POST",headers:{Authorization:"Basic "+btoa(n+":"+u),"Content-Type":"application/x-www-form-urlencoded"},data:$.param(c),success:function(r){if(r.status==="approved"){sap.m.MessageToast.show("OTP verified successfully!");t.setValueState(sap.ui.core.ValueState.Success);e.setValueState(sap.ui.core.ValueState.Success);e.setEditable(false);s.setVisible(true);a.setVisible(false);t.setValueStateText("OTP verified successfully");this.bOtpVerified=true}else{t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Invalid OTP. Please try again.");sap.m.MessageToast.show("Invalid OTP. Please try again.");e.setValueState(sap.ui.core.ValueState.Error);e.setValueStateText("Recheck your Mobile Number")}}.bind(this),error:function(e,t,s){console.error("Error verifying OTP:",s);sap.m.MessageToast.show("Failed to verify OTP: "+s)}})},onSubmitPress:function(){var e=this.getView();var a=this.byId("idResouceType").getSelectedKey();var r=true;var o=true;var i=e.byId("idResourceIdInput").getValue();var n=e.byId("idUserNameInput").getValue();var u=e.byId("idInputEmail").getValue();var l=e.byId("idInputPhoneNumber").getValue();if(!a){e.byId("idResouceType").setValueState("Error");e.byId("idResouceType").setValueStateText("Select a valid Area");r=false;o=false}else{e.byId("idResouceType").setValueState("None")}if(!i){e.byId("idResourceIdInput").setValueState("Error");e.byId("idResourceIdInput").setValueStateText("Resource ID is mandatory");r=false;o=false}else if(!/^\d{6}$/.test(i)){e.byId("idResourceIdInput").setValueState("Error");e.byId("idResourceIdInput").setValueStateText("Resource ID must be a 6-digit numeric value");r=false}else{e.byId("idResourceIdInput").setValueState("None")}if(!n){e.byId("idUserNameInput").setValueState("Error");e.byId("idUserNameInput").setValueStateText("Username is mandatory");r=false;o=false}else{e.byId("idUserNameInput").setValueState("None")}if(!e.byId("idInputEmail").getValue()){}else if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(u)){e.byId("idInputEmail").setValueState("Error");e.byId("idInputEmail").setValueStateText("Please enter a valid email address");r=false}if(!l){e.byId("idInputPhoneNumber").setValueState("Error");e.byId("idInputPhoneNumber").setValueStateText("Phone number is mandatory");r=false;o=false}else if(l.length!==10||!/^\d+$/.test(l)){e.byId("idInputPhoneNumber").setValueState("Error");e.byId("idInputPhoneNumber").setValueStateText("Mobile number must be a 10-digit numeric value");r=false}else{e.byId("idInputPhoneNumber").setValueState("None");if(!this.bOtpVerified){sap.m.MessageToast.show("Please verify your phone number with the OTP before submitting.");return}}if(!o){sap.m.MessageToast.show("Please fill all mandatory details");return}if(!r){sap.m.MessageToast.show("Please enter correct data");return}var d=this.getView().getModel();var c=this;d.read("/RESOURCESSet('"+i+"')",{success:function(e){s.show("Resource exist")}.bind(this),error:function(){d.create("/RESOURCESSet",{Resourceid:i,Resourcetype:a,Validity:false,Resourcename:n,Email:u,Phonenumber:l},{success:function(){sap.m.MessageToast.show("Success");c.onCloseRegisterSubmitDialog();c.onClearRegisterSubmitDialog()},error:function(e){var s=JSON.parse(e.responseText);t.error(s.error.message.value||"Error occurred while creating resource")}})}})},onClearRegisterSubmitDialog:function(){var e=this.getView();e.byId("idResourceIdInput").setValue("");e.byId("idUserNameInput").setValue("");e.byId("idInputEmail").setValue("");e.byId("idInputPhoneNumber").setValue("");e.byId("idInputPhoneNumber").setEditable(true);e.byId("VerifyButton").setVisible(true);e.byId("verficationId").setVisible(false);e.byId("idOtpInput").setVisible(false);e.byId("idOtpInput").setValue("");this.bOtpVerified=false;e.byId("idResouceType").setSelectedKey("")},onForgotPassword:async function(){var e=this.getView();var s=e.byId("idUserIDInput").getValue();if(!s){t.error("Plesase enter resource ID");return}this.oforgotDialog??=await this.loadFragment({name:"com.app.rfapp.fragments.Forgotpassword"});this.oforgotDialog.open()},onCloseFP:function(){this.oforgotDialog.close()},sample:async function(){this.oResetDialog??=await this.loadFragment({name:"com.app.rfapp.fragments.Resetpassword"});this.oResetDialog.open()},formatDate:function(e){var t=e.getFullYear();var s=("0"+(e.getMonth()+1)).slice(-2);var a=("0"+e.getDate()).slice(-2);return`${t}-${s}-${a}`},onSavePress:async function(){var e=this.getView();var s=e.byId("idResetNewPassword").getValue();var a=e.byId("idresetConfirmPassword").getValue();if(a.length!==8||s.length!==8){t.error("Your Password length should be 8 characters.");return}if(s!==a){sap.m.MessageToast.show("Passwords do not match. Please try again.");return}var r=e.byId("idUserIDInput").getValue();var o={Loginfirst:false,Password:s};var i=this.getOwnerComponent().getModel();try{await i.update(`/RESOURCESSet('${r}')`,o,{success:function(){sap.m.MessageToast.show("Password updated successfully!");e.byId("idResetNewPassword").setValue("");e.byId("idresetConfirmPassword").setValue("");this.oResetDialog.close();e.byId("idUserIDInput").setValue("");e.byId("idPasswordInput").setValue("")}.bind(this),error:function(){sap.m.MessageToast.show("Error updating user login status.")}})}catch(e){sap.m.MessageToast.show("An error occurred while updating the password.")}},onCancelPress:function(){this.oResetDialog.close()},onSelectGetCode:function(){var e=this.byId("idEnterMobileNo").getValue();if(!e){sap.m.MessageToast.show("Please enter your mobile number.");return}var t=this.getOwnerComponent().getModel();t.read("/RESOURCESSet?$filter=Phonenumber eq '"+e+"'",{success:function(t){if(t.results.length>0){this.OnGenereateOTP(e)}else{s.show("No record found for this mobile number.")}}.bind(this),error:function(){s.show("Error fetching data. Please try again.")}})},OnVerifyforgetOTP:function(){var e=this.byId("idEnterMobileNo");var t=this.byId("idEnterConformationCode");var s=t.getValue();var a=this.byId("verficationId1");var o=this;t.setValueState(sap.ui.core.ValueState.None);t.setValueStateText("");if(!s){t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Please enter the OTP.");sap.m.MessageToast.show("Please enter the OTP.");return}var i=/^\d{6}$/;if(!i.test(s)){t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Please enter a valid 6-digit OTP.");sap.m.MessageToast.show("Please enter a valid 6-digit OTP.");return}const n=r.oAccountSID;const u=r.oAuthToken;const l=r.oServiceID;const d=`https://verify.twilio.com/v2/Services/${l}/VerificationCheck`;const c={To:o._storedPhoneNumber,Code:s};$.ajax({url:d,type:"POST",headers:{Authorization:"Basic "+btoa(n+":"+u),"Content-Type":"application/x-www-form-urlencoded"},data:$.param(c),success:function(s){if(s.status==="approved"){sap.m.MessageToast.show("OTP verified successfully!");t.setValueState(sap.ui.core.ValueState.Success);e.setValueState(sap.ui.core.ValueState.Success);a.setVisible(true);t.setValueStateText("OTP verified successfully");o.bOtpVerified=true}else{t.setValueState(sap.ui.core.ValueState.Error);t.setValueStateText("Invalid OTP. Please try again.");sap.m.MessageToast.show("Invalid OTP. Please try again.");e.setValueState(sap.ui.core.ValueState.Error);e.setValueStateText("Recheck your Mobile Number")}}.bind(o),error:function(e,t,s){console.error("Error verifying OTP:",s);sap.m.MessageToast.show("Failed to verify OTP: "+s)}})},onforgotpassword:async function(){var e=this.getView();var s=e.byId("idUserIDInput").getValue();var a=e.byId("idEnterNewPassword").getValue();var r=e.byId("idEnterConformationCode").getValue();var o=e.byId("idConfirmPassword").getValue();var i=e.byId("idEnterMobileNo").getValue();if(i.length!==10||!/^\d+$/.test(i)){e.byId("idEnterMobileNo").setValueState("Error");e.byId("idEnterMobileNo").setValueStateText("Mobile number must be a 10-digit numeric value");bValid=false}else{e.byId("idEnterMobileNo").setValueState("None");if(!this.bOtpVerified){sap.m.MessageToast.show("Please verify your phone number with the OTP before submitting.");return}}if(!r||!a||!o||!i){sap.m.MessageToast.show("Please fill all details.");return}if(o.length!==8||a.length!==8){t.error("Your Password length should be 8 characters.");return}if(a!==o){sap.m.MessageToast.show("Passwords do not match. Please try again.");return}var n=this.getOwnerComponent().getModel();var u={Password:a};try{await n.update(`/RESOURCESSet('${s}')`,u,{success:function(){sap.m.MessageToast.show("Password updated successfully!");this.byId("verficationId1").setVisible(false);e.byId("idEnterNewPassword").setValue("");e.byId("idConfirmPassword").setValue("");e.byId("idEnterMobileNo").setValue("");e.byId("idEnterConformationCode").setValue("")}.bind(this),error:function(){sap.m.MessageToast.show("Error updating user login status.")}})}catch(e){sap.m.MessageToast.show("An error occurred while updating the password.")}}})});
//# sourceMappingURL=Home.controller.js.map