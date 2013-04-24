define(['socialfeed', 'handlebars', 'text!tmpl/Disqus.html'], function (SocialFeed, Handlebars, DisqusTemplate) {

  var template = Handlebars.compile(DisqusTemplate, {noEscape: true});

  return SocialFeed.Modules.Disqus.extend({
    render: function (item) {
      return template(item);
    }
  });
});