angular.module('finalProject')
  .controller('VineyardsController', VineyardsController);

VineyardsController.$inject = ['Vineyard'];

function VineyardsController(Vineyard) {
  const vineyards = this;

  vineyards.all = Vineyard.query();
  console.log(vineyards);
}
