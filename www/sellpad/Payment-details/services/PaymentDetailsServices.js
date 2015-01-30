
angular.module('paymentDetails.services',[])

.factory('PaymentDetailsService',function($q,DataService) {
	var payments = [{'cus':'Chandana Bandara','Amount':12000,'Date':'21/12/2014','Pmethod':'Cash Payment','des':'On Time','id':0},
					{'cus':'Sampath Disanayake','Amount':13500,'Date':'11/12/2014','Pmethod':'Cash Payment','des':'On Time','id':1},
					{'cus':'Duminda Bandara','Amount':5000,'Date':'11/11/2014','Pmethod':'Cash Payment','des':'On Time','id':2},
					{'cus':'Nalaka Sampath','Amount':7500,'Date':'01/12/2014','Pmethod':'Cash Payment','des':'On Time','id':3}
					]; 

	var paymentMethods = ['Cash Payment','Check Payments','Deposit to the bank']; 

	return{
		getPayment : function(){
			return payments;
		},
		getPaymentById : function(id){
			return payments[id];
		},
		getCustomers : function(){
			var deferd = $q.defer();
			DataService.findAll('Party','').then(function(customers){
				deferd.resolve(customers);
			});
			return deferd.promise;
		},
		getPaymentMethods : function(){
			return paymentMethods;
		}
	}
})