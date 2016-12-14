angular.module('finalProject')
  .controller('VineyardsShowController', VineyardsShowController);

VineyardsShowController.$inject = ['Vineyard', '$state', 'Comment', '$auth'];
function VineyardsShowController(Vineyard, $state, Comment, $auth){
  const vineyardsShow = this;

  vineyardsShow.vineyard = Vineyard.get($state.params);
  console.log(vineyardsShow.vineyard);

  //     // Google Map
  // MapService
  //   .getCoords(vineyardsShow.vineyard.postcode)
  //   .then(res => {
  //     vineyardsShow.center = res;
  //   }, err => {
  //     console.log(err);
  //   });


  function isCurrentUser(){
    console.log('isCurrentUser?', $auth.getPayload().id === parseFloat($state.params.id));
    return $auth.getPayload().id === parseFloat($state.params.id);
  }
  vineyardsShow.isCurrentUser = isCurrentUser;
  vineyardsShow.vineyard = Vineyard.get($state.params);

  vineyardsShow.comment = {
    vineyard_id: $state.params.id
  };

  // console.log(vineyardsShow.comment);

  function addComment() {
    Comment.save(vineyardsShow.comment, (data) => {
      console.log(data);
      vineyardsShow.vineyard.comments.push(data);
      $state.reload();
    });
  }

  vineyardsShow.addComment = addComment;
//converts the number into an array of item and returns the count of that item
  function getNumber(num) {
    return new Array(num);
  }

  vineyardsShow.getNumber = getNumber;


  function deleteVineyard() {
    vineyardsShow.vineyard.$remove(() => {
      $state.go('vineyardsIndex');
    });
  }
  vineyardsShow.deleteVineyard = deleteVineyard;
  vineyardsShow.isLoggedIn = $auth.isAuthenticated;



}
