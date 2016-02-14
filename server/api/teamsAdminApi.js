var Team = require('mongoose').model('Team');

exports.addTeam = function (req, res, next) {
    if(!req.user){
        res.status(400);
        res.send();
    }else if(req.user.userName == req.body.data.user.userName){
        var team = req.body.data.team;
        Team.create({
            teamName:team.teamName,
            teamCaptain:team.captain,
            players:[
                {name:team.player[0].name},
                {name:team.player[1].name},
                {name:team.player[2].name},
                {name:team.player[3].name},
                {name:team.player[4].name}
            ],
            regDate:team.regDate,
            qualifiedForNext:true,
            ScoreForThisRound:0,
            ScoreTotal:0,
            branch:team.branch
        });

        res.send(true);

    }else{
        res.status(400);
        res.send()
    }
};

exports.updateTeam = function (req, res, next) {
    if(req.user){
        res.send(true);
    }else{
        res.status(400);
        res.send()
    }
};