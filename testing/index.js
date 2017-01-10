// ===== TODO =====
// https://gab.ai/feed/TundraFizz
// https://gab.ai/api/search/users?q=test

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

  this.url = "https://gab.ai";
  this.jar = request.jar();

  this.cookie = request.cookie(this.key + "=" + this.val);
  this.jar.setCookie(this.cookie, this.url);
}

UserObject.prototype.GetFeed = function(callback){
  // var url = "https://gab.ai";
  // var jar = request.jar();
  // var cookie = request.cookie(this.key + "=" + this.val);
  // jar.setCookie(cookie, url);

  request({
    url: "https://gab.ai/feed/TundraFizz",
    jar: this.jar
  }, function(error, response, body) {
    // We have now received something from the server,
    // but we need to make sure it's valid JSON first!
    if(!ValidateJSON(body))
      body = "An error occurred.";

    callback(body);
  });
}

UserObject.prototype.SearchSomething = function(callback){
  // var url = "https://gab.ai";
  // var jar = request.jar();
  // var cookie = request.cookie(this.key + "=" + this.val);
  // jar.setCookie(cookie, url);

  searchTerm = "test";

  request({
    url: "https://gab.ai/api/search/users?q=" + searchTerm,
    jar: this.jar
  }, function(error, response, body) {
    // We have now received something from the server,
    // but we need to make sure it's valid JSON first!
    if(!ValidateJSON(body))
      body = "An error occurred.";

    callback(body);
  });
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
