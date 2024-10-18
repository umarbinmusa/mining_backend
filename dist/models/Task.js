"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var Schema = _mongoose["default"].Schema;
var taskSchema = new Schema({
  url: {
    type: String
  },
  name: {
    type: String
  },
  verify: {
    type: String
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "Admin"
  }
});
var _default = exports["default"] = _mongoose["default"].model('Task', taskSchema);