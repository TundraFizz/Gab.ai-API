var request = require("request");

//---------
// GabAiApi
//---------
function GabAiApi(){}

GabAiApi.CreateObject = function(username, key, val){
  return new UserObject(username, key, val);
}

//-----------
// UserObject
//-----------
function UserObject(username, key, val){
  // Constructor
  this.username = username;
  this.key      = key;
  this.val      = val;
}

UserObject.prototype.DoSomething = function(callback){
  var key = this.key;
  var val = this.val;
  var url = "https://gab.ai";
  var jar = request.jar();
  var cookie = request.cookie(key + "=" + val);
  jar.setCookie(cookie, url);

  request({
    url: "https://gab.ai/feed/TundraFizz",
    jar: jar
  }, function(error, response, body) {
    // We have now received something from the server,
    // but we need to make sure it's valid JSON first!
    if(!ValidateJSON(body))
      body = "An error occurred.";

    callback(body);
  });
}

UserObject.prototype.Debug = function(){
  console.log("username", this.username);
  console.log("key",      this.key);
  console.log("val",      this.val);
}

//----------
// Utilities
//----------
function ValidateJSON(string){
  try{JSON.parse(string);} catch(e){return false;}
  return true;
}

//-------
// Export
//-------
module.exports = GabAiApi;
