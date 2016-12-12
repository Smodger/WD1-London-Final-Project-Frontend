angular.module('finalProject')
  .controller('VineyardsShowController', VineyardsShowController);

VineyardsShowController.$inject = ['Vineyard', '$state', 'Comment', '$auth'];
function VineyardsShowController(Vineyard, $state, Comment, $auth){
  const vineyardsShow = this;

  vineyardsShow.vineyard = Vineyard.get($state.params);

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
}
