"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _apolloServerExpress = require("apollo-server-express");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _resolvers = _interopRequireDefault(require("./Graphql/resolvers"));
var _schema = _interopRequireDefault(require("./Graphql/schema"));
var _connectDB = _interopRequireDefault(require("./controllers/connectDB"));
_dotenv["default"].config();

// Apollo GraphQL server setup
var server = new _apolloServerExpress.ApolloServer({
  typeDefs: _schema["default"],
  resolvers: _resolvers["default"],
  introspection: true,
  playground: true
});
var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000;

// Apply Apollo middleware to Express
server.applyMiddleware({
  app: app
});

// Start the Express server
var start = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _connectDB["default"])(process.env.MONGODB_URI);
          case 3:
            app.listen(PORT, function () {
              return console.log("DB CONNECTED & app listening on port: ".concat(PORT, "..."));
            });
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);
          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function start() {
    return _ref.apply(this, arguments);
  };
}();
start();