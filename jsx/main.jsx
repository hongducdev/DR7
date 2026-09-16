


















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
cTID = function(s) {
return app.charIDToTypeID(s);
};
sTID = function(s) {
return app.stringIDToTypeID(s);
};

// evalFile declarations live in the loader caller scope; retain their closures.
$.dr7Commands = {
    GGXS: GGXS, TJSH: TJSH, JMXS: JMXS, TJYY: TJYY, FSJH: FSJH, MBPF: MBPF, ZCZQ: ZCZQ, DKACR: DKACR
};
