require.config({
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'modernizr': 'vendor/modernizr/modernizr',
    'socialfeed': 'vendor/socialfeed/socialfeed',
    'moment': 'vendor/moment/moment',
    'handlebars': 'vendor/handlebars/handlebars',
    'text': 'vendor/text/text',
    'tmpl': 'socialfeed_extend/templates/',
    'modules': 'socialfeed_extend/modules/'
  },
  shim: {
    'socialfeed': {
      deps: ['jquery'],
      exports: 'SocialFeed'
    },
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});

require([
    'jquery', 
    'handlebars', 
    'moment', 
    'socialfeed', 
    'modules/Twitter',
    'modules/Disqus',
    'modules/Github',
    'modules/Delicious',
    'modules/Vimeo',
    'modules/GithubReceived',
    'page'
  ], 
  function ($, Handlebars, moment, SocialFeed, Twitter, Disqus, Github, Delicious, Vimeo, GithubReceived, page) {

  Handlebars.registerHelper('moment', function(date) {
    return moment(date).fromNow();
  });

  $('.content-hidden').addClass('content-loading').removeClass('content-hidden');

  page.init();

  var sfeed = new SocialFeed({
      el: $('#socialfeed')
  })
  .addModule(new Disqus('mikaelbr', 'OEMdBc63xd0MZGKiVV5JgExTqdO7OSYkjgv613LJ8Py89y44pcoSKeBrelZjepVS'))
  .addModule(new Github('mikaelbr'))
  .addModule(new Vimeo('mikaelbr'))
  .addModule(new Delicious('mikaelbr'))
  .addModule(new Twitter())
  .on('preFetch', function (htmlList, modules) {
    $('#home .loading').show();
  })
  .on('postFetch', function (htmlList, modules) {
    $('#home .loading').hide();
  })
  .start();

  sfeed.on('error', function () {
    console && console.error & console.error('Error');
  });

  var codeFeed = new SocialFeed({
      el: $('#socialfeed-code')
  })
  .addModule(new GithubReceived('mikaelbr'))
  .on('preFetch', function (htmlList, modules) {
    $('#code .loading').show();
  })
  .on('postFetch', function (htmlList, modules) {
    $('#code .loading').hide();
  })
  .start();

});