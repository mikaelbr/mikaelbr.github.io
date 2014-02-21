var fs = require('fs');

var SocialFeed = require('socialfeed');
var Handlebars = require('handlebars');
var DeliciousTemplate = fs.readFileSync(__dirname + '/../templates/Delicious.html');

var template = Handlebars.compile(DeliciousTemplate);

module.exports = SocialFeed.Modules.Delicious.extend({
  render: function (item) {
    return template(item);
  }
});
