
angular.module('returnMangmnt.services',[])

.factory('ReturnMangmntService',function(DataService,$q) {
	var returnItems = [
	{'name' : 'Milk-Powder-400g','id':0 ,'units':100,'description':'DCD','total' : 12000,'Rdate':'21/12/2014','Sdate':'10/12/2014','customer':'Chandana Bandara','prize': 250},
	{'name' : 'Yogurt','id':1 ,'units':150,'description':'Expired','total' : 8000,'Rdate':'13/12/2014','Sdate':'05/12/2014','customer':'Gayan Sasanka','prize': 30},
	{'name' : 'Salmon-tin-small','id':2 ,'units':50,'description':'Damaged','total' : 5000,'Rdate':'11/11/2014','Sdate':'08/11/2014','customer':'Roshan Perera','prize': 120},
	{'name' : 'Salmon-tin-large','id':3 ,'units':20,'description':'Damaged','total' : 1200,'Rdate':'10/11/2014','Sdate':'05/11/2014','customer':'Nimal Bandara','prize': 300},
	{'name' : 'Curd-large-cup','id':4 ,'units':10,'description':'Expired','total' : 5000,'Rdate':'05/11/2014','Sdate':'01/11/2014','customer':'Agith Rathnayake','prize': 280}
	];
	
		
	return{
		getReturnItem : function(){
			return returnItems;
		},
		findById : function(id){
			return returnItems[id];
		},
		getItems : function(){
			var deferd = $q.defer();
			DataService.findAll('Item','').then(function(items){
					deferd.resolve(items);
			})
			return deferd.promise;
		},
		getCustomers : function(){
			var deferd = $q.defer();
			DataService.findAll('Party','').then(function(customers){
				deferd.resolve(customers);
			})
			return deferd.promise;
		}
	}
})