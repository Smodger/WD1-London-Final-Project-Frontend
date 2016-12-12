// angular.module('finalProject')
//   .controller('CommentsNewController', CommentsNewController);
//
// CommentsNewController.$inject = ['Vineyard', '$state', 'Comment', '$auth'];
//   function CommentsNewController(Vineyard, $state, $auth, Comment) {
//
//     const commentsNew = this;
//     const currentUser = $auth.getPayload().id;
//     commentsNew.comment = {};
//
//     commentsNew.comment.user = currentUser;
//
//     function addComment() {
//       Comment.save(vineyardsShow.comment, (data) => {
//         console.log(data);
//         vineyardsShow.vineyard.comments.push(data);
//         // $state.reload();
//       });
//   }
//
//   vineyardsShow.addComment = addComment;
// }
