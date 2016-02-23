bplApp.controller('bFixturesCtrl'
    , function ($scope, bFixturesSvc, bTeamSvc, ngProgressFactory) {
        $scope.matches = {};
        $scope.ngProgress = ngProgressFactory.createInstance();
        $scope.ngProgress.setColor('black');


        bFixturesSvc.getData()
            .then(function (data) {
                $scope.ngProgress.start();

                for(var i = 0; i < data.length; i++) {
                    assignTeamFor(data[i], i);
                }

                $scope.matches = data;
            }, function () {
                console.log('err');
            });

        function assignTeamFor(data, i){
            $scope.ngProgress.set((data.length - i)%100);
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

        $scope.ngProgress.complete();
    }
);