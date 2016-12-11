angular.module('finalProject')
  .factory('Vineyard', Vineyard);

Vineyard.$inject = ['$resource', 'API_URL'];
function Vineyard($resource, API_URL) {
  return new $resource(`${API_URL}/vineyards/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
