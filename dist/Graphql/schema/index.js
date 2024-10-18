"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _apolloServerExpress = require("apollo-server-express");
var _templateObject;
var _default = exports["default"] = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  schema {\n    query: Query\n    mutation: Mutation\n  }\n\n  type Query {\n    getTasks: [Task]\n    getTask(id: ID!): Task\n}\n\ntype Mutation {\n    create_task(url: String!, verify: String!): Task\n    create_admin(first_name: String!, last_name: String!, email: String!, password: String!): Admin\n}\n\ntype Task {\n    id: ID!\n    url: String!\n    verify: String!\n}\ntype Admin {\n  id: ID!\n  first_name: String!\n  last_name: String!\n  email: String!\n  password: String!\n}\n\n"])));