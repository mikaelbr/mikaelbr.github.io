// Twitter module
define([
      'socialfeed', 'handlebars'
    
    , 'text!tmpl/vimeo/like.html'
    , 'text!tmpl/vimeo/add_comment.html'
    , 'text!tmpl/vimeo/upload.html'

    ], function (
        SocialFeed, Handlebars
      , LikeTmpl
      , CommentTmpl
      , UploadTmpl
    ) {

      var templates = {
           like:        Handlebars.compile(LikeTmpl)
        ,  comment:  Handlebars.compile(CommentTmpl)
        ,  upload:         Handlebars.compile(UploadTmpl)
      };

      var Module = SocialFeed.Modules.Vimeo.extend({
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
      return Module;
});