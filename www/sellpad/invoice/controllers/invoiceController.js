angular.module('invoice.controllers', ['invoice.services'])

.controller('InvoiceListCtrl', function($scope,$filter,InvoiceService,$ionicLoading) {

    /*$ionicLoading.show({
            animation: 'fade-in',
            template: '<h3><i class="icon ion-loading-c"></i></h3>',
            showBackdrop: false,
            maxWidth: 20,
            showDelay: 0
        });
    $scope.hide = function(){
                 $ionicLoading.hide();
    };*/
   

    $scope.searchKey = '';

    var getAllInvoices = function(){
        InvoiceService.findAll().then(function(invoices){
              //$scope.SalesInvoices = invoices;
             $scope.SalesInvoices = invoices;

        })
    }
    getAllInvoices();


    $scope.cancel = function(){
    	getAllInvoices();
    	$scope.searchKey = '';
    }
    $scope.$watch(function($scope) { return $scope.searchKey},
              function(newValue, oldValue) {
                if(newValue){
                    InvoiceService.findByName(newValue).then(function(invoices){
                    $scope.SalesInvoices  = invoices;
                    })
                }else{
                  getAllInvoices();
                  $scope.searchKey = '';
                }
              }
      );

        
})

.controller('InvoiseDetailsCtrl',function($scope, $stateParams,InvoiceService){
		InvoiceService.findById($stateParams.id).then(function(invoice) {
            $scope.SellsInvoice = invoice;
           
        });
 })

.controller('NewInvoiceCtrl',function($scope,InvoiceService){

   $scope.newInvoice = {
          firstName : '',
          lastName : '',
          dueDate: '',
          invoiceTotal: ''

  }

  $scope.addNewInvoice  = function(){
      InvoiceService.addNewInvoice($scope.newInvoice);
  }  

})