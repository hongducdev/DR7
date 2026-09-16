// New MHK implementation: route formerly missing pp.js controls through the guarded bridge.
window.mhkPP = function (name) {
    if (/^(WHITE|WARM|DETAIL|HIDE|MIXER)$/.test(name)) window.onClickButton('PP_' + name);
};
