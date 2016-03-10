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
            $scope.movID = PersistenceService.verify("transactionID") || 0;
            $scope.notFound = false;

            $scope.addNewUser = function () {
              var newUser = {
                  name : $scope.name,
                  currency : $scope.currency,
                  account : $scope.account
              }

              $scope.userKey.push(newUser);

              if ($scope.registerForm) {
                $scope.registerForm.$setPristine();
                $scope.registerForm.$setUntouched();
                $scope.name = "";
                $scope.currency = "";
                $scope.account = "";
              }
            }

            $scope.addNewMov = function () {
              $scope.movID++;
              var newMov = {
                id : $scope.movID,
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
            $scope.$watch('movID', function(newValue, oldValue) {
                PersistenceService.save("transactionID", newValue);
            }, true);
        }
    ])