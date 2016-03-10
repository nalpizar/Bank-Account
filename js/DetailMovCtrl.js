angular.module ('bankAccount.controllers')
.controller('DetailMovCtrl',[
      '$scope',
      'PersistenceService',
      '$routeParams',
      '$location',
      function($scope, PersistenceService, $routeParams, $location) {
        var localStorageKey = "Movements";
        var currentID = $routeParams.id;

        $scope.movKey = PersistenceService.verify(localStorageKey) || [];
        $scope.lastID = PersistenceService.verify("transactionID");

        $scope.item = PersistenceService.getItem($scope.movKey, currentID);

        $scope.$watch('movKey', function(newValue, oldValue) {
            PersistenceService.save(localStorageKey, newValue);
        }, true);
        $scope.$watch('lastID', function(newValue, oldValue) {
            PersistenceService.save("transactionID", newValue);
        }, true);

        $scope.deleteItem = function () {
          if ($scope.movKey.length == 1) {
            $scope.movKey = [];
            $scope.lastID = 0;
          } else {
            var target = PersistenceService.getItemIndex($scope.movKey, currentID);
            $scope.movKey.splice(target, 1);
          }

          $location.path('/');
        };

      }

    ])
;
