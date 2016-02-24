bplApp.controller('bFixturesCtrl'
    , function ($scope, bFixturesSvc, bTeamSvc, ngProgressFactory) {
        $scope.matches = {};
        $scope.ngProgress = ngProgressFactory.createInstance();
        $scope.ngProgress.setColor('red');
        $scope.ngProgress.set(70);


        bFixturesSvc.getData()
            .then(function (data) {
                $scope.ngProgress.start();

                for(var i = 0; i < data.length; i++) {
                    assignTeamFor(data[i], i);
                }

                $scope.matches = data;
                $scope.ngProgress.complete();
            }, function () {
                console.log('err');
            });

        function assignTeamFor(data, i){
            $scope.ngProgress.set(((data.length - i)*10)%100);
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