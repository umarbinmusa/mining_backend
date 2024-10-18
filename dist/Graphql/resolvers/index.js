"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _task = _interopRequireDefault(require("./task"));
var _admin = _interopRequireDefault(require("./admin"));
var resolvers = {
  Query: {
    getTasks: _task["default"].Query.getTasks
  },
  Mutation: {
    create_task: _task["default"].Mutation.create_task,
    create_admin: _admin["default"].Mutation.create_admin
  }
};
var _default = exports["default"] = resolvers;