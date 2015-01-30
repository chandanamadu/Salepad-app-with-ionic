
angular.module('ReturnMangmnt.controllers',['returnMangmnt.services'])

.controller('ReturnMangmntList',function($scope,ReturnMangmntService) {
	$scope.returnItems = ReturnMangmntService.getReturnItem();
})

.controller('ReturnItemDetails',function($scope, $stateParams,ReturnMangmntService){
	$scope.returnItem = ReturnMangmntService.findById($stateParams.id);      
 })

.controller('newReturnItem',function($scope,ReturnMangmntService) {
	$scope.chooseItem = 'Select Item';
	$scope.chooseCustomer = 'Select Customer';

	ReturnMangmntService.getItems().then(function(items){
		$scope.items = items;
	})

	ReturnMangmntService.getCustomers().then(function(Customers){
		$scope.customers = Customers;
	})
})
