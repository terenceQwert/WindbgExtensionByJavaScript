// Root of Script
host.diagnostics.debugLog("***>; Code at the very top (root) of the script is always run \n");


function initializeScript()
{
    // Add code here that you want to run every time the script is loaded. 
    // We will just send a message to indicate that function was called.
    host.diagnostics.debugLog("***>; initializeScript was called \n");
}

function invokeScript()
{
    // Add code here that you want to run every time the script is executed. 
    // We will just send a message to indicate that function was called.
    host.diagnostics.debugLog("***>; invokeScript was called \n");
}


function uninitializeScript()
{
    // Add code here that you want to run every time the script is unloaded. 
    // We will just send a message to indicate that function was called.
    host.diagnostics.debugLog("***>; uninitialize was called\n");
}


function main()
{
    // main is just another function name in JavaScript
    // main is not called by .scriptload or .scriptrun  
    host.diagnostics.debugLog("***>; main was called \n");
}