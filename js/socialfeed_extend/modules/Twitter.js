// Twitter module
define(['socialfeed', 'handlebars', 'text!tmpl/Twitter.html'], function (SocialFeed, Handlebars, TwitterTemplate) {

  var template = Handlebars.compile(TwitterTemplate);

  return SocialFeed.Modules.extend({

    url: function () {
      // Heroku host for node-serverside.js
      // ident is here is count.
      return 'http://mib-twitfeed.herokuapp.com/?count=' + (this.ident || 10)
    }

    , orderBy: function (item) {
      return -(new Date(item.created_at)).getTime();
    }

    , render: function (item) {
       return template(item);
    }
  });
});