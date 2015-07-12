/*
Copyright 2015
Author John Hosie 
 
  All rights reserved. This program and the accompanying materials
  are made available under the terms of the Eclipse Public License v1.0
  which accompanies this distribution, and is available at
  http://www.eclipse.org/legal/epl-v10.html
 
  Contributors:
      John Hosie - initial implementation 
*/



(function(){
  angular.module('iibAdminJs',[])
    .provider('iibIntegrationBus',iibIntegrationBusProviderFunction)
    ;

  function iibIntegrationBusProviderFunction(){
    function defaultSimulator(integrationBus){
      integrationBus
      .addIntegrationNode("Node")
      .addIntegrationServer("Server")
      .addApplication("Application")
      .addMessageFlow("MessageFlow");
    }
    this._simulator=null;
    this.simulate=function(simulator){
      //simulator is a function that will take an empty integration bus simulation and 
      //populate its structure
      if(simulator != undefined){
        this._simulator=simulator;  
      }else{
        this._simulator=defaultSimulator;
      }      
    };
    this.$get=function(){      
      //TODO inject paho
      var integrationBus = {
        obj:null,
        waiters:[],
        ready:function(callback){        
          if(this.obj!=null){
            callback(null,this.obj);
          }else{
            this.waiters.push(callback);          
          }
        }
      };
      function onLoad(err,obj){
        integrationBus.obj=obj;
        integrationBus.waiters.forEach(function(waiter){
          waiter(err,obj);
        });
        integrationBus.waiters=[];
      }
      if(this._simulator != null) {
        var simulatorCallback = this._simulator;
        window.Integration.simulateIntegrationBus(function(err,integrationBus){
          if(err==null){                     
            //call the registered callback to populate the simulation
            simulatorCallback(integrationBus);            
          }
          onLoad(err,integrationBus);                      
        });
      }else{
        window.Integration.getIntegrationBus(onLoad);
      }
      return integrationBus;
    };        
  }
})();
  
