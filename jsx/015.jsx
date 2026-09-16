cTID = function(s) {
return app.charIDToTypeID(s);
};
sTID = function(s) {
return app.stringIDToTypeID(s);
};
$._ext_015 = {
run: function Vignette() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("contentLayer"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var desc3 = new ActionDescriptor();
desc3.putBoolean(cTID("Rvrs"), true);
desc3.putUnitDouble(cTID("Angl"), cTID("#Ang"), 52.13);
desc3.putEnumerated(cTID("Type"), cTID("GrdT"), cTID("Rdl "));
desc3.putUnitDouble(cTID("Scl "), cTID("#Prc"), 120);
var desc4 = new ActionDescriptor();
desc4.putString(cTID("Nm  "), "Custom");
desc4.putEnumerated(cTID("GrdF"), cTID("GrdF"), cTID("CstS"));
desc4.putDouble(cTID("Intr"), 4096);
var list1 = new ActionList();
var desc5 = new ActionDescriptor();
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Rd  "), 0);
desc6.putDouble(cTID("Grn "), 0);
desc6.putDouble(cTID("Bl  "), 0);
desc5.putObject(cTID("Clr "), sTID("RGBColor"), desc6);
desc5.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
desc5.putInteger(cTID("Lctn"), 0);
desc5.putInteger(cTID("Mdpn"), 50);
list1.putObject(cTID("Clrt"), desc5);
var desc7 = new ActionDescriptor();
var desc8 = new ActionDescriptor();
desc8.putDouble(cTID("Rd  "), 227.00000166893);
desc8.putDouble(cTID("Grn "), 219.996111094952);
desc8.putDouble(cTID("Bl  "), 219.000002145767);
desc7.putObject(cTID("Clr "), sTID("RGBColor"), desc8);
desc7.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
desc7.putInteger(cTID("Lctn"), 4096);
desc7.putInteger(cTID("Mdpn"), 50);
list1.putObject(cTID("Clrt"), desc7);
desc4.putList(cTID("Clrs"), list1);
var list2 = new ActionList();
var desc9 = new ActionDescriptor();
desc9.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc9.putInteger(cTID("Lctn"), 0);
desc9.putInteger(cTID("Mdpn"), 50);
list2.putObject(cTID("TrnS"), desc9);
var desc10 = new ActionDescriptor();
desc10.putUnitDouble(cTID("Opct"), cTID("#Prc"), 0);
desc10.putInteger(cTID("Lctn"), 4096);
desc10.putInteger(cTID("Mdpn"), 50);
list2.putObject(cTID("TrnS"), desc10);
desc4.putList(cTID("Trns"), list2);
desc3.putObject(cTID("Grad"), cTID("Grdn"), desc4);
desc2.putObject(cTID("Type"), sTID("gradientLayer"), desc3);
desc1.putObject(cTID("Usng"), sTID("contentLayer"), desc2);
executeAction(cTID("Mk  "), desc1, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("SftL"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Th\u00eam t\u1ed1i g\u00f3c");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}
step1();
step2();
step3();
}
};
