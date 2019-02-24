var path = require("path");

module.exports = function (app) {
  
  // survey page
    app.get("/survery", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survery.html"));
    });

    
  // default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}