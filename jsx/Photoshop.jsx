$._ext_BUGFIX={
    run : function() {
    
	try{
	    if ($.os.match(/windows/i)) {
	        var idAdobeScriptAutomationScripts = stringIDToTypeID( "AdobeScriptAutomation Scripts" );
	            var desc1 = new ActionDescriptor();
	            var idjsNm = charIDToTypeID( "jsNm" );
	            desc1.putString( idjsNm, "Crash Bug Fix" );
	            var idjsMs = charIDToTypeID( "jsMs" );
	            desc1.putString( idjsMs, "undefined" );
	        executeAction( idAdobeScriptAutomationScripts, desc1, DialogModes.NO );
	    }
	}catch(e){};
    
    },
};

$._ext_ZO={
    run : function() {
    
var idslct = charIDToTypeID( "slct" );
    var desc2 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idzoomTool = stringIDToTypeID( "zoomTool" );
        ref1.putClass( idzoomTool );
    desc2.putReference( idnull, ref1 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc2.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc2.putBoolean( idforceNotify, true );
executeAction( idslct, desc2, DialogModes.NO );
    
    },
};

$._ext_SP={
    run : function() {
    
var idslct = charIDToTypeID( "slct" );
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref2 = new ActionReference();
        var idspotHealingBrushTool = stringIDToTypeID( "spotHealingBrushTool" );
        ref2.putClass( idspotHealingBrushTool );
    desc3.putReference( idnull, ref2 );
executeAction( idslct, desc3, DialogModes.NO );
    
    },
};

$._ext_HB={
    run : function() {
    
var idslct = charIDToTypeID( "slct" );
    var desc5 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idmagicStampTool = stringIDToTypeID( "magicStampTool" );
        ref4.putClass( idmagicStampTool );
    desc5.putReference( idnull, ref4 );
executeAction( idslct, desc5, DialogModes.NO );
    
    },
};

$._ext_CL={
    run : function() {
    
var idslct = charIDToTypeID( "slct" );
    var desc6 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref5 = new ActionReference();
        var idClTl = charIDToTypeID( "ClTl" );
        ref5.putClass( idClTl );
    desc6.putReference( idnull, ref5 );
executeAction( idslct, desc6, DialogModes.NO );
    
    },
};


$._ext_PA={
    run : function() {
    
var idslct = charIDToTypeID( "slct" );
    var desc7 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref6 = new ActionReference();
        var idpatchSelection = stringIDToTypeID( "patchSelection" );
        ref6.putClass( idpatchSelection );
    desc7.putReference( idnull, ref6 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc7.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc7.putBoolean( idforceNotify, true );
executeAction( idslct, desc7, DialogModes.NO );
    
    },
};


$._ext_PC={
    run : function() {
    
    var idslct = charIDToTypeID( "slct" );
    var desc12 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref11 = new ActionReference();
        var idPaTl = charIDToTypeID( "PaTl" );
        ref11.putClass( idPaTl );
    desc12.putReference( idnull, ref11 );
executeAction( idslct, desc12, DialogModes.NO );
    
    },
};


$._ext_SA={
    run : function() {
        
var idslct = charIDToTypeID( "slct" );
    var desc4 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref3 = new ActionReference();
        var idcolorSamplerTool = stringIDToTypeID( "colorSamplerTool" );
        ref3.putClass( idcolorSamplerTool );
    desc4.putReference( idnull, ref3 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc4.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc4.putBoolean( idforceNotify, true );
executeAction( idslct, desc4, DialogModes.NO );
    
    },
};


$._ext_MA={
    run : function() {
        
var idslct = charIDToTypeID( "slct" );
    var desc5 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idmarqueeRectTool = stringIDToTypeID( "marqueeRectTool" );
        ref4.putClass( idmarqueeRectTool );
    desc5.putReference( idnull, ref4 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc5.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc5.putBoolean( idforceNotify, true );
executeAction( idslct, desc5, DialogModes.NO );
    
    },
};


$._ext_BW={
    run : function() {

try{
var idslct = charIDToTypeID( "slct" );
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idHstS = charIDToTypeID( "HstS" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idPrvs = charIDToTypeID( "Prvs" );
        ref1.putEnumerated( idHstS, idOrdn, idPrvs );
    desc3.putReference( idnull, ref1 );
executeAction( idslct, desc3, DialogModes.NO );
}catch(e){}
    
    },
};

$._ext_FW={
    run : function() {
        
try{
var idslct = charIDToTypeID( "slct" );
    var desc5 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref2 = new ActionReference();
        var idHstS = charIDToTypeID( "HstS" );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idNxt = charIDToTypeID( "Nxt " );
        ref2.putEnumerated( idHstS, idOrdn, idNxt );
    desc5.putReference( idnull, ref2 );
executeAction( idslct, desc5, DialogModes.NO );
}catch(e){}
    
    },
};

$._ext_LA={
    run : function() {
     
var idslct = charIDToTypeID( "slct" );
    var desc2 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref1 = new ActionReference();
        var idlassoTool = stringIDToTypeID( "lassoTool" );
        ref1.putClass( idlassoTool );
    desc2.putReference( idnull, ref1 );
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    desc2.putBoolean( iddontRecord, true );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    desc2.putBoolean( idforceNotify, true );
executeAction( idslct, desc2, DialogModes.NO );
    
    },
};