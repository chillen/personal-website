
/*
 * This will eventually all be handled dynamically, hopefully.
 */

var title    = "Connor Hillen | ";
var navLinks = [
                { title: "Resume", colour: "blue" },
                { title: "About", colour: "red" },
                { title: "Projects", colour: "yellow" },
                { title: "Learn", colour: "purple" },
                { title: "Contact", colour: "green" }
               ];

exports.makeIndex = function(page) {
  var handler = function(req, res) {
    navLinks.forEach( function(item) { item.current = false; } );
    res.render('index', { title: title + page.title, nav: navLinks, content: page.content } );
  };
  return handler;
};

exports.makePage = function(page) {
  var handler = function(req, res) {
    navLinks.forEach( function(item) {
    if (item.title == page.title)
      item.current = true;
    else
      item.current = false;
    });
    res.render('page', { title: title + page.title, nav: navLinks, content: page.content } );
  }
  return handler;
};

exports.setPages = function(pages) {
  navLinks = pages;
}
