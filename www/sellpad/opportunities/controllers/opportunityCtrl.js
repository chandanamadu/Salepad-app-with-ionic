
angular.module('opportunity.controllers',['opportunity.services'])

.controller('OpportunityListCtrl',function($scope,opportunityService) {
	$scope.Opportunities = opportunityService.getOpportunities ();
})

.controller('OpportunityDetails',function($scope, $stateParams,opportunityService){
	$scope.Opportunity = opportunityService.findById($stateParams.id);
	
        
 })

.controller('NewOpportunityListCtrl',function($scope,opportunityService) {
	$scope.chooseCustomer = 'Select Customer';
	$scope.currentTotal = '0.00';
	opportunityService.getCustomers().then(function(Customers){
		$scope.customers = Customers;
	});

	opportunityService.getItems().then(function(Items){
		$scope.items = Items;
	})
})