bplApp.factory('bTeamSvcAdmin',
    function ($resource, $q) {
        var teamApi = $resource('/api/v1/manageTeam:tId', {tId:"@id"});

        return{
            addTeam: function (team, user) {
                var dfd = $q.defer();

                var sendData = {
                    team:team,
                    user:user
                };

                teamApi.save({data:sendData}, function () {
                        dfd.resolve(true);
                    }, function () {
                        dfd.reject(true);
                    });

                return dfd.promise;
            },

            updateTeam: function () {

            }
        }
    }
);