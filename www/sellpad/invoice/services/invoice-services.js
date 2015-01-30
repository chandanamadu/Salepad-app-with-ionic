var app = angular.module('invoice.services',['dataService']);


app.factory('InvoiceService', function($q,DataService,EntityServices) {
   
  return {
   
    findAll: function(){        
        var deferred = $q.defer();
        DataService.findAll('SalesInvoice','party').then(function(invoices){
          deferred.resolve(invoices);
        })
        return deferred.promise;       
    },
    findByName : function(name){
      
      var deferred = $q.defer();
      DataService.findByName('SalesInvoice',name,'party').then(function(invoices){
        deferred.resolve(invoices);
      })
       return deferred.promise;
          
    },
    findById : function(id){
          var deferred = $q.defer();
          DataService.findById('SalesInvoice',id).then(function(invoice){
              deferred.resolve(invoice);
          })
           return deferred.promise;
    },
    addNewInvoice : function(Invoice){
        EntityServices.addNewInvoice(Invoice);
    }
   
  }
});

