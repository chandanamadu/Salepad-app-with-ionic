
angular.module('paymentDetails.controllers',['paymentDetails.services'])

.controller('PaymentDetailsListCtrl',function  ($scope,PaymentDetailsService) {
	 $scope.Payments =  PaymentDetailsService.getPayment();
})

.controller('PaymentDetailsCtrl',function($scope,PaymentDetailsService,$stateParams){
	$scope.payment = PaymentDetailsService.getPaymentById($stateParams.id);
})

.controller('NewPaymentCtrl',function($scope,PaymentDetailsService){
	$scope.chooseCustomer = 'Select Customer';
	$scope.paymentMethod = 'Select Payment Method';
	
	PaymentDetailsService.getCustomers().then(function(customers){
		$scope.customers = customers;
	});
	$scope.Pmethods = PaymentDetailsService.getPaymentMethods();

})