bplApp.controller('bFixturesCtrl'
    , function ($scope, bFixturesSvc, bTeamSvc) {
        $scope.matches = {};

        bFixturesSvc.getData()
            .then(function (data) {
                for(var i = 0; i < data.length; i++) assignTeamFor(data[i]);

                $scope.matches = data;

            }, function () {
                console.log('err');
            });

        function assignTeamFor(data){
            bTeamSvc.getIndividualTeam(data.teamOne)
                .then(function (team) {
                    data.teamOne = team;
                }, function () {
                    console.log('err');
                });

            bTeamSvc.getIndividualTeam(data.teamTwo)
                .then(function (team) {
                    data.teamTwo = team;
                }, function () {
                    console.log('err');
                })
        }
    }
);