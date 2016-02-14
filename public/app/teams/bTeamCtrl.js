bplApp.controller('bTeamCtrl',
    function bTeamCtrl ($scope, bTeamSvc) {
        $scope.teams = {};

        bTeamSvc.getTreams()
            .then(function (data) {
                $scope.teams = data;
            });

        $scope.curTeam = '0';

        $scope.openModal = function (team) {
            $scope.curTeam = team;
            $.UIkit.modal('#modal').show();
        }
    }
);