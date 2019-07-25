require(['gitbook', 'jQuery'], function (gitbook, $) {
  var url = ''
  var link = ''
  var style = ''
  var insertLogo = function (url, link, style) {
    var _html = '<div class="book-logo">\
                  <a class="book-link" href="'+ link + '">\
                    <img src="' + url + '" style="' + style + '" alt="" />\
                  </a>\
                </div>'
    $('.book-summary').children().eq(0).before(_html)
  }

  gitbook.events.bind('start', function (e, config) {
    url = config['insert-logo-link']['url']
    link = config['insert-logo-link']['link']
    style = config['insert-logo-link']['style']
  })

  gitbook.events.bind("page.change", function () {
    insertLogo(url, link, style)
  })
})
