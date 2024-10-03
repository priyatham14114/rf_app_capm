sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
], function (Controller, Device, MessageToast, MessageBox, Filter, FilterOperator,) {
    "use strict";

    return Controller.extend("com.app.rfapp.controller.InitialScreen", {
        onInit: function () {
            this.loadConfiguredSystems();
            this.aAllButtons = []; // Store all button instances
            this.currentIndex = 0;
        },
        onsapCancelPress: function () {
            this.oConfigSap.close();
        },
        LoadSapLogon: async function () {
            this.oConfigSap ??= await this.loadFragment({
                name: "com.app.rfapp.fragments.SapLogon"
            })
            this.oConfigSap.open();
            this.onUserLogin();
        },
        handleLinksapPress: async function () {
            this.oConnetSap ??= await this.loadFragment({
                name: "com.app.rfapp.fragments.ConnecttoSAP"
            })
            this.getView().byId("idconnectsapfinishButton").setVisible(true);
            this.getView().byId("idconnectsapeditButton").setVisible(false);
            this.oConnetSap.open();
        },
        handleAddPress: function () {
            this.handleLinksapPress();
        },
        onCloseconnectsap: function () {
            this.oConnetSap.close();
            var oView = this.getView();
            oView.byId("idDescriptionInput").setValueState("None");
            oView.byId("idSystemIdInput").setValueState("None");
            oView.byId("idInstanceNumberInput").setValueState("None");
            oView.byId("idClientInput").setValueState("None");
            oView.byId("idApplicationServerInput").setValueState("None");
            this.clearInputFields(oView);
        },
        onsapsubmitPress: function () {
            var oU = this.getView().byId("idsaplogonUserId").getValue();
            var oP = this.getView().byId("idSapLogonPassword").getValue();
            if (oU === "111010" && oP === "ARTIHCUS") {
                this.getOwnerComponent().getRouter().navTo("Homepage", { id: oU })
            }
        },
        onExit: function () {
            this.onUserLogin();
        },
        onUserLogin: function () {
            this.getView().byId("idsaplogonUserId").setValue();
            this.getView().byId("idSapLogonPassword").setValue();
        },
        onFinishconnectSAPPressS: function () {
            var oView = this.getView();
            var sDescription = oView.byId("idDescriptionInput").getValue();
            var sSystemId = oView.byId("idSystemIdInput").getValue();
            var sInstanceNumber = oView.byId("idInstanceNumberInput").getValue();
            var sClient = oView.byId("idClientInput").getValue();
            var sApplicationServer = oView.byId("idApplicationServerInput").getValue();
            var sRouterString = oView.byId("idRouterStringInput").getValue();
            var sService = oView.byId("idServiceInput").getValue();
            var oCheckbox = oView.byId("idCheckboxDescription");
            // var oModel = this.getOwnerComponent().getModel("ModelV2");


            // Create entry for OData service
            var oEntry = {
                Description: sDescription,
                SystemId: sSystemId,
                InstanceNo: sInstanceNumber,
                Client: sClient,
                AppServer: sApplicationServer,
                SapRouterStr: sRouterString,
                SapService: sService,
                // DescriptionB: (oCheckbox.getSelected() ? (sSystemId + " / " + sClient) : sDescription)
                // Add other properties as needed based on your OData service structure
            };
            const oModel = this.getView().getModel()
            const oModelV2 = this.getView().getModel("ModelV2")

            // // V4
            //     bind = oModel.bindList("/ServiceSet")
            // bind.create(oEntry).created().then({
            //     success: function () {
            //         // Success callback
            //         MessageToast.show("Entry created successfully!");
            //     },
            //     error: function () {
            //         // error callback
            //         MessageToast.show("Failed!");
            //     },
            // }
            // ).catch(function (oError) {
            //     // Error callback
            //     MessageBox.error("Failed to create entry: " + oError.message);
            // });
            // // V4

            // V2
            oModelV2.create("/ServiceSet", oEntry, {
                success: function () {
                    // Success callback
                    MessageToast.show("Entry created successfully!");
                },
                error: function () {
                    // error callback
                    MessageToast.show("Failed!");
                },
             })
                    // V2


            // Save to OData service
            // oModel.create("/ServiceSet", oEntry, {
            //     success: function () {
            //         MessageToast.show("Configured system saved successfully.");
            //         this.clearInputFields(oView);

            //         // Get the HBox that holds the buttons
            //         var oHomePage = oView.byId("environmentButtonsHBox");

            //         // Find the reference link to insert after
            //         var oLink = oView.byId("_IDCofiguresapLink");

            //         // Insert the new button after the link
            //         oHomePage.insertItem(oNewButton, oHomePage.indexOfItem(oLink) + 1);
            //         oModel.refresh(true);
            //         this.getView().byId("pageInitial").getModel("ModelV2").refresh(true);
            //     }.bind(this), // Ensure 'this' context is correct
            //     error: function (oError) {
            //         MessageToast.show("Error saving configured system.");
            //     }
            // });
        },
        onFinishconnectSAPPress: function () {
            // Get the dialog and its input fields
            var oView = this.getView();
            var sDescription = oView.byId("idDescriptionInput").getValue();
            var sSystemId = oView.byId("idSystemIdInput").getValue();
            var sInstanceNumber = oView.byId("idInstanceNumberInput").getValue();
            var sClient = oView.byId("idClientInput").getValue();
            var sApplicationServer = oView.byId("idApplicationServerInput").getValue();
            var sRouterString = oView.byId("idRouterStringInput").getValue();
            var sService = oView.byId("idServiceInput").getValue();
            var oCheckbox = oView.byId("idCheckboxDescription");
            var bValid = true;
            var bAllFieldsFilled = true;

            // Validate Description only if the checkbox is not selected
            if (!oCheckbox.getSelected() && !sDescription) {
                oView.byId("idDescriptionInput").setValueState("Error");
                oView.byId("idDescriptionInput").setValueStateText("Description is mandatory when checkbox is not selected.");
                bValid = false;
                bAllFieldsFilled = false;
            } else {
                oView.byId("idDescriptionInput").setValueState("None");
            }

            if (!sSystemId) {
                oView.byId("idSystemIdInput").setValueState("Error");
                oView.byId("idSystemIdInput").setValueStateText("System ID must be a 3-digit value");
                bValid = false;
                bAllFieldsFilled = false;
            } else {
                oView.byId("idSystemIdInput").setValueState("None");
            }

            // Validate Username
            if (!sInstanceNumber) {
                oView.byId("idInstanceNumberInput").setValueState("Error");
                oView.byId("idInstanceNumberInput").setValueStateText("InstanceNumber must be a 3-digit value");
                bValid = false;
                bAllFieldsFilled = false;
            } else {
                oView.byId("idInstanceNumberInput").setValueState("None");
            }

            if (!sClient) {
                oView.byId("idClientInput").setValueState("Error");
                oView.byId("idClientInput").setValueStateText("clientID must be a 3-digit value");
                bValid = false;
                bAllFieldsFilled = false;
            } else {
                oView.byId("idClientInput").setValueState("None");
            }

            if (!sApplicationServer) {
                oView.byId("idApplicationServerInput").setValueState("Error");
                bValid = false;
                bAllFieldsFilled = false;
            } else {
                oView.byId("idApplicationServerInput").setValueState("None");
            }

            // Display appropriate message
            if (!bAllFieldsFilled) {
                sap.m.MessageToast.show("Please fill all mandatory details");
                return;
            }

            if (!bValid) {
                sap.m.MessageToast.show("Please enter correct data");
                return;
            }

            // Get the OData model
            var oModel = this.getOwnerComponent().getModel("ModelV2");

            // Read existing entries to check uniqueness
            oModel.read("/ServiceSet", {
                filters: [new sap.ui.model.Filter("Description", sap.ui.model.FilterOperator.EQ, sDescription)],
                filters: [new sap.ui.model.Filter("Client", sap.ui.model.FilterOperator.EQ, sClient)],
                success: function (oData) {
                    // Initialize an array to hold error messages
                    var errorMessages = [];

                    // Check for duplicates and populate error messages
                    if (oData.results.length > 0) {
                        if (oData.results.some(entry => entry.Client === sClient)) {
                            errorMessages.push("The Client must be unique.");
                        }
                        if (oData.results.some(entry => entry.Description === sDescription)) {
                            errorMessages.push("The Description must be unique.");
                        }

                        if (errorMessages.length > 0) {
                            MessageToast.show(errorMessages.join("\n"));
                            return; // Exit the function if duplicates are found
                        }

                    }

                    // Create a new button for the configured SAP system
                    var oNewButton = new sap.m.Button({
                        type: "Emphasized",
                        width: "11rem",
                        customData: [
                            new sap.ui.core.CustomData({
                                key: "systemId",
                                value: sSystemId // Store system ID in custom data
                            })
                        ]
                    });

                    // Set the button text based on the checkbox state
                    if (oCheckbox.getSelected()) {
                        oNewButton.setText(sSystemId + " / " + sClient);
                    } else {
                        oNewButton.setText(sDescription);
                    }

                    // Attach single click event for CRUD operations
                    oNewButton.attachPress(this.onConfiguredSystemButtonPress.bind(this, oNewButton, sDescription, sSystemId, sClient));

                    // Attach double click event for opening SAP logon
                    oNewButton.attachBrowserEvent("dblclick", function () {
                        this.LoadSapLogon();
                    }.bind(this));

                    // Create entry for OData service
                    var oEntry = {
                        Description: sDescription,
                        SystemId: sSystemId,
                        InstanceNo: sInstanceNumber,
                        Client: sClient,
                        AppServer: sApplicationServer,
                        SapRouterStr: sRouterString,
                        SapService: sService,
                        DescriptionB: (oCheckbox.getSelected() ? (sSystemId + " / " + sClient) : sDescription)
                        // Add other properties as needed based on your OData service structure
                    };

                    // Save to OData service
                    oModel.create("/ServiceSet", oEntry, {
                        success: function () {
                            MessageToast.show("Configured system saved successfully.");
                            this.clearInputFields(oView);

                            // Get the HBox that holds the buttons
                            var oHomePage = oView.byId("environmentButtonsHBox");

                            // Find the reference link to insert after
                            var oLink = oView.byId("_IDCofiguresapLink");

                            // Insert the new button after the link
                            oHomePage.insertItem(oNewButton, oHomePage.indexOfItem(oLink) + 1);
                            oModel.refresh(true);
                            this.getView().byId("pageInitial").getModel("ModelV2").refresh(true);
                        }.bind(this), // Ensure 'this' context is correct
                        error: function (oError) {
                            MessageToast.show("Error saving configured system.");
                        }
                    });

                    // Close the dialog after saving
                    this.onCloseconnectsap(); // Assuming you have a method to close the dialog

                }.bind(this), // Ensure 'this' context is correct
                error: function (oError) {
                    MessageToast.show("Error checking existing systems.");
                }
            });
        },
        clearInputFields: function (oView) {
            // Clear all input fields by setting their values to an empty string
            oView.byId("idDescriptionInput").setValue("");
            oView.byId("idSystemIdInput").setValue("");
            oView.byId("idInstanceNumberInput").setValue("");
            oView.byId("idClientInput").setValue("");
            oView.byId("idApplicationServerInput").setValue("");
            oView.byId("idRouterStringInput").setValue("");
            oView.byId("idServiceInput").setValue("");
            var oCheckbox = oView.byId("idCheckboxDescription");
            oCheckbox.setSelected(false);
        },

        onConfiguredSystemButtonPress: function (oButton, description, SystemId, Client, oEvent) {
            this.selectedButton = oButton;
            this.client = Client;
            this.sdedescription = oButton.mProperties.text;


        },

        onClearconnectSAPPress: function () {
            var oView = this.getView();
            this.clearInputFields(oView);
        },
        onDeleteConfiguredSystem: function (oEvent) {
            if (!this.selectedButton) {
                MessageToast.show("No System selected for deletion.");
                return;
            }

            var that = this; // Store reference to 'this' for use in callbacks

            MessageBox.warning("Delete the selected system?", {
                title: "Delete",
                actions: [MessageBox.Action.DELETE, MessageBox.Action.CANCEL],
                onClose: function (status) {
                    if (status === MessageBox.Action.DELETE) {
                        // Delete from OData service
                        var oModel = that.getView().getModel("ModelV2"); // Get the OData model
                        var sPath = "/ServiceSet('" + this.client + "')"; // Construct path based on your entity set

                        oModel.remove(sPath, {
                            success: function () {
                                MessageToast.show("Configured system deleted successfully.");

                                // Remove the button from the UI
                                var oHomePage = that.getView().byId("environmentButtonsHBox");
                                oHomePage.removeItem(that.selectedButton); // Remove the selected button
                                var index = that.aAllButtons.indexOf(that.selectedButton);
                                if (index !== -1) {
                                    that.aAllButtons.splice(index, 1); // Remove button from array
                                }
                                // Clear selection
                                that.selectedButton = null;
                                that.updateDisplayedButtons()

                                var index = that.aAllButtons.indexOf(that.selectedButton);
                                if (index !== -1) {
                                    that.aAllButtons.splice(index, 1); // Remove button from array
                                }
                                // Clear selection
                                that.selectedButton = null;
                                that.updateDisplayedButtons();
                            }.bind(that), // Ensure 'this' context is correct
                            error: function (oError) {
                                MessageToast.show("Error deleting configured system.");
                                console.error(oError);
                            }
                        });
                    } else {
                        MessageToast.show("Deletion cancelled.");
                        this.selectedButton = null;
                    }
                }.bind(that) // Bind the controller context
            });
        },
        onEditConfiguredSystem: async function () {
            if (!this.selectedButton) {
                MessageToast.show("No System selected to edit.");
                return;
            }
 
            await this.handleLinksapPress();
            this.getView().byId("idconnectsapfinishButton").setVisible(false);
            this.getView().byId("idconnectsapeditButton").setVisible(true);
            var oButtonText = this.sdedescription;
            var oModel = this.getView().getModel("ModelV2");
            var that = this;
 
            oModel.read("/ServiceSet", {
                filters: [new sap.ui.model.Filter("DescriptionB", sap.ui.model.FilterOperator.EQ, oButtonText)],
                success: function (oData) {
 
                    var aButtons = oData.results;
                    function checkButton(v) {
                        return v.DescriptionB === oButtonText;
                    }
                    var oButtonedit = aButtons.filter(checkButton);
                    if (oButtonedit) {
                        that.byId("idDescriptionInput").setValue(oButtonedit[0].Description);
                        that.byId("idSystemIdInput").setValue(oButtonedit[0].SystemId);
                        that.byId("idInstanceNumberInput").setValue(oButtonedit[0].InstanceNo);
                        that.byId("idClientInput").setValue(oButtonedit[0].Client);
                        that.byId("idApplicationServerInput").setValue(oButtonedit[0].AppServer);
                        that.byId("idRouterStringInput").setValue(oButtonedit[0].SapRouterStr);
                        that.byId("idServiceInput").setValue(oButtonedit[0].SapService);
                    }
                }
            });
        },
        onEditconnectSAPPress: function () {
            var oView = this.getView();
            var sDescription = oView.byId("idDescriptionInput").getValue();
            var sSystemId = oView.byId("idSystemIdInput").getValue();
            var sInstanceNumber = oView.byId("idInstanceNumberInput").getValue();
            var sClient = oView.byId("idClientInput").getValue();
            var sApplicationServer = oView.byId("idApplicationServerInput").getValue();
            var sRouterString = oView.byId("idRouterStringInput").getValue();
            var sService = oView.byId("idServiceInput").getValue();
            var oCheckbox = oView.byId("idCheckboxDescription");
            var oButton = this.selectedButton;

            // Perform validation checks
            if (!sSystemId) {
                sap.m.MessageToast.show("System ID is required.");
                return;
            }
            if (!sInstanceNumber) {
                sap.m.MessageToast.show("Instance Number is required.");
                return;
            }
            if (!sClient) {
                sap.m.MessageToast.show("Client is required.");
                return;
            }
            if (!sApplicationServer) {
                sap.m.MessageToast.show("Application Server is required.");
                return;
            }
            if (!sService) {
                sap.m.MessageToast.show("Service is required.");
                return;
            }

            // Update the sDescription based on the checkbox state
            if (oCheckbox.getSelected()) {
                sDescription = sSystemId + " / " + sClient;
            }

            // Update button text
            oButton.setText(sDescription);

            // Create an object with updated values, setting both Description and DescriptionB
            var oUpdatedData = {
                Description: sDescription,
                DescriptionB: sDescription,  // Ensure DescriptionB is updated to the same value
                SystemId: sSystemId,
                InstanceNo: sInstanceNumber,
                Client: sClient,
                AppServer: sApplicationServer,
                SapRouterStr: sRouterString,
                SapService: sService
            };

            var that = this;
            var oModel = this.getView().getModel("ModelV2");

            // Update the entry in OData service
            oModel.update("/ServiceSet('" + sClient + "')", oUpdatedData, {
                success: function () {
                    sap.m.MessageToast.show("system Configuration updated successfully");
                    that.clearInputFields(oView);
                    that.onCloseconnectsap(); // Close the dialog after updating
                },
                error: function (oError) {
                    sap.m.MessageToast.show("Error updating data.");
                }
            });
        },
        onBackconnectSAPPress: function () {
            this.onCloseconnectsap();
            this.selectedButton = null;
        },
        onToggleButtonPress: function (oEvent) {
            const oButton = oEvent.getSource();
            // Toggle the selected state
            oButton.setPressed(!oButton.getPressed());
        },

        // Load configured systems from OData service and display them in the UI
        loadConfiguredSystems: function () {
            var oModel = this.getOwnerComponent().getModel("ModelV2"); // Get the OData model

            oModel.read("/ServiceSet", {
                success: function (oData) {
                    var aConfiguredSystems = oData.results; // Assuming results is an array of configured systems

                    //                     var oHomePage = this.getView().byId("environmentButtonsHBox");
                    //                     var oLink = this.getView().byId("_IDCofiguresapLink");


                    this.aAllButtons = []; // Reset the array

                    // Store all button instances
                    for (var i = 0; i < aConfiguredSystems.length; i++) {
                        var system = aConfiguredSystems[i]; // Get the current system

                        var oNewButton = new sap.m.Button({
                            text: system.DescriptionB,
                            type: "Emphasized",
                            width: "11rem",
                        });

                        // Attach single click event for CRUD operations
                        oNewButton.attachPress(this.onConfiguredSystemButtonPress.bind(this, oNewButton, system.Description, system.SystemId, system.Client));

                        // Attach double click event for opening SAP logon
                        oNewButton.attachBrowserEvent("dblclick", function () {
                            this.LoadSapLogon();
                        }.bind(this));

                        // Store the button in the array
                        this.aAllButtons.push(oNewButton);
                    }

                    // Load initial set of buttons
                    this.updateDisplayedButtons();

                }.bind(this), // Ensure 'this' context is correct
                error: function (oError) {
                    MessageToast.show("Error loading configured systems.");
                    console.error(oError);
                }
            });
        },

        updateDisplayedButtons: function () {
            var oHomePage = this.getView().byId("environmentButtonsHBox");

            oHomePage.addItem(this.getView().byId("upNavigationButtonId"));

            // Determine how many buttons to display (3 at a time)
            var iLimit = Math.min(3, this.aAllButtons.length - this.currentIndex);

            for (var i = 0; i < this.aAllButtons.length; i++) {
                if (i >= this.currentIndex && i < this.currentIndex + iLimit) {
                    // Show buttons within the current range
                    this.aAllButtons[i].setVisible(true);
                } else {
                    // Hide buttons outside the current range
                    this.aAllButtons[i].setVisible(false);
                }

                // Add visible buttons to the HBox
                if (this.aAllButtons[i].getVisible()) {
                    oHomePage.addItem(this.aAllButtons[i]);

                }
            }
            oHomePage.addItem(this.getView().byId("downNavigationButtonId"));
        },
        onNavPrevious: function () {
            if (this.currentIndex + 3 < this.aAllButtons.length) { // Check if there are more buttons to show
                this.currentIndex += 3; // Move to next set of buttons
                this.updateDisplayedButtons(); // Update displayed buttons
                this.getView().byId("upNavigationButtonId").setVisible(true)
            } else {
                MessageToast.show("No more Systems to display."); // Optional feedback for user

            }
        },

        onNavNext: function () {
            if (this.currentIndex - 3 >= 0) { // Check if we can go back
                this.currentIndex -= 3; // Move to previous set of buttons
                this.updateDisplayedButtons(); // Update displayed buttons
                if (this.currentIndex === 0) {
                    this.getView().byId("upNavigationButtonId").setVisible(false)
                }
            } else {
                MessageToast.show("No previous buttons to display."); // Optional feedback for user
            }
        }


    })
});