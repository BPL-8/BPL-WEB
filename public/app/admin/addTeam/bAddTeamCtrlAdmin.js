bplApp.controller('bAddTeamCtrlAdmin',
    function bAddTeamCtrlAdmin ($scope, bTeamSvcAdmin, bIdentity) {
        $scope.addTeamToDB = function (team) {
            if(!team){
                console.log('no Team');
                return;
            }

            bTeamSvcAdmin.addTeam(team, bIdentity.currentUser)
                .then(function () {
                    console.log('added!')
                }, function () {
                    console.log('err occurred !')
                })
        }
    }
);
