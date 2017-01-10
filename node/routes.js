module.exports = function(app){
  //////////////////////////////////
  // Include local libraries here //
  //////////////////////////////////
  // None

  ///////////
  // Index //
  ///////////
  app.get("/", function(req, res){
    res.render("index.ejs", {
      data: "Hello world"
    });
  });
}
