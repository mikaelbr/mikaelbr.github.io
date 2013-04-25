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
    'page'
  ], 
  function ($, Handlebars, moment, SocialFeed, Twitter, Disqus, Github, Delicious, page) {

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
  .addModule(new Delicious('mikaelbr'))
  .addModule(new Twitter())
  .on('preFetch', function (htmlList, modules) {
    $('.loading').show();
  })
  .on('postFetch', function (htmlList, modules) {
    $('.loading').hide();
  })
  .start();

  sfeed.on('error', function () {
    console.log('Error');
  });
});