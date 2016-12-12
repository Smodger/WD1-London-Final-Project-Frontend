angular.module('finalProject')
  .controller('CommentsIndexController', CommentsIndexController)
  .controller('CommentsShowController', CommentsShowController)
  .controller('CommentsEditController', CommentsEditController);

CommentsIndexController.$inject = ['Comment'];
function CommentsIndexController(Comment) {
  const commentsIndex = this;

  commentsIndex.all = Comment.query();
}

//commentsshow

CommentsShowController.$inject = ['Comment', '$state', '$auth'];
function CommentsShowController(Comment, $state, $auth){
  const commentsShow = this;

  commentsShow.comment = Comment.get($state.params);

  function deleteComment() {
    commentsShow.comment.$remove(() => {
      $state.go('commentsIndex');
    });
  }
  commentsShow.delete = deleteComment;
  commentsShow.isLoggedIn = $auth.isAuthenticated;
}

//comment edit and update

CommentsEditController.$inject = ['Comment', '$state'];
function CommentsEditController(Comment, $state) {
  const commentsEdit = this;

  commentsEdit.comment = Comment.get($state.params);

  function update() {
    commentsEdit.comment.$update(() => {
      $state.go('commentsShow', $state.params);
    });
  }

  this.update = update;

}
