angular.module('finalProject')
  .controller('VineyardsEditController', VineyardsEditController)
  .controller('VineyardsNewController', VineyardsNewController);

VineyardsNewController.$inject = ['Vineyard', '$state', '$auth'];

function VineyardsNewController(Vineyard, $state, $auth) {

  const vineyardsNew = this;
  const currentUser = $auth.getPayload().id;
  vineyardsNew.vineyard = {};

  vineyardsNew.vineyard.user = currentUser;

  function createVineyard() {

    // get userId from payload
    vineyardsNew.vineyard.user = $auth.getPayload().id;

    Vineyard.save(vineyardsNew.vineyard, (vineyard) => {
      $state.go('vineyardsShow', { id: vineyard.id });
    });
  }
  vineyardsNew.createVineyard = createVineyard;
}

//edit
VineyardsEditController.$inject = ['Vineyard', '$state'];

function VineyardsEditController(vineyard, $state) {
  const vineyardsEdit = this;
  vineyardsEdit.vineyard = vineyard.get($state.params);

  function update() {
    vineyard.update({ id: vineyardsEdit.vineyard.id }, vineyardsEdit.vineyard, () => {
      $state.go('vineyardsShow', $state.params);
    });
  }

  this.update = update;
}
