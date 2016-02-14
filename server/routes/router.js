var teamApi = require('../api/teamsApi');
var teamAdminApi = require('../api/teamsAdminApi');
var auth = require('../auth/index');

module.exports = function (app) {
    app.get('/api/v1/teams', teamApi.getTeams);

    //adminApi
    app.post('/api/v1/manageTeam', teamAdminApi.addTeam);
    app.put('/api/v1/manageTeam', teamAdminApi.updateTeam);


    app.post('/login', auth.authenticate);
    //DONE//

    //TODO:logout
    app.post('/logout', function (req, res) {
        req.logout();
        res.end();
    });

    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.get('*', function (req, res) {
        res.render('index',{
            bsUser: req.user
        });
    });
};