var fs = require("fs");

module.exports = {
  ParseConfig: function(file, callback){
    fs.readFile(file, "utf8", function(err, contents){
      var json    = {};
      var section = "";
      contents = contents.split("\n");

      for(var i = 0; i < contents.length; i++){
        var line = contents[i];

        if(line){
          if(line[0] == "["){
            // New section
            section = line.substr(1, line.length - 2);
            json[section] = {};
          }
          else{
            // Add data to existing section in JSON
            var index = line.indexOf("=");
            var var1 = line.substr(0, index);
            var var2 = line.substr(index + 1, line.length);
            json[section][var1] = var2;
          }
        }
      }

      callback(json);
    });
  },

  ValidateJSON: function(string){
    try{JSON.parse(string);} catch(e){return false;}
    return true;
  }
}
