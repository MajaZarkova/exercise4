sap.ui.define([
	"sap/ui/core/mvc/Controller/BaseController",
	"sap/ui/core/UIComponent"
], function (BaseController, UIComponent) {
	"use strict";

	return BaseController.extend("com.kpmg.exercise4.controller.View1", {
		onInit: function () {
			this.oView = this.getView();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("View2").attachMatched(this._onRouteMatched, this);
		},

		_onRouteMatched: function (oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();

			oView.bindElement({
				path: "/RoomsSet(" + oArgs.RoomNumber + ")",
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function (Event) {
						oView.setBusy(true);
					},
					dataReceived: function (Event) {
						oView.setBusy(false);
					}
				}
			});
		},
		_onBindingChange: function (oEvent) {
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("notFound");
			}
		},

		onListItemPressed: function (oEvent) {
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2",{
				RoomNumber : oCtx.getProperty("RoomNumber")
			});
		}
	});
});