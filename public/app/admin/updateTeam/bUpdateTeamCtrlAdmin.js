bplApp.controller('bUpdateTeamCtrlAdmin',
    function bUpdateTeamCtrlAdmin ($scope, bTeamSvc , bTeamSvcAdmin) {
        $scope.teams = {};
        $scope.curTeamIndex = '';

        bTeamSvc.getTreams()
            .then(function (data) {
                $scope.teams = data;
            });

        $scope.curTeam = '0';

        $scope.order = "ScoreTotal";

        $scope.openEdit = function (team, index) {
            $scope.curTeam = team;
            $scope.curTeam.ScoreForThisRound = '';
            $scope.curTeamIndex = index;
            $scope.curTeam.ScoreTotal = parseInt($scope.curTeam.ScoreTotal);
            $.UIkit.modal('#modal').show();
        };

        $scope.updateTeam = function (team) {
            team.ScoreTotal =  parseInt($scope.teams[$scope.curTeamIndex].ScoreTotal + parseInt(team.ScoreForThisRound));

            bTeamSvcAdmin.updateTeam(team)
                .then(function () {
                    console.log('success');
                    $scope.curTeam = {};
                    $.UIkit.modal('#modal').hide();
                }, function () {
                    console.log('err');
                    $.UIkit.modal('#modal').hide();
                })

        };

        $scope.updateTotalScore = function (team) {
            bTeamSvcAdmin.updateTeam(team)
                .then(function () {
                    console.log('success');
                    $scope.curTeam = {};
                    $.UIkit.modal('#modal').hide();
                }, function () {
                    console.log('err');
                    $.UIkit.modal('#modal').hide();
                })
        }
    }
);
