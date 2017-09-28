'use strict';
(function (angular, $, window, document, undefined) {
	 angular.module('app.services', [])
        .config(['$httpProvider', function ($httpProvider) {
        }])
		 .factory('$localstorage', ['$window', function ($window) {
            return {
                set: function (key, value) {
                    $window.localStorage[key] = value;
                },
                get: function (key, defaultValue) {
                    return $window.localStorage[key] || defaultValue;
                },
                setObject: function (key, value) {
                    $window.localStorage[key] = JSON.stringify(value);
                },
                getObject: function (key) {
                    return JSON.parse($window.localStorage[key] || '{}');
                },
                remove: function (key) {
                    $window.localStorage.removeItem(key);
                }
            }
        }])
		
        .factory('$sessionStorage', ['$window', function ($window) {
            return {
                set: function (key, value) {
                    $window.sessionStorage[key] = value;
                },
                get: function (key, defaultValue) {
                    return $window.sessionStorage[key] || defaultValue;
                },
                setObject: function (key, value) {
                    $window.sessionStorage[key] = JSON.stringify(value);
                },
                getObject: function (key) {
                    return JSON.parse($window.sessionStorage[key] || '{}');
                },
                remove: function (key) {
                    $window.sessionStorage.removeItem(key);
                }
            };
        }])
        .factory('CacheService', function(){
            var _cache = {};
            return {
                set: function (key, value) {
                    _cache[key] = value;
                },
                get: function (key) {
                    return _cache[key];
                },
                remove: function (key) {
                    delete _cache[key];
                }
            }
        })
		.factory('AuthService', ['$sessionStorage','$q','$rootScope','$state','AppUser',function($sessionStorage, $q,$rootScope,$state, AppUser){
            var _loginInfo = $sessionStorage.getObject('currentUser') || {};
            var service =  {
                isLoggedIn: function(){
					/*var resetObj=$sessionStorage.getObject('resetLoginInfo');
					if (resetObj!=null){
						_loginInfo = $sessionStorage.getObject('currentLogin') || {};
						 $sessionStorage.remove('resetLoginInfo');
					}*/
                    return !!_loginInfo.id;
                },
                getUser: function(){
                    return _loginInfo;
                },
                setSession: function(userObj){
                    _loginInfo = userObj;
					$rootScope.currentUser = {
						id: userObj.user.id,
						tokenId: userObj.id,
						email: userObj.user.email,
						encryptionPIN:userObj.user.EncryptionPIN,
						username: userObj.user.username
					};
                    $sessionStorage.setObject('currentUser', userObj);
                },
                clearSession: function(){
                    _loginInfo = {};
                    $sessionStorage.remove('currentLogin');
                },
                Login: function(data){
					var dobj = $q.defer();
					 AppUser.login(data)
					.$promise
					.then(function(response) {
						service.setSession(response);
						dobj.resolve(response);
						},
						function(err){
							//alert(JSON.stringify(err.message));
							/*var errMsg=err.message;
							if (errMsg==null){
								//change on on UI formatted error - need to create separate message for incorrect password
								alert("userid/email not registered with system or password is incorrect");
							}*/
							dobj.reject(err);
						}
					);
					return dobj.promise;
                },
                Logout: function(){
                    var dobj = $q.defer();
					AppUser.logout()
					.$promise
					.then(function(response) {
						/* include code here for customer specific branding*/
						service.clearSession();
						dobj.resolve(response);
						},
						function(err){
							//alert(JSON.stringify(err.message));
							/*var errMsg=err.message;
							if (errMsg==null){
								//change on on UI formatted error - need to create separate message for incorrect password
								alert("userid/email not registered with system or password is incorrect");
							}*/
							dobj.reject(err);
						}
					);
                    return dobj.promise;
                }
            };
            return service;
        }])
		.factory('ArrayService', ['$rootScope', function ($rootScope) {
			var service =  {
				getTopLevel: function(objList,idfield,childrenfield){
					var subset=[];
					objList.forEach(function (obj) {
						//alert ("setting active false");
						var chldList=objList.filter(function (obj2) {
							//find those objects where each object in list is child
							return (obj2[childrenfield].indexOf(obj[idfield])>=0);
						});
						if (chldList.length==0){
							//the object is not a child of any other object as is therefore top level
							subset.push(obj);
						}
						
					});
                    return subset;
                },
				getNextLevel: function(objList,parentObj,idfield,childrenfield){
					
					var subset= objList.filter(function (obj2) {
						return (parentObj[childrenfield].indexOf(obj2[idfield])>=0);
					})
                    return subset;
				},
				getParents: function(objList,childObj,idfield,childrenfield){
					
					var subset= objList.filter(function (obj2) {
						return (obj2[childrenfield].indexOf(childObj[idfield])>=0);
					})
                    return subset;
				}
			}
			return service;
		}])
		
})(angular, jQuery, window, document);
