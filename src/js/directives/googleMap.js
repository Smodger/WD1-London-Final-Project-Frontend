angular.module('finalProject')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window'];
function googleMap($window) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      vineyard: '='
    },
    link: function($scope, element) {
      $scope.$watch('vineyard', ()=> {
        if($scope.vineyard){
          console.log($scope);
          const center = new $window.google.maps.LatLng($scope.vineyard.latitude, $scope.vineyard.longitude);
          const map = new $window.google.maps.Map(element[0], {
            center: center,
            zoom: 14,
            disableDefaultUI: true,
            zoomControl: true,
            scaleControl: true,
            scrollwheel: false
          });

          new $window.google.maps.Marker({
            position: center,
            map: map,
            animation: $window.google.maps.Animation.DROP
          });

        }
      });

    }
  };
}





// googleMap.$inject = ['$window'];
// function googleMap($window) {
//   return {
//     restrict: 'E',
//     replace: true,
//     template: '<div class="google-map"></div>',
//     scope: {
//       center: '='
//     },
//     link: function($scope, element) {
//       $scope.$watch('center', (val) =>{
//         console.log(val);
//         if(val && val.lat && val.lng){
//           const map = new $window.google.maps.Map(element[0], {
//             center: $scope.center,
//             zoom: 14
//           });
//
//           new $window.google.maps.Marker({
//             position: $scope.center,
//             map,
//             animation: $window.google.maps.Animation.DROP
//           });
//         }
//       });
//     }
//   };
// }
