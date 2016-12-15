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
            scrollwheel: false,
            styles: [
            {
                'featureType': 'landscape.natural.terrain',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'lightness': '-39'
                    },
                    {
                        'color': '#b9d869'
                    }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'lightness': 100
                    },
                    {
                        'visibility': 'simplified'
                    }
                ]
            },
            {
                'featureType': 'road',
                'elementType': 'labels',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'visibility': 'on'
                    }
                ]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'visibility': 'on'
                    },
                    {
                        'color': '#ffefab'
                    }
                ]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'geometry.stroke',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'road.highway.controlled_access',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'visibility': 'off'
                    }
                ]
            },
            {
                'featureType': 'road.arterial',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'visibility': 'on'
                    }
                ]
            },
            {
                'featureType': 'road.local',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'color': '#ffefab'
                    },
                    {
                        'visibility': 'simplified'
                    },
                    {
                        'weight': '0.59'
                    }
                ]
            },
            {
                'featureType': 'water',
                'elementType': 'geometry.fill',
                'stylers': [
                    {
                        'weight': '1.66'
                    },
                    {
                        'color': '#fdd4ce'
                    }
                ]
            }
        ]
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
//     template: '<div class='google-map'></div>',
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
