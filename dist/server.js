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
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _helmet = _interopRequireDefault(require("helmet"));
var _path = _interopRequireDefault(require("path"));
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
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])('tiny'));
app.use((0, _cors["default"])({
  origin: process.env.CORS_ORIGIN || '*'
}));

// Apollo server middleware
server.applyMiddleware({
  app: app
});

// Health check route
app.get('/health', function (req, res) {
  res.status(200).send('OK');
});

// Catch-all handler to serve the React app
app.use(_express["default"]["static"](__dirname + "/client/build"));
app.get("*", function (req, res) {
  res.sendFile(_path["default"].resolve(__dirname, "./client/build", "index.html"));
});

// Start the Express server
var start = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _connectDB["default"])(process.env.MONGODB_URI);
        case 3:
          app.listen(PORT, function () {
            return console.log("DB CONNECTED & app listening on port: ".concat(5000, "..."));
          });
          _context.next = 9;
          break;
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("Error starting server:", _context.t0.message);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function start() {
    return _ref.apply(this, arguments);
  };
}();
process.on('SIGINT', /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        console.log('Shutting down gracefully...');
        process.exit(0);
      case 2:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
})));
start();