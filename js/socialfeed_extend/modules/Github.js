// Twitter module
define([
      'socialfeed', 'handlebars'
    
    , 'text!tmpl/github/create.html'
    , 'text!tmpl/github/createbranch.html'
    , 'text!tmpl/github/watch.html'
    , 'text!tmpl/github/push.html'
    , 'text!tmpl/github/pullrequest.html'
    , 'text!tmpl/github/fork.html'
    , 'text!tmpl/github/issue.html'

    ], function (
        SocialFeed, Handlebars
      , CreateTmpl
      , CreatebranchTmpl
      , WatchTmpl
      , PushTmpl
      , PullrequestTmpl
      , ForkTmpl
      , IssueTmpl
    ) {

      var templates = {
           create:        Handlebars.compile(CreateTmpl)
        ,  createbranch:  Handlebars.compile(CreatebranchTmpl)
        ,  watch:         Handlebars.compile(WatchTmpl)
        ,  push:          Handlebars.compile(PushTmpl)
        ,  pullrequest:   Handlebars.compile(PullrequestTmpl)
        ,  fork:          Handlebars.compile(ForkTmpl)
        ,  issue:         Handlebars.compile(IssueTmpl)
      };

      Handlebars.registerHelper('repoURL', function(repo) {
        return 'https://github.com/' + repo.name;
      });

      Handlebars.registerHelper('userURL', function(actor) {
        return 'https://github.com/' + actor.login;
      });

      Handlebars.registerHelper('shaShort', function(sha) {
        return sha.substr(0, 7);
      });

      return SocialFeed.Modules.Github.extend({
        renderMethods: {
          'CreateEvent': function (item) {
            if (item.payload.ref === null) {
              return templates.create(item);
            }

            return templates.createbranch(item);
          }

          , 'WatchEvent': function (item) {
            return templates.watch(item);
          }

          , 'PushEvent': function (item) {
            return templates.push(item);
          }

          , 'PullRequestEvent': function (item) {
            return templates.pullrequest(item);
          }

          , 'ForkEvent': function (item) {
            return templates.fork(item);
          }

          , 'IssuesEvent': function (item) {
            return templates.issue(item);
          }
        }
      });
});