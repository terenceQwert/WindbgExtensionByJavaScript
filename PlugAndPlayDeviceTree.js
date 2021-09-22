// PlugAndPlayDeviceTree.js
// An ES6 generator function which recursively filters the device tree looking for PCI devices in the started state.
//
function *filterDevices(deviceNode)
{
    //
    // If the device instance path has "PCI" in it and is started (state == 776), yield it from the generator.
    //
    if (deviceNode.InstancePath.indexOf("PCI") != -1 && deviceNode.State == 776)
    {
        yield deviceNode;
    }
 
    //
    // Recursively invoke the generator for all children of the device node.
    //
    for (var childNode of deviceNode.Children)
    {
        yield* filterDevices(childNode);
    }
}
 
//
// A function which finds the device tree of the first session in the debugger and passes it to our filter function.
//
function filterAllDevices()
{
  // run this method via kd -->0: kd> dx Debugger.State.Scripts.PlugAndPlayDeviceTree.Contents.filterAllDevices()

  // host.diagnostics.debugLog("filterAllDevices Begin\n")
  // return filterDevices(host.namespace.Debugger.Sessions.First().Devices.DeviceTree.First());
  //
  // If you tested it on VM, please use following lines
  // 
  return filterDevices(host.namespace.Debugger.Sessions.First().Devices.LogicalProcessors.First());

}