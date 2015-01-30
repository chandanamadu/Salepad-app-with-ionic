var app = angular.module('Customer.services',['dataService']);

app.factory('CustomerService',function(DataService,EntityServices,$q){
  	
	return {
		findAll: function(){
        var deferred = $q.defer();
        	DataService.findAll('Party','').then(function(customers){
              deferred.resolve(customers);
          })
          return deferred.promise;  
    	},
    	findById : function(id){
      		var deferred = $q.defer();
          DataService.findById('Party',id).then(function(customer){
              deferred.resolve(customer);
          })
     		   return deferred.promise;
    	},
    	addNewCustomer : function(customer){
    		EntityServices.addNewCustomer(customer);
    	},
    	findByName : function(name){
      
      			var deferred = $q.defer();
            DataService.findByName('Party',name,'').then(function(customers){
              deferred.resolve(customers)
            })
      			return deferred.promise;
        }
		
	}

})