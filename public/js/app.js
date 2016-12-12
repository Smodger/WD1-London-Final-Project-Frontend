"use strict";function Auth(e,t){e.loginUrl=t+"/login",e.signupUrl=t+"/register",e.tokenPrefix=""}function RegisterController(e,t){function r(){e.signup(n.user).then(function(){t.go("login")})}var n=this;n.user={},n.submit=r}function LoginController(e,t){function r(){e.login(n.credentials).then(function(){t.go("usersIndex")})}var n=this;n.credentials={},n.submit=r}function CommentsIndexController(e){var t=this;t.all=e.query()}function CommentsShowController(e,t,r){function n(){o.comment.$remove(function(){t.go("commentsIndex")})}var o=this;o.comment=e.get(t.params),o.delete=n,o.isLoggedIn=r.isAuthenticated}function CommentsEditController(e,t){function r(){n.comment.$update(function(){t.go("commentsShow",t.params)})}var n=this;n.comment=e.get(t.params),this.update=r}function MainController(e,t,r){function n(){e.logout().then(function(){t.go("usersIndex")})}function o(r,n){l.message=null,!e.isAuthenticated()&&i.includes(n.name)&&(r.preventDefault(),t.go("login"),l.message="you must be logged in to go there")}var l=this;l.isLoggedIn=e.isAuthenticated;var i=["usersEdit"];r.$on("$stateChangeStart",o),l.logout=n}function Router(e,t){e.state("usersIndex",{url:"/users",templateUrl:"/templates/usersIndex.html",controller:"UsersIndexController as usersIndex"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("usersShow",{url:"/users/:id",templateUrl:"/templates/usersShow.html",controller:"UsersShowController as usersShow"}).state("usersEdit",{url:"/users/:id/edit",templateUrl:"/templates/usersEdit.html",controller:"UsersEditController as usersEdit"}).state("vineyardsIndex",{url:"/vineyards",templateUrl:"/templates/vineyards.html",controller:"VineyardsController as vineyards"}).state("vineyardsNew",{url:"/vineyards/new",templateUrl:"/templates/vineyardsNew.html",controller:"VineyardsNewController as vineyardsNew"}).state("vineyardsShow",{url:"/vineyards/:id",templateUrl:"/templates/vineyardsShow.html",controller:"VineyardsShowController as vineyardsShow"}).state("vineyardsEdit",{url:"/vineyards/:id/edit",templateUrl:"/templates/vineyardsEdit.html",controller:"VineyardsEditController as vineyardsEdit"}),t.otherwise("/")}function Comment(e,t){return new e(t+"/comments/:id",{id:"@id"},{update:{method:"PUT"}})}function UsersIndexController(e){var t=this;t.all=e.query()}function UsersShowController(e,t,r){function n(){o.user.$remove(function(){t.go("usersIndex")})}var o=this;o.user=e.get(t.params),o.delete=n,o.isLoggedIn=r.isAuthenticated}function UsersEditController(e,t){function r(){n.user.$update(function(){t.go("usersShow",t.params)})}var n=this;n.user=e.get(t.params),this.update=r}function VineyardsController(e){var t=this;t.all=e.query(),console.log(t)}function Vineyard(e,t){return new e(t+"/vineyards/:id",{id:"@id"},{update:{method:"PUT"}})}function VineyardsNewController(e,t,r){function n(){o.vineyard.user=r.getPayload().id,e.save(o.vineyard,function(e){t.go("vineyardsShow",{id:e.id})})}var o=this,l=r.getPayload().id;o.vineyard={},o.vineyard.user=l,o.createVineyard=n}function VineyardsEditController(e,t){function r(){e.update({id:n.vineyard.id},n.vineyard,function(){t.go("vineyardsShow",t.params)})}var n=this;n.vineyard=e.get(t.params),this.update=r}function VineyardsShowController(e,t,r,n){function o(){r.save(i.comment,function(){t.reload()})}function l(){i.vineyard.$remove(function(){t.go("vineyardsIndex")})}var i=this;i.vineyard=e.get(t.params),i.comment={vineyard_id:t.params.id},console.log(i.comment),i.add=o,i.deleteVineyard=l,i.isLoggedIn=n.isAuthenticated}angular.module("finalProject",["ngResource","ui.router","satellizer"]).constant("API_URL","http://localhost:3000/api").config(Auth),Auth.$inject=["$authProvider","API_URL"],angular.module("finalProject").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("finalProject").controller("CommentsIndexController",CommentsIndexController).controller("CommentsShowController",CommentsShowController).controller("CommentsEditController",CommentsEditController),CommentsIndexController.$inject=["Comment"],CommentsShowController.$inject=["Comment","$state","$auth"],CommentsEditController.$inject=["Comment","$state"],angular.module("finalProject").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope"],angular.module("finalProject").config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"],angular.module("finalProject").factory("Comment",Comment),Comment.$inject=["$resource","API_URL"],angular.module("finalProject").controller("UsersIndexController",UsersIndexController).controller("UsersShowController",UsersShowController).controller("UsersEditController",UsersEditController),UsersIndexController.$inject=["User"],UsersShowController.$inject=["User","$state","$auth"],UsersEditController.$inject=["User","$state"],angular.module("finalProject").controller("VineyardsController",VineyardsController),VineyardsController.$inject=["Vineyard"],angular.module("finalProject").factory("Vineyard",Vineyard),Vineyard.$inject=["$resource","API_URL"],angular.module("finalProject").controller("VineyardsEditController",VineyardsEditController).controller("VineyardsNewController",VineyardsNewController),VineyardsNewController.$inject=["Vineyard","$state","$auth"],VineyardsEditController.$inject=["Vineyard","$state"],angular.module("finalProject").controller("VineyardsShowController",VineyardsShowController),VineyardsShowController.$inject=["Vineyard","$state","$auth","Comment"];
//# sourceMappingURL=app.js.map
