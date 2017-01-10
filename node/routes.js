module.exports = function(app){
  //////////////////////////////////
  // Include local libraries here //
  //////////////////////////////////
  var request = require("request");

  var lib = require("./func-parser.js");
  var testing = require("testing");

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

    // sample1.DoSomething(function(body){
    //   body = JSON.stringify(body, undefined, 2); // spacing level = 2

    //   res.render("index.ejs", {
    //     data: body
    //   });
    // });

    sample1.DoSomething(function(body){
      body = JSON.stringify(body, undefined, 2);

      res.render("index.ejs", {
        data: body
      });
    });

  });
}
