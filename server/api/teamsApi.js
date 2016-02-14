var Team = require('mongoose').model('Team');

exports.getTeams = function (req, res, next) {
    Team.find({}).exec(function (err, doc) {
        if(err){
            res.status(400);
            res.send({reason:'err occurred'});
        }

        res.send({teams:doc});
    });
};

exports.createTeam = function () {

};