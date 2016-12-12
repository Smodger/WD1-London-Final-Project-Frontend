angular.module('finalProject')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/templates/usersIndex.html',
      controller: 'UsersIndexController as usersIndex'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/templates/register.html',
      controller: 'RegisterController as register'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/templates/login.html',
      controller: 'LoginController as login'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: '/templates/usersShow.html',
      controller: 'UsersShowController as usersShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: '/templates/usersEdit.html',
      controller: 'UsersEditController as usersEdit'
    })
    .state('vineyardsIndex', {
      url: '/vineyards',
      templateUrl: '/templates/vineyards.html',
      controller: 'VineyardsController as vineyards'
    })
    .state('vineyardsNew', {
      url: '/vineyards/new',
      templateUrl: '/templates/vineyardsNew.html',
      controller: 'VineyardsNewController as vineyardsNew'
    })
    .state('vineyardsShow', {
      url: '/vineyards/:id',
      templateUrl: '/templates/vineyardsShow.html',
      controller: 'VineyardsShowController as vineyardsShow'
    })
    .state('vineyardsEdit', {
      url: '/vineyards/:id/edit',
      templateUrl: '/templates/vineyardsEdit.html',
      controller: 'VineyardsEditController as vineyardsEdit'
    })
    .state('home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: 'LoginController as login'
    })
    // .state('commentsNew', {
    //   url: '/comments/new',
    //   templateUrl: '/templates/commentsNew.html',
    //   controller: 'VineyardsShowController as vineyardsShow'
    // })
    ;

  $urlRouterProvider.otherwise('/');
}
