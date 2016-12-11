angular.module('finalProject')
  .controller('VineyardsShowController', VineyardsShowController);

VineyardsShowController.$inject = ['Vineyard', '$state', '$auth'];
function VineyardsShowController(Vineyard, $state, $auth){
  const vineyardsShow = this;

  vineyardsShow.vineyard = Vineyard.get($state.params);

  function deleteVineyard() {
    vineyardsShow.vineyard.$remove(() => {
      $state.go('vineyardsIndex');
    });
  }
  vineyardsShow.deleteVineyard = deleteVineyard;
  vineyardsShow.isLoggedIn = $auth.isAuthenticated;
}
