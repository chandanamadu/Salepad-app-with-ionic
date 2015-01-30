var app = angular.module('dataService',['ionic','breeze.angular.q']);

app.run(['$q','use$q', function ($q, use$q) {
            use$q($q);
}]);

app.factory('DataService',function($q){

	//var serviceName = 'http://192.168.1.100/adrotec/Magnet/server/web/app_dev.php/system/api';
	var serviceName = 'http://magnetdemo.herokuapp.com/web/app_dev.php/system/api';
  	var entityManager = new breeze.EntityManager(serviceName);

  	function getLocalResults(query){
    	if(!entityManager.metadataStore.isEmpty()){
    		return entityManager.executeQueryLocally(query);
    	}
  		return [];
  	}

  	function getResults(locally,query){
  		var deferred = $q.defer();
  		if(locally.length){
        		deferred.resolve(locally);
        	}else{
        		entityManager.executeQuery(query).then(function(data){
                	deferred.resolve(data.results);
        		},function(error){
	                console.log(error);
        		});
        	}
        	return deferred.promise;
  	}

	return {
		findAll: function(from,expand){
			var deferred = $q.defer();
			var query = new breeze.EntityQuery().from(from);
			if(expand){
				query = query.expand(expand);
			}
        	var deferred = $q.defer();
        	var results = getLocalResults(query);
        	getResults(results,query).then(function(data){
        		deferred.resolve(data);
        	})
        	
        	return deferred.promise;   
    	},
    	findById : function(from,id){
      		var deferred = $q.defer();
      		//sconsole.log(id);
      		var query = new breeze.EntityQuery()
      						.from(from)
      						.where('id','eq',id);
  			var results = getLocalResults(query);
  			getResults(results,query).then(function(data){
  				deferred.resolve(data[0]);
  			})
     		 return deferred.promise;
    	},
    	findByName : function(from,name,nav){
    			var deferred = $q.defer();
      			var query = new breeze.EntityQuery().from(from);
      			if(!nav){
      				query = query.where('name','contains',name);
      			}else{
      				query = query.where(nav+'.name','contains',name);
      			}
      			if(name){
          				var results = getLocalResults(query);
        				getResults(results,query).then(function(data){
        				deferred.resolve(data);
        				})
      			}
      			return deferred.promise;
        }		
	}
})