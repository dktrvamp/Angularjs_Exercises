angular.module('namer',[])
  .directive('namer',function(){
		return {
			scope:{},
			restrict:'A',
			link:function(scope,e,a){
				scope.fullName = a.first + ' ' + a.last
				scope.first=a.first
				scope.last=a.last
				scope.phone=a.phone
			},
			template:"<img style='float:left;' ng-src='https://cdn4.iconfinder.com/data/icons/line-user/512/user-128.png'>" +
					"Last Name: {{last}}<br> First Name: {{first}} <br>" +
					"Phone: {{phone}}"
		}
})