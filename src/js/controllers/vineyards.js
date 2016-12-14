angular.module('finalProject')
  .controller('VineyardsController', VineyardsController);

VineyardsController.$inject = ['Vineyard'];

function VineyardsController(Vineyard) {
  const vineyards = this;

  vineyards.queryString = '';

  function filter(vineyard){
    const regex = new RegExp(vineyards.queryString, 'i');
    return regex.test(vineyard.region) || regex.test(vineyard.vineyard_name);
  }
  vineyards.filter = filter;
  vineyards.all = Vineyard.query();
  // console.log(vineyards);

  function getNumber(num) {
    return new Array(num);
  }
  vineyards.getNumber = getNumber;
}
