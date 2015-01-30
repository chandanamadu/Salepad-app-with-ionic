
var controllers= ['invoice.controllers','Customer.controllers',
                  'sellsOrder.controllers','opportunity.controllers',
                  'paymentDetails.controllers','todo.controllers',
                  'ReturnMangmnt.controllers'];

var services= ['dataService','entityServices'];


var dependancies = controllers.concat(services);

angular.module('starter', dependancies)

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    // *****stat menu****************
    .state('menu',{
        url : "/menu",
        abstract: true,
        templateUrl: "sellpad/Routing-tabs/menu.html"
    })

    .state('menu.dashBoard', {
      url: '/home',
      views: {
        'dashBoard': {
          templateUrl: 'sellpad/home/dashBoard.html'
        }
      }
    })

    // ********** invoices **************
     .state('invoices', {
      url: "/invoices",
      abstract: true,
      templateUrl: "sellpad/Routing-tabs/invoice.html"
    })

    .state('invoices.invoices', {
      url: '/invoice-list',
      views: {
        'invoive-list': {
          templateUrl: 'sellpad/invoice/templates/invoices.html',
          controller: 'InvoiceListCtrl'
        }
      }
    })

     .state('invoices.new-invoice', {
      url: '/new-invoice',
      views: {
        'invoive-list': {
                templateUrl: 'sellpad/invoice/templates/new-invoice.html',
                controller: 'NewInvoiceCtrl'
        }
      }
    })

     .state('invoices.invoice-detail', {
          url: '/invoice/:id',
          views:{
              'invoive-list': {
                  templateUrl: 'sellpad/invoice/templates/invoice-details.html',
                  controller: 'InvoiseDetailsCtrl'
               }
          }            
    })

     .state('invoice-details',{
        url :  '/invoice/:id',
        templateUrl: 'sellpad/invoice/templates/invoice-details.html',
        controller: 'InvoiseDetailsCtrl'
     })

     // ********* Customers *******************
      .state('Customers', {
      url: "/Customers",
      abstract: true,
      templateUrl: "sellpad/Routing-tabs/customer.html"
    })

      .state('Customers.Customers', {
      url: '/Customer-list',
      views: {
        'customer-list': {
          templateUrl: 'sellpad/customers/templates/customer-list.html',
          controller: 'CustomerListCtrl'
        }
      }
    })

    .state('Customers.customer-detail', {
          url: '/customer/:id',
          views:{
              'customer-list': {
                  templateUrl: 'sellpad/customers/templates/customer-details.html',
                  controller : 'CustomerDetailsCtrl'
               }
          }            
    })

    .state('Customers.new-customer', {
          url: '/new-customer',
          views:{
              'customer-list': {
                  templateUrl: 'sellpad/customers/templates/new-customer.html',
                  controller : 'newCustomerCtrl'
               }
          }            
    })

      //************* Sells Order **************
      .state('Sells-Order', {
      url: "/Sells-Order",
      abstract: true,
      templateUrl: "sellpad/Routing-tabs/sells-order.html"
    })

      .state('Sells-Order.Order-list', {
      url: '/Order-list',
      views: {
        'SellsOrder-list': {
          templateUrl: 'sellpad/sells-order/templates/sellsOrder-list.html',
          controller: 'sellsOrderListCtrl'
        }
      }
    })

      .state('Sells-Order.order-detail', {
          url: '/order/:id',
          views:{
              'SellsOrder-list': {
                  templateUrl: 'sellpad/sells-order/templates/order-details.html',
                  controller:'orderDetailsCtrl'
               }
          }            
    })

      .state('Sells-Order.detail-more', {
          url: '/order-details',
          views:{
              'SellsOrder-list': {
                  templateUrl: 'sellpad/sells-order/templates/details-more.html',
                  controller : 'detailsMoreCtrl'
               }
          }            
    })

      .state('Sells-Order.new-order', {
          url: '/new-order',
          views:{
              'SellsOrder-list': {
                  templateUrl: 'sellpad/sells-order/templates/new-order.html',
                  controller : 'newOrderCtrl'
               }
          }            
    })

      .state('Sells-Order.new-customer', {
          url: '/new-order',
          views:{
              'SellsOrder-list': {
                  templateUrl: 'sellpad/sells-order/templates/new-customer.html',
                  controller : 'orderNewCustomerCtrl'
               }
          }            
    })


      //********** Opportunity ***************

      .state('Opportunities', {
      url: "/Opportunities",
      abstract: true,
      templateUrl: "sellpad/Routing-tabs/opportunities.html"
    })

      .state('Opportunities.Opportunity-list', {
      url: '/Opportunity-list',
      views: {
        'Opportunity-list': {
          templateUrl: 'sellpad/opportunities/templates/opportunity-list.html',
          controller: 'OpportunityListCtrl'
        }
      }
    })

      .state('Opportunities.Opp-details', {
      url: '/opportunity/:id',
      views: {
        'Opportunity-list': {
          templateUrl: 'sellpad/opportunities/templates/opp-details.html',
          controller: 'OpportunityDetails'
        }
      }
    })

      .state('Opportunities.newOpportunity', {
      url: '/new-opportunity',
      views: {
        'Opportunity-list': {
          templateUrl: 'sellpad/opportunities/templates/new-opportunity.html',
          controller : 'NewOpportunityListCtrl'
        }
      }
    })

      //*************** Payment Details ****************

      .state('PaymentDetails', {
      url: "/PaymentDetails",
      abstract: true,
      templateUrl: "sellpad/Routing-tabs/payment-details.html"
    })

      .state('PaymentDetails.details-list', {
      url: '/details-list',
      views: {
        'PaymentDetails': {
          templateUrl: 'sellpad/Payment-details/templates/details-list.html',
          controller: 'PaymentDetailsListCtrl'
        }
      }
    })

      .state('PaymentDetails.new-payment', {
      url: '/new-payment',
      views: {
        'PaymentDetails': {
          templateUrl: 'sellpad/Payment-details/templates/new-payment.html',
          controller : 'NewPaymentCtrl'
        }
      }
    })

      .state('PaymentDetails.details',{
        url: '/details/:id',
        views:{
          'PaymentDetails':{
            templateUrl :'sellpad/Payment-details/templates/details.html',
            controller : 'PaymentDetailsCtrl'
          }
        }
      })

      // ************ todo ******************************

      .state('Todo', {
      url: "/todo",
      abstract: true,
      templateUrl: "sellpad/Routing-tabs/todo.html"
    })

      .state('Todo.todo-list', {
      url: '/todo-list',
      views: {
        'Todo': {
          templateUrl: 'sellpad/todo/templates/todo-list.html',
          controller: 'TodoListCtrl'
        }
      }
    })

      .state('Todo.newTodo', {
      url: '/newTodo',
      views: {
        'Todo': {
          templateUrl: 'sellpad/todo/templates/new-todo.html',
          
        }
      }
    })

      // ********** Return Management *****************

      .state('ReturnManagement', {
      url: "/ReturnManagement",
      abstract: true,
      templateUrl: "sellpad/Routing-tabs/return-management.html"
    })

      .state('ReturnManagement.return-list', {
      url: '/return-list',
      views: {
        'return-management': {
          templateUrl: 'sellpad/return-management/templates/return-list.html',
          controller : 'ReturnMangmntList'
        }
      }
    })

      .state('ReturnManagement.detail', {
          url: '/returnItem/:id',
          views:{
              'return-management': {
                  templateUrl: 'sellpad/return-management/templates/details.html',
                  controller:'ReturnItemDetails'
               }
          }            
    })
      .state('ReturnManagement.new-returnItem', {
          url: '/new-item',
          views:{
              'return-management': {
                  templateUrl: 'sellpad/return-management/templates/new-item.html',
                  controller : 'newReturnItem'
               }
          }            
    })


    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('menu/home');

});

angular.element(document).ready(function() {

  angular.bootstrap(document, ['starter']);
});