module.exports = function(app){
  //////////////////////////////////
  // Include local libraries here //
  //////////////////////////////////
  var request = require("request");

  var lib = require("./func-parser.js");
  var testing = require("testing");
  // https://gab.ai/feed/TundraFizz
  // https://gab.ai/api/search/users?q=test

  ///////////
  // Index //
  ///////////
  app.get("/", function(req, res){

    /////////////////
    // NEW VERSION //
    var username = "TundraFizz";
    var key = "remember_82e5d2c56bdd0811318f0cf078b78bfc";
    var val = "eyJpdiI6IkZUblM0ZlZyWXFqeXVSdGY5aWZJYXc9PSIsInZhbHVlIjoiWllSZ1YzK1ZnSFRxNXI0WTdpTm53YjgyNkxlTFhXM041UW9YU1lxXC9iUXNYUytYTk5pWlF5am9YWEswc0ZySDhGWE5aQnpBcXRNcmRsb1c2cytCak1ZWlVQTktUNGp3ZjdsaUtwb1wvRHVEZz0iLCJtYWMiOiI4ZTUxNjc1NDM5OThmMjYwNmE2ZjVkOGYwNTdhM2UzYzY5NDQxOGUzZWMxNDY5MWMzODFlNTMyNWIyYzIzZjcwIn0";

    var sample1 = new testing.CreateObject(username, key, val);

    sample1.DoSomething(function(body){
      body = JSON.stringify(body, undefined, 2); // spacing level = 2

      res.render("index.ejs", {
        data: body
      });
    });

    /////////////////
    // OLD VERSION //
    // lib.ParseConfig("config.ini",
    // function(config){
    //   var key = config.remember.key;
    //   var val = config.remember.val;
    //   var url = "https://gab.ai";
    //   var jar = request.jar();
    //   var cookie = request.cookie(key + "=" + val);
    //   jar.setCookie(cookie, url);

    //   request({
    //     url: "https://gab.ai/feed/TundraFizz",
    //     jar: jar
    //   }, function(error, response, body) {
    //     // We have now received something from the server,
    //     // but we need to make sure it's valid JSON first!
    //     if(!lib.ValidateJSON(body))
    //       body = "An error occurred.";

    //     res.render("index.ejs", {
    //       data: body
    //     });
    //   });
    // });
  });
}
