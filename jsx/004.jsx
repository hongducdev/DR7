cTID = function(s) {
return app.charIDToTypeID(s);
};
sTID = function(s) {
return app.stringIDToTypeID(s);
};
$._ext_004 = {
run: function Fade() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("AdjL"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var desc3 = new ActionDescriptor();
desc3.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindDefault"));
desc2.putObject(cTID("Type"), cTID("Crvs"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(cTID("Mk  "), desc1, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(cTID("slct"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Curves x\u00e1m");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
desc3.putReference(cTID("Chnl"), ref2);
var list2 = new ActionList();
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Hrzn"), 0);
desc4.putDouble(cTID("Vrtc"), 44);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 55);
desc5.putDouble(cTID("Vrtc"), 59);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 172);
desc6.putDouble(cTID("Vrtc"), 172);
list2.putObject(cTID("Pnt "), desc6);
var desc7 = new ActionDescriptor();
desc7.putDouble(cTID("Hrzn"), 255);
desc7.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc7);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step5(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 50);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
}
};
