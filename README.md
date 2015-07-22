#iib-ops-js

A java script module that encapsulates the IBM Integration Bus administration and operational monitoring HTTP and MQTT interfaces. With this module, you can access those capabilities via java script objects, functions and callbacks.

This works with iib-ops-rest.

The initial prototype for this repository started life as a subset of a fork of [integration-dashboard](https://github.com/hosie/integration-dashboard)

## Try it
### Install
1. Download and install node.js - http://nodejs.org/download/
2. Install http static server for node ```npm instal -g http-server```
3. Download - [iib-ops-js] (https://github.com/ot4i/iib-ops-js/archive/master.zip)  and unzip

### Start the server
1. cd to the directory where you unzipped in (2). ``` cd iib-ops-js ```
2. Start the server ``` http-server -p 8080 -c-1 -o ```

### Run the unit test
Point your browser at [http://localhost:8080/unittest.html](http://localhost:8080/unittest.html)

### What next
Get on with coding your javascript client.  Look in the test file ```test/tests.js``` to understand the interfaces.

NOTE, if the functions describe(), it(), done() and should  are new to you, then you might want to take a look at the documentation for mocha which is the unit test framework being used here.

### Or?
Take a look at [iib-ops-widgets] (https://github.com/ot4i/iib-ops-widgets) as a useful framwork for embedding widgets within your own Web App to visualise the data from iib-ops-js.
