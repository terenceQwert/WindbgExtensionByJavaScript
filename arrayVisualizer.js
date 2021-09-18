function initializeScript()
{
    //
    // Define a visualizer class for the object.
    //
    class myVisualizer
    {
        //
        // Create an ES6 generator function which yields back all the values in the array.
        //
        *[Symbol.iterator]()
        {
            var size = this.m_size;
            var ptr = this.m_pValues;
            for (var i = 0; i < size; ++i)
            {
                yield ptr.dereference();

                //
                // Note that the .add(1) method here is effectively doing pointer arithmetic on
                // the underlying pointer.  It is moving forward by the size of 1 object.
                //
                ptr = ptr.add(1);
            }
        }
    }

    return [new host.typeSignatureRegistration(myVisualizer, "Simple1DArray")];
}