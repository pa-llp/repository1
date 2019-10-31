/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"icons/demo_icons/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});