
var app = angular.module('sellsOrder.services',['dataService']);

app.factory('getTestData',function(){
  var sellectedItems = [{'name':'bread' ,'subTotal':1200,'units':50 },
                        {'name':'teaCake','subTotal':540,'units':20},
                        {'name':'necto','subTotal':1350,'units':20},
                        {'name':'anchor','subTotal':12500,'units':40}
                        ];
  return{
    getSellectedItems:function(){
      return sellectedItems;
    }
  } 
})
app.factory('SellsOrderService',function(EntityServices,DataService,$q,getTestData) {
	
	return{
		  findAll: function(){
          var deferred = $q.defer();
          DataService.findAll('Order','party').then(function(orders){
            deferred.resolve(orders);
          })
          return deferred.promise;        
    	},
    	findById : function(id){
         var deferred = $q.defer();
          DataService.findById('Order',id).then(function(order){
              deferred.resolve(order);
          })
           return deferred.promise;
   		 },
   		 findByName : function(name){
   		    var deferred = $q.defer();
          DataService.findByName('Order',name,'party').then(function(invoices){
            deferred.resolve(invoices);
          })
          return deferred.promise;
   		 },
   		 getCustomers : function(){
   		 	  var deferred = $q.defer();
          DataService.findAll('Party','').then(function(customers){
            deferred.resolve(customers);
          })
          return deferred.promise;
   		 },
       getItems : function(){
          var deferred = $q.defer();
          DataService.findAll('Item','').then(function(items){
            deferred.resolve(items);
          })
          return deferred.promise;
       },
       addNewCustomer : function(customer){
          EntityServices.addNewCustomer(customers);
      },
      getSellectedItems : function(){
         return getTestData.getSellectedItems();
      }

	}
})