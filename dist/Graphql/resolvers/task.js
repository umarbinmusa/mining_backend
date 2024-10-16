"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _Task = _interopRequireDefault(require("../../models/Task"));
_dotenv["default"].config();
var taskResolver = {
  Query: {
    getTasks: function getTasks() {
      return (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var tasks;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _Task["default"].find();
              case 3:
                tasks = _context.sent;
                return _context.abrupt("return", tasks);
              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                throw new Error(_context.t0.message);
              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    }
  },
  Mutation: {
    create_task: function () {
      var _create_task = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref) {
        var url, verify, newTask, savedTask;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = _ref.url, verify = _ref.verify;
                newTask = new _Task["default"]({
                  url: url,
                  verify: verify
                });
                _context2.next = 4;
                return newTask.save();
              case 4:
                savedTask = _context2.sent;
                return _context2.abrupt("return", savedTask);
              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      function create_task(_x, _x2) {
        return _create_task.apply(this, arguments);
      }
      return create_task;
    }()
  }
};
var _default = taskResolver;
exports["default"] = _default;