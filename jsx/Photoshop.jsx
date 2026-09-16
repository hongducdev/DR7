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
