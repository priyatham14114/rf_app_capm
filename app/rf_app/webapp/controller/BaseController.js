sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
 
], function (Controller, Fragment) {
    'use strict';
 
    return Controller.extend("com.app.rfapp.controller.BaseController", {
        getRouter: function () {
            return this.getOwnerComponent().getRouter();
        },

        createData: function(oModel, oPayload, sPath){
            return new Promise((resolve, reject) => {
                oModel.create(sPath, oPayload, {
                    refreshAfterChange: true,
                    success: function(oSuccessData){
                        resolve(oSuccessData);
                    },
                    error: function(oErrorData){
                        reject(oErrorData)
                    }
                })
            })
        },
        deleteData: function(oModel, sPath, ID){
            return new Promise((resolve, reject) => {
                oModel.remove(`${sPath}/${ID}`, {
                    success: function(oSuccessData){
                        resolve(oSuccessData);
                    },
                    error: function(oErrorData){
                        reject(oErrorData)
                    }
                })
            })            
        },
    })
 
});