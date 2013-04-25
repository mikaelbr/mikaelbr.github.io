// Twitter module
define(['socialfeed', 'handlebars', 'text!tmpl/Twitter.html'], function (SocialFeed, Handlebars, TwitterTemplate) {

  var template = Handlebars.compile(TwitterTemplate);


  // From https://gist.github.com/wadey/442463
  function escapeHTML(text) {
    return $('<div/>').text(text).html()
  }
   
  function linkify_entities(tweet) {
    if (!(tweet.entities)) {
        return escapeHTML(tweet.text)
    }
    
    // This is very naive, should find a better way to parse this
    var index_map = {}

    $.each(tweet.entities.urls, function(i,entry) {
      index_map[entry.indices[0]] = [entry.indices[1], function(text) {return "<a href='"+escapeHTML(entry.url)+"'>"+escapeHTML(entry.display_url)+"</a>"}]
    })
    
    $.each(tweet.entities.hashtags, function(i,entry) {
      index_map[entry.indices[0]] = [entry.indices[1], function(text) {return "<a href='http://twitter.com/search?q="+escape("#"+entry.text)+"'>"+escapeHTML(text)+"</a>"}]
    })
    
    $.each(tweet.entities.user_mentions, function(i,entry) {
      index_map[entry.indices[0]] = [entry.indices[1], function(text) {return "<a title='"+escapeHTML(entry.name)+"' href='http://twitter.com/"+escapeHTML(entry.screen_name)+"'>"+escapeHTML(text)+"</a>"}]
    })
    
    var result = ""
    var last_i = 0
    var i = 0
    
    // iterate through the string looking for matches in the index_map
    for (i=0; i < tweet.text.length; ++i) {
      var ind = index_map[i]
      if (ind) {
        var end = ind[0]
        var func = ind[1]
        if (i > last_i) {
          result += escapeHTML(tweet.text.substring(last_i, i))
        }
        result += func(tweet.text.substring(i, end))
        i = end - 1
        last_i = end
      }
    }
    
    if (i > last_i) {
      result += escapeHTML(tweet.text.substring(last_i, i))
    }
    
    return result;
  }
  // End snippet.

  Handlebars.registerHelper('twitParse', function (text) {
        return new Handlebars.SafeString(linkify_entities(text));
  });

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