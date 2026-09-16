$._ext_BTNFADE = {
    run: function () {
ErrStrs = {};
ErrStrs.USER_CANCELLED = localize("$$$/ScriptingSupport/Error/UserCancelled=Ng\u01b0\u1eddi d\u00f9ng \u0111\u00e3 hu\u1ef7 thao t\u00e1c");
try {
var idFade = charIDToTypeID("Fade");
executeAction(idFade, undefined, DialogModes.ALL);
} catch (e) {
if (e.toString().indexOf(ErrStrs.USER_CANCELLED) != -1) {

} else {
alert(localize("$$$/ScriptingSupport/Error/CommandNotAvailable=Vui l\u00f2ng d\u00f9ng c\u1ecd t\u00f4 r\u1ed3i m\u1edbi d\u00f9ng l\u1ec7nh n\u00e0y"));
}
}

    }
};
