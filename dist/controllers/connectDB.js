"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var ConnectDB = function ConnectDB(URI) {
  return _mongoose["default"].connect(URI);
};
var _default = ConnectDB;
exports["default"] = _default;