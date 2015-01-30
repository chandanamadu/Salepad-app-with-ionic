
angular.module('Customer.controllers',['Customer.services'])

.controller('CustomerListCtrl',function($scope,CustomerService) {
	
	var findAllCustomers = function(){
		
		CustomerService.findAll().then(function(customers){
			$scope.customers = customers;
		})	
	};
	findAllCustomers();

	$scope.searchKey = '';
	$scope.cancel = function(){
    	findAllCustomers();
    	$scope.searchKey = '';
    }
    $scope.$watch(function($scope) { return $scope.searchKey},
          function(newValue, oldValue) {
                if(newValue){
                    CustomerService.findByName(newValue).then(function(customers){
                    $scope.customers = customers;
                    })
                }else{
                  findAllCustomers();
                  $scope.searchKey = '';
                }
           }
    );	
})

.controller('CustomerDetailsCtrl',function($scope,$stateParams,CustomerService){
	CustomerService.findById($stateParams.id).then(function(Customer) {
            $scope.customer = Customer;
    });
    $scope.testCustomer = {
    	'Mobile' : '071-1234567',
    	'email'	 : 'abscnjdjDftr@gmail.com',
    	'address':'No 123, Kandy Rd, Gampola',
    	'Company' : 'ABC (Pvt ltd)',
    	'averageSales' : '25,000',
    	'credibility'  : '20'
    };
})

.controller('newCustomerCtrl',function($scope,CustomerService){
	$scope.customer = {
		'firstName' : '',
		'lastName'  : '',
		'mobile'    : '',
		'address'   : ''
	};

	$scope.addNewCustomer = function(){
		CustomerService.addNewCustomer($scope.customer);
	}
})