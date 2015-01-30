
angular.module('todo.services',[])

.factory('TodoServices',function  () {
	var todoMorning = [{'description' : 'Supply Order to customer Nimal','time' : '8.00 - 9.00 AM '},
						{'description' : 'Get new orders  in Kandy','time' : '9.00-10.30 AM'},
						{'description' : 'Get Items from store','time' : '10.30-12.00 AM'},
					   ];
	var todoAfterNoon = [{'description' : 'Get new orders in Gampola','time' : '1.00-3.30 PM'},
						{'description' : 'Supply items to ABC(Pvt ltd)','time' : '3.30-4.00 AM'},
						{'description' : 'Collect money from DDR(Pvt ltd)','time' : '4.00-4.30 AM'}
						
					   ];


	return{
		getMorningTodo: function(){
			return todoMorning;
		},
		getAfterNoonTodo : function(){
			return todoAfterNoon;
		}
	}
})