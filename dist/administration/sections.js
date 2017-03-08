'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleCms = require('simple-cms');

var _pages = require('../models/pages');

var _pages2 = _interopRequireDefault(_pages);

var _posts = require('../models/posts');

var _posts2 = _interopRequireDefault(_posts);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sections = [new _simpleCms.List({
  title: 'Pages',
  description: 'Here you can modify pages on the site',
  children: [new _simpleCms.SpecificPageModel({
    title: 'Front page',
    description: 'Page that displays at the root',
    dbDocument: _pages2.default,
    pageIdentification: { _page: "frontPage" },
    fields: [new _simpleCms.TextField('title', {
      placeholder: "Nadpis",
      validate: regeneratorRuntime.mark(function validate(value) {
        return regeneratorRuntime.wrap(function validate$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (value) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', ['Vyplňte napdis']);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, validate, this);
      })
    }), new _simpleCms.EditorField('content', {
      label: 'content'
    })]
  }), new _simpleCms.SpecificPageModel({
    title: 'Contact page',
    description: 'Contact page',
    dbDocument: _pages2.default,
    pageIdentification: { _page: "contactPage" },
    fields: [new _simpleCms.TextField('title', {
      placeholder: "Nadpis",
      validate: regeneratorRuntime.mark(function validate(value) {
        return regeneratorRuntime.wrap(function validate$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (value) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', ['Vyplňte napdis']);

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, validate, this);
      })
    }), new _simpleCms.EditorField('content', {
      label: 'content'
    })]
  }), new _simpleCms.SpecificPageModel({
    title: 'About page',
    description: 'Page that displays about info',
    dbDocument: _pages2.default,
    pageIdentification: { _page: "aboutPage" },
    fields: [new _simpleCms.TextField('title', {
      placeholder: "Nadpis",
      validate: regeneratorRuntime.mark(function validate(value) {
        return regeneratorRuntime.wrap(function validate$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (value) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return', ['Vyplňte napdis']);

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, validate, this);
      })
    }), new _simpleCms.EditorField('content', {
      label: 'content'
    })]
  })]
}), new _simpleCms.AddableList({
  onOnePage: 5,
  title: 'Blog posts',
  description: 'Here you can manage blog posts',
  previewFields: ["title", "published"],
  sortQuery: { published: -1 },
  dbDocument: _posts2.default,
  model: new _simpleCms.AddableModel({
    title: "Post",
    description: "",
    fields: [new _simpleCms.TextField('title', {
      placeholder: "title",
      type: "text",
      validate: regeneratorRuntime.mark(function validate(value) {
        return regeneratorRuntime.wrap(function validate$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (value) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt('return', ["Please fill title!"]);

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, validate, this);
      })
    }), new _simpleCms.DateField('published', {
      label: "Publish at: ",
      default: (0, _moment2.default)(new Date()).format("YYYY-MM-DD"),
      validate: regeneratorRuntime.mark(function validate(value) {
        return regeneratorRuntime.wrap(function validate$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (validateDate(value)) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return', ["Not a valid date"]);

              case 2:
              case 'end':
                return _context5.stop();
            }
          }
        }, validate, this);
      })
    }), new _simpleCms.EditorField('content', {
      label: "Content"
    })]
  })
})];

function validateDate(isoDate) {

  if (isNaN(Date.parse(isoDate))) {
    return false;
  } else {
    if (isoDate != new Date(isoDate).toISOString().substr(0, 10)) {
      return false;
    }
  }
  return true;
}

exports.default = sections;