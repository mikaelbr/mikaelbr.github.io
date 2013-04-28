// Twitter module
define(['socialfeed', 'modules/Github'], function (SocialFeed, Github) {

  return Github.extend({
    url: function () {
      return 'https://api.github.com/users/' + this.ident + '/received_events';
    }

    , parse: function (resp) {

      if (resp.meta && resp.meta.status !== 200) {
        return [];
      }

      if (!resp.data) {
        return [];
      }

      return resp.data;
    }
  });
});