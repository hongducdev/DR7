cTID = function(s) {
return app.charIDToTypeID(s);
};
sTID = function(s) {
return app.stringIDToTypeID(s);
};
$._ext_017 = {
run: function YellowShadows() {
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
desc2.putObject(cTID("Type"), cTID("SlcC"), desc3);
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
desc2.putString(cTID("Nm  "), "V\u00f9ng t\u1ed1i ng\u1ea3 v\u00e0ng");
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
desc3.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Blks"));
desc3.putUnitDouble(cTID("Cyn "), cTID("#Prc"), -28);
desc3.putUnitDouble(cTID("Mgnt"), cTID("#Prc"), -10);
desc3.putUnitDouble(cTID("Ylw "), cTID("#Prc"), 37);
desc3.putUnitDouble(cTID("Blck"), cTID("#Prc"), -2);
list1.putObject(cTID("ClrC"), desc3);
desc2.putList(cTID("ClrC"), list1);
desc1.putObject(cTID("T   "), cTID("SlcC"), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
}
};
