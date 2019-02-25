var path = require("path");
var friends = require("../data/friendData.js");

// exports API routes
module.exports = function (app) {
    // list of friend entries
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // add new friends
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var newScores = newFriend.Score;
        // var friendResponse = newFriend.score
        var User1 = "";
        var User2 = "";
        var totalDifference;
        var minimumDifference = 1000;
        var bff = 0;


        // shows eachs persons score array
        for (var i = 0; i < friends.length; i++) {
            // console.log(friends[i].Score);

            // goes through each persons score array and extracts individual value
            for (var x = 0; x < friends[i].Score.length; x++) {
                // console.log(friends[i].Score[x]);
                // console.log("new friend", newScores[x]);

                var difference = Math.abs(newFriend.Score[x] - friends[i].Score[x]);
                totalDifference += difference;
            }

            if (totalDifference < minimumDifference) {
                bff = i;
                minimumDifference = totalDifference;
            }

        }

        // will add new user
        friends.push(newFriend);

        // send back to browser the best friend match
        res.json(friends[bff]);
    });
}