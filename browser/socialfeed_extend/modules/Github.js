var fs = require('fs');

var SocialFeed = require('socialfeed');
var Handlebars = require('handlebars');
var CreateTmpl = fs.readFileSync(__dirname + '/../templates/github/create.html');
var CreatebranchTmpl = fs.readFileSync(__dirname + '/../templates/github/createbranch.html');
var WatchTmpl = fs.readFileSync(__dirname + '/../templates/github/watch.html');
var PushTmpl = fs.readFileSync(__dirname + '/../templates/github/push.html');
var PullrequestTmpl = fs.readFileSync(__dirname + '/../templates/github/pullrequest.html');
var ForkTmpl = fs.readFileSync(__dirname + '/../templates/github/fork.html');
var IssueTmpl = fs.readFileSync(__dirname + '/../templates/github/issue.html');

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

Handlebars.registerHelper('reverseEach', function(context, options) {
  var ret = "";

  for(var i = context.length - 1, j=0; i >= j; i--) {
    ret = ret + options.fn(context[i]);
  }

  return ret;
});

module.exports = SocialFeed.Modules.Github.extend({
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