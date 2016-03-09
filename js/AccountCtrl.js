angular.module ('bankAccount.controllers')
.controller('AccountCtrl', [
        '$scope',
        '$routeParams',
        'PersistenceService',
        function($scope, $routeParams, PersistenceService) {
            var localStorageKey = "Users";
            var keyForMov = "Movements";

            $scope.userKey = PersistenceService.verify(localStorageKey) || [];
            $scope.movKey = PersistenceService.verify(keyForMov) || [];
            $scope.lastID = PersistenceService.verify("userID") || 0;
            $scope.notFound = false;

            $scope.addNewUser = function () {
              $scope.lastID++;

              var newUser = {
                  id : $scope.lastID,
                  name : $scope.name,
                  currency : $scope.currency,
                  account : $scope.account
              }

              $scope.userKey.push(newUser);

              if ($scope.registerForm) {
                $scope.registerForm.$setPristine();
                $scope.registerForm.$setUntouched();
                $scope.name = "";
                $scope.description = "";
                $scope.dueDate = "";
              }
            }

            $scope.addNewMov = function () {
              var newMov = {
                dateMov : $scope.dateMov,
                amountMov : $scope.amountMov,
                detailMov : $scope.detailMov,
              }

              $scope.movKey.push(newMov);

             if ($scope.movementForm) {
                $scope.movementForm.$setPristine();
                $scope.movementForm.$setUntouched();
                $scope.dateMov = "";
                $scope.amountMov = "";
                $scope.detailMov = "";
              }
            }

            if ($routeParams.error != "" && $routeParams.error == "notFound") {
              $scope.notFound = true;
            }

            $scope.$watch('userKey', function(newValue, oldValue) {
                PersistenceService.save(localStorageKey, newValue);
            }, true);
            $scope.$watch('movKey', function(newValue, oldValue) {
                PersistenceService.save(keyForMov, newValue);
            }, true);
            $scope.$watch('lastID', function(newValue, oldValue) {
                PersistenceService.save("userID", newValue);
            }, true);
        }
    ])