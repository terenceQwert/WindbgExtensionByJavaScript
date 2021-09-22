// WinDbg JavaScript sample
// Says Hello World!

// code at root will be run with .scriptrun and .scriptload

"use strict"

host.diagnostics.debugLog("***> Hello World!\n");

class __CheckArchitecture
{
  ///
  /// Add a property called 'ProcessArchitecture' on process.
  ///
  
  get ProcessArchitecture()
  {
    var guestStates=  this.Threads.Any(t=> (!(t.GuestState === undefined) && t.GuestState.Architecture =="x86"));
    if( guestStates)
      return "x86";
    else
      return "x64";
  }
};



function initializeScript()
{
  ///
  /// Extends our notion of a process to place architecture information on it. 
  ///
  return [new host.namedModelParent(__CheckArchitecture, "Debugger.Models.Process")];
}

function sayHi()
{
  
  // sayHi
  host.diagnostics.debugLog("Hi from Javascript!\n")
}

function addTwoValues( a,b)
{
  return a+b;
}
