angular.module('finalProject')
  .controller('VineyardsShowController', VineyardsShowController);

VineyardsShowController.$inject = ['Vineyard', '$state', 'Comment', '$auth','MapService'];
function VineyardsShowController(Vineyard, $state, Comment, $auth, MapService){
  const vineyardsShow = this;

  vineyardsShow.vineyard = Vineyard.get($state.params);

  function isCurrentUser(){
    console.log('isCurrentUser?', $auth.getPayload().id === parseFloat($state.params.id));
    return $auth.getPayload().id === parseFloat($state.params.id);
  }
  vineyardsShow.isCurrentUser = isCurrentUser;
  vineyardsShow.vineyard = Vineyard.get($state.params);

//
// function isCurrentUser() {
//     return $auth.getPayload().id === Number($state.params.id);
//   }
//
//   propsShow.isCurrentUser = isCurrentUser;


  vineyardsShow.comment = {
    vineyard_id: $state.params.id
  };

  // console.log(vineyardsShow.comment);

  function addComment() {
    Comment.save(vineyardsShow.comment, (data) => {
      console.log(data);
      vineyardsShow.vineyard.comments.push(data);
      // $state.reload();
    });
  }

  vineyardsShow.addComment = addComment;


  function deleteVineyard() {
    vineyardsShow.vineyard.$remove(() => {
      $state.go('vineyardsIndex');
    });
  }
  vineyardsShow.deleteVineyard = deleteVineyard;
  vineyardsShow.isLoggedIn = $auth.isAuthenticated;


      // Google Map
  MapService
    .getCoords(vineyardsShow.vineyard.postcode)
    .then(res => {
      vineyardsShow.center = res;
    }, err => {
      console.log(err);
    });

}
