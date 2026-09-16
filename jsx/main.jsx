



function doFuncAllDoc(func) {
for (var i = 0; i < app.documents.length; i += 1) {
app.activeDocument = app.documents[i];
func();
$.writeln(app.documents[i]);
}
}

function act_zj() {
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
desc2.putObject(cTID("Type"), cTID("Lvls"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "T-YD");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Chi ti\u1ebft");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "L\u00e0m m\u1edd");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Rd  "));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 10);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 30);
desc1.putInteger(cTID("Thsh"), 20);
executeAction(sTID("surfaceBlur"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Lghn"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Mrgd"));
desc2.putReference(cTID("T   "), ref1);
desc2.putEnumerated(cTID("Clcl"), cTID("Clcn"), cTID("Dfrn"));
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
ref2.putName(cTID("Lyr "), "Chi ti\u1ebft");
desc2.putReference(cTID("Src2"), ref2);
desc1.putObject(cTID("Usng"), cTID("Clcl"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
var list1 = new ActionList();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc2.putReference(cTID("Chnl"), ref1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(38);
desc2.putList(cTID("Inpt"), list2);
list1.putObject(cTID("LvlA"), desc2);
desc1.putList(cTID("Adjs"), list1);
executeAction(sTID("levels"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Drkn"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Mrgd"));
desc2.putReference(cTID("T   "), ref1);
desc2.putEnumerated(cTID("Clcl"), cTID("Clcn"), cTID("Dfrn"));
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
ref2.putName(cTID("Lyr "), "Chi ti\u1ebft");
desc2.putReference(cTID("Src2"), ref2);
desc1.putObject(cTID("Usng"), cTID("Clcl"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
var list1 = new ActionList();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc2.putReference(cTID("Chnl"), ref1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(49);
desc2.putList(cTID("Inpt"), list2);
list1.putObject(cTID("LvlA"), desc2);
desc1.putList(cTID("Adjs"), list1);
executeAction(sTID("levels"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T-YD");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(43);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u00e0m m\u1edd");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(45);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Chnl"), "Alpha 1");
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T-YD");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(48);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 1);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Thi\u1ebft k\u1ebf - s\u00e1ng");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Chnl"), "Alpha 2");
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step35(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T-YD");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(48);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step38(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 1);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step39(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step40(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Thi\u1ebft k\u1ebf - t\u1ed1i");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step41(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u00e0m m\u1edd");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(50);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step42(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(50);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step43(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 4);
executeAction(sTID("highPass"), desc1, dialogMode);
}

function step44(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Ovrl"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step45(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 68);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step46(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Thi\u1ebft k\u1ebf - s\u00e1ng");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(53);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step47(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
desc3.putReference(cTID("Chnl"), ref2);
var list2 = new ActionList();
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Hrzn"), 0);
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 93);
desc5.putDouble(cTID("Vrtc"), 151);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step48(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Thi\u1ebft k\u1ebf - t\u1ed1i");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(54);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step49(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
desc3.putReference(cTID("Chnl"), ref2);
var list2 = new ActionList();
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Hrzn"), 0);
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 145);
desc5.putDouble(cTID("Vrtc"), 100);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step50(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T-YD");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(11);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step51(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step52(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(11);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step53(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Chi ti\u1ebft");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(12);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step54(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step55(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Xo\u00e1 \u0111i\u1ec3m \u0111en");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step56(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putInteger(cTID("Rds "), 4);
desc1.putInteger(cTID("Thsh"), 5);
executeAction(sTID("dustAndScratches"), desc1, dialogMode);
}

function step57(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Chnl"), "Alpha 1");
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step58(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step59(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Chnl"), "Alpha 2");
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step60(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step61(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("HstS"), cTID("CrnH"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step62(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Prpr"), cTID("HsSt"));
ref1.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("clearEvent"), desc1, dialogMode);
}

function step63(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Chi ti\u1ebft");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(35);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step64(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Xo\u00e1 \u0111i\u1ec3m \u0111en");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(41);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step65(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 80);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step66(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Chi ti\u1ebft");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(35);
list1.putInteger(41);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step67(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Thi\u1ebft k\u1ebf - s\u00e1ng");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(39);
list1.putInteger(35);
list1.putInteger(41);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step68(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Thi\u1ebft k\u1ebf - t\u1ed1i");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(40);
list1.putInteger(39);
list1.putInteger(35);
list1.putInteger(41);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step69(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
desc1.putInteger(sTID("layerSectionStart"), 42);
desc1.putInteger(sTID("layerSectionEnd"), 43);
desc1.putString(cTID("Nm  "), "Nh\u00f3m 1");
executeAction(sTID("make"), desc1, dialogMode);
}

function step70(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Thi\u1ebft k\u1ebf");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step71(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("HdAl"));
executeAction(sTID("make"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
step41();
step42();
step43();
step44();
step45();
step46();
step47();
step48();
step49();
step50();
step51();
step52();
step53();
step54();
step55();
step56();
step57();
step58();
step59();
step60();
step61();
step62();
step63();
step64();
step65();
step66();
step67();
step68();
step69();
step70();
step71();
}

function act_all_zj() {
doFuncAllDoc(act_zj);
}

function act_tx() {
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
desc2.putObject(cTID("Type"), cTID("Lvls"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "T-YD");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Chi ti\u1ebft");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "L\u00e0m m\u1edd");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Rd  "));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 44.3);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putInteger(cTID("Fzns"), 200);
desc1.putEnumerated(cTID("Clrs"), cTID("Clrs"), sTID("skinTone"));
desc1.putInteger(sTID("colorModel"), 0);
executeAction(sTID("colorRange"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 91);
desc1.putInteger(cTID("Thsh"), 27);
executeAction(sTID("surfaceBlur"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Lghn"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Mrgd"));
desc2.putReference(cTID("T   "), ref1);
desc2.putEnumerated(cTID("Clcl"), cTID("Clcn"), cTID("Dfrn"));
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
ref2.putName(cTID("Lyr "), "Chi ti\u1ebft");
desc2.putReference(cTID("Src2"), ref2);
desc1.putObject(cTID("Usng"), cTID("Clcl"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
var list1 = new ActionList();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc2.putReference(cTID("Chnl"), ref1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(38);
desc2.putList(cTID("Inpt"), list2);
list1.putObject(cTID("LvlA"), desc2);
desc1.putList(cTID("Adjs"), list1);
executeAction(sTID("levels"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Drkn"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Mrgd"));
desc2.putReference(cTID("T   "), ref1);
desc2.putEnumerated(cTID("Clcl"), cTID("Clcn"), cTID("Dfrn"));
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
ref2.putName(cTID("Lyr "), "Chi ti\u1ebft");
desc2.putReference(cTID("Src2"), ref2);
desc1.putObject(cTID("Usng"), cTID("Clcl"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
var list1 = new ActionList();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc2.putReference(cTID("Chnl"), ref1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(49);
desc2.putList(cTID("Inpt"), list2);
list1.putObject(cTID("LvlA"), desc2);
desc1.putList(cTID("Adjs"), list1);
executeAction(sTID("levels"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T-YD");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(43);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u00e0m m\u1edd");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(45);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Chnl"), "Alpha 1");
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T-YD");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(48);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 1);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Thi\u1ebft k\u1ebf - s\u00e1ng");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Chnl"), "Alpha 2");
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step35(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T-YD");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(48);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step38(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step39(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 1);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step40(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step41(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Thi\u1ebft k\u1ebf - t\u1ed1i");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step42(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u00e0m m\u1edd");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(50);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step43(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(50);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step44(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 15);
executeAction(sTID("highPass"), desc1, dialogMode);
}

function step45(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Ovrl"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step46(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 68);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step47(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 80);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step48(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Thi\u1ebft k\u1ebf - s\u00e1ng");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(53);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step49(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
desc3.putReference(cTID("Chnl"), ref2);
var list2 = new ActionList();
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Hrzn"), 0);
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 60);
desc5.putDouble(cTID("Vrtc"), 96);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step50(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Thi\u1ebft k\u1ebf - t\u1ed1i");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(54);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step51(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
desc3.putReference(cTID("Chnl"), ref2);
var list2 = new ActionList();
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Hrzn"), 0);
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 145);
desc5.putDouble(cTID("Vrtc"), 100);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step52(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T-YD");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(11);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step53(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step54(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(11);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step55(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Thi\u1ebft k\u1ebf - t\u1ed1i");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(24);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step56(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Thi\u1ebft k\u1ebf - s\u00e1ng");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(24);
list1.putInteger(23);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step57(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Chi ti\u1ebft");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(24);
list1.putInteger(23);
list1.putInteger(19);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step58(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
desc1.putInteger(sTID("layerSectionStart"), 27);
desc1.putInteger(sTID("layerSectionEnd"), 28);
desc1.putString(cTID("Nm  "), "Nh\u00f3m 1");
executeAction(sTID("make"), desc1, dialogMode);
}

function step59(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Thi\u1ebft k\u1ebf");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step60(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("HdAl"));
executeAction(sTID("make"), desc1, dialogMode);
}

function step61(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("HstS"), cTID("CrnH"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step62(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Prpr"), cTID("HsSt"));
ref1.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("clearEvent"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
step41();
step42();
step43();
step44();
step45();
step46();
step47();
step48();
step49();
step50();
step51();
step52();
step53();
step54();
step55();
step56();
step57();
step58();
step59();
step60();
step61();
step62();
}

function act_all_tx() {
doFuncAllDoc(act_tx);
}

function act_USM() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 35);
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 2.5);
desc1.putInteger(cTID("Thsh"), 0);
executeAction(sTID("unsharpMask"), desc1, dialogMode);
}
step1();
}

function act_mdzq() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Clr "), cTID("Clrs"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("reset"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
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
var desc4 = new ActionDescriptor();
desc4.putString(cTID("Nm  "), "Chuy\u1ec3n m\u00e0u ti\u1ec1n c\u1ea3nh sang h\u1eadu c\u1ea3nh");
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
desc8.putDouble(cTID("Rd  "), 255);
desc8.putDouble(cTID("Grn "), 255);
desc8.putDouble(cTID("Bl  "), 255);
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
desc10.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc10.putInteger(cTID("Lctn"), 4096);
desc10.putInteger(cTID("Mdpn"), 50);
list2.putObject(cTID("TrnS"), desc10);
desc4.putList(cTID("Trns"), list2);
desc3.putObject(cTID("Grad"), cTID("Grdn"), desc4);
desc2.putObject(cTID("Type"), cTID("GdMp"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var desc3 = new ActionDescriptor();
desc3.putString(cTID("Nm  "), "$$$/DefaultGradient/BlackWhite=Black, White");
desc3.putEnumerated(cTID("GrdF"), cTID("GrdF"), cTID("CstS"));
desc3.putDouble(cTID("Intr"), 4096);
var list1 = new ActionList();
var desc4 = new ActionDescriptor();
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Rd  "), 3.47736583091319);
desc5.putDouble(cTID("Grn "), 0);
desc5.putDouble(cTID("Bl  "), 0.0787217488687);
desc4.putObject(cTID("Clr "), sTID("RGBColor"), desc5);
desc4.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
desc4.putInteger(cTID("Lctn"), 0);
desc4.putInteger(cTID("Mdpn"), 50);
list1.putObject(cTID("Clrt"), desc4);
var desc6 = new ActionDescriptor();
var desc7 = new ActionDescriptor();
desc7.putDouble(cTID("Rd  "), 255);
desc7.putDouble(cTID("Grn "), 255);
desc7.putDouble(cTID("Bl  "), 255);
desc6.putObject(cTID("Clr "), sTID("RGBColor"), desc7);
desc6.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
desc6.putInteger(cTID("Lctn"), 4096);
desc6.putInteger(cTID("Mdpn"), 50);
list1.putObject(cTID("Clrt"), desc6);
desc3.putList(cTID("Clrs"), list1);
var list2 = new ActionList();
var desc8 = new ActionDescriptor();
desc8.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc8.putInteger(cTID("Lctn"), 0);
desc8.putInteger(cTID("Mdpn"), 50);
list2.putObject(cTID("TrnS"), desc8);
var desc9 = new ActionDescriptor();
desc9.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc9.putInteger(cTID("Lctn"), 4096);
desc9.putInteger(cTID("Mdpn"), 50);
list2.putObject(cTID("TrnS"), desc9);
desc3.putList(cTID("Trns"), list2);
desc2.putObject(cTID("Grad"), cTID("Grdn"), desc3);
desc1.putObject(cTID("T   "), cTID("GdMp"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Lmns"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step5(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Thi\u1ebft k\u1ebf -");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
}

function act_xzs90() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Frst"));
desc1.putReference(cTID("null"), ref1);
desc1.putUnitDouble(cTID("Angl"), cTID("#Ang"), 90);
executeAction(sTID("rotateEventEnum"), desc1, dialogMode);
}
step1();
}

function act_xzn90() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Frst"));
desc1.putReference(cTID("null"), ref1);
desc1.putUnitDouble(cTID("Angl"), cTID("#Ang"), -90);
executeAction(sTID("rotateEventEnum"), desc1, dialogMode);
}
step1();
}

function act_hbkjtc() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}
step1();
}

function act_DCPNG() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var desc2 = new ActionDescriptor();
desc2.putEnumerated(sTID("PNGInterlaceType"), sTID("PNGInterlaceType"), sTID("PNGInterlaceNone"));
desc2.putEnumerated(sTID("PNGFilter"), sTID("PNGFilter"), sTID("PNGFilterAdaptive"));
desc2.putInteger(cTID("Cmpr"), 9);
desc1.putObject(cTID("As  "), sTID("PNGFormat"), desc2);
desc1.putPath(cTID("In  "), new File("~/Desktop"));
desc1.putInteger(cTID("DocI"), 2163);
executeAction(sTID("save"), desc1, dialogMode);
}
step1(true, true);
}

function GDP() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 44);
executeAction(sTID("make"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Mrgd"));
desc2.putReference(cTID("T   "), ref1);
desc1.putObject(cTID("With"), cTID("Clcl"), desc2);
executeAction(sTID("applyImageEvent"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Temp_1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
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
desc2.putString(cTID("Nm  "), "Temp_2");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("hide"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Temp_1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 5);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Temp_2");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("show"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
ref1.putName(cTID("Lyr "), "Temp_1");
desc2.putReference(cTID("T   "), ref1);
desc2.putEnumerated(cTID("Clcl"), cTID("Clcn"), cTID("Sbtr"));
desc2.putDouble(cTID("Scl "), 2);
desc2.putInteger(cTID("Ofst"), 128);
desc1.putObject(cTID("With"), cTID("Clcl"), desc2);
executeAction(sTID("applyImageEvent"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), sTID("linearLight"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("groupEvent"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Chi ti\u1ebft_Nh\u00e2n b\u1ea3n");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Xem tr\u01b0\u1edbc t\u0103ng c\u01b0\u1eddng chi ti\u1ebft");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("hide"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
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
desc4.putDouble(cTID("Hrzn"), 100);
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 128);
desc5.putDouble(cTID("Vrtc"), 128);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 160);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("groupEvent"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
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
desc4.putDouble(cTID("Hrzn"), 72);
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 128);
desc5.putDouble(cTID("Vrtc"), 128);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 181);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Temp_1");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Bl  "));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "FS_Radius_");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Temp_1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Volume_R=");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Temp_2");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Texture_R=");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Chi ti\u1ebft t\u1ea7n s\u1ed1 cao");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "FS_Radius_");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "L\u00e0m da t\u1ea7n s\u1ed1 cao/th\u1ea5p");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step35(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Volume_R=");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "M\u1ea3ng m\u00e0u t\u1ea7n s\u1ed1 th\u1ea5p");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step38(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "M\u1ea3ng m\u00e0u_L\u00e0m m\u1edd");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step39(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("groupEvent"), desc1, dialogMode);
}

function step40(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u00e0m da t\u1ea7n s\u1ed1 cao/th\u1ea5p");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(78);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step41(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u1ea7n s\u1ed1 cao/th\u1ea5p");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step42(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "M\u1ea3ng m\u00e0u_L\u00e0m m\u1edd");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(80);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8(true, true);
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
step41();
step42();
}

function CGYSA() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "CG");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "CGA");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "CG");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(6);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(6);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "CGA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(7);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("delete"), undefined, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "N\u1ec1n");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(1);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Lyr "), cTID("Bckg"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
desc1.putInteger(cTID("LyrI"), 8);
executeAction(sTID("set"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("delete"), undefined, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "CGA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(7);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Wdth"), cTID("#Rlt"), 850.5);
desc1.putUnitDouble(cTID("Hght"), cTID("#Rlt"), 567);
desc1.putUnitDouble(cTID("Rslt"), cTID("#Rsl"), 128);
desc1.putEnumerated(cTID("Intr"), cTID("Intp"), sTID("automaticInterpolation"));
executeAction(sTID("imageSize"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Ptrn"));
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "YSAA");
desc2.putString(cTID("Idnt"), "f9e7c441-4c6e-11e8-b559-d5b358e57b76");
desc1.putObject(cTID("Ptrn"), cTID("Ptrn"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyEvent"), undefined, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -4);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -4);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
desc1.putClass(cTID("As  "), cTID("Pxel"));
executeAction(sTID("paste"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Scrn"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "\u00c1nh s\u00e1ng A");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("HstS"), cTID("CrnH"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Prpr"), cTID("HsSt"));
ref1.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("clearEvent"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
}

function CGYSB() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "CG");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "CGA");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "CG");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(6);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(6);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "CGA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(7);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("delete"), undefined, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "N\u1ec1n");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(1);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Lyr "), cTID("Bckg"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
desc1.putInteger(cTID("LyrI"), 8);
executeAction(sTID("set"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("delete"), undefined, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "CGA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(7);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Wdth"), cTID("#Rlt"), 850.5);
desc1.putUnitDouble(cTID("Hght"), cTID("#Rlt"), 567);
desc1.putUnitDouble(cTID("Rslt"), cTID("#Rsl"), 128);
desc1.putEnumerated(cTID("Intr"), cTID("Intp"), sTID("automaticInterpolation"));
executeAction(sTID("imageSize"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Ptrn"));
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "YSB-");
desc2.putString(cTID("Idnt"), "4ce35a31-4c6f-11e8-b559-d5b358e57b76");
desc1.putObject(cTID("Ptrn"), cTID("Ptrn"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyEvent"), undefined, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -4);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -4);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
desc1.putClass(cTID("As  "), cTID("Pxel"));
executeAction(sTID("paste"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Scrn"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ki\u1ec3u \u00e1nh s\u00e1ng");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("HstS"), cTID("CrnH"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Prpr"), cTID("HsSt"));
ref1.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("clearEvent"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
}

function DCJPG() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var desc2 = new ActionDescriptor();
desc2.putInteger(cTID("EQlt"), 12);
desc2.putEnumerated(cTID("MttC"), cTID("MttC"), cTID("None"));
desc1.putObject(cTID("As  "), sTID("JPEGFormat"), desc2);
desc1.putPath(cTID("In  "), new File("~/Desktop/Watermark"));
desc1.putInteger(cTID("DocI"), 2241);
executeAction(sTID("save"), desc1, dialogMode);
}
step1(true, true);
}

function DKACR() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putString(cTID("CMod"), "Filter");
desc1.putEnumerated(cTID("Sett"), cTID("Sett"), cTID("Defa"));
executeAction(sTID("Adobe Camera Raw Filter"), desc1, dialogMode);
}
step1(true, true);
}

function FSJH() {
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
var desc4 = new ActionDescriptor();
desc4.putUnitDouble(cTID("Rd  "), cTID("#Prc"), 100);
desc3.putObject(cTID("Rd  "), cTID("ChMx"), desc4);
var desc5 = new ActionDescriptor();
desc5.putUnitDouble(cTID("Grn "), cTID("#Prc"), 100);
desc3.putObject(cTID("Grn "), cTID("ChMx"), desc5);
var desc6 = new ActionDescriptor();
desc6.putUnitDouble(cTID("Bl  "), cTID("#Prc"), 100);
desc3.putObject(cTID("Bl  "), cTID("ChMx"), desc6);
desc2.putObject(cTID("Type"), cTID("ChnM"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
var desc3 = new ActionDescriptor();
desc3.putUnitDouble(cTID("Grn "), cTID("#Prc"), 47);
desc3.putUnitDouble(cTID("Bl  "), cTID("#Prc"), 50);
desc2.putObject(cTID("Bl  "), cTID("ChMx"), desc3);
desc1.putObject(cTID("T   "), cTID("ChnM"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Redness Reducer");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
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
var desc4 = new ActionDescriptor();
desc4.putUnitDouble(cTID("Rd  "), cTID("#Prc"), 100);
desc3.putObject(cTID("Rd  "), cTID("ChMx"), desc4);
var desc5 = new ActionDescriptor();
desc5.putUnitDouble(cTID("Grn "), cTID("#Prc"), 100);
desc3.putObject(cTID("Grn "), cTID("ChMx"), desc5);
var desc6 = new ActionDescriptor();
desc6.putUnitDouble(cTID("Bl  "), cTID("#Prc"), 100);
desc3.putObject(cTID("Bl  "), cTID("ChMx"), desc6);
desc2.putObject(cTID("Type"), cTID("ChnM"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
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
var desc3 = new ActionDescriptor();
desc3.putUnitDouble(cTID("Rd  "), cTID("#Prc"), 50);
desc3.putUnitDouble(cTID("Grn "), cTID("#Prc"), 50);
desc2.putObject(cTID("Rd  "), cTID("ChMx"), desc3);
desc1.putObject(cTID("T   "), cTID("ChnM"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
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
executeAction(sTID("set"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Redness Reducer II");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
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
executeAction(sTID("set"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 20);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Curves");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Redness Reducer");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("HdAl"));
executeAction(sTID("make"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Redness Reducer");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Clr "), cTID("Clrs"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("reset"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
}

function GGXS() {
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
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Rd  "), 221.000518798828);
desc4.putDouble(cTID("Grn "), 161.001434326172);
desc4.putDouble(cTID("Bl  "), 129.001922607422);
desc3.putObject(cTID("Clr "), sTID("RGBColor"), desc4);
desc2.putObject(cTID("Type"), sTID("solidColorLayer"), desc3);
desc1.putObject(cTID("Usng"), sTID("contentLayer"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Skin Color");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
desc3.putReference(cTID("Chnl"), ref2);
desc3.putInteger(cTID("SrcB"), 0);
desc3.putInteger(cTID("Srcl"), 0);
desc3.putInteger(cTID("SrcW"), 255);
desc3.putInteger(cTID("Srcm"), 255);
desc3.putInteger(cTID("DstB"), 125);
desc3.putInteger(cTID("Dstl"), 255);
desc3.putInteger(cTID("DstW"), 255);
desc3.putInteger(cTID("Dstt"), 255);
list1.putObject(cTID("Blnd"), desc3);
desc2.putList(cTID("Blnd"), list1);
var desc4 = new ActionDescriptor();
desc4.putUnitDouble(cTID("Scl "), cTID("#Prc"), 416.666666666667);
desc2.putObject(cTID("Lefx"), cTID("Lefx"), desc4);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
executeAction(sTID("make"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Mattifier Powder");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("HdAl"));
executeAction(sTID("make"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("PbTl"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Clr "), cTID("FrgC"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("H   "), cTID("#Ang"), 0);
desc2.putDouble(cTID("Strt"), 0);
desc2.putDouble(cTID("Brgh"), 100);
desc1.putObject(cTID("T   "), cTID("HSBC"), desc2);
desc1.putString(cTID("Srce"), "photoshopPicker");
executeAction(sTID("set"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Clr "), cTID("BckC"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("H   "), cTID("#Ang"), 0);
desc2.putDouble(cTID("Strt"), 0);
desc2.putDouble(cTID("Brgh"), 0);
desc1.putObject(cTID("T   "), cTID("HSBC"), desc2);
desc1.putString(cTID("Srce"), "photoshopPicker");
executeAction(sTID("set"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Skin Color");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(91);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "L\u1ea5y m\u00e0u da");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Mattifier Powder");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(92);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u1ea9y b\u1eb1ng c\u1ecd tr\u1eafng");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
}

function HDRZQ() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "HDR-1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "HDR-a");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putPath(sTID("javaScript"), new File("/c/Program Files/Adobe/HDRToning.jsx"));
desc1.putString(sTID("javaScriptMessage"), "");
executeAction(sTID("AdobeScriptAutomation Scripts"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyEvent"), undefined, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -3);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
desc1.putClass(cTID("As  "), cTID("Pxel"));
executeAction(sTID("paste"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u0103ng c\u01b0\u1eddng HDR");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "HDR-a");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(16);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(16);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(15);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u0103ng c\u01b0\u1eddng HDR");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(17);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u0103ng c\u01b0\u1eddng HDR");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(114);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u0103ng c\u01b0\u1eddng HDR");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("HstS"), cTID("CrnH"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Prpr"), cTID("HsSt"));
ref1.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("clearEvent"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
}

function HSXZ() {
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
desc2.putString(cTID("Nm  "), "Yellow Tone Corrector");
var desc3 = new ActionDescriptor();
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Rd  "), 92.0000021159649);
desc4.putDouble(cTID("Grn "), 26.0000003501773);
desc4.putDouble(cTID("Bl  "), 102.000001519918);
desc3.putObject(cTID("Clr "), sTID("RGBColor"), desc4);
desc3.putInteger(cTID("Dnst"), 40);
desc3.putBoolean(cTID("PrsL"), true);
desc2.putObject(cTID("Type"), sTID("photoFilter"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("invert"), undefined, dialogMode);
}
step1();
step2();
}

function JMXS() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("make"), desc1, dialogMode);
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
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
desc3.putReference(cTID("Chnl"), ref2);
desc3.putInteger(cTID("SrcB"), 0);
desc3.putInteger(cTID("Srcl"), 0);
desc3.putInteger(cTID("SrcW"), 52);
desc3.putInteger(cTID("Srcm"), 109);
desc3.putInteger(cTID("DstB"), 0);
desc3.putInteger(cTID("Dstl"), 0);
desc3.putInteger(cTID("DstW"), 255);
desc3.putInteger(cTID("Dstt"), 255);
list1.putObject(cTID("Blnd"), desc3);
desc2.putList(cTID("Blnd"), list1);
var desc4 = new ActionDescriptor();
desc4.putUnitDouble(cTID("Scl "), cTID("#Prc"), 416.666666666667);
desc2.putObject(cTID("Lefx"), cTID("Lefx"), desc4);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Mltp"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
desc3.putReference(cTID("Chnl"), ref2);
desc3.putInteger(cTID("SrcB"), 0);
desc3.putInteger(cTID("Srcl"), 0);
desc3.putInteger(cTID("SrcW"), 50);
desc3.putInteger(cTID("Srcm"), 100);
desc3.putInteger(cTID("DstB"), 0);
desc3.putInteger(cTID("Dstl"), 0);
desc3.putInteger(cTID("DstW"), 255);
desc3.putInteger(cTID("Dstt"), 255);
list1.putObject(cTID("Blnd"), desc3);
desc2.putList(cTID("Blnd"), list1);
var desc4 = new ActionDescriptor();
desc4.putUnitDouble(cTID("Scl "), cTID("#Prc"), 416.666666666667);
desc2.putObject(cTID("Lefx"), cTID("Lefx"), desc4);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Mascara");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("HdAl"));
executeAction(sTID("make"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 70);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Clr "), cTID("Clrs"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("reset"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
}

function JSXZ() {
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
desc2.putString(cTID("Nm  "), "Golden Tone Corrector");
var desc3 = new ActionDescriptor();
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Rd  "), 33.0038928240538);
desc4.putDouble(cTID("Grn "), 0);
desc4.putDouble(cTID("Bl  "), 79.0038938820362);
desc3.putObject(cTID("Clr "), sTID("RGBColor"), desc4);
desc3.putInteger(cTID("Dnst"), 50);
desc3.putBoolean(cTID("PrsL"), true);
desc2.putObject(cTID("Type"), sTID("photoFilter"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("invert"), undefined, dialogMode);
}
step1();
step2();
}

function JSYY() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Lyr "), cTID("Bckg"));
desc1.putReference(cTID("null"), ref1);
desc1.putString(cTID("Nm  "), "Metallic Effect");
desc1.putInteger(cTID("Vrsn"), 5);
executeAction(sTID("duplicate"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 500);
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 4);
desc1.putInteger(cTID("Thsh"), 6);
executeAction(sTID("unsharpMask"), desc1, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Gold");
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Clr "));
desc1.putObject(cTID("Usng"), cTID("Lyr "), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Clr "));
var desc2 = new ActionDescriptor();
desc2.putDouble(cTID("Rd  "), 179);
desc2.putDouble(cTID("Grn "), 145);
desc2.putDouble(cTID("Bl  "), 103.003891050584);
desc1.putObject(cTID("Clr "), sTID("RGBColor"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}

function step5(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Metallic Effect");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Gold Member");
desc1.putObject(cTID("Usng"), sTID("layerSection"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("HdAl"));
executeAction(sTID("make"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("PbTl"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
}

function MBPF() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "MBPF");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "L\u00e0m tr\u1eafng da");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "MBPF");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(149);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(149);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u00e0m tr\u1eafng da");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(150);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putString(cTID("CMod"), "Filter");
desc1.putEnumerated(cTID("Sett"), cTID("Sett"), cTID("Cst "));
desc1.putEnumerated(cTID("WBal"), cTID("WBal"), cTID("Cst "));
desc1.putInteger(cTID("Temp"), -2);
desc1.putInteger(cTID("Tint"), 0);
desc1.putBoolean(cTID("CtoG"), false);
desc1.putInteger(cTID("Strt"), 0);
desc1.putInteger(cTID("Shrp"), 0);
desc1.putInteger(cTID("LNR "), 0);
desc1.putInteger(cTID("CNR "), 0);
desc1.putInteger(cTID("VigA"), 0);
desc1.putInteger(cTID("BlkB"), 0);
desc1.putInteger(cTID("RHue"), 0);
desc1.putInteger(cTID("RSat"), -18);
desc1.putInteger(cTID("GHue"), 0);
desc1.putInteger(cTID("GSat"), 0);
desc1.putInteger(cTID("BHue"), 0);
desc1.putInteger(cTID("BSat"), 0);
desc1.putInteger(cTID("Vibr"), 0);
desc1.putInteger(cTID("HA_R"), 0);
desc1.putInteger(cTID("HA_O"), 0);
desc1.putInteger(cTID("HA_Y"), 0);
desc1.putInteger(cTID("HA_G"), 0);
desc1.putInteger(cTID("HA_A"), 0);
desc1.putInteger(cTID("HA_B"), 0);
desc1.putInteger(cTID("HA_P"), 0);
desc1.putInteger(cTID("HA_M"), 0);
desc1.putInteger(cTID("SA_R"), 0);
desc1.putInteger(cTID("SA_O"), -13);
desc1.putInteger(cTID("SA_Y"), 0);
desc1.putInteger(cTID("SA_G"), 0);
desc1.putInteger(cTID("SA_A"), 0);
desc1.putInteger(cTID("SA_B"), 0);
desc1.putInteger(cTID("SA_P"), 0);
desc1.putInteger(cTID("SA_M"), 0);
desc1.putInteger(cTID("LA_R"), 0);
desc1.putInteger(cTID("LA_O"), 20);
desc1.putInteger(cTID("LA_Y"), 0);
desc1.putInteger(cTID("LA_G"), 0);
desc1.putInteger(cTID("LA_A"), 0);
desc1.putInteger(cTID("LA_B"), 0);
desc1.putInteger(cTID("LA_P"), 0);
desc1.putInteger(cTID("LA_M"), 0);
desc1.putInteger(cTID("STSH"), 0);
desc1.putInteger(cTID("STSS"), 0);
desc1.putInteger(cTID("STHH"), 0);
desc1.putInteger(cTID("STHS"), 0);
desc1.putInteger(cTID("STB "), 0);
desc1.putInteger(cTID("PC_S"), 0);
desc1.putInteger(cTID("PC_D"), 0);
desc1.putInteger(cTID("PC_L"), 0);
desc1.putInteger(cTID("PC_H"), 0);
desc1.putInteger(cTID("PC_1"), 25);
desc1.putInteger(cTID("PC_2"), 50);
desc1.putInteger(cTID("PC_3"), 75);
desc1.putDouble(cTID("ShpR"), 1);
desc1.putInteger(cTID("ShpD"), 25);
desc1.putInteger(cTID("ShpM"), 0);
desc1.putInteger(cTID("PCVA"), 0);
desc1.putInteger(cTID("GRNA"), 0);
desc1.putInteger(cTID("LPEn"), 0);
desc1.putInteger(cTID("MDis"), 0);
desc1.putInteger(cTID("PerV"), 0);
desc1.putInteger(cTID("PerH"), 0);
desc1.putDouble(cTID("PerR"), 0);
desc1.putInteger(cTID("PerS"), 100);
desc1.putInteger(cTID("PerA"), 0);
desc1.putInteger(cTID("PerU"), 0);
desc1.putDouble(cTID("PerX"), 0);
desc1.putDouble(cTID("PerY"), 0);
desc1.putInteger(cTID("AuCA"), 0);
desc1.putDouble(cTID("Ex12"), 0.25);
desc1.putInteger(cTID("Cr12"), 0);
desc1.putInteger(cTID("Hi12"), 0);
desc1.putInteger(cTID("Sh12"), 27);
desc1.putInteger(cTID("Wh12"), 0);
desc1.putInteger(cTID("Bk12"), 16);
desc1.putInteger(cTID("Cl12"), 0);
desc1.putInteger(cTID("DfPA"), 0);
desc1.putInteger(cTID("DPHL"), 30);
desc1.putInteger(cTID("DPHH"), 70);
desc1.putInteger(cTID("DfGA"), 0);
desc1.putInteger(cTID("DPGL"), 40);
desc1.putInteger(cTID("DPGH"), 60);
desc1.putInteger(cTID("Dhze"), 0);
var list1 = new ActionList();
list1.putInteger(0);
list1.putInteger(0);
list1.putInteger(255);
list1.putInteger(255);
desc1.putList(cTID("Crv "), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(0);
list2.putInteger(255);
list2.putInteger(255);
desc1.putList(cTID("CrvR"), list2);
var list3 = new ActionList();
list3.putInteger(0);
list3.putInteger(0);
list3.putInteger(255);
list3.putInteger(255);
desc1.putList(cTID("CrvG"), list3);
var list4 = new ActionList();
list4.putInteger(0);
list4.putInteger(0);
list4.putInteger(255);
list4.putInteger(255);
desc1.putList(cTID("CrvB"), list4);
desc1.putString(cTID("CamP"), "Embedded");
desc1.putString(cTID("CP_D"), "54650A341B5B5CCAE8442D0B43A92BCE");
desc1.putInteger(cTID("PrVe"), 167772160);
desc1.putString(cTID("Rtch"), "");
desc1.putString(cTID("REye"), "");
desc1.putString(cTID("LCs "), "");
desc1.putString(cTID("Upri"), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c128 79.159124, 2016/03/18-14:01:55        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightVersion=\"151388160\"\n   crs:UprightCenterMode=\"0\"\n   crs:UprightCenterNormX=\"0.5\"\n   crs:UprightCenterNormY=\"0.5\"\n   crs:UprightFocalMode=\"0\"\n   crs:UprightFocalLength35mm=\"35\"\n   crs:UprightPreview=\"False\"\n   crs:UprightTransformCount=\"6\"/>\n </rdf:RDF>\n</x:xmpmeta>\n");
desc1.putString(cTID("GuUr"), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c128 79.159124, 2016/03/18-14:01:55        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightFourSegmentsCount=\"0\"/>\n </rdf:RDF>\n</x:xmpmeta>\n");
executeAction(sTID("Adobe Camera Raw Filter"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("HstS"), cTID("CrnH"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Prpr"), cTID("HsSt"));
ref1.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("clearEvent"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
}

function MLXG() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "CG");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "CGA");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "CG");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(6);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(6);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "CGA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(7);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("delete"), undefined, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "N\u1ec1n");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(1);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Lyr "), cTID("Bckg"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
desc1.putInteger(cTID("LyrI"), 8);
executeAction(sTID("set"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("delete"), undefined, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "CGA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(7);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Wdth"), cTID("#Rlt"), 850.5);
desc1.putUnitDouble(cTID("Hght"), cTID("#Rlt"), 567);
desc1.putUnitDouble(cTID("Rslt"), cTID("#Rsl"), 128);
desc1.putEnumerated(cTID("Intr"), cTID("Intp"), sTID("automaticInterpolation"));
executeAction(sTID("imageSize"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Ptrn"));
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "MLXG-");
desc2.putString(cTID("Idnt"), "1b8ebc87-4c70-11e8-b559-d5b358e57b76");
desc1.putObject(cTID("Ptrn"), cTID("Ptrn"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyEvent"), undefined, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -4);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -4);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
desc1.putClass(cTID("As  "), cTID("Pxel"));
executeAction(sTID("paste"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Scrn"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Hi\u1ec7u \u1ee9ng m\u1edd \u1ea3o");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "\u0110\u1ed5i Hue");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("groupEvent"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("HstS"), cTID("CrnH"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Prpr"), cTID("HsSt"));
ref1.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("clearEvent"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Hi\u1ec7u \u1ee9ng m\u1edd \u1ea3o");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(73);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
executeAction(sTID("make"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
}

function SCDB() {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
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
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 145);
desc5.putDouble(cTID("Vrtc"), 100);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Darken");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step5(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
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
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 100);
desc5.putDouble(cTID("Vrtc"), 145);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Lighten");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("AdjL"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putClass(cTID("Type"), sTID("vibrance"));
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putInteger(sTID("vibrance"), 40);
desc2.putInteger(cTID("Strt"), -5);
desc1.putObject(cTID("T   "), sTID("vibrance"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Saturation");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Darken");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
executeAction(sTID("make"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Color Contrast");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Clr "), cTID("Clrs"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("reset"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
}

function TJSH() {
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
var desc4 = new ActionDescriptor();
desc4.putString(cTID("Nm  "), "Foreground to Background");
desc4.putEnumerated(cTID("GrdF"), cTID("GrdF"), cTID("CstS"));
desc4.putDouble(cTID("Intr"), 4096);
var list1 = new ActionList();
var desc5 = new ActionDescriptor();
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Rd  "), 157.000005841255);
desc6.putDouble(cTID("Grn "), 106.0000012815);
desc6.putDouble(cTID("Bl  "), 78.0000029504299);
desc5.putObject(cTID("Clr "), sTID("RGBColor"), desc6);
desc5.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
desc5.putInteger(cTID("Lctn"), 0);
desc5.putInteger(cTID("Mdpn"), 50);
list1.putObject(cTID("Clrt"), desc5);
var desc7 = new ActionDescriptor();
var desc8 = new ActionDescriptor();
desc8.putDouble(cTID("Rd  "), 0);
desc8.putDouble(cTID("Grn "), 0);
desc8.putDouble(cTID("Bl  "), 0);
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
desc10.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc10.putInteger(cTID("Lctn"), 4096);
desc10.putInteger(cTID("Mdpn"), 50);
list2.putObject(cTID("TrnS"), desc10);
desc4.putList(cTID("Trns"), list2);
desc3.putObject(cTID("Grad"), cTID("Grdn"), desc4);
desc2.putObject(cTID("Type"), cTID("GdMp"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var desc3 = new ActionDescriptor();
desc3.putString(cTID("Nm  "), "Custom");
desc3.putEnumerated(cTID("GrdF"), cTID("GrdF"), cTID("CstS"));
desc3.putDouble(cTID("Intr"), 4096);
var list1 = new ActionList();
var desc4 = new ActionDescriptor();
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Rd  "), 223.000001907349);
desc5.putDouble(cTID("Grn "), 39.3540854752064);
desc5.putDouble(cTID("Bl  "), 47.7782106399536);
desc4.putObject(cTID("Clr "), sTID("RGBColor"), desc5);
desc4.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
desc4.putInteger(cTID("Lctn"), 0);
desc4.putInteger(cTID("Mdpn"), 50);
list1.putObject(cTID("Clrt"), desc4);
var desc6 = new ActionDescriptor();
var desc7 = new ActionDescriptor();
desc7.putDouble(cTID("Rd  "), 237.996368408203);
desc7.putDouble(cTID("Grn "), 211.996765136719);
desc7.putDouble(cTID("Bl  "), 187.997131347656);
desc6.putObject(cTID("Clr "), sTID("RGBColor"), desc7);
desc6.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
desc6.putInteger(cTID("Lctn"), 4096);
desc6.putInteger(cTID("Mdpn"), 50);
list1.putObject(cTID("Clrt"), desc6);
desc3.putList(cTID("Clrs"), list1);
var list2 = new ActionList();
var desc8 = new ActionDescriptor();
desc8.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc8.putInteger(cTID("Lctn"), 0);
desc8.putInteger(cTID("Mdpn"), 50);
list2.putObject(cTID("TrnS"), desc8);
var desc9 = new ActionDescriptor();
desc9.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc9.putInteger(cTID("Lctn"), 4096);
desc9.putInteger(cTID("Mdpn"), 50);
list2.putObject(cTID("TrnS"), desc9);
desc3.putList(cTID("Trns"), list2);
desc2.putObject(cTID("Grad"), cTID("Grdn"), desc3);
desc1.putObject(cTID("T   "), cTID("GdMp"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Blusher");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Darken");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Drkn"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Mltp"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 30);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Hue");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
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
desc3.putInteger(cTID("LclR"), 1);
desc3.putInteger(cTID("BgnR"), 315);
desc3.putInteger(cTID("BgnS"), 345);
desc3.putInteger(cTID("EndS"), 15);
desc3.putInteger(cTID("EndR"), 45);
desc3.putInteger(cTID("H   "), -1);
desc3.putInteger(cTID("Strt"), 5);
desc3.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc3);
var desc4 = new ActionDescriptor();
desc4.putInteger(cTID("LclR"), 2);
desc4.putInteger(cTID("BgnR"), 15);
desc4.putInteger(cTID("BgnS"), 45);
desc4.putInteger(cTID("EndS"), 75);
desc4.putInteger(cTID("EndR"), 105);
desc4.putInteger(cTID("H   "), -2);
desc4.putInteger(cTID("Strt"), 5);
desc4.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc4);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Blusher");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("HdAl"));
executeAction(sTID("make"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Blusher");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Clr "), cTID("Clrs"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("reset"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
}

function TJYY() {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
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
desc4.putDouble(cTID("Hrzn"), 35);
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 145);
desc5.putDouble(cTID("Vrtc"), 108);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 220);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Darken I");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step5(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
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
desc3.putInteger(cTID("Rd  "), 40);
desc3.putInteger(cTID("Yllw"), 60);
desc3.putInteger(cTID("Grn "), 40);
desc3.putInteger(cTID("Cyn "), 60);
desc3.putInteger(cTID("Bl  "), 20);
desc3.putInteger(cTID("Mgnt"), 80);
desc3.putBoolean(sTID("useTint"), false);
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Rd  "), 225.000457763672);
desc4.putDouble(cTID("Grn "), 211.000671386719);
desc4.putDouble(cTID("Bl  "), 179.001159667969);
desc3.putObject(sTID("tintColor"), sTID("RGBColor"), desc4);
desc2.putObject(cTID("Type"), cTID("BanW"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Mltp"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 75);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Darken II");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Darken I");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("HdAl"));
executeAction(sTID("make"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Eyeshadow");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 75);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Clr "), cTID("Clrs"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("reset"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
}

function ZCZQ() {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
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
desc4.putDouble(cTID("Hrzn"), 15);
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 140);
desc5.putDouble(cTID("Vrtc"), 113);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 247);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
var desc7 = new ActionDescriptor();
var ref3 = new ActionReference();
ref3.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Rd  "));
desc7.putReference(cTID("Chnl"), ref3);
var list3 = new ActionList();
var desc8 = new ActionDescriptor();
desc8.putDouble(cTID("Hrzn"), 0);
desc8.putDouble(cTID("Vrtc"), 0);
list3.putObject(cTID("Pnt "), desc8);
var desc9 = new ActionDescriptor();
desc9.putDouble(cTID("Hrzn"), 115);
desc9.putDouble(cTID("Vrtc"), 142);
list3.putObject(cTID("Pnt "), desc9);
var desc10 = new ActionDescriptor();
desc10.putDouble(cTID("Hrzn"), 255);
desc10.putDouble(cTID("Vrtc"), 255);
list3.putObject(cTID("Pnt "), desc10);
desc7.putList(cTID("Crv "), list3);
list1.putObject(cTID("CrvA"), desc7);
var desc11 = new ActionDescriptor();
var ref4 = new ActionReference();
ref4.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Grn "));
desc11.putReference(cTID("Chnl"), ref4);
var list4 = new ActionList();
var desc12 = new ActionDescriptor();
desc12.putDouble(cTID("Hrzn"), 0);
desc12.putDouble(cTID("Vrtc"), 0);
list4.putObject(cTID("Pnt "), desc12);
var desc13 = new ActionDescriptor();
desc13.putDouble(cTID("Hrzn"), 135);
desc13.putDouble(cTID("Vrtc"), 141);
list4.putObject(cTID("Pnt "), desc13);
var desc14 = new ActionDescriptor();
desc14.putDouble(cTID("Hrzn"), 255);
desc14.putDouble(cTID("Vrtc"), 255);
list4.putObject(cTID("Pnt "), desc14);
desc11.putList(cTID("Crv "), list4);
list1.putObject(cTID("CrvA"), desc11);
var desc15 = new ActionDescriptor();
var ref5 = new ActionReference();
ref5.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Bl  "));
desc15.putReference(cTID("Chnl"), ref5);
var list5 = new ActionList();
var desc16 = new ActionDescriptor();
desc16.putDouble(cTID("Hrzn"), 0);
desc16.putDouble(cTID("Vrtc"), 0);
list5.putObject(cTID("Pnt "), desc16);
var desc17 = new ActionDescriptor();
desc17.putDouble(cTID("Hrzn"), 146);
desc17.putDouble(cTID("Vrtc"), 145);
list5.putObject(cTID("Pnt "), desc17);
var desc18 = new ActionDescriptor();
desc18.putDouble(cTID("Hrzn"), 255);
desc18.putDouble(cTID("Vrtc"), 255);
list5.putObject(cTID("Pnt "), desc18);
desc15.putList(cTID("Crv "), list5);
list1.putObject(cTID("CrvA"), desc15);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Dudak belirginle\u015ftirici");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step5(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Lip Enhancer");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 60);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
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
desc3.putInteger(cTID("LclR"), 1);
desc3.putInteger(cTID("BgnR"), 315);
desc3.putInteger(cTID("BgnS"), 345);
desc3.putInteger(cTID("EndS"), 15);
desc3.putInteger(cTID("EndR"), 45);
desc3.putInteger(cTID("H   "), 0);
desc3.putInteger(cTID("Strt"), 15);
desc3.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
desc3.putInteger(cTID("LclR"), 1);
desc3.putInteger(cTID("BgnR"), 315);
desc3.putInteger(cTID("BgnS"), 345);
desc3.putInteger(cTID("EndS"), 15);
desc3.putInteger(cTID("EndR"), 45);
desc3.putInteger(cTID("H   "), -2);
desc3.putInteger(cTID("Strt"), 15);
desc3.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Hue");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("make"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 40);
executeAction(sTID("highPass"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 3);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
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
executeAction(sTID("set"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 40);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Detay G\xfc\xe7lendirici");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), sTID("vividLight"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Detail Enhancer");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Lip Enhancer");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Lip Enhancer");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("HdAl"));
executeAction(sTID("make"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Clr "), cTID("Clrs"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("reset"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
}

function ZXHC() {
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
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("SftL"));
desc2.putBoolean(cTID("FlNt"), true);
desc1.putObject(cTID("Usng"), cTID("Lyr "), desc2);
desc1.putInteger(cTID("LyrI"), 25);
executeAction(sTID("make"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "L\u1edbp x\u00e1m trung t\u00ednh");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}
step1();
step2();
}

function QXFD() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "ZHA");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "ZHA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(27);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putString(cTID("CMod"), "Filter");
desc1.putEnumerated(cTID("Sett"), cTID("Sett"), cTID("Cst "));
desc1.putEnumerated(cTID("WBal"), cTID("WBal"), cTID("Cst "));
desc1.putInteger(cTID("Temp"), -27);
desc1.putInteger(cTID("Tint"), 0);
desc1.putInteger(cTID("AWBV"), 134348800);
desc1.putBoolean(cTID("CtoG"), false);
desc1.putInteger(cTID("Strt"), 0);
desc1.putInteger(cTID("Shrp"), 0);
desc1.putInteger(cTID("LNR "), 0);
desc1.putInteger(cTID("CNR "), 0);
desc1.putInteger(cTID("VigA"), 0);
desc1.putInteger(cTID("BlkB"), 0);
desc1.putInteger(cTID("RHue"), 0);
desc1.putInteger(cTID("RSat"), 0);
desc1.putInteger(cTID("GHue"), 0);
desc1.putInteger(cTID("GSat"), 0);
desc1.putInteger(cTID("BHue"), 0);
desc1.putInteger(cTID("BSat"), 0);
desc1.putInteger(cTID("Vibr"), 0);
desc1.putInteger(cTID("HA_R"), 24);
desc1.putInteger(cTID("HA_O"), 9);
desc1.putInteger(cTID("HA_Y"), 0);
desc1.putInteger(cTID("HA_G"), 0);
desc1.putInteger(cTID("HA_A"), 0);
desc1.putInteger(cTID("HA_B"), 0);
desc1.putInteger(cTID("HA_P"), 0);
desc1.putInteger(cTID("HA_M"), 0);
desc1.putInteger(cTID("SA_R"), -8);
desc1.putInteger(cTID("SA_O"), -5);
desc1.putInteger(cTID("SA_Y"), 0);
desc1.putInteger(cTID("SA_G"), 0);
desc1.putInteger(cTID("SA_A"), 0);
desc1.putInteger(cTID("SA_B"), 0);
desc1.putInteger(cTID("SA_P"), 0);
desc1.putInteger(cTID("SA_M"), 0);
desc1.putInteger(cTID("LA_R"), 15);
desc1.putInteger(cTID("LA_O"), 16);
desc1.putInteger(cTID("LA_Y"), 0);
desc1.putInteger(cTID("LA_G"), 0);
desc1.putInteger(cTID("LA_A"), 0);
desc1.putInteger(cTID("LA_B"), 0);
desc1.putInteger(cTID("LA_P"), 0);
desc1.putInteger(cTID("LA_M"), 0);
desc1.putInteger(cTID("STSH"), 0);
desc1.putInteger(cTID("STSS"), 0);
desc1.putInteger(cTID("STHH"), 0);
desc1.putInteger(cTID("STHS"), 0);
desc1.putInteger(cTID("STB "), 0);
desc1.putInteger(cTID("PC_S"), 0);
desc1.putInteger(cTID("PC_D"), 0);
desc1.putInteger(cTID("PC_L"), 0);
desc1.putInteger(cTID("PC_H"), 0);
desc1.putInteger(cTID("PC_1"), 25);
desc1.putInteger(cTID("PC_2"), 50);
desc1.putInteger(cTID("PC_3"), 75);
desc1.putDouble(cTID("ShpR"), 1);
desc1.putInteger(cTID("ShpD"), 25);
desc1.putInteger(cTID("ShpM"), 0);
desc1.putInteger(cTID("PCVA"), 0);
desc1.putInteger(cTID("GRNA"), 0);
desc1.putInteger(cTID("LPEn"), 0);
desc1.putInteger(cTID("MDis"), 0);
desc1.putInteger(cTID("PerV"), 0);
desc1.putInteger(cTID("PerH"), 0);
desc1.putDouble(cTID("PerR"), 0);
desc1.putInteger(cTID("PerS"), 100);
desc1.putInteger(cTID("PerA"), 0);
desc1.putInteger(cTID("PerU"), 0);
desc1.putInteger(cTID("AuCA"), 0);
desc1.putDouble(cTID("Ex12"), 0);
desc1.putInteger(cTID("Cr12"), 0);
desc1.putInteger(cTID("Hi12"), 0);
desc1.putInteger(cTID("Sh12"), 0);
desc1.putInteger(cTID("Wh12"), 0);
desc1.putInteger(cTID("Bk12"), 0);
desc1.putInteger(cTID("Cl12"), 0);
desc1.putInteger(cTID("DfPA"), 0);
desc1.putInteger(cTID("DPHL"), 30);
desc1.putInteger(cTID("DPHH"), 70);
desc1.putInteger(cTID("DfGA"), 0);
desc1.putInteger(cTID("DPGL"), 40);
desc1.putInteger(cTID("DPGH"), 60);
var list1 = new ActionList();
list1.putInteger(0);
list1.putInteger(0);
list1.putInteger(255);
list1.putInteger(255);
desc1.putList(cTID("Crv "), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(0);
list2.putInteger(255);
list2.putInteger(255);
desc1.putList(cTID("CrvR"), list2);
var list3 = new ActionList();
list3.putInteger(0);
list3.putInteger(0);
list3.putInteger(255);
list3.putInteger(255);
desc1.putList(cTID("CrvG"), list3);
var list4 = new ActionList();
list4.putInteger(0);
list4.putInteger(0);
list4.putInteger(255);
list4.putInteger(255);
desc1.putList(cTID("CrvB"), list4);
desc1.putString(cTID("CamP"), "Embedded");
desc1.putString(cTID("CP_D"), "54650A341B5B5CCAE8442D0B43A92BCE");
desc1.putInteger(cTID("PrVe"), 101122048);
desc1.putString(cTID("Rtch"), "");
desc1.putString(cTID("REye"), "");
desc1.putString(cTID("LCs "), "");
desc1.putString(cTID("Upri"), "");
executeAction(sTID("Adobe Camera Raw Filter"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
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
desc3.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Rds "));
desc3.putUnitDouble(cTID("Cyn "), cTID("#Prc"), -23);
desc3.putUnitDouble(cTID("Mgnt"), cTID("#Prc"), -18);
list1.putObject(cTID("ClrC"), desc3);
desc2.putList(cTID("ClrC"), list1);
desc1.putObject(cTID("T   "), cTID("SlcC"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyEvent"), undefined, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -5);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(97);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
desc1.putClass(cTID("As  "), cTID("Pxel"));
executeAction(sTID("paste"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u00f4ng h\u1ed3ng t\u01b0\u01a1i");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(97);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(101);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
}

function QXJS() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "ZHA");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "ZHA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(27);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
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
desc3.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Rds "));
desc3.putUnitDouble(cTID("Cyn "), cTID("#Prc"), -54);
desc3.putUnitDouble(cTID("Mgnt"), cTID("#Prc"), -13);
desc3.putUnitDouble(cTID("Ylw "), cTID("#Prc"), -21);
list1.putObject(cTID("ClrC"), desc3);
var desc4 = new ActionDescriptor();
desc4.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Mgnt"));
desc4.putUnitDouble(cTID("Cyn "), cTID("#Prc"), -21);
list1.putObject(cTID("ClrC"), desc4);
desc2.putList(cTID("ClrC"), list1);
desc1.putObject(cTID("T   "), cTID("SlcC"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putString(cTID("CMod"), "Filter");
desc1.putEnumerated(cTID("Sett"), cTID("Sett"), cTID("Cst "));
desc1.putEnumerated(cTID("WBal"), cTID("WBal"), cTID("Cst "));
desc1.putInteger(cTID("Temp"), -14);
desc1.putInteger(cTID("Tint"), 0);
desc1.putInteger(cTID("AWBV"), 134348800);
desc1.putBoolean(cTID("CtoG"), false);
desc1.putInteger(cTID("Strt"), 0);
desc1.putInteger(cTID("Shrp"), 0);
desc1.putInteger(cTID("LNR "), 0);
desc1.putInteger(cTID("CNR "), 0);
desc1.putInteger(cTID("VigA"), 0);
desc1.putInteger(cTID("BlkB"), 0);
desc1.putInteger(cTID("RHue"), 0);
desc1.putInteger(cTID("RSat"), 0);
desc1.putInteger(cTID("GHue"), 0);
desc1.putInteger(cTID("GSat"), 0);
desc1.putInteger(cTID("BHue"), 0);
desc1.putInteger(cTID("BSat"), 0);
desc1.putInteger(cTID("Vibr"), 38);
desc1.putInteger(cTID("HA_R"), 0);
desc1.putInteger(cTID("HA_O"), 0);
desc1.putInteger(cTID("HA_Y"), 0);
desc1.putInteger(cTID("HA_G"), 0);
desc1.putInteger(cTID("HA_A"), 0);
desc1.putInteger(cTID("HA_B"), 0);
desc1.putInteger(cTID("HA_P"), 0);
desc1.putInteger(cTID("HA_M"), 0);
desc1.putInteger(cTID("SA_R"), -2);
desc1.putInteger(cTID("SA_O"), -8);
desc1.putInteger(cTID("SA_Y"), -48);
desc1.putInteger(cTID("SA_G"), -46);
desc1.putInteger(cTID("SA_A"), 0);
desc1.putInteger(cTID("SA_B"), 0);
desc1.putInteger(cTID("SA_P"), 0);
desc1.putInteger(cTID("SA_M"), 0);
desc1.putInteger(cTID("LA_R"), 4);
desc1.putInteger(cTID("LA_O"), 24);
desc1.putInteger(cTID("LA_Y"), 0);
desc1.putInteger(cTID("LA_G"), 0);
desc1.putInteger(cTID("LA_A"), 0);
desc1.putInteger(cTID("LA_B"), 0);
desc1.putInteger(cTID("LA_P"), 0);
desc1.putInteger(cTID("LA_M"), 0);
desc1.putInteger(cTID("STSH"), 150);
desc1.putInteger(cTID("STSS"), 10);
desc1.putInteger(cTID("STHH"), 42);
desc1.putInteger(cTID("STHS"), 17);
desc1.putInteger(cTID("STB "), 0);
desc1.putInteger(cTID("PC_S"), 0);
desc1.putInteger(cTID("PC_D"), 0);
desc1.putInteger(cTID("PC_L"), 0);
desc1.putInteger(cTID("PC_H"), 0);
desc1.putInteger(cTID("PC_1"), 25);
desc1.putInteger(cTID("PC_2"), 50);
desc1.putInteger(cTID("PC_3"), 75);
desc1.putDouble(cTID("ShpR"), 1);
desc1.putInteger(cTID("ShpD"), 25);
desc1.putInteger(cTID("ShpM"), 0);
desc1.putInteger(cTID("PCVA"), 0);
desc1.putInteger(cTID("GRNA"), 0);
desc1.putInteger(cTID("LPEn"), 0);
desc1.putInteger(cTID("MDis"), 0);
desc1.putInteger(cTID("PerV"), 0);
desc1.putInteger(cTID("PerH"), 0);
desc1.putDouble(cTID("PerR"), 0);
desc1.putInteger(cTID("PerS"), 100);
desc1.putInteger(cTID("PerA"), 0);
desc1.putInteger(cTID("PerU"), 0);
desc1.putInteger(cTID("AuCA"), 0);
desc1.putDouble(cTID("Ex12"), 0.6);
desc1.putInteger(cTID("Cr12"), 18);
desc1.putInteger(cTID("Hi12"), 0);
desc1.putInteger(cTID("Sh12"), 0);
desc1.putInteger(cTID("Wh12"), 0);
desc1.putInteger(cTID("Bk12"), 0);
desc1.putInteger(cTID("Cl12"), 0);
desc1.putInteger(cTID("DfPA"), 0);
desc1.putInteger(cTID("DPHL"), 30);
desc1.putInteger(cTID("DPHH"), 70);
desc1.putInteger(cTID("DfGA"), 0);
desc1.putInteger(cTID("DPGL"), 40);
desc1.putInteger(cTID("DPGH"), 60);
var list1 = new ActionList();
list1.putInteger(0);
list1.putInteger(0);
list1.putInteger(255);
list1.putInteger(255);
desc1.putList(cTID("Crv "), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(12);
list2.putInteger(255);
list2.putInteger(245);
desc1.putList(cTID("CrvR"), list2);
var list3 = new ActionList();
list3.putInteger(0);
list3.putInteger(0);
list3.putInteger(255);
list3.putInteger(255);
desc1.putList(cTID("CrvG"), list3);
var list4 = new ActionList();
list4.putInteger(0);
list4.putInteger(0);
list4.putInteger(184);
list4.putInteger(192);
list4.putInteger(255);
list4.putInteger(255);
desc1.putList(cTID("CrvB"), list4);
desc1.putString(cTID("CamP"), "Embedded");
desc1.putString(cTID("CP_D"), "54650A341B5B5CCAE8442D0B43A92BCE");
desc1.putInteger(cTID("PrVe"), 101122048);
desc1.putString(cTID("Rtch"), "");
desc1.putString(cTID("REye"), "");
desc1.putString(cTID("LCs "), "");
desc1.putString(cTID("Upri"), "");
executeAction(sTID("Adobe Camera Raw Filter"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
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
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Rd  "), 0);
desc4.putDouble(cTID("Grn "), 0);
desc4.putDouble(cTID("Bl  "), 51.0031127929688);
desc3.putObject(cTID("Clr "), sTID("RGBColor"), desc4);
desc2.putObject(cTID("Type"), sTID("solidColorLayer"), desc3);
desc1.putObject(cTID("Usng"), sTID("contentLayer"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Xclu"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 20);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
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
desc3.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Bls "));
desc3.putUnitDouble(cTID("Mgnt"), cTID("#Prc"), -1);
desc3.putUnitDouble(cTID("Ylw "), cTID("#Prc"), 62);
desc3.putUnitDouble(cTID("Blck"), cTID("#Prc"), 39);
list1.putObject(cTID("ClrC"), desc3);
desc2.putList(cTID("ClrC"), list1);
desc1.putObject(cTID("T   "), cTID("SlcC"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step32(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Rd  "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
var list1 = new ActionList();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
desc2.putReference(cTID("Chnl"), ref1);
var list2 = new ActionList();
var desc3 = new ActionDescriptor();
desc3.putDouble(cTID("Hrzn"), 0);
desc3.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc3);
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Hrzn"), 200);
desc4.putDouble(cTID("Vrtc"), 209);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 255);
desc5.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc5);
desc2.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc2);
desc1.putList(cTID("Adjs"), list1);
executeAction(sTID("curves"), desc1, dialogMode);
}

function step35(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyEvent"), undefined, dialogMode);
}

function step38(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -16);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step39(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(485);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step40(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
desc1.putClass(cTID("As  "), cTID("Pxel"));
executeAction(sTID("paste"), desc1, dialogMode);
}

function step41(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u00f4ng H\u00e0n t\u01b0\u01a1i");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step42(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(485);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step43(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(485);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
step41();
step42();
step43();
}

function JSZX() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "ZHA");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "ZHA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(27);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putString(cTID("CMod"), "Filter");
desc1.putEnumerated(cTID("Sett"), cTID("Sett"), cTID("Cst "));
desc1.putEnumerated(cTID("WBal"), cTID("WBal"), cTID("Cst "));
desc1.putInteger(cTID("Temp"), -23);
desc1.putInteger(cTID("Tint"), -8);
desc1.putInteger(cTID("AWBV"), 134348800);
desc1.putBoolean(cTID("CtoG"), false);
desc1.putInteger(cTID("Strt"), -21);
desc1.putInteger(cTID("Shrp"), 0);
desc1.putInteger(cTID("LNR "), 0);
desc1.putInteger(cTID("CNR "), 0);
desc1.putInteger(cTID("VigA"), 0);
desc1.putInteger(cTID("BlkB"), 0);
desc1.putInteger(cTID("RHue"), 0);
desc1.putInteger(cTID("RSat"), 0);
desc1.putInteger(cTID("GHue"), 0);
desc1.putInteger(cTID("GSat"), 0);
desc1.putInteger(cTID("BHue"), 0);
desc1.putInteger(cTID("BSat"), 0);
desc1.putInteger(cTID("Vibr"), 0);
desc1.putInteger(cTID("HA_R"), 0);
desc1.putInteger(cTID("HA_O"), 0);
desc1.putInteger(cTID("HA_Y"), 0);
desc1.putInteger(cTID("HA_G"), 0);
desc1.putInteger(cTID("HA_A"), 0);
desc1.putInteger(cTID("HA_B"), 0);
desc1.putInteger(cTID("HA_P"), 0);
desc1.putInteger(cTID("HA_M"), 0);
desc1.putInteger(cTID("SA_R"), 0);
desc1.putInteger(cTID("SA_O"), 24);
desc1.putInteger(cTID("SA_Y"), 0);
desc1.putInteger(cTID("SA_G"), 0);
desc1.putInteger(cTID("SA_A"), 0);
desc1.putInteger(cTID("SA_B"), 0);
desc1.putInteger(cTID("SA_P"), 0);
desc1.putInteger(cTID("SA_M"), 0);
desc1.putInteger(cTID("LA_R"), 0);
desc1.putInteger(cTID("LA_O"), 13);
desc1.putInteger(cTID("LA_Y"), 0);
desc1.putInteger(cTID("LA_G"), 0);
desc1.putInteger(cTID("LA_A"), 0);
desc1.putInteger(cTID("LA_B"), 0);
desc1.putInteger(cTID("LA_P"), 0);
desc1.putInteger(cTID("LA_M"), 0);
desc1.putInteger(cTID("STSH"), 303);
desc1.putInteger(cTID("STSS"), 24);
desc1.putInteger(cTID("STHH"), 182);
desc1.putInteger(cTID("STHS"), 0);
desc1.putInteger(cTID("STB "), 63);
desc1.putInteger(cTID("PC_S"), 0);
desc1.putInteger(cTID("PC_D"), 0);
desc1.putInteger(cTID("PC_L"), 0);
desc1.putInteger(cTID("PC_H"), 0);
desc1.putInteger(cTID("PC_1"), 25);
desc1.putInteger(cTID("PC_2"), 50);
desc1.putInteger(cTID("PC_3"), 75);
desc1.putDouble(cTID("ShpR"), 1);
desc1.putInteger(cTID("ShpD"), 25);
desc1.putInteger(cTID("ShpM"), 0);
desc1.putInteger(cTID("PCVA"), 0);
desc1.putInteger(cTID("GRNA"), 0);
desc1.putInteger(cTID("LPEn"), 0);
desc1.putInteger(cTID("MDis"), 0);
desc1.putInteger(cTID("PerV"), 0);
desc1.putInteger(cTID("PerH"), 0);
desc1.putDouble(cTID("PerR"), 0);
desc1.putInteger(cTID("PerS"), 100);
desc1.putInteger(cTID("PerA"), 0);
desc1.putInteger(cTID("PerU"), 0);
desc1.putInteger(cTID("AuCA"), 0);
desc1.putDouble(cTID("Ex12"), 0);
desc1.putInteger(cTID("Cr12"), 23);
desc1.putInteger(cTID("Hi12"), 0);
desc1.putInteger(cTID("Sh12"), 38);
desc1.putInteger(cTID("Wh12"), 0);
desc1.putInteger(cTID("Bk12"), 0);
desc1.putInteger(cTID("Cl12"), 0);
desc1.putInteger(cTID("DfPA"), 0);
desc1.putInteger(cTID("DPHL"), 30);
desc1.putInteger(cTID("DPHH"), 70);
desc1.putInteger(cTID("DfGA"), 0);
desc1.putInteger(cTID("DPGL"), 40);
desc1.putInteger(cTID("DPGH"), 60);
var list1 = new ActionList();
list1.putInteger(0);
list1.putInteger(0);
list1.putInteger(46);
list1.putInteger(48);
list1.putInteger(230);
list1.putInteger(255);
desc1.putList(cTID("Crv "), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(10);
list2.putInteger(255);
list2.putInteger(255);
desc1.putList(cTID("CrvR"), list2);
var list3 = new ActionList();
list3.putInteger(0);
list3.putInteger(0);
list3.putInteger(255);
list3.putInteger(255);
desc1.putList(cTID("CrvG"), list3);
var list4 = new ActionList();
list4.putInteger(0);
list4.putInteger(0);
list4.putInteger(255);
list4.putInteger(255);
desc1.putList(cTID("CrvB"), list4);
desc1.putString(cTID("CamP"), "Embedded");
desc1.putString(cTID("CP_D"), "54650A341B5B5CCAE8442D0B43A92BCE");
desc1.putInteger(cTID("PrVe"), 101122048);
desc1.putString(cTID("Rtch"), "");
desc1.putString(cTID("REye"), "");
desc1.putString(cTID("LCs "), "");
desc1.putString(cTID("Upri"), "");
executeAction(sTID("Adobe Camera Raw Filter"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Rd  "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("inverse"), undefined, dialogMode);
}

function step24(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
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
desc3.putUnitDouble(cTID("Ylw "), cTID("#Prc"), 19);
desc3.putUnitDouble(cTID("Blck"), cTID("#Prc"), 8);
list1.putObject(cTID("ClrC"), desc3);
desc2.putList(cTID("ClrC"), list1);
desc1.putObject(cTID("T   "), cTID("SlcC"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
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
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Rd  "));
desc3.putReference(cTID("Chnl"), ref2);
var list2 = new ActionList();
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Hrzn"), 0);
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 255);
desc5.putDouble(cTID("Vrtc"), 238);
list2.putObject(cTID("Pnt "), desc5);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
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
desc3.putInteger(cTID("LclR"), 1);
desc3.putInteger(cTID("BgnR"), 315);
desc3.putInteger(cTID("BgnS"), 345);
desc3.putInteger(cTID("EndS"), 15);
desc3.putInteger(cTID("EndR"), 45);
desc3.putInteger(cTID("H   "), 12);
desc3.putInteger(cTID("Strt"), -9);
desc3.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
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
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 171);
desc5.putDouble(cTID("Vrtc"), 155);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
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
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Rd  "), 124.000000208616);
desc4.putDouble(cTID("Grn "), 0);
desc4.putDouble(cTID("Bl  "), 0);
desc3.putObject(cTID("Clr "), sTID("RGBColor"), desc4);
desc2.putObject(cTID("Type"), sTID("solidColorLayer"), desc3);
desc1.putObject(cTID("Usng"), sTID("contentLayer"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Xclu"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step35(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 10);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
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
desc3.putDouble(cTID("Exps"), 0);
desc3.putDouble(cTID("Ofst"), 0);
desc3.putDouble(sTID("gammaCorrection"), 1);
desc2.putObject(cTID("Type"), cTID("Exps"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
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
desc2.putDouble(cTID("Ofst"), 0.01240000035614);
desc2.putDouble(sTID("gammaCorrection"), 0.86000001430511);
desc1.putObject(cTID("T   "), cTID("Exps"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step38(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Rd  "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step39(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step40(enabled, withDialog) {
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
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 121);
desc5.putDouble(cTID("Vrtc"), 118);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
var desc7 = new ActionDescriptor();
var ref3 = new ActionReference();
ref3.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Bl  "));
desc7.putReference(cTID("Chnl"), ref3);
var list3 = new ActionList();
var desc8 = new ActionDescriptor();
desc8.putDouble(cTID("Hrzn"), 0);
desc8.putDouble(cTID("Vrtc"), 0);
list3.putObject(cTID("Pnt "), desc8);
var desc9 = new ActionDescriptor();
desc9.putDouble(cTID("Hrzn"), 255);
desc9.putDouble(cTID("Vrtc"), 249);
list3.putObject(cTID("Pnt "), desc9);
desc7.putList(cTID("Crv "), list3);
list1.putObject(cTID("CrvA"), desc7);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step41(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step42(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
desc3.putInteger(cTID("LclR"), 2);
desc3.putInteger(cTID("BgnR"), 15);
desc3.putInteger(cTID("BgnS"), 45);
desc3.putInteger(cTID("EndS"), 75);
desc3.putInteger(cTID("EndR"), 105);
desc3.putInteger(cTID("H   "), -13);
desc3.putInteger(cTID("Strt"), -35);
desc3.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step43(enabled, withDialog) {
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
var desc4 = new ActionDescriptor();
desc4.putString(cTID("Nm  "), "Chuy\u1ec3n m\u00e0u ti\u1ec1n c\u1ea3nh sang h\u1eadu c\u1ea3nh");
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
desc8.putDouble(cTID("Rd  "), 255);
desc8.putDouble(cTID("Grn "), 255);
desc8.putDouble(cTID("Bl  "), 255);
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
desc10.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc10.putInteger(cTID("Lctn"), 4096);
desc10.putInteger(cTID("Mdpn"), 50);
list2.putObject(cTID("TrnS"), desc10);
desc4.putList(cTID("Trns"), list2);
desc3.putObject(cTID("Grad"), cTID("Grdn"), desc4);
desc2.putObject(cTID("Type"), cTID("GdMp"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step44(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Lmns"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step45(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 10);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step46(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Hue/Saturation 2");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step47(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 40);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step48(enabled, withDialog) {
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
executeAction(sTID("set"), desc1, dialogMode);
}

function step49(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 56);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step50(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 66);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step51(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step52(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step53(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyEvent"), undefined, dialogMode);
}

function step54(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -31);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step55(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(504);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step56(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
desc1.putClass(cTID("As  "), cTID("Pxel"));
executeAction(sTID("paste"), desc1, dialogMode);
}

function step57(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u01b0\u01a1ng ph\u1ea3n th\u1ef1c t\u1ebf");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step58(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(504);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step59(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(504);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
step41();
step42();
step43();
step44();
step45();
step46();
step47();
step48();
step49();
step50();
step51();
step52();
step53();
step54();
step55();
step56();
step57();
step58();
step59();
}

function JSHB() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "ZHA");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "ZHA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(27);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
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
desc3.putInteger(cTID("Rd  "), 40);
desc3.putInteger(cTID("Yllw"), 60);
desc3.putInteger(cTID("Grn "), 40);
desc3.putInteger(cTID("Cyn "), 60);
desc3.putInteger(cTID("Bl  "), 20);
desc3.putInteger(cTID("Mgnt"), 80);
desc3.putBoolean(sTID("useTint"), false);
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Rd  "), 225.000457763672);
desc4.putDouble(cTID("Grn "), 211.000671386719);
desc4.putDouble(cTID("Bl  "), 179.001159667969);
desc3.putObject(sTID("tintColor"), sTID("RGBColor"), desc4);
desc2.putObject(cTID("Type"), cTID("BanW"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putInteger(cTID("Rd  "), 15);
desc1.putObject(cTID("T   "), cTID("BanW"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
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
desc3.putBoolean(sTID("useLegacy"), false);
desc2.putObject(cTID("Type"), cTID("BrgC"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putInteger(cTID("Brgh"), 24);
desc2.putInteger(cTID("Cntr"), 34);
desc2.putBoolean(sTID("useLegacy"), false);
desc1.putObject(cTID("T   "), cTID("BrgC"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
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
var list1 = new ActionList();
list1.putInteger(0);
list1.putInteger(0);
list1.putInteger(0);
desc3.putList(cTID("ShdL"), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(0);
list2.putInteger(0);
desc3.putList(cTID("MdtL"), list2);
var list3 = new ActionList();
list3.putInteger(0);
list3.putInteger(0);
list3.putInteger(0);
desc3.putList(cTID("HghL"), list3);
desc3.putBoolean(cTID("PrsL"), true);
desc2.putObject(cTID("Type"), cTID("ClrB"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
list1.putInteger(2);
list1.putInteger(-17);
list1.putInteger(-22);
desc2.putList(cTID("MdtL"), list1);
desc1.putObject(cTID("T   "), cTID("ClrB"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
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
desc3.putDouble(cTID("Exps"), 0);
desc3.putDouble(cTID("Ofst"), 0);
desc3.putDouble(sTID("gammaCorrection"), 1);
desc2.putObject(cTID("Type"), cTID("Exps"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
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
desc2.putDouble(cTID("Ofst"), 0.0207000002265);
desc2.putDouble(sTID("gammaCorrection"), 0.83999997377396);
desc1.putObject(cTID("T   "), cTID("Exps"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
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
executeAction(sTID("set"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 8.4);
executeAction(sTID("highPass"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("desaturate"), undefined, dialogMode);
}

function step33(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
var list1 = new ActionList();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
desc2.putReference(cTID("Chnl"), ref1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(221);
desc2.putList(cTID("Inpt"), list2);
list1.putObject(cTID("LvlA"), desc2);
desc1.putList(cTID("Adjs"), list1);
executeAction(sTID("levels"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 30);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step35(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Rd  "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("inverse"), undefined, dialogMode);
}

function step37(enabled, withDialog) {
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
desc3.putDouble(cTID("Exps"), 0);
desc3.putDouble(cTID("Ofst"), 0);
desc3.putDouble(sTID("gammaCorrection"), 1);
desc2.putObject(cTID("Type"), cTID("Exps"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step38(enabled, withDialog) {
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
desc2.putDouble(cTID("Ofst"), 0.02889999933541);
desc2.putDouble(sTID("gammaCorrection"), 0.88999998569489);
desc1.putObject(cTID("T   "), cTID("Exps"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step39(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step40(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step41(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyEvent"), undefined, dialogMode);
}

function step42(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -20);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step43(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(227);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step44(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
desc1.putClass(cTID("As  "), cTID("Pxel"));
executeAction(sTID("paste"), desc1, dialogMode);
}

function step45(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "\u0110en tr\u1eafng");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step46(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(227);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step47(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(227);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
step41();
step42();
step43();
step44();
step45();
step46();
step47();
}

function MHFD() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "ZHA");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "ZHA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(27);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Grn "));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Mrgd"));
desc2.putReference(cTID("T   "), ref1);
desc2.putEnumerated(cTID("Clcl"), cTID("Clcn"), cTID("SftL"));
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 30);
desc2.putBoolean(cTID("PrsT"), true);
desc1.putObject(cTID("With"), cTID("Clcl"), desc2);
executeAction(sTID("applyImageEvent"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
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
var desc4 = new ActionDescriptor();
desc4.putString(cTID("Nm  "), "Chuy\u1ec3n m\u00e0u ti\u1ec1n c\u1ea3nh sang h\u1eadu c\u1ea3nh");
desc4.putEnumerated(cTID("GrdF"), cTID("GrdF"), cTID("CstS"));
desc4.putDouble(cTID("Intr"), 4096);
var list1 = new ActionList();
var desc5 = new ActionDescriptor();
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Rd  "), 95.0038929283619);
desc6.putDouble(cTID("Grn "), 122.000000327826);
desc6.putDouble(cTID("Bl  "), 62.0000001043081);
desc5.putObject(cTID("Clr "), sTID("RGBColor"), desc6);
desc5.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
desc5.putInteger(cTID("Lctn"), 0);
desc5.putInteger(cTID("Mdpn"), 50);
list1.putObject(cTID("Clrt"), desc5);
var desc7 = new ActionDescriptor();
var desc8 = new ActionDescriptor();
desc8.putDouble(cTID("Rd  "), 255);
desc8.putDouble(cTID("Grn "), 255);
desc8.putDouble(cTID("Bl  "), 255);
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
desc10.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc10.putInteger(cTID("Lctn"), 4096);
desc10.putInteger(cTID("Mdpn"), 50);
list2.putObject(cTID("TrnS"), desc10);
desc4.putList(cTID("Trns"), list2);
desc3.putObject(cTID("Grad"), cTID("Grdn"), desc4);
desc2.putObject(cTID("Type"), cTID("GdMp"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var desc3 = new ActionDescriptor();
desc3.putString(cTID("Nm  "), "$$$/DefaultGradient/BlackWhite=Black, White");
desc3.putEnumerated(cTID("GrdF"), cTID("GrdF"), cTID("CstS"));
desc3.putDouble(cTID("Intr"), 4096);
var list1 = new ActionList();
var desc4 = new ActionDescriptor();
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Rd  "), 3.47736583091319);
desc5.putDouble(cTID("Grn "), 0);
desc5.putDouble(cTID("Bl  "), 0.0787217488687);
desc4.putObject(cTID("Clr "), sTID("RGBColor"), desc5);
desc4.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
desc4.putInteger(cTID("Lctn"), 0);
desc4.putInteger(cTID("Mdpn"), 50);
list1.putObject(cTID("Clrt"), desc4);
var desc6 = new ActionDescriptor();
var desc7 = new ActionDescriptor();
desc7.putDouble(cTID("Rd  "), 255);
desc7.putDouble(cTID("Grn "), 255);
desc7.putDouble(cTID("Bl  "), 255);
desc6.putObject(cTID("Clr "), sTID("RGBColor"), desc7);
desc6.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
desc6.putInteger(cTID("Lctn"), 4096);
desc6.putInteger(cTID("Mdpn"), 50);
list1.putObject(cTID("Clrt"), desc6);
desc3.putList(cTID("Clrs"), list1);
var list2 = new ActionList();
var desc8 = new ActionDescriptor();
desc8.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc8.putInteger(cTID("Lctn"), 0);
desc8.putInteger(cTID("Mdpn"), 50);
list2.putObject(cTID("TrnS"), desc8);
var desc9 = new ActionDescriptor();
desc9.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc9.putInteger(cTID("Lctn"), 4096);
desc9.putInteger(cTID("Mdpn"), 50);
list2.putObject(cTID("TrnS"), desc9);
desc3.putList(cTID("Trns"), list2);
desc2.putObject(cTID("Grad"), cTID("Grdn"), desc3);
desc1.putObject(cTID("T   "), cTID("GdMp"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Lmns"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
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
desc3.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Rds "));
desc3.putUnitDouble(cTID("Cyn "), cTID("#Prc"), -40);
desc3.putUnitDouble(cTID("Mgnt"), cTID("#Prc"), -5);
desc3.putUnitDouble(cTID("Ylw "), cTID("#Prc"), -13);
list1.putObject(cTID("ClrC"), desc3);
var desc4 = new ActionDescriptor();
desc4.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Ylws"));
desc4.putUnitDouble(cTID("Cyn "), cTID("#Prc"), -18);
desc4.putUnitDouble(cTID("Mgnt"), cTID("#Prc"), -8);
desc4.putUnitDouble(cTID("Blck"), cTID("#Prc"), -27);
list1.putObject(cTID("ClrC"), desc4);
var desc5 = new ActionDescriptor();
desc5.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Blks"));
desc5.putUnitDouble(cTID("Cyn "), cTID("#Prc"), -1);
desc5.putUnitDouble(cTID("Mgnt"), cTID("#Prc"), 11);
list1.putObject(cTID("ClrC"), desc5);
desc2.putList(cTID("ClrC"), list1);
desc1.putObject(cTID("T   "), cTID("SlcC"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
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
desc4.putDouble(cTID("Hrzn"), 11);
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 199);
desc5.putDouble(cTID("Vrtc"), 191);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
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
desc3.putInteger(cTID("LclR"), 2);
desc3.putInteger(cTID("BgnR"), 15);
desc3.putInteger(cTID("BgnS"), 45);
desc3.putInteger(cTID("EndS"), 75);
desc3.putInteger(cTID("EndR"), 105);
desc3.putInteger(cTID("H   "), 0);
desc3.putInteger(cTID("Strt"), -2);
desc3.putInteger(cTID("Lght"), 27);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step35(enabled, withDialog) {
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
desc3.putUnitDouble(cTID("Angl"), cTID("#Ang"), 90);
desc3.putEnumerated(cTID("Type"), cTID("GrdT"), cTID("Lnr "));
var desc4 = new ActionDescriptor();
desc4.putString(cTID("Nm  "), "T\u00f9y ch\u1ec9nh");
desc4.putEnumerated(cTID("GrdF"), cTID("GrdF"), cTID("CstS"));
desc4.putDouble(cTID("Intr"), 4096);
var list1 = new ActionList();
var desc5 = new ActionDescriptor();
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Rd  "), 255);
desc6.putDouble(cTID("Grn "), 239.000000953674);
desc6.putDouble(cTID("Bl  "), 248.789886832237);
desc5.putObject(cTID("Clr "), sTID("RGBColor"), desc6);
desc5.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
desc5.putInteger(cTID("Lctn"), 0);
desc5.putInteger(cTID("Mdpn"), 50);
list1.putObject(cTID("Clrt"), desc5);
var desc7 = new ActionDescriptor();
var desc8 = new ActionDescriptor();
desc8.putDouble(cTID("Rd  "), 254.178985655308);
desc8.putDouble(cTID("Grn "), 245.000000596046);
desc8.putDouble(cTID("Bl  "), 255);
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(sTID("fillOpacity"), cTID("#Prc"), 51);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
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
desc3.putBoolean(sTID("useLegacy"), false);
desc2.putObject(cTID("Type"), cTID("BrgC"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step38(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putInteger(cTID("Brgh"), 0);
desc2.putInteger(cTID("Cntr"), 39);
desc2.putBoolean(sTID("useLegacy"), false);
desc1.putObject(cTID("T   "), cTID("BrgC"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step39(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step40(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step41(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyEvent"), undefined, dialogMode);
}

function step42(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -18);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step43(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(318);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step44(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
desc1.putClass(cTID("As  "), cTID("Pxel"));
executeAction(sTID("paste"), desc1, dialogMode);
}

function step45(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u00f4ng h\u1ed3ng m\u01a1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step46(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(328);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step47(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(328);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
step41();
step42();
step43();
step44();
step45();
step46();
step47();
}

function HSRD() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "ZHA");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "ZHA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(27);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step22(enabled, withDialog) {
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
executeAction(sTID("set"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 100.6);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 70);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step26(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
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
desc3.putInteger(cTID("LclR"), 3);
desc3.putInteger(cTID("BgnR"), 330);
desc3.putInteger(cTID("BgnS"), 0);
desc3.putInteger(cTID("EndS"), 30);
desc3.putInteger(cTID("EndR"), 60);
desc3.putInteger(cTID("H   "), 1);
desc3.putInteger(cTID("Strt"), 0);
desc3.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step29(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Rd  "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
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
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Rd  "), 255);
desc4.putDouble(cTID("Grn "), 252.202331721783);
desc4.putDouble(cTID("Bl  "), 221.000002026558);
desc3.putObject(cTID("Clr "), sTID("RGBColor"), desc4);
desc2.putObject(cTID("Type"), sTID("solidColorLayer"), desc3);
desc1.putObject(cTID("Usng"), sTID("contentLayer"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
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
executeAction(sTID("set"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 30);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Grn "));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step35(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc2.putReference(cTID("T   "), ref1);
desc2.putEnumerated(cTID("Clcl"), cTID("Clcn"), cTID("SftL"));
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 50);
desc2.putBoolean(cTID("PrsT"), true);
desc1.putObject(cTID("With"), cTID("Clcl"), desc2);
executeAction(sTID("applyImageEvent"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step38(enabled, withDialog) {
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
desc3.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Rds "));
desc3.putUnitDouble(cTID("Cyn "), cTID("#Prc"), -12);
desc3.putUnitDouble(cTID("Mgnt"), cTID("#Prc"), -13);
list1.putObject(cTID("ClrC"), desc3);
var desc4 = new ActionDescriptor();
desc4.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Ylws"));
desc4.putUnitDouble(cTID("Mgnt"), cTID("#Prc"), -27);
desc4.putUnitDouble(cTID("Ylw "), cTID("#Prc"), -52);
list1.putObject(cTID("ClrC"), desc4);
desc2.putList(cTID("ClrC"), list1);
desc1.putObject(cTID("T   "), cTID("SlcC"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step39(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step40(enabled, withDialog) {
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
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 199);
desc5.putDouble(cTID("Vrtc"), 209);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step41(enabled, withDialog) {
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
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Lmnc"), 67.06);
desc4.putDouble(cTID("A   "), 32);
desc4.putDouble(cTID("B   "), 120);
desc3.putObject(cTID("Clr "), cTID("LbCl"), desc4);
desc3.putInteger(cTID("Dnst"), 25);
desc3.putBoolean(cTID("PrsL"), true);
desc2.putObject(cTID("Type"), sTID("photoFilter"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step42(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var desc3 = new ActionDescriptor();
desc3.putDouble(cTID("Lmnc"), 61);
desc3.putDouble(cTID("A   "), -59);
desc3.putDouble(cTID("B   "), -119);
desc2.putObject(cTID("Clr "), cTID("LbCl"), desc3);
desc1.putObject(cTID("T   "), sTID("photoFilter"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step43(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 20);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step44(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step45(enabled, withDialog) {
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
desc3.putInteger(cTID("LclR"), 1);
desc3.putInteger(cTID("BgnR"), 315);
desc3.putInteger(cTID("BgnS"), 345);
desc3.putInteger(cTID("EndS"), 15);
desc3.putInteger(cTID("EndR"), 45);
desc3.putInteger(cTID("H   "), 1);
desc3.putInteger(cTID("Strt"), -3);
desc3.putInteger(cTID("Lght"), -3);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step46(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
desc3.putInteger(cTID("LclR"), 2);
desc3.putInteger(cTID("BgnR"), 8);
desc3.putInteger(cTID("BgnS"), 38);
desc3.putInteger(cTID("EndS"), 68);
desc3.putInteger(cTID("EndR"), 98);
desc3.putInteger(cTID("H   "), 0);
desc3.putInteger(cTID("Strt"), -7);
desc3.putInteger(cTID("Lght"), 2);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step47(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step48(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step49(enabled, withDialog) {
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
desc3.putUnitDouble(cTID("Cyn "), cTID("#Prc"), 7);
desc3.putUnitDouble(cTID("Ylw "), cTID("#Prc"), 7);
list1.putObject(cTID("ClrC"), desc3);
desc2.putList(cTID("ClrC"), list1);
desc1.putObject(cTID("T   "), cTID("SlcC"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step50(enabled, withDialog) {
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
desc3.putDouble(cTID("Exps"), 0);
desc3.putDouble(cTID("Ofst"), 0);
desc3.putDouble(sTID("gammaCorrection"), 1);
desc2.putObject(cTID("Type"), cTID("Exps"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step51(enabled, withDialog) {
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
desc2.putDouble(cTID("Ofst"), 0.0207000002265);
desc2.putDouble(sTID("gammaCorrection"), 0.93000000715256);
desc1.putObject(cTID("T   "), cTID("Exps"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step52(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Hrzn"), cTID("#Rlt"), 0);
desc2.putUnitDouble(cTID("Vrtc"), cTID("#Rlt"), 2.26771653543307);
desc1.putObject(cTID("T   "), cTID("Ofst"), desc2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step53(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step54(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step55(enabled, withDialog) {
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
desc3.putInteger(cTID("LclR"), 1);
desc3.putInteger(cTID("BgnR"), 315);
desc3.putInteger(cTID("BgnS"), 345);
desc3.putInteger(cTID("EndS"), 15);
desc3.putInteger(cTID("EndR"), 45);
desc3.putInteger(cTID("H   "), 2);
desc3.putInteger(cTID("Strt"), -1);
desc3.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step56(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step57(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step58(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyEvent"), undefined, dialogMode);
}

function step59(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -35);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step60(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(446);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step61(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
desc1.putClass(cTID("As  "), cTID("Pxel"));
executeAction(sTID("paste"), desc1, dialogMode);
}

function step62(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u00f4ng H\u00e0n m\u1ec1m");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step63(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(446);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step64(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(446);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
step41();
step42();
step43();
step44();
step45();
step46();
step47();
step48();
step49();
step50();
step51();
step52();
step53();
step54();
step55();
step56();
step57();
step58();
step59();
step60();
step61();
step62();
step63();
step64();
}

function HSQD() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "ZHA");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "ZHA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(27);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
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
desc3.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Rds "));
desc3.putUnitDouble(cTID("Mgnt"), cTID("#Prc"), -12);
list1.putObject(cTID("ClrC"), desc3);
var desc4 = new ActionDescriptor();
desc4.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Ylws"));
desc4.putUnitDouble(cTID("Cyn "), cTID("#Prc"), -16);
desc4.putUnitDouble(cTID("Mgnt"), cTID("#Prc"), -7);
desc4.putUnitDouble(cTID("Blck"), cTID("#Prc"), -14);
list1.putObject(cTID("ClrC"), desc4);
desc2.putList(cTID("ClrC"), list1);
desc1.putObject(cTID("T   "), cTID("SlcC"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
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
var list1 = new ActionList();
list1.putInteger(0);
list1.putInteger(0);
list1.putInteger(0);
desc3.putList(cTID("ShdL"), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(0);
list2.putInteger(0);
desc3.putList(cTID("MdtL"), list2);
var list3 = new ActionList();
list3.putInteger(0);
list3.putInteger(0);
list3.putInteger(0);
desc3.putList(cTID("HghL"), list3);
desc3.putBoolean(cTID("PrsL"), true);
desc2.putObject(cTID("Type"), cTID("ClrB"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
list1.putInteger(-11);
list1.putInteger(0);
list1.putInteger(17);
desc2.putList(cTID("HghL"), list1);
desc1.putObject(cTID("T   "), cTID("ClrB"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("HrdL"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 20);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step29(enabled, withDialog) {
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
desc3.putDouble(cTID("Exps"), 0);
desc3.putDouble(cTID("Ofst"), 0);
desc3.putDouble(sTID("gammaCorrection"), 1);
desc2.putObject(cTID("Type"), cTID("Exps"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
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
desc2.putDouble(cTID("Ofst"), 0.02889999933541);
desc2.putDouble(sTID("gammaCorrection"), 0.77999997138977);
desc1.putObject(cTID("T   "), cTID("Exps"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
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
desc3.putInteger(cTID("LclR"), 1);
desc3.putInteger(cTID("BgnR"), 315);
desc3.putInteger(cTID("BgnS"), 345);
desc3.putInteger(cTID("EndS"), 15);
desc3.putInteger(cTID("EndR"), 45);
desc3.putInteger(cTID("H   "), 1);
desc3.putInteger(cTID("Strt"), -9);
desc3.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Rd  "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step35(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
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
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 199);
desc5.putDouble(cTID("Vrtc"), 214);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Rd  "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step38(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("inverse"), undefined, dialogMode);
}

function step39(enabled, withDialog) {
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
var list1 = new ActionList();
list1.putInteger(0);
list1.putInteger(0);
list1.putInteger(0);
desc3.putList(cTID("ShdL"), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(0);
list2.putInteger(0);
desc3.putList(cTID("MdtL"), list2);
var list3 = new ActionList();
list3.putInteger(0);
list3.putInteger(0);
list3.putInteger(0);
desc3.putList(cTID("HghL"), list3);
desc3.putBoolean(cTID("PrsL"), true);
desc2.putObject(cTID("Type"), cTID("ClrB"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step40(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
list1.putInteger(21);
list1.putInteger(-12);
list1.putInteger(0);
desc2.putList(cTID("ShdL"), list1);
var list2 = new ActionList();
list2.putInteger(-27);
list2.putInteger(0);
list2.putInteger(0);
desc2.putList(cTID("MdtL"), list2);
desc1.putObject(cTID("T   "), cTID("ClrB"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step41(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step42(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("magicStampTool"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step43(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("magicStampTool"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step44(enabled, withDialog) {
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
desc3.putDouble(cTID("Exps"), 0);
desc3.putDouble(cTID("Ofst"), 0);
desc3.putDouble(sTID("gammaCorrection"), 1);
desc2.putObject(cTID("Type"), cTID("Exps"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step45(enabled, withDialog) {
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
desc2.putDouble(cTID("Ofst"), 0.02480000071228);
desc2.putDouble(sTID("gammaCorrection"), 0.9200000166893);
desc1.putObject(cTID("T   "), cTID("Exps"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step46(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step47(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step48(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyEvent"), undefined, dialogMode);
}

function step49(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -25);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step50(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(29);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step51(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 38);
executeAction(sTID("make"), desc1, dialogMode);
}

function step52(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
desc1.putClass(cTID("As  "), cTID("Pxel"));
executeAction(sTID("paste"), desc1, dialogMode);
}

function step53(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Phong c\u00e1ch H\u00e0n");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step54(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(29);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step55(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(29);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
step41();
step42();
step43();
step44();
step45();
step46();
step47();
step48();
step49();
step50();
step51();
step52();
step53();
step54();
step55();
}

function JYRX() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "ZHA");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Frnt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "ZHA");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(26);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(27);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putString(cTID("CMod"), "Filter");
desc1.putEnumerated(cTID("Sett"), cTID("Sett"), cTID("Cst "));
desc1.putEnumerated(cTID("WBal"), cTID("WBal"), cTID("AsSh"));
desc1.putInteger(cTID("Temp"), 0);
desc1.putInteger(cTID("Tint"), 0);
desc1.putBoolean(cTID("CtoG"), false);
desc1.putInteger(cTID("Strt"), 0);
desc1.putInteger(cTID("Shrp"), 0);
desc1.putInteger(cTID("LNR "), 0);
desc1.putInteger(cTID("CNR "), 0);
desc1.putInteger(cTID("VigA"), 0);
desc1.putInteger(cTID("BlkB"), 0);
desc1.putInteger(cTID("RHue"), 0);
desc1.putInteger(cTID("RSat"), 0);
desc1.putInteger(cTID("GHue"), 0);
desc1.putInteger(cTID("GSat"), 0);
desc1.putInteger(cTID("BHue"), 0);
desc1.putInteger(cTID("BSat"), 0);
desc1.putInteger(cTID("Vibr"), 0);
desc1.putInteger(cTID("HA_R"), 0);
desc1.putInteger(cTID("HA_O"), -14);
desc1.putInteger(cTID("HA_Y"), 90);
desc1.putInteger(cTID("HA_G"), 38);
desc1.putInteger(cTID("HA_A"), 0);
desc1.putInteger(cTID("HA_B"), 0);
desc1.putInteger(cTID("HA_P"), 0);
desc1.putInteger(cTID("HA_M"), 0);
desc1.putInteger(cTID("SA_R"), 0);
desc1.putInteger(cTID("SA_O"), -25);
desc1.putInteger(cTID("SA_Y"), -69);
desc1.putInteger(cTID("SA_G"), -24);
desc1.putInteger(cTID("SA_A"), 0);
desc1.putInteger(cTID("SA_B"), 0);
desc1.putInteger(cTID("SA_P"), 0);
desc1.putInteger(cTID("SA_M"), 0);
desc1.putInteger(cTID("LA_R"), 0);
desc1.putInteger(cTID("LA_O"), 24);
desc1.putInteger(cTID("LA_Y"), 0);
desc1.putInteger(cTID("LA_G"), 0);
desc1.putInteger(cTID("LA_A"), 0);
desc1.putInteger(cTID("LA_B"), 0);
desc1.putInteger(cTID("LA_P"), 0);
desc1.putInteger(cTID("LA_M"), 0);
desc1.putInteger(cTID("STSH"), 0);
desc1.putInteger(cTID("STSS"), 0);
desc1.putInteger(cTID("STHH"), 0);
desc1.putInteger(cTID("STHS"), 0);
desc1.putInteger(cTID("STB "), 0);
desc1.putInteger(cTID("PC_S"), 0);
desc1.putInteger(cTID("PC_D"), 0);
desc1.putInteger(cTID("PC_L"), 0);
desc1.putInteger(cTID("PC_H"), 0);
desc1.putInteger(cTID("PC_1"), 25);
desc1.putInteger(cTID("PC_2"), 50);
desc1.putInteger(cTID("PC_3"), 75);
desc1.putDouble(cTID("ShpR"), 1);
desc1.putInteger(cTID("ShpD"), 25);
desc1.putInteger(cTID("ShpM"), 0);
desc1.putInteger(cTID("PCVA"), 0);
desc1.putInteger(cTID("GRNA"), 0);
desc1.putInteger(cTID("LPEn"), 0);
desc1.putInteger(cTID("MDis"), 0);
desc1.putInteger(cTID("PerV"), 0);
desc1.putInteger(cTID("PerH"), 0);
desc1.putDouble(cTID("PerR"), 0);
desc1.putInteger(cTID("PerS"), 100);
desc1.putInteger(cTID("PerA"), 0);
desc1.putInteger(cTID("PerU"), 0);
desc1.putDouble(cTID("PerX"), 0);
desc1.putDouble(cTID("PerY"), 0);
desc1.putInteger(cTID("AuCA"), 0);
desc1.putDouble(cTID("Ex12"), 0.15);
desc1.putInteger(cTID("Cr12"), 0);
desc1.putInteger(cTID("Hi12"), -78);
desc1.putInteger(cTID("Sh12"), 11);
desc1.putInteger(cTID("Wh12"), 17);
desc1.putInteger(cTID("Bk12"), 0);
desc1.putInteger(cTID("Cl12"), 0);
desc1.putInteger(cTID("DfPA"), 0);
desc1.putInteger(cTID("DPHL"), 30);
desc1.putInteger(cTID("DPHH"), 70);
desc1.putInteger(cTID("DfGA"), 0);
desc1.putInteger(cTID("DPGL"), 40);
desc1.putInteger(cTID("DPGH"), 60);
desc1.putInteger(cTID("Dhze"), 0);
var list1 = new ActionList();
list1.putInteger(0);
list1.putInteger(0);
list1.putInteger(52);
list1.putInteger(66);
list1.putInteger(170);
list1.putInteger(197);
list1.putInteger(255);
list1.putInteger(255);
desc1.putList(cTID("Crv "), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(3);
list2.putInteger(255);
list2.putInteger(244);
desc1.putList(cTID("CrvR"), list2);
var list3 = new ActionList();
list3.putInteger(0);
list3.putInteger(0);
list3.putInteger(255);
list3.putInteger(245);
desc1.putList(cTID("CrvG"), list3);
var list4 = new ActionList();
list4.putInteger(2);
list4.putInteger(37);
list4.putInteger(255);
list4.putInteger(255);
desc1.putList(cTID("CrvB"), list4);
desc1.putString(cTID("CamP"), "Embedded");
desc1.putString(cTID("CP_D"), "54650A341B5B5CCAE8442D0B43A92BCE");
desc1.putInteger(cTID("PrVe"), 167772160);
desc1.putString(cTID("Rtch"), "");
desc1.putString(cTID("REye"), "");
desc1.putString(cTID("LCs "), "");
desc1.putString(cTID("Upri"), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c128 79.159124, 2016/03/18-14:01:55        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightVersion=\"151388160\"\n   crs:UprightCenterMode=\"0\"\n   crs:UprightCenterNormX=\"0.5\"\n   crs:UprightCenterNormY=\"0.5\"\n   crs:UprightFocalMode=\"0\"\n   crs:UprightFocalLength35mm=\"35\"\n   crs:UprightPreview=\"False\"\n   crs:UprightTransformCount=\"6\"/>\n </rdf:RDF>\n</x:xmpmeta>\n");
desc1.putString(cTID("GuUr"), "<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c128 79.159124, 2016/03/18-14:01:55        \">\n <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n  <rdf:Description rdf:about=\"\"\n    xmlns:crs=\"http://ns.adobe.com/camera-raw-settings/1.0/\"\n   crs:UprightFourSegmentsCount=\"0\"/>\n </rdf:RDF>\n</x:xmpmeta>\n");
executeAction(sTID("Adobe Camera Raw Filter"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
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
desc3.putDouble(cTID("Exps"), 0);
desc3.putDouble(cTID("Ofst"), 0);
desc3.putDouble(sTID("gammaCorrection"), 1);
desc2.putObject(cTID("Type"), cTID("Exps"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
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
desc2.putDouble(cTID("Ofst"), 0.03310000151396);
desc2.putDouble(sTID("gammaCorrection"), 0.74000000953674);
desc1.putObject(cTID("T   "), cTID("Exps"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
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
desc3.putDouble(cTID("Exps"), 0);
desc3.putDouble(cTID("Ofst"), 0);
desc3.putDouble(sTID("gammaCorrection"), 1);
desc2.putObject(cTID("Type"), cTID("Exps"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
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
desc2.putDouble(cTID("Ofst"), 0.00829999987036);
desc2.putDouble(sTID("gammaCorrection"), 0.89999997615814);
desc1.putObject(cTID("T   "), cTID("Exps"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
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
var list1 = new ActionList();
list1.putInteger(0);
list1.putInteger(0);
list1.putInteger(0);
desc3.putList(cTID("ShdL"), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(0);
list2.putInteger(0);
desc3.putList(cTID("MdtL"), list2);
var list3 = new ActionList();
list3.putInteger(0);
list3.putInteger(0);
list3.putInteger(0);
desc3.putList(cTID("HghL"), list3);
desc3.putBoolean(cTID("PrsL"), true);
desc2.putObject(cTID("Type"), cTID("ClrB"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
list1.putInteger(6);
list1.putInteger(0);
list1.putInteger(0);
desc2.putList(cTID("ShdL"), list1);
var list2 = new ActionList();
list2.putInteger(-7);
list2.putInteger(0);
list2.putInteger(0);
desc2.putList(cTID("HghL"), list2);
desc1.putObject(cTID("T   "), cTID("ClrB"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
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
desc3.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Rds "));
desc3.putUnitDouble(cTID("Cyn "), cTID("#Prc"), -20);
desc3.putUnitDouble(cTID("Mgnt"), cTID("#Prc"), -18);
desc3.putUnitDouble(cTID("Ylw "), cTID("#Prc"), -36);
desc3.putUnitDouble(cTID("Blck"), cTID("#Prc"), -44);
list1.putObject(cTID("ClrC"), desc3);
desc2.putList(cTID("ClrC"), list1);
desc1.putObject(cTID("T   "), cTID("SlcC"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
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
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 186);
desc5.putDouble(cTID("Vrtc"), 193);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("make"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Hrzn"), cTID("#Rlt"), 997.5);
desc2.putUnitDouble(cTID("Vrtc"), cTID("#Rlt"), 528.6);
desc1.putObject(cTID("From"), cTID("Pnt "), desc2);
var desc3 = new ActionDescriptor();
desc3.putUnitDouble(cTID("Hrzn"), cTID("#Rlt"), 1043.1);
desc3.putUnitDouble(cTID("Vrtc"), cTID("#Rlt"), 415.8);
desc1.putObject(cTID("T   "), cTID("Pnt "), desc3);
desc1.putEnumerated(cTID("Type"), cTID("GrdT"), cTID("Rdl "));
desc1.putBoolean(cTID("Dthr"), true);
desc1.putBoolean(cTID("UsMs"), true);
var desc4 = new ActionDescriptor();
desc4.putString(cTID("Nm  "), "T\u00f9y ch\u1ec9nh");
desc4.putEnumerated(cTID("GrdF"), cTID("GrdF"), cTID("CstS"));
desc4.putDouble(cTID("Intr"), 4096);
var list1 = new ActionList();
var desc5 = new ActionDescriptor();
var desc6 = new ActionDescriptor();
desc6.putUnitDouble(cTID("H   "), cTID("#Ang"), 31.058349609375);
desc6.putDouble(cTID("Strt"), 100);
desc6.putDouble(cTID("Brgh"), 100);
desc5.putObject(cTID("Clr "), cTID("HSBC"), desc6);
desc5.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
desc5.putInteger(cTID("Lctn"), 0);
desc5.putInteger(cTID("Mdpn"), 50);
list1.putObject(cTID("Clrt"), desc5);
var desc7 = new ActionDescriptor();
var desc8 = new ActionDescriptor();
desc8.putUnitDouble(cTID("H   "), cTID("#Ang"), 57.8814697265625);
desc8.putDouble(cTID("Strt"), 100);
desc8.putDouble(cTID("Brgh"), 100);
desc7.putObject(cTID("Clr "), cTID("HSBC"), desc8);
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
desc1.putObject(cTID("Grad"), cTID("Grdn"), desc4);
executeAction(sTID("gradientClassEvent"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("FTcs"), cTID("QCSt"), sTID("QCSAverage"));
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Hrzn"), cTID("#Rlt"), -113.1);
desc2.putUnitDouble(cTID("Vrtc"), cTID("#Rlt"), -627.6);
desc1.putObject(cTID("Ofst"), cTID("Ofst"), desc2);
desc1.putUnitDouble(cTID("Wdth"), cTID("#Prc"), 469.344870210136);
desc1.putUnitDouble(cTID("Hght"), cTID("#Prc"), 469.344870210136);
desc1.putEnumerated(cTID("Intr"), cTID("Intp"), cTID("Bcbc"));
executeAction(sTID("transform"), desc1, dialogMode);
}

function step35(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), sTID("linearDodge"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
desc1.putBoolean(cTID("Clrz"), false);
var list1 = new ActionList();
var desc2 = new ActionDescriptor();
desc2.putInteger(cTID("H   "), -49);
desc2.putInteger(cTID("Strt"), 0);
desc2.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc2);
desc1.putList(cTID("Adjs"), list1);
executeAction(sTID("hueSaturation"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(sTID("fillOpacity"), cTID("#Prc"), 26);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step38(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step39(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step40(enabled, withDialog) {
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
desc4.putDouble(cTID("Vrtc"), 13);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 30);
desc5.putDouble(cTID("Vrtc"), 36);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 138);
desc6.putDouble(cTID("Vrtc"), 139);
list2.putObject(cTID("Pnt "), desc6);
var desc7 = new ActionDescriptor();
desc7.putDouble(cTID("Hrzn"), 255);
desc7.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc7);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step41(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step42(enabled, withDialog) {
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
desc3.putInteger(cTID("LclR"), 1);
desc3.putInteger(cTID("BgnR"), 315);
desc3.putInteger(cTID("BgnS"), 345);
desc3.putInteger(cTID("EndS"), 15);
desc3.putInteger(cTID("EndR"), 45);
desc3.putInteger(cTID("H   "), 0);
desc3.putInteger(cTID("Strt"), -15);
desc3.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step43(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step44(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
executeAction(sTID("set"), desc1, dialogMode);
}

function step45(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyEvent"), undefined, dialogMode);
}

function step46(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putOffset(cTID("HstS"), -24);
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step47(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(531);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step48(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
desc1.putClass(cTID("As  "), cTID("Pxel"));
executeAction(sTID("paste"), desc1, dialogMode);
}

function step49(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u00f4ng Nh\u1eadt t\u01b0\u01a1i");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step50(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh m\u00e0u A1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(531);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step51(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(531);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
step41();
step42();
step43();
step44();
step45();
step46();
step47();
step48();
step49();
step50();
step51();
}

function doFuncAllDoc(func) {
for (var i = 0; i < app.documents.length; i += 1) {
app.activeDocument = app.documents[i];
func();
$.writeln(app.documents[i]);
}
}

function zyb() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Clr "), cTID("FrgC"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putDouble(cTID("Rd  "), 173.996108949416);
desc2.putDouble(cTID("Grn "), 157);
desc2.putDouble(cTID("Bl  "), 129);
desc1.putObject(cTID("T   "), sTID("RGBColor"), desc2);
desc1.putString(cTID("Srce"), "photoshopPicker");
executeAction(sTID("set"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 2);
executeAction(sTID("make"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "T\u00f4ng m\u00e0u V2.5");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Mltp"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step5(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("FrgC"));
executeAction(sTID("fill"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Tamd");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Scrn"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 40);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00f4ng m\u00e0u V2.5");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(6);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Prpr"), cTID("Lefx"));
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Scl "), cTID("#Prc"), 100);
var desc3 = new ActionDescriptor();
desc3.putBoolean(cTID("enab"), true);
desc3.putBoolean(sTID("present"), true);
desc3.putBoolean(sTID("showInDialog"), true);
desc3.putEnumerated(cTID("hglM"), cTID("BlnM"), cTID("Scrn"));
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Rd  "), 255);
desc4.putDouble(cTID("Grn "), 255);
desc4.putDouble(cTID("Bl  "), 255);
desc3.putObject(cTID("hglC"), sTID("RGBColor"), desc4);
desc3.putUnitDouble(cTID("hglO"), cTID("#Prc"), 50);
desc3.putEnumerated(cTID("sdwM"), cTID("BlnM"), cTID("Mltp"));
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Rd  "), 0);
desc5.putDouble(cTID("Grn "), 0);
desc5.putDouble(cTID("Bl  "), 0);
desc3.putObject(cTID("sdwC"), sTID("RGBColor"), desc5);
desc3.putUnitDouble(cTID("sdwO"), cTID("#Prc"), 50);
desc3.putEnumerated(cTID("bvlT"), cTID("bvlT"), cTID("SfBL"));
desc3.putEnumerated(cTID("bvlS"), cTID("BESl"), cTID("InrB"));
desc3.putBoolean(cTID("uglg"), true);
desc3.putUnitDouble(cTID("lagl"), cTID("#Ang"), 90);
desc3.putUnitDouble(cTID("Lald"), cTID("#Ang"), 30);
desc3.putUnitDouble(cTID("srgR"), cTID("#Prc"), 100);
desc3.putUnitDouble(cTID("blur"), cTID("#Pxl"), 7);
desc3.putEnumerated(cTID("bvlD"), cTID("BESs"), cTID("In  "));
var desc6 = new ActionDescriptor();
desc6.putString(cTID("Nm  "), "$$$/Contours/Defaults/Linear=Linear");
desc3.putObject(cTID("TrnS"), cTID("ShpC"), desc6);
desc3.putBoolean(sTID("antialiasGloss"), false);
desc3.putUnitDouble(cTID("Sftn"), cTID("#Pxl"), 0);
desc3.putBoolean(sTID("useShape"), false);
desc3.putBoolean(sTID("useTexture"), true);
desc3.putBoolean(cTID("InvT"), false);
desc3.putBoolean(cTID("Algn"), true);
desc3.putUnitDouble(cTID("Scl "), cTID("#Prc"), 1);
desc3.putUnitDouble(sTID("textureDepth"), cTID("#Prc"), 70);
var desc7 = new ActionDescriptor();
desc7.putString(cTID("Nm  "), "giay.jpg");
desc7.putString(cTID("Idnt"), "fdb2081d-4484-11e8-833d-e499419243ff");
desc3.putObject(cTID("Ptrn"), cTID("Ptrn"), desc7);
var desc8 = new ActionDescriptor();
desc8.putDouble(cTID("Hrzn"), 0);
desc8.putDouble(cTID("Vrtc"), 0);
desc3.putObject(sTID("phase"), cTID("Pnt "), desc8);
desc2.putObject(cTID("ebbl"), cTID("ebbl"), desc3);
desc1.putObject(cTID("T   "), cTID("Lefx"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Tamd");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(7);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Tamc");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
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
executeAction(sTID("set"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Tame");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Yama");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
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
desc3.putInteger(cTID("H   "), 0);
desc3.putInteger(cTID("Strt"), -38);
desc3.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00f4ng m\u00e0u V2.5");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(2);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 27);
executeAction(sTID("make"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u00e0i nguy\u00ean");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Prvs"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putBoolean(sTID("protectAll"), true);
desc1.putObject(sTID("layerLocking"), sTID("layerLocking"), desc2);
executeAction(sTID("applyLocking"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Yama");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(56);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
desc3.putInteger(cTID("H   "), 0);
desc3.putInteger(cTID("Strt"), -38);
desc3.putInteger(cTID("Lght"), 5);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00f4ng m\u00e0u V2.5");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(67);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("hide"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Yama");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(71);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step35(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 73);
executeAction(sTID("make"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Tua1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step38(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Yama");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(71);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step39(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Tame");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(70);
list1.putInteger(71);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step40(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Tamc");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(69);
list1.putInteger(70);
list1.putInteger(71);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step41(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
desc1.putInteger(sTID("layerSectionStart"), 75);
desc1.putInteger(sTID("layerSectionEnd"), 76);
desc1.putString(cTID("Nm  "), "Nh\u00f3m 1");
executeAction(sTID("make"), desc1, dialogMode);
}

function step42(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step43(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("HstS"), cTID("CrnH"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step44(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Prpr"), cTID("HsSt"));
ref1.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("clearEvent"), desc1, dialogMode);
}

function step45(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Tua1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(74);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step46(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Prvs"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step47(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Prvs"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step48(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00f4ng m\u00e0u V2.5");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(67);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step49(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("show"), desc1, dialogMode);
}

function step50(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Tamd");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(68);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step51(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(68);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step52(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Tua1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(74);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step53(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Prvs"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step54(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Tua1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(84);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step55(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Thi\u1ebft k\u1ebf (kh\u00f4ng xo\u00e1)");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step56(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Vlt "));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step57(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00e0i nguy\u00ean");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(82);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step58(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Bl  "));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step59(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00f4ng m\u00e0u V2.5");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(77);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step60(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Rd  "));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step61(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("HstS"), cTID("CrnH"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step62(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Prpr"), cTID("HsSt"));
ref1.putEnumerated(cTID("Dcmn"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("clearEvent"), desc1, dialogMode);
}

function step63(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00f4ng m\u00e0u V2.5");
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("hide"), desc1, dialogMode);
}

function step64(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00e0i nguy\u00ean");
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("hide"), desc1, dialogMode);
}

function step65(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("hide"), desc1, dialogMode);
}

function step66(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "N\u1ec1n");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(1);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step67(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Grn "));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step68(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step69(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step70(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Thi\u1ebft k\u1ebf (kh\u00f4ng xo\u00e1)");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(94);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step71(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("show"), desc1, dialogMode);
}

function step72(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step73(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step74(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "C\u00f3 th\u1ec3 ch\u1ec9nh");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step75(enabled, withDialog) {
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
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 122);
desc5.putDouble(cTID("Vrtc"), 81);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 171);
desc6.putDouble(cTID("Vrtc"), 147);
list2.putObject(cTID("Pnt "), desc6);
var desc7 = new ActionDescriptor();
desc7.putDouble(cTID("Hrzn"), 255);
desc7.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc7);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step76(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00e0i nguy\u00ean");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(92);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step77(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("show"), desc1, dialogMode);
}

function step78(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00f4ng m\u00e0u V2.5");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(87);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step79(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("show"), desc1, dialogMode);
}

function step80(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Thi\u1ebft k\u1ebf (kh\u00f4ng xo\u00e1)");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(119);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step81(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ch\u1ec9nh \u0111\u01b0\u1ee3c \u0111\u1ed9 trong su\u1ed1t");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step82(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "C\u00f3 th\u1ec3 ch\u1ec9nh");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(122);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step83(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step84(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("groupEvent"), desc1, dialogMode);
}

function step85(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Grn "));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
step41();
step42();
step43();
step44();
step45();
step46();
step47();
step48();
step49();
step50();
step51();
step52();
step53();
step54();
step55();
step56();
step57();
step58();
step59();
step60();
step61();
step62();
step63();
step64();
step65();
step66();
step67();
step68();
step69();
step70();
step71();
step72();
step73();
step74();
step75();
step76();
step77();
step78();
step79();
step80();
step81();
step82();
step83();
step84();
step85();
}

function ybgb() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Hghl"));
desc1.putInteger(sTID("highlightsFuzziness"), 45);
desc1.putInteger(sTID("highlightsLowerLimit"), 190);
desc1.putInteger(sTID("colorModel"), 0);
executeAction(sTID("colorRange"), desc1, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
var list1 = new ActionList();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
desc2.putReference(cTID("Chnl"), ref1);
var list2 = new ActionList();
var desc3 = new ActionDescriptor();
desc3.putDouble(cTID("Hrzn"), 0);
desc3.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc3);
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Hrzn"), 150);
desc4.putDouble(cTID("Vrtc"), 115);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 255);
desc5.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc5);
desc2.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc2);
desc1.putList(cTID("Adjs"), list1);
executeAction(sTID("curves"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step5(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("desaturate"), undefined, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("invert"), undefined, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("CDdg"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 2);
desc1.putEnumerated(sTID("preserveShape"), sTID("preserveShape"), sTID("squareness"));
executeAction(sTID("minimum"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Mltp"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u1edbp 1");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(3);
list1.putInteger(4);
list1.putInteger(5);
list1.putInteger(6);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
desc3.putReference(cTID("Chnl"), ref2);
desc3.putInteger(cTID("SrcB"), 0);
desc3.putInteger(cTID("Srcl"), 0);
desc3.putInteger(cTID("SrcW"), 255);
desc3.putInteger(cTID("Srcm"), 255);
desc3.putInteger(cTID("DstB"), 4);
desc3.putInteger(cTID("Dstl"), 70);
desc3.putInteger(cTID("DstW"), 255);
desc3.putInteger(cTID("Dstt"), 255);
list1.putObject(cTID("Blnd"), desc3);
desc2.putList(cTID("Blnd"), list1);
var desc4 = new ActionDescriptor();
desc4.putUnitDouble(cTID("Scl "), cTID("#Prc"), 416.666666666667);
desc2.putObject(cTID("Lefx"), cTID("Lefx"), desc4);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "N\u1ec1n");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(1);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u1edbp 3");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(6);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putIndex(cTID("Lyr "), 1);
desc1.putReference(cTID("T   "), ref2);
desc1.putBoolean(cTID("Adjs"), false);
desc1.putInteger(cTID("Vrsn"), 5);
var list1 = new ActionList();
list1.putInteger(6);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("move"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "N\u1ec1n copy");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(8);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "N\u1ec1n copy");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(129);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u00e0i nguy\u00ean");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u1edbp 3");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(172);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00e0i nguy\u00ean");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(156);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("HdAl"));
executeAction(sTID("make"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 175);
executeAction(sTID("make"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u00f4ng m\u00e0u V2.5");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Ptrn"));
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "giay.jpg");
desc2.putString(cTID("Idnt"), "fdb2081d-4484-11e8-833d-e499419243ff");
desc1.putObject(cTID("Ptrn"), cTID("Ptrn"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Mltp"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
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
var list1 = new ActionList();
list1.putInteger(0);
list1.putInteger(0);
list1.putInteger(0);
desc3.putList(cTID("ShdL"), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(0);
list2.putInteger(0);
desc3.putList(cTID("MdtL"), list2);
var list3 = new ActionList();
list3.putInteger(0);
list3.putInteger(0);
list3.putInteger(0);
desc3.putList(cTID("HghL"), list3);
desc3.putBoolean(cTID("PrsL"), true);
desc2.putObject(cTID("Type"), cTID("ClrB"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
list1.putInteger(1);
list1.putInteger(0);
list1.putInteger(0);
desc2.putList(cTID("HghL"), list1);
desc1.putObject(cTID("T   "), cTID("ClrB"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
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
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 110);
desc5.putDouble(cTID("Vrtc"), 146);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Color Balance 1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(10);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step35(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
list1.putInteger(-1);
list1.putInteger(3);
list1.putInteger(0);
desc2.putList(cTID("ShdL"), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(0);
list2.putInteger(8);
desc2.putList(cTID("MdtL"), list2);
var list3 = new ActionList();
list3.putInteger(-4);
list3.putInteger(0);
list3.putInteger(9);
desc2.putList(cTID("HghL"), list3);
desc1.putObject(cTID("T   "), cTID("ClrB"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Curves 1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(11);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("AdjL"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putClass(cTID("Type"), sTID("vibrance"));
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step38(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putInteger(sTID("vibrance"), -21);
desc1.putObject(cTID("T   "), sTID("vibrance"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step39(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step40(enabled, withDialog) {
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
desc3.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Rds "));
desc3.putUnitDouble(cTID("Cyn "), cTID("#Prc"), 11);
desc3.putUnitDouble(cTID("Ylw "), cTID("#Prc"), 17);
list1.putObject(cTID("ClrC"), desc3);
var desc4 = new ActionDescriptor();
desc4.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Ylws"));
desc4.putUnitDouble(cTID("Cyn "), cTID("#Prc"), -36);
desc4.putUnitDouble(cTID("Ylw "), cTID("#Prc"), -15);
desc4.putUnitDouble(cTID("Blck"), cTID("#Prc"), 18);
list1.putObject(cTID("ClrC"), desc4);
var desc5 = new ActionDescriptor();
desc5.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Whts"));
desc5.putUnitDouble(cTID("Cyn "), cTID("#Prc"), 14);
list1.putObject(cTID("ClrC"), desc5);
var desc6 = new ActionDescriptor();
desc6.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Ntrl"));
desc6.putUnitDouble(cTID("Ylw "), cTID("#Prc"), -2);
desc6.putUnitDouble(cTID("Blck"), cTID("#Prc"), 8);
list1.putObject(cTID("ClrC"), desc6);
var desc7 = new ActionDescriptor();
desc7.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Blks"));
desc7.putUnitDouble(cTID("Blck"), cTID("#Prc"), -5);
list1.putObject(cTID("ClrC"), desc7);
desc2.putList(cTID("ClrC"), list1);
desc1.putObject(cTID("T   "), cTID("SlcC"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step41(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u1edbp 3");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(183);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step42(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "L\u1edbp \u0111\u01b0\u1eddng n\u00e9t");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step43(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "N\u1ec1n");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(1);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step44(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
desc1.putBoolean(cTID("TglO"), true);
executeAction(sTID("show"), desc1, dialogMode);
}

function step45(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putInteger(cTID("Fzns"), 200);
desc1.putEnumerated(cTID("Clrs"), cTID("Clrs"), sTID("skinTone"));
desc1.putBoolean(sTID("UseFacesKey"), true);
desc1.putInteger(sTID("colorModel"), 0);
executeAction(sTID("colorRange"), desc1, dialogMode);
}

function step46(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
desc1.putBoolean(cTID("TglO"), true);
executeAction(sTID("show"), desc1, dialogMode);
}

function step47(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00e0i nguy\u00ean");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(8);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step48(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step49(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Clr "), cTID("Clrs"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("reset"), desc1, dialogMode);
}

function step50(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("FrgC"));
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 50);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}

function step51(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step52(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "N\u1ec1n");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(1);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step53(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
desc1.putBoolean(cTID("TglO"), true);
executeAction(sTID("show"), desc1, dialogMode);
}

function step54(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Shdw"));
desc1.putInteger(sTID("shadowsFuzziness"), 40);
desc1.putInteger(sTID("shadowsUpperLimit"), 50);
desc1.putInteger(sTID("colorModel"), 0);
executeAction(sTID("colorRange"), desc1, dialogMode);
}

function step55(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
desc1.putBoolean(cTID("TglO"), true);
executeAction(sTID("show"), desc1, dialogMode);
}

function step56(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00e0i nguy\u00ean");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(41);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step57(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step58(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Clr "), cTID("Clrs"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("reset"), desc1, dialogMode);
}

function step59(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("FrgC"));
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 20);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}

function step60(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step61(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Color Balance 1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(86);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step62(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Selective Color 1");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(86);
list1.putInteger(87);
list1.putInteger(88);
list1.putInteger(89);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step63(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
desc1.putInteger(sTID("layerSectionStart"), 90);
desc1.putInteger(sTID("layerSectionEnd"), 91);
desc1.putString(cTID("Nm  "), "Nh\u00f3m 1");
executeAction(sTID("make"), desc1, dialogMode);
}

function step64(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u00f4ng g\u1ed1c");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step65(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u00f4ng g\u1ed1c (kh\u00f4ng xo\u00e1)");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step66(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00e0i nguy\u00ean");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(84);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step67(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9(true, true);
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
step41();
step42();
step43();
step44();
step45();
step46();
step47();
step48();
step49();
step50();
step51();
step52();
step53();
step54();
step55();
step56();
step57();
step58();
step59();
step60();
step61();
step62();
step63();
step64();
step65();
step66();
step67();
}

function mcwl() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 57);
executeAction(sTID("make"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Chi ti\u1ebft nh\u00e1m");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Ptrn"));
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Chi ti\u1ebft c\u1ecf");
desc2.putString(cTID("Idnt"), "2828eacb-44a8-11e8-9038-e7d7ee422cd6");
desc1.putObject(cTID("Ptrn"), cTID("Ptrn"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
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
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Mltp"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step5(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
var list1 = new ActionList();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
desc2.putReference(cTID("Chnl"), ref1);
var list2 = new ActionList();
var desc3 = new ActionDescriptor();
desc3.putDouble(cTID("Hrzn"), 0);
desc3.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc3);
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Hrzn"), 104);
desc4.putDouble(cTID("Vrtc"), 149);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 255);
desc5.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc5);
desc2.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc2);
desc1.putList(cTID("Adjs"), list1);
executeAction(sTID("curves"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Chi ti\u1ebft nh\u00e1m");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(243);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "H\u00e3y xo\u00e1 c\u00e1c l\u1edbp chi ti\u1ebft kh\u00e1c");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
}

function sdtz() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "L\u1edbp ch\u1ec9nh \u0111\u1ed9 s\u00e1ng");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Orng"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
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
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Prvs"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Nxt "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Nxt "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Nxt "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Nxt "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Nxt "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Nxt "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Nxt "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Nxt "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Nxt "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Nxt "));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("move"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u1edbp ch\u1ec9nh \u0111\u1ed9 s\u00e1ng");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(258);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
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
desc3.putBoolean(cTID("Clrz"), false);
desc2.putObject(cTID("Type"), cTID("HStr"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "L\u1edbp ch\u1ec9nh \u0111\u1ed9 b\u00e3o ho\u00e0");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Gry "));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u1edbp ch\u1ec9nh \u0111\u1ed9 b\u00e3o ho\u00e0");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(259);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
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
var list1 = new ActionList();
list1.putInteger(0);
list1.putInteger(0);
list1.putInteger(0);
desc3.putList(cTID("ShdL"), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(0);
list2.putInteger(0);
desc3.putList(cTID("MdtL"), list2);
var list3 = new ActionList();
list3.putInteger(0);
list3.putInteger(0);
list3.putInteger(0);
desc3.putList(cTID("HghL"), list3);
desc3.putBoolean(cTID("PrsL"), true);
desc2.putObject(cTID("Type"), cTID("ClrB"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ch\u1ec9nh t\u00f4ng m\u00e0u");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Ylw "));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u1edbp ch\u1ec9nh \u0111\u1ed9 s\u00e1ng");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(258);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
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
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 129);
desc5.putDouble(cTID("Vrtc"), 146);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 255);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u1edbp ch\u1ec9nh \u0111\u1ed9 b\u00e3o ho\u00e0");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(259);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
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
desc3.putInteger(cTID("H   "), 0);
desc3.putInteger(cTID("Strt"), -8);
desc3.putInteger(cTID("Lght"), 0);
list1.putObject(cTID("Hst2"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("HStr"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Ch\u1ec9nh t\u00f4ng m\u00e0u");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(260);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("AdjL"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
list1.putInteger(6);
list1.putInteger(0);
list1.putInteger(0);
desc2.putList(cTID("MdtL"), list1);
desc1.putObject(cTID("T   "), cTID("ClrB"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
}

function wlzq() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "T\u00f4ng m\u00e0u V2.5");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(2);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Prpr"), cTID("Lefx"));
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Scl "), cTID("#Prc"), 416.666666666667);
var desc3 = new ActionDescriptor();
desc3.putBoolean(cTID("enab"), true);
desc3.putBoolean(sTID("present"), true);
desc3.putBoolean(sTID("showInDialog"), true);
desc3.putEnumerated(cTID("hglM"), cTID("BlnM"), cTID("Scrn"));
var desc4 = new ActionDescriptor();
desc4.putDouble(cTID("Rd  "), 255);
desc4.putDouble(cTID("Grn "), 255);
desc4.putDouble(cTID("Bl  "), 255);
desc3.putObject(cTID("hglC"), sTID("RGBColor"), desc4);
desc3.putUnitDouble(cTID("hglO"), cTID("#Prc"), 50);
desc3.putEnumerated(cTID("sdwM"), cTID("BlnM"), cTID("Mltp"));
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Rd  "), 0);
desc5.putDouble(cTID("Grn "), 0);
desc5.putDouble(cTID("Bl  "), 0);
desc3.putObject(cTID("sdwC"), sTID("RGBColor"), desc5);
desc3.putUnitDouble(cTID("sdwO"), cTID("#Prc"), 50);
desc3.putEnumerated(cTID("bvlT"), cTID("bvlT"), cTID("SfBL"));
desc3.putEnumerated(cTID("bvlS"), cTID("BESl"), cTID("InrB"));
desc3.putBoolean(cTID("uglg"), true);
desc3.putUnitDouble(cTID("lagl"), cTID("#Ang"), 90);
desc3.putUnitDouble(cTID("Lald"), cTID("#Ang"), 30);
desc3.putUnitDouble(cTID("srgR"), cTID("#Prc"), 100);
desc3.putUnitDouble(cTID("blur"), cTID("#Pxl"), 7);
desc3.putEnumerated(cTID("bvlD"), cTID("BESs"), cTID("In  "));
var desc6 = new ActionDescriptor();
desc6.putString(cTID("Nm  "), "$$$/Contours/Defaults/Linear=Linear");
desc3.putObject(cTID("TrnS"), cTID("ShpC"), desc6);
desc3.putBoolean(sTID("antialiasGloss"), false);
desc3.putUnitDouble(cTID("Sftn"), cTID("#Pxl"), 0);
desc3.putBoolean(sTID("useShape"), false);
desc3.putBoolean(sTID("useTexture"), true);
desc3.putBoolean(cTID("InvT"), false);
desc3.putBoolean(cTID("Algn"), true);
desc3.putUnitDouble(cTID("Scl "), cTID("#Prc"), 101);
desc3.putUnitDouble(sTID("textureDepth"), cTID("#Prc"), 215);
var desc7 = new ActionDescriptor();
desc7.putString(cTID("Nm  "), "giay.jpg");
desc7.putString(cTID("Idnt"), "fdb2081d-4484-11e8-833d-e499419243ff");
desc3.putObject(cTID("Ptrn"), cTID("Ptrn"), desc7);
var desc8 = new ActionDescriptor();
desc8.putDouble(cTID("Hrzn"), 0);
desc8.putDouble(cTID("Vrtc"), 0);
desc3.putObject(sTID("phase"), cTID("Pnt "), desc8);
desc2.putObject(cTID("ebbl"), cTID("ebbl"), desc3);
desc1.putObject(cTID("T   "), cTID("Lefx"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}
step1();
step2();
}

function zs() {
function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 90);
executeAction(sTID("make"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Qu\u1ea1t gi\u1ea5y");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Ptrn"));
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "quat-giay.psd");
desc2.putString(cTID("Idnt"), "6e0dc2df-44a9-11e8-9038-e7d7ee422cd6");
desc1.putObject(cTID("Ptrn"), cTID("Ptrn"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}
step2();
step3();
step4();
}

function sf() {
function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 112);
executeAction(sTID("make"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Th\u01b0 ph\u00e1p");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Ptrn"));
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Con d\u1ea5u th\u01b0 ph\u00e1p");
desc2.putString(cTID("Idnt"), "e65c28c3-44aa-11e8-9038-e7d7ee422cd6");
desc1.putObject(cTID("Ptrn"), cTID("Ptrn"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}
step2();
step3();
step4();
}

function sfb() {
function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 129);
executeAction(sTID("make"), desc1, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u1edbp 1");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("removeFromSelection"));
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u1edbp 1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(129);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Th\u01b0 ph\u00e1p 2");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Ptrn"));
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Ch\u1eef 5");
desc2.putString(cTID("Idnt"), "b884ebeb-44ae-11e8-9038-e7d7ee422cd6");
desc1.putObject(cTID("Ptrn"), cTID("Ptrn"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}
step2();
step3();
step4();
step5();
step6();
}

function mh() {
function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 133);
executeAction(sTID("make"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Hoa mai");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Ptrn"));
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Hoa mai");
desc2.putString(cTID("Idnt"), "e44f1a13-44af-11e8-9038-e7d7ee422cd6");
desc1.putObject(cTID("Ptrn"), cTID("Ptrn"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}
step2();
step3();
step4();
}

function zw() {
function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 142);
executeAction(sTID("make"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "\u0110\u1ed3 v\u1eadt");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Ptrn"));
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "\u0110\u1ed3 v\u1eadt");
desc2.putString(cTID("Idnt"), "f3cdac63-44b0-11e8-9038-e7d7ee422cd6");
desc1.putObject(cTID("Ptrn"), cTID("Ptrn"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}
step2();
step3();
step4();
}

function hs() {
function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 146);
executeAction(sTID("make"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "S\u01b0\u01a1ng gi\u00e1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Ptrn"));
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "S\u01b0\u01a1ng gi\u00e1");
desc2.putString(cTID("Idnt"), "871da384-44b1-11e8-9038-e7d7ee422cd6");
desc1.putObject(cTID("Ptrn"), cTID("Ptrn"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}
step2();
step3();
step4();
}

function als() {
function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 100);
executeAction(sTID("make"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Sen");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("Ptrn"));
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Sen");
desc2.putString(cTID("Idnt"), "dccb43d7-aa44-ee42-a3bc-0a5d0df5a83c");
desc1.putObject(cTID("Ptrn"), cTID("Ptrn"), desc2);
desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
executeAction(sTID("fill"), desc1, dialogMode);
}
step2();
step3();
step4();
}

function xqfx() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("inverse"), undefined, dialogMode);
}
step1();
}

function scxq() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("delete"), undefined, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}
step1();
step2();
}

function hbtc() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("flattenImage"), undefined, dialogMode);
}
step1();
}

function gdp() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
desc1.putInteger(cTID("LyrI"), 44);
executeAction(sTID("make"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Mrgd"));
desc2.putReference(cTID("T   "), ref1);
desc1.putObject(cTID("With"), cTID("Clcl"), desc2);
executeAction(sTID("applyImageEvent"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Temp_1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
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
desc2.putString(cTID("Nm  "), "Temp_2");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("hide"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Temp_1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 5);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Temp_2");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("show"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
ref1.putName(cTID("Lyr "), "Temp_1");
desc2.putReference(cTID("T   "), ref1);
desc2.putEnumerated(cTID("Clcl"), cTID("Clcn"), cTID("Sbtr"));
desc2.putDouble(cTID("Scl "), 2);
desc2.putInteger(cTID("Ofst"), 128);
desc1.putObject(cTID("With"), cTID("Clcl"), desc2);
executeAction(sTID("applyImageEvent"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), sTID("linearLight"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("groupEvent"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Chi ti\u1ebft_Nh\u00e2n b\u1ea3n");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
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
executeAction(sTID("make"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Xem tr\u01b0\u1edbc t\u0103ng c\u01b0\u1eddng chi ti\u1ebft");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
list1.putReference(ref1);
desc1.putList(cTID("null"), list1);
executeAction(sTID("hide"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
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
desc4.putDouble(cTID("Hrzn"), 100);
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 128);
desc5.putDouble(cTID("Vrtc"), 128);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 160);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("groupEvent"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
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
desc4.putDouble(cTID("Hrzn"), 72);
desc4.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc4);
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 128);
desc5.putDouble(cTID("Vrtc"), 128);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 181);
desc6.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc6);
desc3.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc3);
desc2.putList(cTID("Adjs"), list1);
desc1.putObject(cTID("T   "), cTID("Crvs"), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Temp_1");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Bl  "));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "FS_Radius_");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Temp_1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Volume_R=");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Temp_2");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Texture_R=");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Chi ti\u1ebft t\u1ea7n s\u1ed1 cao");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "FS_Radius_");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "L\u00e0m da t\u1ea7n s\u1ed1 cao/th\u1ea5p");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step35(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Volume_R=");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step36(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "M\u1ea3ng m\u00e0u t\u1ea7n s\u1ed1 th\u1ea5p");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step38(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "M\u1ea3ng m\u00e0u_L\u00e0m m\u1edd");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step39(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("groupEvent"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8(true, true);
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
}

function zrsc() {
var materialFile = File.openDialog("Ch\u1ecdn \u1ea3nh v\u1eadt li\u1ec7u");
if (!materialFile) { return; }
if (!materialFile.exists) { throw new Error("File not found: " + materialFile.fsName); }
function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putInteger(cTID("Idnt"), 290);
desc1.putPath(cTID("null"), materialFile);
desc1.putBoolean(cTID("Lnkd"), true);
desc1.putEnumerated(cTID("FTcs"), cTID("QCSt"), sTID("QCSAverage"));
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Hrzn"), cTID("#Rlt"), 0);
desc2.putUnitDouble(cTID("Vrtc"), cTID("#Rlt"), -2.7284841053187802e-14);
desc1.putObject(cTID("Ofst"), cTID("Ofst"), desc2);
executeAction(sTID("placeEvent"), desc1, dialogMode);
}
step2(true, true);
}

function act_alx() {
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
executeAction(sTID("make"), desc1, dialogMode);
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
executeAction(sTID("select"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "rj1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
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
desc2.putString(cTID("Nm  "), "Soft focus a");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "rj1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(73);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(73);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Soft focus a");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(74);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Scrn"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
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
executeAction(sTID("set"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 6);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Soft focus a");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(120);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var list1 = new ActionList();
list1.putInteger(120);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Soft focus a copy");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(121);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Soft focus");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12(true, true);
step13();
step14();
step15();
step16();
}

function act_spfz() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("FTcs"), cTID("QCSt"), sTID("QCSAverage"));
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Hrzn"), cTID("#Rlt"), 2.7284841053187802e-14);
desc2.putUnitDouble(cTID("Vrtc"), cTID("#Rlt"), 0);
desc1.putObject(cTID("Ofst"), cTID("Ofst"), desc2);
desc1.putUnitDouble(cTID("Wdth"), cTID("#Prc"), -100);
desc1.putEnumerated(cTID("Intr"), cTID("Intp"), cTID("Bcbc"));
executeAction(sTID("transform"), desc1, dialogMode);
}
step1();
}

function openurl() {
var URL = new File(Folder.temp + "/help.html");
URL.open("w");
URL.writeln("<html><HEAD><meta HTTP-EQUIV=\"REFRESH\" content=\"0; url=http://www.\"></HEAD></HTML>");
URL.close();
URL.execute();
}

function pl1() {
var docRef = app.documents;
var activeDocs = [];
for (var docIndex = 0; docIndex < app.documents.length; docIndex += 1) {
activeDocs.push(app.documents[docIndex]);
}
for (var docIndex = 0; docIndex < activeDocs.length; docIndex += 1) {
activeDocument = activeDocs[docIndex];
app.activeDocument.suspendHistory("L\u00e0m da h\u00e0ng lo\u1ea1t", "mopi1()");
}
}

function pl2() {
var docRef = app.documents;
var activeDocs = [];
for (var docIndex = 0; docIndex < app.documents.length; docIndex += 1) {
activeDocs.push(app.documents[docIndex]);
}
for (var docIndex = 0; docIndex < activeDocs.length; docIndex += 1) {
activeDocument = activeDocs[docIndex];
app.activeDocument.suspendHistory("L\u00e0m da h\u00e0ng lo\u1ea1t", "mopi2()");
}
}

function pl3() {
var docRef = app.documents;
var activeDocs = [];
for (var docIndex = 0; docIndex < app.documents.length; docIndex += 1) {
activeDocs.push(app.documents[docIndex]);
}
for (var docIndex = 0; docIndex < activeDocs.length; docIndex += 1) {
activeDocument = activeDocs[docIndex];
app.activeDocument.suspendHistory("L\u00e0m da h\u00e0ng lo\u1ea1t", "qxmp()");
}
}

function mopi1() {
function step2(enabled, withDialog) {
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

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
var idmove = charIDToTypeID("move");
var desc780 = new ActionDescriptor();
var idnull = charIDToTypeID("null");
var ref530 = new ActionReference();
var idLyr = charIDToTypeID("Lyr ");
var idOrdn = charIDToTypeID("Ordn");
var idTrgt = charIDToTypeID("Trgt");
ref530.putEnumerated(idLyr, idOrdn, idTrgt);
desc780.putReference(idnull, ref530);
var idT = charIDToTypeID("T   ");
var ref531 = new ActionReference();
var idLyr = charIDToTypeID("Lyr ");
var idOrdn = charIDToTypeID("Ordn");
var idFrnt = charIDToTypeID("Frnt");
ref531.putEnumerated(idLyr, idOrdn, idFrnt);
desc780.putReference(idT, ref531);
executeAction(idmove, desc780, DialogModes.NO);
var idmove = charIDToTypeID("move");
var desc781 = new ActionDescriptor();
var idnull = charIDToTypeID("null");
var ref532 = new ActionReference();
var idLyr = charIDToTypeID("Lyr ");
var idOrdn = charIDToTypeID("Ordn");
var idTrgt = charIDToTypeID("Trgt");
ref532.putEnumerated(idLyr, idOrdn, idTrgt);
desc781.putReference(idnull, ref532);
var idT = charIDToTypeID("T   ");
var ref533 = new ActionReference();
var idLyr = charIDToTypeID("Lyr ");
var idOrdn = charIDToTypeID("Ordn");
var idNxt = charIDToTypeID("Nxt ");
ref533.putEnumerated(idLyr, idOrdn, idNxt);
desc781.putReference(idT, ref533);
executeAction(idmove, desc781, DialogModes.NO);
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
desc2.putString(cTID("Nm  "), "M\u1edd t\u1ea7n s\u1ed1 th\u1ea5p 1");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step5(enabled, withDialog) {
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

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "M\u1edd t\u1ea7n s\u1ed1 th\u1ea5p 2");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
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

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Chi ti\u1ebft - l\u1edbn");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
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

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Chi ti\u1ebft - nh\u1ecf");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "M\u1edd t\u1ea7n s\u1ed1 th\u1ea5p 1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(cTID("slct"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 8);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 35);
desc1.putInteger(cTID("Thsh"), 35);
executeAction(sTID("surfaceBlur"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Lghn"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "M\u1edd t\u1ea7n s\u1ed1 th\u1ea5p 2");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(cTID("slct"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 8);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 35);
desc1.putInteger(cTID("Thsh"), 35);
executeAction(sTID("surfaceBlur"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "M\u1edd t\u1ea7n s\u1ed1 th\u1ea5p 1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(cTID("slct"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
desc3.putReference(cTID("Chnl"), ref2);
desc3.putInteger(cTID("SrcB"), 0);
desc3.putInteger(cTID("Srcl"), 0);
desc3.putInteger(cTID("SrcW"), 255);
desc3.putInteger(cTID("Srcm"), 255);
desc3.putInteger(cTID("DstB"), 0);
desc3.putInteger(cTID("Dstl"), 125);
desc3.putInteger(cTID("DstW"), 125);
desc3.putInteger(cTID("Dstt"), 255);
list1.putObject(cTID("Blnd"), desc3);
desc2.putList(cTID("Blnd"), list1);
var desc4 = new ActionDescriptor();
desc4.putUnitDouble(cTID("Scl "), cTID("#Prc"), 416.666666666667);
desc2.putObject(cTID("Lefx"), cTID("Lefx"), desc4);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "M\u1edd t\u1ea7n s\u1ed1 th\u1ea5p 2");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(cTID("slct"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Mltp"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
desc3.putReference(cTID("Chnl"), ref2);
desc3.putInteger(cTID("SrcB"), 0);
desc3.putInteger(cTID("Srcl"), 0);
desc3.putInteger(cTID("SrcW"), 255);
desc3.putInteger(cTID("Srcm"), 255);
desc3.putInteger(cTID("DstB"), 0);
desc3.putInteger(cTID("Dstl"), 125);
desc3.putInteger(cTID("DstW"), 125);
desc3.putInteger(cTID("Dstt"), 255);
list1.putObject(cTID("Blnd"), desc3);
desc2.putList(cTID("Blnd"), list1);
var desc4 = new ActionDescriptor();
desc4.putUnitDouble(cTID("Scl "), cTID("#Prc"), 416.666666666667);
desc2.putObject(cTID("Lefx"), cTID("Lefx"), desc4);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Drkn"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 60);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step28(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "M\u1edd t\u1ea7n s\u1ed1 th\u1ea5p 2");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(cTID("slct"), desc1, dialogMode);
}

function step29(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "M\u1edd t\u1ea7n s\u1ed1 th\u1ea5p 1");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
executeAction(cTID("slct"), desc1, dialogMode);
}

function step30(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
}

function step31(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "M\u1edd t\u1ea7n s\u1ed1 th\u1ea5p");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step32(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Chi ti\u1ebft - l\u1edbn");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(cTID("slct"), desc1, dialogMode);
}

function step33(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 10);
executeAction(sTID("highPass"), desc1, dialogMode);
}

function step34(enabled, withDialog) {
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

function step35(enabled, withDialog) {
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

function step36(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "Chi ti\u1ebft - nh\u1ecf");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(cTID("slct"), desc1, dialogMode);
}

function step37(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 1);
executeAction(sTID("highPass"), desc1, dialogMode);
}

function step38(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), sTID("vividLight"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(cTID("setd"), desc1, dialogMode);
}

function step39() {
var idsetd = charIDToTypeID("setd");
var desc655 = new ActionDescriptor();
var idnull = charIDToTypeID("null");
var ref416 = new ActionReference();
var idLyr = charIDToTypeID("Lyr ");
var idOrdn = charIDToTypeID("Ordn");
var idTrgt = charIDToTypeID("Trgt");
ref416.putEnumerated(idLyr, idOrdn, idTrgt);
desc655.putReference(idnull, ref416);
var idT = charIDToTypeID("T   ");
var desc656 = new ActionDescriptor();
var idNm = charIDToTypeID("Nm  ");
desc656.putString(idNm, "Chi ti\u1ebft 1");
var idLyr = charIDToTypeID("Lyr ");
desc655.putObject(idT, idLyr, desc656);
executeAction(idsetd, desc655, DialogModes.NO);
var idslct = charIDToTypeID("slct");
var desc1309 = new ActionDescriptor();
var idnull = charIDToTypeID("null");
var ref642 = new ActionReference();
var idLyr = charIDToTypeID("Lyr ");
var idOrdn = charIDToTypeID("Ordn");
var idBckw = charIDToTypeID("Bckw");
ref642.putEnumerated(idLyr, idOrdn, idBckw);
desc1309.putReference(idnull, ref642);
var idselectionModifier = stringIDToTypeID("selectionModifier");
var idselectionModifierType = stringIDToTypeID("selectionModifierType");
var idaddToSelection = stringIDToTypeID("addToSelection");
desc1309.putEnumerated(idselectionModifier, idselectionModifierType, idaddToSelection);
var idMkVs = charIDToTypeID("MkVs");
desc1309.putBoolean(idMkVs, false);
var idLyrI = charIDToTypeID("LyrI");
var list454 = new ActionList();
list454.putInteger(24);
list454.putInteger(26);
desc1309.putList(idLyrI, list454);
executeAction(idslct, desc1309, DialogModes.NO);
var idslct = charIDToTypeID("slct");
var desc1310 = new ActionDescriptor();
var idnull = charIDToTypeID("null");
var ref643 = new ActionReference();
var idLyr = charIDToTypeID("Lyr ");
var idOrdn = charIDToTypeID("Ordn");
var idBckw = charIDToTypeID("Bckw");
ref643.putEnumerated(idLyr, idOrdn, idBckw);
desc1310.putReference(idnull, ref643);
var idselectionModifier = stringIDToTypeID("selectionModifier");
var idselectionModifierType = stringIDToTypeID("selectionModifierType");
var idaddToSelection = stringIDToTypeID("addToSelection");
desc1310.putEnumerated(idselectionModifier, idselectionModifierType, idaddToSelection);
var idMkVs = charIDToTypeID("MkVs");
desc1310.putBoolean(idMkVs, false);
var idLyrI = charIDToTypeID("LyrI");
var list455 = new ActionList();
list455.putInteger(22);
list455.putInteger(24);
list455.putInteger(26);
desc1310.putList(idLyrI, list455);
executeAction(idslct, desc1310, DialogModes.NO);
}

function step40() {
var idMk = charIDToTypeID("Mk  ");
var desc1048 = new ActionDescriptor();
var idnull = charIDToTypeID("null");
var ref536 = new ActionReference();
var idlayerSection = stringIDToTypeID("layerSection");
ref536.putClass(idlayerSection);
desc1048.putReference(idnull, ref536);
var idFrom = charIDToTypeID("From");
var ref537 = new ActionReference();
var idLyr = charIDToTypeID("Lyr ");
var idOrdn = charIDToTypeID("Ordn");
var idTrgt = charIDToTypeID("Trgt");
ref537.putEnumerated(idLyr, idOrdn, idTrgt);
desc1048.putReference(idFrom, ref537);
var idUsng = charIDToTypeID("Usng");
var desc1049 = new ActionDescriptor();
var idNm = charIDToTypeID("Nm  ");
desc1049.putString(idNm, "S\u1eeda s\u00e0n");
var idClr = charIDToTypeID("Clr ");
var idClr = charIDToTypeID("Clr ");
var idOrng = charIDToTypeID("Orng");
desc1049.putEnumerated(idClr, idClr, idOrng);
var idlayerSection = stringIDToTypeID("layerSection");
desc1048.putObject(idUsng, idlayerSection, desc1049);
var idlayerSectionStart = stringIDToTypeID("layerSectionStart");
desc1048.putInteger(idlayerSectionStart, 80);
var idlayerSectionEnd = stringIDToTypeID("layerSectionEnd");
desc1048.putInteger(idlayerSectionEnd, 81);
var idNm = charIDToTypeID("Nm  ");
desc1048.putString(idNm, "S\u1eeda s\u00e0n");
executeAction(idMk, desc1048, DialogModes.NO);
var idMk = charIDToTypeID("Mk  ");
var desc1050 = new ActionDescriptor();
var idNw = charIDToTypeID("Nw  ");
var idChnl = charIDToTypeID("Chnl");
desc1050.putClass(idNw, idChnl);
var idAt = charIDToTypeID("At  ");
var ref538 = new ActionReference();
var idChnl = charIDToTypeID("Chnl");
var idChnl = charIDToTypeID("Chnl");
var idMsk = charIDToTypeID("Msk ");
ref538.putEnumerated(idChnl, idChnl, idMsk);
desc1050.putReference(idAt, ref538);
var idUsng = charIDToTypeID("Usng");
var idUsrM = charIDToTypeID("UsrM");
var idHdAl = charIDToTypeID("HdAl");
desc1050.putEnumerated(idUsng, idUsrM, idHdAl);
executeAction(idMk, desc1050, DialogModes.NO);
var idslct = charIDToTypeID("slct");
var desc1051 = new ActionDescriptor();
var idnull = charIDToTypeID("null");
var ref539 = new ActionReference();
var idPbTl = charIDToTypeID("PbTl");
ref539.putClass(idPbTl);
desc1051.putReference(idnull, ref539);
executeAction(idslct, desc1051, DialogModes.NO);
var idRset = charIDToTypeID("Rset");
var desc1053 = new ActionDescriptor();
var idnull = charIDToTypeID("null");
var ref541 = new ActionReference();
var idClr = charIDToTypeID("Clr ");
var idClrs = charIDToTypeID("Clrs");
ref541.putProperty(idClr, idClrs);
desc1053.putReference(idnull, ref541);
executeAction(idRset, desc1053, DialogModes.NO);
}
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
step28();
step29();
step30();
step31();
step32();
step33();
step34();
step35();
step36();
step37();
step38();
step39();
step40();
}

function bjqxc() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 5);
executeAction(sTID("feather"), desc1, dialogMode);
}

function step2(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("By  "), cTID("#Pxl"), 4);
executeAction(sTID("contract"), desc1, dialogMode);
}

function step5(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 105.8);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Dstr"), cTID("Dstr"), cTID("Unfr"));
desc1.putUnitDouble(cTID("Nose"), cTID("#Prc"), 2);
desc1.putBoolean(cTID("Mnch"), false);
desc1.putInteger(cTID("FlRs"), 1767783);
executeAction(sTID("addNoise"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("mergeVisible"), undefined, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
executeAction(sTID("set"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
}

function gsmh() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 8);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}
step1();
}

function hhhb() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("wetBrushTool"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}
step1();
}

function yjmp() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("make"), desc1, dialogMode);
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
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "P\xfcr\xfczs\xfcz Cilt I");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 50);
desc1.putInteger(cTID("Thsh"), 25);
executeAction(sTID("surfaceBlur"), desc1, dialogMode);
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
var list1 = new ActionList();
var desc3 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Gry "));
desc3.putReference(cTID("Chnl"), ref2);
desc3.putInteger(cTID("SrcB"), 0);
desc3.putInteger(cTID("Srcl"), 0);
desc3.putInteger(cTID("SrcW"), 255);
desc3.putInteger(cTID("Srcm"), 255);
desc3.putInteger(cTID("DstB"), 0);
desc3.putInteger(cTID("Dstl"), 125);
desc3.putInteger(cTID("DstW"), 168);
desc3.putInteger(cTID("Dstt"), 255);
list1.putObject(cTID("Blnd"), desc3);
desc2.putList(cTID("Blnd"), list1);
var desc4 = new ActionDescriptor();
desc4.putUnitDouble(cTID("Scl "), cTID("#Prc"), 416.666666666667);
desc2.putObject(cTID("Lefx"), cTID("Lefx"), desc4);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("make"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "P\xfcr\xfczs\xfcz Cilt");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "Doku");
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("SftL"));
desc2.putBoolean(cTID("FlNt"), true);
desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Gry "));
desc1.putObject(cTID("Usng"), cTID("Lyr "), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putEnumerated(cTID("Dstr"), cTID("Dstr"), cTID("Unfr"));
desc1.putUnitDouble(cTID("Nose"), cTID("#Prc"), 3);
desc1.putBoolean(cTID("Mnch"), true);
desc1.putInteger(cTID("FlRs"), 9015975);
executeAction(sTID("addNoise"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 0.3);
executeAction(sTID("gaussianBlur"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
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
executeAction(sTID("set"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "P\xfcr\xfczs\xfcz Cilt I");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step14(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
}

function step15(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 75);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step16(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("MkVs"), false);
executeAction(sTID("select"), desc1, dialogMode);
}

function step17(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "L\u00e0m da m\u1ed9t ch\u1ea1m");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step18(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
desc1.putReference(cTID("At  "), ref1);
desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
executeAction(sTID("make"), desc1, dialogMode);
}

function step19(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(cTID("Lyr "));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("make"), desc1, dialogMode);
}

function step20(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putBoolean(cTID("Dplc"), true);
executeAction(sTID("mergeVisible"), desc1, dialogMode);
}

function step21(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "T\u0103ng chi ti\u1ebft");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step22(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putString(cTID("CMod"), "Filter");
desc1.putEnumerated(cTID("Sett"), cTID("Sett"), cTID("Cst "));
desc1.putEnumerated(cTID("WBal"), cTID("WBal"), cTID("Cst "));
desc1.putInteger(cTID("Temp"), 0);
desc1.putInteger(cTID("Tint"), 0);
desc1.putInteger(cTID("AWBV"), 134348800);
desc1.putBoolean(cTID("CtoG"), false);
desc1.putInteger(cTID("Strt"), 0);
desc1.putInteger(cTID("Shrp"), 11);
desc1.putInteger(cTID("LNR "), 0);
desc1.putInteger(cTID("CNR "), 0);
desc1.putInteger(cTID("VigA"), 0);
desc1.putInteger(cTID("BlkB"), 0);
desc1.putInteger(cTID("RHue"), 0);
desc1.putInteger(cTID("RSat"), 0);
desc1.putInteger(cTID("GHue"), 0);
desc1.putInteger(cTID("GSat"), 0);
desc1.putInteger(cTID("BHue"), 0);
desc1.putInteger(cTID("BSat"), 0);
desc1.putInteger(cTID("Vibr"), 0);
desc1.putInteger(cTID("HA_R"), 0);
desc1.putInteger(cTID("HA_O"), 0);
desc1.putInteger(cTID("HA_Y"), 0);
desc1.putInteger(cTID("HA_G"), 0);
desc1.putInteger(cTID("HA_A"), 0);
desc1.putInteger(cTID("HA_B"), 0);
desc1.putInteger(cTID("HA_P"), 0);
desc1.putInteger(cTID("HA_M"), 0);
desc1.putInteger(cTID("SA_R"), 0);
desc1.putInteger(cTID("SA_O"), 0);
desc1.putInteger(cTID("SA_Y"), 0);
desc1.putInteger(cTID("SA_G"), 0);
desc1.putInteger(cTID("SA_A"), 0);
desc1.putInteger(cTID("SA_B"), 0);
desc1.putInteger(cTID("SA_P"), 0);
desc1.putInteger(cTID("SA_M"), 0);
desc1.putInteger(cTID("LA_R"), 0);
desc1.putInteger(cTID("LA_O"), 0);
desc1.putInteger(cTID("LA_Y"), 0);
desc1.putInteger(cTID("LA_G"), 0);
desc1.putInteger(cTID("LA_A"), 0);
desc1.putInteger(cTID("LA_B"), 0);
desc1.putInteger(cTID("LA_P"), 0);
desc1.putInteger(cTID("LA_M"), 0);
desc1.putInteger(cTID("STSH"), 0);
desc1.putInteger(cTID("STSS"), 0);
desc1.putInteger(cTID("STHH"), 0);
desc1.putInteger(cTID("STHS"), 0);
desc1.putInteger(cTID("STB "), 0);
desc1.putInteger(cTID("PC_S"), 0);
desc1.putInteger(cTID("PC_D"), 0);
desc1.putInteger(cTID("PC_L"), 0);
desc1.putInteger(cTID("PC_H"), 0);
desc1.putInteger(cTID("PC_1"), 25);
desc1.putInteger(cTID("PC_2"), 50);
desc1.putInteger(cTID("PC_3"), 75);
desc1.putDouble(cTID("ShpR"), 1);
desc1.putInteger(cTID("ShpD"), 25);
desc1.putInteger(cTID("ShpM"), 0);
desc1.putInteger(cTID("PCVA"), -14);
desc1.putInteger(cTID("PCVM"), 45);
desc1.putInteger(cTID("PCVF"), 60);
desc1.putInteger(cTID("PCVR"), 2);
desc1.putInteger(cTID("PCVS"), 1);
desc1.putInteger(cTID("PCVH"), 2);
desc1.putInteger(cTID("GRNA"), 0);
desc1.putInteger(cTID("LPEn"), 0);
desc1.putInteger(cTID("MDis"), 0);
desc1.putInteger(cTID("PerV"), 0);
desc1.putInteger(cTID("PerH"), 0);
desc1.putDouble(cTID("PerR"), 0);
desc1.putInteger(cTID("PerS"), 100);
desc1.putInteger(cTID("PerA"), 0);
desc1.putInteger(cTID("PerU"), 0);
desc1.putInteger(cTID("AuCA"), 0);
desc1.putDouble(cTID("Ex12"), 0.2);
desc1.putInteger(cTID("Cr12"), 30);
desc1.putInteger(cTID("Hi12"), -48);
desc1.putInteger(cTID("Sh12"), 38);
desc1.putInteger(cTID("Wh12"), 14);
desc1.putInteger(cTID("Bk12"), -8);
desc1.putInteger(cTID("Cl12"), 39);
desc1.putInteger(cTID("DfPA"), 0);
desc1.putInteger(cTID("DPHL"), 30);
desc1.putInteger(cTID("DPHH"), 70);
desc1.putInteger(cTID("DfGA"), 0);
desc1.putInteger(cTID("DPGL"), 40);
desc1.putInteger(cTID("DPGH"), 60);
var list1 = new ActionList();
list1.putInteger(0);
list1.putInteger(0);
list1.putInteger(255);
list1.putInteger(255);
desc1.putList(cTID("Crv "), list1);
var list2 = new ActionList();
list2.putInteger(0);
list2.putInteger(0);
list2.putInteger(255);
list2.putInteger(255);
desc1.putList(cTID("CrvR"), list2);
var list3 = new ActionList();
list3.putInteger(0);
list3.putInteger(0);
list3.putInteger(255);
list3.putInteger(255);
desc1.putList(cTID("CrvG"), list3);
var list4 = new ActionList();
list4.putInteger(0);
list4.putInteger(0);
list4.putInteger(255);
list4.putInteger(255);
desc1.putList(cTID("CrvB"), list4);
desc1.putString(cTID("CamP"), "Embedded");
desc1.putString(cTID("CP_D"), "54650A341B5B5CCAE8442D0B43A92BCE");
desc1.putInteger(cTID("PrVe"), 101122048);
desc1.putString(cTID("Rtch"), "");
desc1.putString(cTID("REye"), "");
desc1.putString(cTID("LCs "), "");
desc1.putString(cTID("Upri"), "");
executeAction(sTID("Adobe Camera Raw Filter"), desc1, dialogMode);
}

function step23(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Bl  "));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step24(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 75);
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step25(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Lyr "), "L\u00e0m da m\u1ed9t ch\u1ea1m");
desc1.putReference(cTID("null"), ref1);
desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
desc1.putBoolean(cTID("MkVs"), false);
var list1 = new ActionList();
list1.putInteger(6);
list1.putInteger(8);
desc1.putList(cTID("LyrI"), list1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step26(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putClass(sTID("layerSection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("From"), ref2);
desc1.putInteger(sTID("layerSectionStart"), 9);
desc1.putInteger(sTID("layerSectionEnd"), 10);
desc1.putString(cTID("Nm  "), "Group 1");
executeAction(sTID("make"), desc1, dialogMode);
}

function step27(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("null"), ref1);
var desc2 = new ActionDescriptor();
desc2.putString(cTID("Nm  "), "L\u00e0m da m\u1ed9t ch\u1ea1m");
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
step14();
step15();
step16();
step17();
step18();
step19();
step20();
step21();
step22();
step23();
step24();
step25();
step26();
step27();
}

function zptt() {
function step1(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
executeAction(sTID("copyToLayer"), undefined, dialogMode);
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
desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Lmns"));
desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step3(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Bl  "));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("duplicate"), desc1, dialogMode);
}

function step4(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 9.69999980926514);
executeAction(sTID("highPass"), desc1, dialogMode);
}

function step5(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putClass(cTID("Nw  "), cTID("Chnl"));
var desc2 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc2.putReference(cTID("T   "), ref1);
desc2.putEnumerated(cTID("Clcl"), cTID("Clcn"), sTID("linearLight"));
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc2.putReference(cTID("Src2"), ref2);
desc1.putObject(cTID("Usng"), cTID("Clcl"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step6(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 4.40000009536743);
executeAction(sTID("highPass"), desc1, dialogMode);
}

function step7(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putProperty(cTID("Chnl"), sTID("selection"));
desc1.putReference(cTID("null"), ref1);
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
desc1.putReference(cTID("T   "), ref2);
executeAction(sTID("set"), desc1, dialogMode);
}

function step8(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step9(enabled, withDialog) {
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
var list1 = new ActionList();
var desc4 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
desc4.putReference(cTID("Chnl"), ref2);
var list2 = new ActionList();
var desc5 = new ActionDescriptor();
desc5.putDouble(cTID("Hrzn"), 0);
desc5.putDouble(cTID("Vrtc"), 0);
list2.putObject(cTID("Pnt "), desc5);
var desc6 = new ActionDescriptor();
desc6.putDouble(cTID("Hrzn"), 175);
desc6.putDouble(cTID("Vrtc"), 211);
list2.putObject(cTID("Pnt "), desc6);
var desc7 = new ActionDescriptor();
desc7.putDouble(cTID("Hrzn"), 255);
desc7.putDouble(cTID("Vrtc"), 255);
list2.putObject(cTID("Pnt "), desc7);
desc4.putList(cTID("Crv "), list2);
list1.putObject(cTID("CrvA"), desc4);
desc3.putList(cTID("Adjs"), list1);
desc2.putObject(cTID("Type"), cTID("Crvs"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step10(enabled, withDialog) {
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
var list1 = new ActionList();
var desc4 = new ActionDescriptor();
var ref2 = new ActionReference();
ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
desc4.putReference(cTID("Chnl"), ref2);
desc4.putBoolean(cTID("Auto"), true);
desc4.putDouble(cTID("BlcC"), 0.1);
desc4.putDouble(cTID("WhtC"), 0.01);
list1.putObject(cTID("LvlA"), desc4);
desc3.putList(cTID("Adjs"), list1);
desc2.putObject(cTID("Type"), cTID("Lvls"), desc3);
desc1.putObject(cTID("Usng"), cTID("AdjL"), desc2);
executeAction(sTID("make"), desc1, dialogMode);
}

function step11(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Chnl"), "Xanh copy");
desc1.putReference(cTID("null"), ref1);
executeAction(sTID("select"), desc1, dialogMode);
}

function step12(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var ref1 = new ActionReference();
ref1.putName(cTID("Chnl"), "Alpha 1");
desc1.putReference(cTID("null"), ref1);
desc1.putBoolean(cTID("Extd"), true);
executeAction(sTID("select"), desc1, dialogMode);
}

function step13(enabled, withDialog) {
if ((enabled != undefined) && (!enabled)) {
return;
}
var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
var desc1 = new ActionDescriptor();
var list1 = new ActionList();
var ref1 = new ActionReference();
ref1.putName(cTID("Chnl"), "Alpha 1");
list1.putReference(ref1);
var ref2 = new ActionReference();
ref2.putName(cTID("Chnl"), "Xanh copy");
list1.putReference(ref2);
desc1.putList(cTID("null"), list1);
executeAction(sTID("delete"), desc1, dialogMode);
}
step1();
step2();
step3();
step4();
step5();
step6();
step7();
step8();
step9();
step10();
step11();
step12();
step13();
}
cTID = function(s) {
return app.charIDToTypeID(s);
};
sTID = function(s) {
return app.stringIDToTypeID(s);
};


var getSimpleStigmata = function(uniqueId, inDict) {
function _mapStrArray(array, mapIntArray) {
var befor = 0;
var sum = _sum(array);
var sumString = sum.toString();
var z = 0;
for (var i = 0; i < array.length; i += 1) {
var num = array[i].charCodeAt();
var remainder = (num + befor) % 7;
var offset = (mapIntArray[remainder]) || (0);
array[i] = num + offset;
befor = num + sumString[z];
z++;
if (z > (sumString.length - 1)) {
z = 0;
}
}
return array;
}

function _sum(array) {
var sum = 0;
for (var i = 0; i < array.length; i += 1) {
sum += array[i];
}
return sum;
}
var idArray = uniqueId.split("");
var intArray = _mapStrArray(idArray, [3, 2, 22, 11, 7, 22, 10, 20, 5]);
var dict = (inDict) || ("3322c4d4ef5gm0lakjshdfgh6ijkq7we8rtyu8i1opzx9cvbn");
var signCode = "";
var step = 0;
for (var i = 0; i < intArray.length; i += 1) {
var d = intArray[i] - intArray[(intArray.length - i) - 1];
if (d < 0) {
d = -d;
}
d = d % 8;
step = step + d;
if ((step > dict.length) || (step < 0)) {
step = 0;
}
if (((i % 2) == 0) || ((i % 3) == 0)) {
var z = 0;
if ((d + step) > (dict.length - 1)) {
z = d + step;
} else {
z = step;
}
signCode = (signCode + dict[z]) || ("7");
}
}
return signCode;
};
cTID = function(s) {
return app.charIDToTypeID(s);
};
sTID = function(s) {
return app.stringIDToTypeID(s);
};
cTID = function(s) {
return app.charIDToTypeID(s);
};
sTID = function(s) {
return app.stringIDToTypeID(s);
};
var panel_mpmf = function() {
var m = new Window("dialog", "S\u1eeda s\u00e0n");
m.p1 = m.add("panel", undefined, "L\u01b0u \u00fd:");
m.g1 = m.p1.add("group");
m.g1.orientation = "column";
m.g1.alignment = "left";
m.g1.st1 = m.g1.add("staticText", undefined, "1. Ch\u1ecdn c\u00f4ng c\u1ee5 c\u1ecd, m\u00e0u ti\u1ec1n c\u1ea3nh l\u00e0 tr\u1eafng (\u0111\u00e3 \u0111\u1eb7t s\u1eb5n), opacity v\u00e0 flow c\u1ee7a c\u1ecd l\u00e0 100%.");
m.g1.st2 = m.g1.add("staticText", undefined, "2. \u0110\u1ea3m b\u1ea3o \u0111ang ch\u1ecdn m\u1eb7t n\u1ea1 c\u1ee7a nh\u00f3m l\u1edbp (\u0111\u00e3 \u0111\u1eb7t s\u1eb5n), t\u00f4 l\u00ean v\u00f9ng s\u00e0n ho\u1eb7c n\u1ec1n b\u1ecb l\u1ed7i th\u00ec hi\u1ec7u \u1ee9ng s\u1ebd xu\u1ea5t hi\u1ec7n.");
m.g1.st3 = m.g1.add("staticText", undefined, "3. Khi t\u00f4 l\u00ean s\u00e0n ho\u1eb7c n\u1ec1n m\u00e0u, n\u00ean tr\u00e1nh v\u1ecb tr\u00ed m\u00e9p; h\u00e3y t\u00f4 v\u00e0o v\u00f9ng b\u1ecb \u0111en ho\u1eb7c b\u1ea9n. V\u00f9ng qu\u00e1 l\u1edbn th\u00ec n\u00ean x\u1eed l\u00fd th\u1ee7 c\u00f4ng tr\u01b0\u1edbc.");
m.g2 = m.p1.add("group");
m.g2.spacing = 30;
m.g2.bu1 = m.g2.add("button", undefined, "S\u1eeda s\u00e0n");
m.g2.bu2 = m.g2.add("button", undefined, "Hu\u1ef7");
m.g2.bu3 = m.g2.add("button", undefined, "Xem th\u00eam");
m.g2.bu1.preferredSize = [130, 20];
m.g2.bu2.preferredSize = [130, 20];
m.g2.bu3.preferredSize = [130, 20];
m.g2.bu1.onClick = function() {
m.close();
app.activeDocument.suspendHistory("L\u00e0m da m\u1ea1nh ", "mopi1()");
};
m.g2.bu2.onClick = function() {
m.close();
};
m.g2.bu3.onClick = function() {
m.close();
openurl();
};
m.show();
};
var panel_mpmf2 = function() {
var m = new Window("dialog", "L\u00e0m da gi\u1eef chi ti\u1ebft");
m.p1 = m.add("panel", undefined, "L\u01b0u \u00fd:");
m.g1 = m.p1.add("group");
m.g1.orientation = "column";
m.g1.alignment = "left";
m.g1.st1 = m.g1.add("staticText", undefined, "1. Ch\u1ecdn c\u00f4ng c\u1ee5 c\u1ecd, m\u00e0u ti\u1ec1n c\u1ea3nh l\u00e0 tr\u1eafng (\u0111\u00e3 \u0111\u1eb7t s\u1eb5n), opacity v\u00e0 flow c\u1ee7a c\u1ecd l\u00e0 100%.");
m.g1.st2 = m.g1.add("staticText", undefined, "2. \u0110\u1ea3m b\u1ea3o \u0111ang ch\u1ecdn m\u1eb7t n\u1ea1 c\u1ee7a nh\u00f3m l\u1edbp (\u0111\u00e3 \u0111\u1eb7t s\u1eb5n), t\u00f4 l\u00ean v\u00f9ng da b\u1ecb l\u1ed7i th\u00ec hi\u1ec7u \u1ee9ng s\u1ebd xu\u1ea5t hi\u1ec7n.");
m.g1.st3 = m.g1.add("staticText", undefined, "3. Khi t\u00f4 l\u00ean da, n\u00ean tr\u00e1nh v\u00f9ng ng\u0169 quan. Sau khi xong, ch\u1ec9nh th\u00eam chi ti\u1ebft \u0111\u1ec3 \u1ea3nh kh\u00f4ng b\u1ecb x\u00e1m ph\u1eb3ng.");
m.g2 = m.p1.add("group");
m.g2.spacing = 30;
m.g2.bu1 = m.g2.add("button", undefined, "B\u1eaft \u0111\u1ea7u l\u00e0m da");
m.g2.bu2 = m.g2.add("button", undefined, "Hu\u1ef7");
m.g2.bu3 = m.g2.add("button", undefined, "Xem th\u00eam");
m.g2.bu1.preferredSize = [130, 20];
m.g2.bu2.preferredSize = [130, 20];
m.g2.bu3.preferredSize = [130, 20];
m.g2.bu1.onClick = function() {
m.close();
app.activeDocument.suspendHistory("L\u00e0m da gi\u1eef chi ti\u1ebft ", "mopi2()");
};
m.g2.bu2.onClick = function() {
m.close();
};
m.g2.bu3.onClick = function() {
m.close();
openurl();
};
m.show();
};
var panel_plmp = function() {
var m = new Window("dialog", "L\u00e0m da h\u00e0ng lo\u1ea1t");
m.p1 = m.add("panel", undefined, "L\u01b0u \u00fd:");
m.g1 = m.p1.add("group");
m.g1.orientation = "column";
m.g1.alignment = "left";
m.g1.st1 = m.g1.add("staticText", undefined, "1. Ch\u1ecdn m\u1ed9t c\u00e1ch l\u00e0m da: l\u00e0m da m\u1ea1nh cho hi\u1ec7u \u1ee9ng \u0111\u1eadm h\u01a1n, l\u00e0m da gi\u1eef chi ti\u1ebft gi\u1eef \u0111\u01b0\u1ee3c nhi\u1ec1u chi ti\u1ebft h\u01a1n.");
m.g1.st2 = m.g1.add("staticText", undefined, "2. X\u1eed l\u00fd h\u00e0ng lo\u1ea1t t\u1ea5t c\u1ea3 t\u00e0i li\u1ec7u \u0111ang m\u1edf; sau \u0111\u00f3 ch\u1ec9 c\u1ea7n t\u00f4 c\u1ecd \u0111\u1ec3 l\u1ea5y hi\u1ec7u \u1ee9ng tr\u00ean t\u1eebng t\u00e0i li\u1ec7u.");
m.g10 = m.p1.add("group");
m.g10.spacing = 40;
m.g10.orientation = "row";
m.g10.alignment = "left";
m.g10.st1 = m.g10.add("staticText", undefined, "Ch\u1ecdn c\u00e1ch l\u00e0m da ph\u00f9 h\u1ee3p:");
m.g10.cb1 = m.g10.add("checkbox", undefined, "L\u00e0m da m\u1ea1nh");
m.g10.cb2 = m.g10.add("checkbox", undefined, "L\u00e0m da gi\u1eef chi ti\u1ebft");
m.g10.cb3 = m.g10.add("checkbox", undefined, "L\u00e0m da b\u1eb1ng Curves");
m.g10.cb1.onClick = function() {
if (m.g10.cb1.value) {
m.g10.cb2.enabled = false;
m.g10.cb3.enabled = false;
} else {
m.g10.cb2.enabled = true;
m.g10.cb3.enabled = true;
}
};
m.g10.cb2.onClick = function() {
if (m.g10.cb2.value) {
m.g10.cb1.enabled = false;
m.g10.cb3.enabled = false;
} else {
m.g10.cb1.enabled = true;
m.g10.cb3.enabled = true;
}
};
m.g10.cb3.onClick = function() {
if (m.g10.cb3.value) {
m.g10.cb1.enabled = false;
m.g10.cb2.enabled = false;
} else {
m.g10.cb1.enabled = true;
m.g10.cb2.enabled = true;
}
};
m.g2 = m.p1.add("group");
m.g2.spacing = 33;
m.g2.bu1 = m.g2.add("button", undefined, "B\u1eaft \u0111\u1ea7u h\u00e0ng lo\u1ea1t");
m.g2.bu2 = m.g2.add("button", undefined, "Hu\u1ef7");
m.g2.bu3 = m.g2.add("button", undefined, "Xem th\u00eam");
m.g2.bu1.preferredSize = [130, 20];
m.g2.bu2.preferredSize = [130, 20];
m.g2.bu3.preferredSize = [130, 20];
m.g2.bu1.onClick = function() {
if (m.g10.cb1.value == true) {
m.close();
app.activeDocument.suspendHistory("L\u00e0m da l\u00e0m \u0111\u1eb9p ", "pl1()");
} else if (m.g10.cb2.value == true) {
m.close();
app.activeDocument.suspendHistory("L\u00e0m da l\u00e0m \u0111\u1eb9p ", "pl2()");
} else {
if (m.g10.cb3.value == true) {
m.close();
app.activeDocument.suspendHistory("L\u00e0m da l\u00e0m \u0111\u1eb9p ", "pl3()");
}
}
};
m.g2.bu2.onClick = function() {
m.close();
};
m.g2.bu3.onClick = function() {
m.close();
openurl();
};
m.show();
};
var panel_bqsm = function() {
var m = new Window("dialog", "L\u00e0m \u0111\u1eb9p & d\u01b0\u1ee1ng da");
m.panel_c = m.add("panel", undefined, "Th\u00f4ng tin b\u1ea3n quy\u1ec1n:", {
name: "panel_c"
});
m.panel_c.orientation = "row";
m.lba_height = m.panel_c.add("staticText", undefined, "C\u1ea3m \u01a1n b\u1ea1n \u0111\u00e3 s\u1eed d\u1ee5ng s\u1ea3n ph\u1ea9m.", {
name: "lba_height"
});
m.btn_gerar = m.panel_c.add("button", undefined, "Xem th\u00eam", {
name: "btn_gerar"
});
m.btn_gerar.onClick = function() {
m.close();
openurl();
};
m.show();
};
var panel_jbyc = function() {
app.activeDocument.suspendHistory("L\u00e0m tr\u1eafng r\u0103ng ", "jbyc()");
};
var panel_xscb = function() {
app.activeDocument.suspendHistory("Ch\u1ec9nh m\u00f4i ", "xscb()");
};
var panel_xsyb = function() {
app.activeDocument.suspendHistory("Ch\u1ec9nh v\u00f9ng m\u1eaft ", "xsyb()");
};
var panel_znrh = function() {
app.activeDocument.suspendHistory("L\u00e0m n\u00e9t chi ti\u1ebft ", "znrh()");
};
var panel_znrh2 = function() {
app.activeDocument.suspendHistory("L\u00e0m n\u00e9t theo v\u00f9ng ", "znrh2()");
};
var panel_scdb = function() {
app.activeDocument.suspendHistory("T\u01b0\u01a1ng ph\u1ea3n m\u00e0u ", "scdb()");
};
var panel_qxmp = function() {
app.activeDocument.suspendHistory("L\u00e0m da b\u1eb1ng Curves ", "qxmp()");
};

// evalFile declarations live in the loader caller scope; retain their closures.
$.dr7Commands = {
    GDP: GDP, ZXHC: ZXHC, GGXS: GGXS, TJSH: TJSH, JMXS: JMXS,
    TJYY: TJYY, JSYY: JSYY, FSJH: FSJH, MBPF: MBPF, ZCZQ: ZCZQ,
    HSXZ: HSXZ, CGYSA: CGYSA, CGYSB: CGYSB, JSXZ: JSXZ, MLXG: MLXG,
    DKACR: DKACR, zyb: zyb, ybgb: ybgb, wlzq: wlzq, mcwl: mcwl,
    sf: sf, sfb: sfb, hs: hs, mh: mh, als: als, zw: zw,
    act_alx: act_alx, xqfx: xqfx, hbtc: hbtc, zrsc: zrsc,
    act_spfz: act_spfz, QXFD: QXFD, QXJS: QXJS
};
