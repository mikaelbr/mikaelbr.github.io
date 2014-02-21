// Twitter module
var SocialFeed = require('socialfeed');
var Github = require('./Github');

module.exports = Github.extend({
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
