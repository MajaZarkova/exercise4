sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function(Controller, History, UIComponent) {
	"use strict";

	return Controller.extend("com.kpmg.exercise4.controller.BaseController", {

		getRouter : function () {
			return UIComponent.getRouterFor(this);
		},
		
		navTo: function (psTarget) {
			this.getRouter().navTo(psTarget);
		}

	});

});