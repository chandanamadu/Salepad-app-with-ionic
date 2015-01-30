
angular.module('sellsOrder.controllers',['sellsOrder.services'])

.controller('sellsOrderListCtrl',function  ($scope,SellsOrderService) {
	
	var getAllOrders = function(){

		SellsOrderService.findAll().then(function(oredrs){
		$scope.SalesOrders = oredrs;
		});
	}
	getAllOrders();
	$scope.searchKey = '';
	$scope.$watch(function($scope) { return $scope.searchKey},
        function(newValue, oldValue) {
            if(newValue){
               SellsOrderService.findByName(newValue).then(function(oredrs){
                  $scope.SalesOrders  = oredrs;
               })
            }else{
                getAllOrders();
                $scope.searchKey = '';
            }
        }
    );

    $scope.cancel  = function(){
    	getAllOrders();
        $scope.searchKey = '';
    }
})

.controller('orderDetailsCtrl',function($scope, $stateParams,SellsOrderService,$filter){
		SellsOrderService.findById($stateParams.id).then(function(order) {
            $scope.SalesOrders = order;    
        });

       
 })

.controller('newOrderCtrl',function($scope,SellsOrderService){

	//$scope.customers =  ['chandana','banbara','madusanka','ruwan'];
	$scope.chooseCustomer = "select customer";
	
	SellsOrderService.getCustomers().then(function(customers){
		$scope.customers = customers;

	})
		

	SellsOrderService.getItems().then(function(items){
		$scope.items = items;
	})

	$scope.currentTotal = '00.00';
})

.controller('orderNewCustomerCtrl',function($scope,CustomerService,SellsOrderService){
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

.controller('detailsMoreCtrl',function($scope,SellsOrderService,$stateParams){
	 $scope.selectedItems = SellsOrderService.getSellectedItems();
	 $scope.total = 15590;    
   
})
