angular.module('finalProject')
  .controller('VineyardsEditController', VineyardsEditController)
  .controller('VineyardsNewController', VineyardsNewController);

VineyardsNewController.$inject = ['Vineyard', '$state', '$auth'];

function VineyardsNewController(Vineyard, $state, $auth) {
  const vineyardsNew = this;
  const currentUser = $auth.getPayload()._id;
  vineyardsNew.vineyard = {
    tempImage: {}
  };
  vineyardsNew.vineyard.user = currentUser;

  function createVineyard() {

    // get userId from paylod
    vineyardsNew.vineyard.user = $auth.getPayload()._id;

    // console.log(vineyardsNew.vineyard);
    // Save vineyard
    Vineyard.save(vineyardsNew.vineyard, (vineyard) => {
      $state.go('vineyardsShow', { id: vineyard._id });
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
