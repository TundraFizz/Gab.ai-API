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
  this.cookie   = request.cookie(this.key + "=" + this.val);
  this.url      = "";

  this.cookieJar = request.jar();
  this.cookieJar.setCookie(this.cookie, "https://gab.ai");

  this.RequestData = function(callback){
    request({
      url: this.url,
      jar: this.cookieJar
    }, function(error, response, body){
      if(!ValidateJSON(body))
        body = "An error occurred.";

      callback(body);
    });
  };
}

UserObject.prototype.GetFeed = function(callback){
  this.url = "https://gab.ai/feed/" + this.username;
  this.RequestData(function(body){callback(body);});
}

UserObject.prototype.SearchSomething = function(searchTerm, callback){
  this.url = "https://gab.ai/api/search/users?q=" + searchTerm;
  this.RequestData(function(body){callback(body);});
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
