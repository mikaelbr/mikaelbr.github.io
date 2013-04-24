define(['socialfeed', 'handlebars', 'text!tmpl/Delicious.html'], function (SocialFeed, Handlebars, DeliciousTemplate) {

  var template = Handlebars.compile(DeliciousTemplate);

  return SocialFeed.Modules.Delicious.extend({
    render: function (item) {
      return template(item);
    }
  });
});