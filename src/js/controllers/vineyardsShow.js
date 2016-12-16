angular.module('finalProject')
  .controller('VineyardsShowController', VineyardsShowController);

VineyardsShowController.$inject = ['Vineyard', '$state', 'Comment', '$auth', 'User'];
function VineyardsShowController(Vineyard, $state, Comment, $auth, User){
  const vineyardsShow = this;

  // vineyardsShow.vineyard = Vineyard.get($state.params, (res) => {
  Vineyard.get($state.params, (res) => {
    // console.log(res);
    vineyardsShow.vineyard = res;
    vineyardsShow.vineyard.comments.forEach((comment) => {
      // console.log(vineyardsShow.vineyard.comments);
      User.get({id: comment.user_id}, (data) => {
        // console.log(data);
        comment.user = data;
      });
    });
    console.log(vineyardsShow.vineyard);
  });


  function isCurrentUser(){
    return $auth.getPayload().id === vineyardsShow.vineyard.user.id;
  }
  
  vineyardsShow.isCurrentUser = isCurrentUser;
  // vineyardsShow.vineyard = Vineyard.get($state.params);
  // console.log(vineyardsShow.vineyard);
  vineyardsShow.comment = {
    vineyard_id: $state.params.id
  };

  // console.log(vineyardsShow.vineyard);

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
