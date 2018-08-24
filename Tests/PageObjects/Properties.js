var Properties = function()
{

    //Web Properties
    this.HOST = "webstore";
    this.PORT =  "80";
    this.URL = "http://" + this.HOST + ":" + this.PORT;

    //Test Properties
    this.EMPTY = "<<<EMPTY>>>";
    this.waitTime = 1500;


  };
  module.exports = new Properties();