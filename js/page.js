define(['jquery'], function ($) {
  return {
    showPage: function (id) {
      var $el = $(id);
      $el.show().siblings('.content').hide();
    }

    , bind: function () {
      var that = this;
      $('nav').on('click', 'li a', function () {
        that.showPage($(this).attr('href'));
      });
    }

    , setStartPage: function () {
      if (window.location.hash === "#about") {
        return this.showPage("#about");
      }
    
      this.showPage('#home');
    }
    
    , init: function () {
      this.bind();
      this.setStartPage();
    }
  }
});