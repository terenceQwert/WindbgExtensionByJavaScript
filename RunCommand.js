"use strict"

function RunCommands()
{
  var ctl = host.namespace.Debugger.Utility.Control;   
  var output = ctl.ExecuteCommand("u");
  host.diagnostics.debugLog("***> Dispalying command output\n");

  for( var line in output)
  {
    host.diagnostics.debugLog(" ", line, "\n");
  }
  host.diagnostics.debugLog("***> Exiting Runcommands function\n");
}

function initializeScript()
{
  host.diagnostics.debugLog("***> initializeScript was called\n");
}

function invokeScript()
{
  host.diagnostics.debugLog("***> invokeScript was called\n");
}

function uninitializeScript()
{
  host.diagnostics.debugLog("***> uninitialize was called\n");
}

