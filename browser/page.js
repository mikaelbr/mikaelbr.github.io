var $ = require('jquery');

module.exports = {
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
    var loc = window.location.hash;
    if (loc === "#about") {
      return this.showPage("#about");
    }

    if (loc === "#code") {
      return this.showPage("#code");
    }

    this.showPage('#home');
  }

  , init: function () {
    this.bind();
    this.setStartPage();
  }
};
