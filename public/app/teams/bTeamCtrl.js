bplApp.controller('bTeamCtrl',
    function bTeamCtrl ($scope, bTeamSvc, ngProgressFactory) {
        $scope.teams = {};
        $scope.ngProgress = ngProgressFactory.createInstance();
        $scope.ngProgress.setColor('black');
        $scope.ngProgress.set(70);

        bTeamSvc.getTreams()
            .then(function (data) {
                $scope.teams = data;
                $scope.ngProgress.complete();
            });

        $scope.curTeam = '0';

        $scope.openModal = function (team) {
            $scope.curTeam = team;
            $.UIkit.modal('#modal').show();
        }
    }
);