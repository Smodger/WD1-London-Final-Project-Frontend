angular.module('finalProject')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', '$state', '$rootScope'];
function MainController($auth, $state, $rootScope){
  const main = this;

  main.isLoggedIn = $auth.isAuthenticated;

  function logout(){
    $auth.logout()
      .then(()=>{
        $state.go('usersIndex');
      });
  }

  const protectedStates = ['usersEdit'];
// toParams gets the id from url, toState gets the name of the state
  function secureState(e, toState){
    main.message = null;
    if(!$auth.isAuthenticated() && protectedStates.includes(toState.name)){
      e.preventDefault();
      $state.go('login');
      main.message= 'you must be logged in to go there';
    }
  }
  $rootScope.$on('$stateChangeStart', secureState);

  main.logout = logout;
}
