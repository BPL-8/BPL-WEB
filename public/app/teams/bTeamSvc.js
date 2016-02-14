bplApp.factory('bTeamSvc',
    function ($resource, $q) {
        var team = $resource('/api/v1/teams:tId',{tId:"@id"});

        return{
            getTreams: function () {
                var dfd = $q.defer();

                team.get({}, function (response) {
                    dfd.resolve(response.teams);
                }, function (response) {
                    dfd.reject(response.data.reason);
                });

                return  dfd.promise;
            },

            addTeams: function () {

            }
        }
});