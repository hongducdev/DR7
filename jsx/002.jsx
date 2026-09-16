cTID = function(s) {
return app.charIDToTypeID(s);
};
sTID = function(s) {
return app.stringIDToTypeID(s);
};
$._ext_002 = {
run: function ColorFixer() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ph\u1ee7 m\u00e0u");
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Clr "));
desc1.putObject(cTID("Usng"), cTID("Lyr "), desc2);
executeAction(cTID("Mk  "), desc1, dialogMode);
}
step1();
}
};
