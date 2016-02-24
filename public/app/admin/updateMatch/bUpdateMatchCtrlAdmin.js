bplApp.controller('bUpdateMatchCtrlAdmin',
    function bUpdateMatchCtrlAdmin ($scope, bFixturesSvc, bTeamSvc, ngProgressFactory) {
        $scope.matches = {};
        $scope.ngProgress = ngProgressFactory.createInstance();
        $scope.ngProgress.setColor('red');
        bFixturesSvc.getData()
            .then(function (data) {
                for(var i = 0; i < data.length; i++) assignTeamFor(data[i]);

                $scope.matches = data;

            }, function () {
                console.log('err');
            });

        $scope.openEdit = function (team, index) {
            $scope.curMatch = team;
            $scope.curTeamIndex = index;
            $.UIkit.modal('#modal').show();
        };

        $scope.deleteMatch = function (team, index) {

        };

        $scope.updateMatch = function (curMatch) {
            //curMatch.matchDate = curMatch.newMatchDate;
            //curMatch.matchTime = curMatch.newMatchTime;
            //curMatch.teamOne = curMatch.teamOne._id;
            //curMatch.teamTwo = curMatch.teamTwo._id;
            //console.log(curMatch);
        };

        $scope.round = [
            {name:'1'},
            {name:'2'},
            {name:'3'},
            {name:'4'}
        ];

        bTeamSvc.getTreams()
            .then(function (data) {
                $scope.ngProgress.start();
                $scope.teams = data;
                $scope.ngProgress.complete();
            });

        //TODO:assign teams to id
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