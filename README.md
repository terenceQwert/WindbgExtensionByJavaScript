# WindbgExtensionByJavaScrip

1. refer to https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/dx--display-visualizer-variables-
- To display PE associcated with the current process use this command.
kd> dx -r2 @$curprocess.Environment

- To display the TEB associated with the current thread use this command.
kd> dx -r2 @$curthread.Environment

- Use the current process Io.Handles object to display kernel handle information.
kd> dx -r1 @$curprocess.Io.Handles

2. Skills
Notice:
1. when use .scriptrun to load java script for WinDBG, please notice following 
* case-sensetive
e.g
0:001> dx Debugger.State.Scripts.HelloWorld.Contents.sayHi()
Hi from JavaScript!
Debugger.State.Scripts.HelloWorld.Contents.sayHi()

can not be 'debugger.State.Scripts.HelloWorld.Contents.sayHi()' or 'Debugger.State.Scripts.HelloWorld.Contents.Sayhi()'