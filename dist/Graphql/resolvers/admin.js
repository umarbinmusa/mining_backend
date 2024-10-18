"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _Admin = _interopRequireDefault(require("../../models/Admin"));
_dotenv["default"].config();
var adminResolver = {
  Query: {},
  Mutation: {
    create_admin: function () {
      var _create_admin = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var first_name, last_name, email, password, newAdmin, savedAdmin;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              first_name = _ref.first_name, last_name = _ref.last_name, email = _ref.email, password = _ref.password;
              newAdmin = new _Admin["default"]({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password
              });
              _context.next = 4;
              return newAdmin.save();
            case 4:
              savedAdmin = _context.sent;
              return _context.abrupt("return", savedAdmin);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function create_admin(_x, _x2) {
        return _create_admin.apply(this, arguments);
      }
      return create_admin;
    }()
  }
};
var _default = exports["default"] = adminResolver;