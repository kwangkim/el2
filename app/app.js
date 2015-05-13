'use strict';

// Defining Angular app model with all other dependent modules
var QCC = angular.module('QCC',['ngRoute']),
	configuration=function($routeProvider) {
	// Declaration of the default route if neither of the controllers
	// is supporting the request path
		$routeProvider
			.otherwise({
				redirectTo: '/',
				controller: 'HomeController',
				templateUrl: 'components/views/home.html'
			})
			.when('/about', {
				controller: 'AboutController',
				templateUrl: 'components/views/about.html'
			})
			.when('/apply', {
				controller: 'ApplyController',
				templateUrl: 'components/views/apply.html'
			})
			.when('/current', {
				controller: 'CurrentController',
				templateUrl: 'components/views/current.html'
			})
			.when('/past', {
				controller: 'PastController',
				templateUrl: 'components/views/past.html'
			})
			.when('/case', {
				controller: 'CaseController',
				templateUrl: 'components/views/case.html'
			})
			.when('/report', {
				controller: 'ReportController',
				templateUrl: 'components/views/report.html'
			})
			.when('/link', {
				controller: 'LinkController',
				templateUrl: 'components/views/link.html'
			});
	};
QCC.config(['$routeProvider',configuration]);
//http://blog.kevinchisholm.com/angular/angular-js-basics-routes-part-iii-creating-a-default-route/