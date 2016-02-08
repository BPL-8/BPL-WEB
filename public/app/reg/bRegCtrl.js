bplApp.controller('bRegCtrl',
    function ($scope, $window) {
        $scope.logIn = function () {
            var printContents = document.getElementById('content').innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        };

        $scope.cancelForm = function () {
            $window.history.back();
        };
    }
);