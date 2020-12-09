/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/kpmg/exercise4/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});