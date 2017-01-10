module.exports = function(app){
  //////////////////////////////////
  // Include local libraries here //
  //////////////////////////////////
  var testing = require("testing");

  ///////////
  // query //
  ///////////
  app.post("/query", function(req, res){
    console.log(req);

    // Do something
    var username = "TundraFizz";
    var key = "remember_82e5d2c56bdd0811318f0cf078b78bfc";
    var val = "eyJpdiI6IkZUblM0ZlZyWXFqeXVSdGY5aWZJYXc9PSIsInZhbHVlIjoiWllSZ1YzK1ZnSFRxNXI0WTdpTm53YjgyNkxlTFhXM041UW9YU1lxXC9iUXNYUytYTk5pWlF5am9YWEswc0ZySDhGWE5aQnpBcXRNcmRsb1c2cytCak1ZWlVQTktUNGp3ZjdsaUtwb1wvRHVEZz0iLCJtYWMiOiI4ZTUxNjc1NDM5OThmMjYwNmE2ZjVkOGYwNTdhM2UzYzY5NDQxOGUzZWMxNDY5MWMzODFlNTMyNWIyYzIzZjcwIn0";

    var sample1 = new testing.CreateObject(username, key, val);

    searchTerm = "yolo";

    sample1.SearchSomething(searchTerm, function(body){
      body = JSON.stringify(body, undefined, 2);

      res.render("index.ejs", {
        data: body
      });
    });


    res.json(people);
  });
}
