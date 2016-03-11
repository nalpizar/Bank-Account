angular.module('persistence.services')

.service ('PersistenceService',

    function($routeParams) {

        var saveKey = function (key, object) {
            localStorage.setItem(key, angular.toJson(object));
        };

        var verifyKey = function(key) {
            return angular.fromJson(localStorage.getItem(key));
        };

        var removeKey = function(key) {
            localStorage.removeItem(key);
        };

        var getItem = function(userCollection, targetID) {
            var item;

            for (var i = 0; i < userCollection.length; i++) {
                if (userCollection[i].id == targetID) {
                    item = userCollection[i];
                }
            };

            return item;
        };

        var getItemIndex = function (userCollection, targetID) {
            var index;

            for (var i = 0; i < userCollection.length; i++) {
                if (userCollection[i].id == targetID) {
                    index = i;
                }
            };

            return index;
        };

        return {
            save         : saveKey,
            verify       : verifyKey,
            remove       : removeKey,
            getItem      : getItem,
            getItemIndex : getItemIndex
        };
    }
);