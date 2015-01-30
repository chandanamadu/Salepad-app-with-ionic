
angular.module('todo.controllers',['todo.services'])

.controller('TodoListCtrl',function  ($scope,TodoServices) {
	$scope.MorningTodo = TodoServices.getMorningTodo();
	$scope.AfterNoonTodo = TodoServices.getAfterNoonTodo();
})