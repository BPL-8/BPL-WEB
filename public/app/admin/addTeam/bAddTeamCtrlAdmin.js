bplApp.controller('bAddTeamCtrlAdmin',
    function bAddTeamCtrlAdmin ($scope, bTeamSvcAdmin, bIdentity) {
        $scope.team = {};

        $scope.addTeamToDB = function (team) {
            if(!team){
                console.log('no Team');
                return;
            }

            bTeamSvcAdmin.addTeam(team, bIdentity.currentUser)
                .then(function () {
                    console.log('added!');
                    $scope.team = {};
                }, function () {
                    console.log('err occurred !')
                })
        };

        $scope.options = [
            {id:1 , name:"TEXTILE"},
            {id:2 , name:"MECHANICAL"},
            {id:3 , name:"E & E"},
            {id:4 , name:"IS"},
            {id:5 , name:"EC"},
            {id:6 , name:"CHEMICAL"},
            {id:6 , name:"CIVIL"},
            {id:7 , name:"CS & E"}
        ]
    }
);
