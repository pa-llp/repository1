/*global QUnit*/

sap.ui.define([
	"icons/demo_icons/controller/View_2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View_2 Controller");

	QUnit.test("I should test the View_2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});