#Namste react

#Parcel
-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm - written in C++
-Caching - Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-Consistent Hashing
-Differential Building - support of older browser 
-Diagnostic
-Error Handeling
-HTTPS
-Tree Shaking -remove unused codes
-Different dev and prod bundles 




Two types of import and export

default import/ export
export default Component;
import Component from "path"


-Named export/import
export const Component;
import {Component} from "path"



....
#React Hooks
(Normal Js utility functions)
-useState() -> SuperPowerful state variable in reacts  
-useEffect()


whenever a state variable is updates react re-renders the components


Reconcilation Algorithm( React-fiber)

Hooks is nothing it is a normal javascript function which react give it to us it has its own specific use case
useEffect (callbackfunction, dependancy array)

this callback function is called after your components is rendered