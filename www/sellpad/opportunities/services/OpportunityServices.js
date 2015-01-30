
angular.module('opportunity.services',[])

.factory('opportunityService',function($q,DataService) {
	var opportunities =[{'cus':'Chandana Bandara','Odate':'12/12/2014','Edate':'15/12/2014','total':'12000','des':'cake order','id':0},
						{'cus':'Kasun Bandara','Odate':'11/12/2014','Edate':'16/12/2014','total':'1000','des':'biscuits order','id':1},
						{'cus':'Migara Perera','Odate':'25/11/2014','Edate':'03/12/2014','total':'5000','des':'cake order','id':2}
						];
	return {
		getOpportunities : function(){
			return opportunities;
		},
		findById : function(id){
			return opportunities[id];
		},
		getCustomers : function(){
			var deferd = $q.defer();
			DataService.findAll('Party','').then(function(Customers){
				deferd.resolve(Customers);
			})
			return deferd.promise;
		},
		getItems : function(){
			var deferd = $q.defer();
			DataService.findAll('Item','').then(function(items){
				deferd.resolve(items);
			})
			return deferd.promise;
		}
	}
})