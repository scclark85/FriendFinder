var path = require("path");
var friends = require("../data/friendData.js");

// exports API routes
module.exports = function (app) {
    // list of friend entries
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // add new friends
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var friendResponse = newFriend.score

        // need to add a way for us to lock in friends scores

        // need to go through the newFriend array in the list(for loop) in order to match friends together

        // Lowest difference will be a match and will need to show friend name.
        // send a response in here?

        // add alert here of incompleted survery?

    });

    // will add new user
    friends.push(newFriend);

    // send a response out here?
    // add alert here of incompleted survery?
}