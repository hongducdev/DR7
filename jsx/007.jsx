cTID = function(s) {
return app.charIDToTypeID(s);
};
sTID = function(s) {
return app.stringIDToTypeID(s);
};
$._ext_007 = {
run: function HighlightRecovery() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
executeAction(cTID("Mk  "), desc1, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 0);
desc2.putUnitDouble(cTID("Wdth"), cTID("#Prc"), 0);
desc2.putInteger(cTID("Rds "), 0);
desc1.putObject(cTID("sdwM"), sTID("adaptCorrectTones"), desc2);
var desc3 = new ActionDescriptor();
desc3.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 30);
desc3.putUnitDouble(cTID("Wdth"), cTID("#Prc"), 20);
desc3.putInteger(cTID("Rds "), 30);
desc1.putObject(cTID("hglM"), sTID("adaptCorrectTones"), desc3);
desc1.putDouble(cTID("BlcC"), 0.01);
desc1.putDouble(cTID("WhtC"), 0.01);
desc1.putInteger(cTID("Cntr"), 0);
desc1.putInteger(cTID("ClrC"), 20);
executeAction(sTID("adaptCorrect"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "S\u1eeda v\u00f9ng s\u00e1ng");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
}
};
