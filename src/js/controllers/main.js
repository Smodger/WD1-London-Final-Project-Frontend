angular.module('finalProject')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', '$state', '$rootScope', 'User'];
function MainController($auth, $state, $rootScope, User){
  const main = this;

  main.isLoggedIn = $auth.isAuthenticated;



  function logout(){
    $auth.logout()
      .then(()=>{
        $state.go('home');
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
    if ($auth.isAuthenticated()) {
      main.userId = $auth.getPayload().id;
      main.user = User.get({ id: main.userId});
    }
  }
  $rootScope.$on('$stateChangeStart', secureState);

  main.logout = logout;
}
