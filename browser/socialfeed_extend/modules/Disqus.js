var fs = require('fs');

var SocialFeed = require('socialfeed');
var Handlebars = require('handlebars');
var DisqusTemplate = fs.readFileSync(__dirname + '/../templates/Disqus.html');

var template = Handlebars.compile(DisqusTemplate, {noEscape: true});

module.exports = SocialFeed.Modules.Disqus.extend({
  render: function (item) {
    return template(item);
  }
});
