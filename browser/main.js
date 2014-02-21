var $ = require('jquery');
window.$ = $;

var Handlebars = require('handlebars');
var moment = require('moment');
var SocialFeed = require('socialfeed');
var Twitter = require('./socialfeed_extend/modules/Twitter');
var Disqus = require('./socialfeed_extend/modules/Disqus');
var Github = require('./socialfeed_extend/modules/Github');
var Delicious = require('./socialfeed_extend/modules/Delicious');
var Vimeo = require('./socialfeed_extend/modules/Vimeo');
var GithubReceived = require('./socialfeed_extend/modules/GithubReceived');
var page = require('./page');


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

