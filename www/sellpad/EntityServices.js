var app = angular.module('entityServices',['ionic','breeze.angular.q']);

app.run(['$q','use$q', function ($q, use$q) {
            use$q($q);
}]);

app.factory('EntityServices',function($q){

	//var serviceName = 'http://192.168.1.100/adrotec/Magnet/server/web/app_dev.php/system/api';
	var serviceName = 'http://magnetdemo.herokuapp.com/web/app_dev.php/system/api';
  var entityManager = new breeze.EntityManager(serviceName);
  entityManager.fetchMetadata();
  	
	return {
    	addNewCustomer : function(customer){
    		var name = customer.firstName + ' ' + customer.lastName;
    		console.log(name);
    		var Customer = entityManager.createEntity('Party');
    		Customer.firstName  = customer.firstName;
    		Customer.lastName  = customer.lastName;
    		Customer.name  = customer.name;

    		entityManager.saveChanges().then(function(data){
            		return data;
        	}) 

    	},
    	addNewInvoice : function(Invoice){

        	var invoice = entityManager.createEntity('SalesInvoice');
        	console.log(Invoice.firstName);
        	//invoice.pary.firstName  = Invoice.firstName;
        	//invoice.pary.lastName  = Invoice.lastName;
       		// invoice.pary.name  = Invoice.firstName + ' ' + Invoice.lastName ;
        	invoice.dueDate = Invoice.dueDate;
        	invoice.createdAt = new Date(Date.now());
        	invoice.invoiceDate = new Date(Date.now());
        	invoice.invoiceTotal = Invoice.invoiceTotal;

        	console.log(invoice.invoiceTotal);

        	entityManager.saveChanges().then(function(data){
            	return data;
            	console.log('saveChanges');
        	})
    	}		
	}
})