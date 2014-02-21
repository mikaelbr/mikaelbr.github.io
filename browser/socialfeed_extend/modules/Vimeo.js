// Twitter module
var fs = require('fs');

var SocialFeed = require('socialfeed');
var Handlebars = require('handlebars');
var LikeTmpl = fs.readFileSync(__dirname + '/../templates/vimeo/like.html');
var CommentTmpl = fs.readFileSync(__dirname + '/../templates/vimeo/add_comment.html');
var UploadTmpl = fs.readFileSync(__dirname + '/../templates/vimeo/upload.html');


var templates = {
     like:    Handlebars.compile(LikeTmpl)
  ,  comment: Handlebars.compile(CommentTmpl)
  ,  upload:  Handlebars.compile(UploadTmpl)
};

module.exports = SocialFeed.Modules.Vimeo.extend({
  renderMethods: {
    'like': function (item) {
      return templates.like(item);
    }

    , 'add_comment': function (item) {
      return templates.comment(item);
    }

    , 'upload': function (item) {
      return templates.upload(item);
    }
  }
});
