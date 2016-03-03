bplApp.controller('bTeamCtrl',
    function bTeamCtrl ($scope, bTeamSvc, ngProgressFactory, $timeout) {
        $scope.teams = {};
        $scope.ngProgress = ngProgressFactory.createInstance();
        $scope.ngProgress.setColor('red');
        $scope.ngProgress.set(70);

        bTeamSvc.getTreams()
            .then(function (data) {
                $scope.teams = data;

                for(var i = 0; i < $scope.teams.length; i++) {
                    $scope.teams[i].ScoreTotal = parseInt($scope.teams[i].ScoreTotal);
                }

                $timeout(function () {
                    $scope.ngProgress.complete();
                },2000);
            });

        $scope.curTeam = '0';

        $scope.openModal = function (team) {
            $scope.curTeam = team;
            $.UIkit.modal('#modal').show();
        }
    }
);