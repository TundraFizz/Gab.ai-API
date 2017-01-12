module.exports = function(app){
  //////////////////////////////////
  // Include local libraries here //
  //////////////////////////////////
  var testing = require("testing");

  ///////////
  // query //
  ///////////
  app.post("/query", function(req, res){
    var username = "TundraFizz";
    var key = "remember_82e5d2c56bdd0811318f0cf078b78bfc";
    var val = "eyJpdiI6IkZUblM0ZlZyWXFqeXVSdGY5aWZJYXc9PSIsInZhbHVlIjoiWllSZ1YzK1ZnSFRxNXI0WTdpTm53YjgyNkxlTFhXM041UW9YU1lxXC9iUXNYUytYTk5pWlF5am9YWEswc0ZySDhGWE5aQnpBcXRNcmRsb1c2cytCak1ZWlVQTktUNGp3ZjdsaUtwb1wvRHVEZz0iLCJtYWMiOiI4ZTUxNjc1NDM5OThmMjYwNmE2ZjVkOGYwNTdhM2UzYzY5NDQxOGUzZWMxNDY5MWMzODFlNTMyNWIyYzIzZjcwIn0";

    var obj = new testing.CreateObject(username, key, val);

    obj.SearchSomething("hi", function(body){
      res.json(body);
    });
  });
}
