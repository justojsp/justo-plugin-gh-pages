"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 







op;var _os = require("os");var _os2 = _interopRequireDefault(_os);var _path = require("path");var _path2 = _interopRequireDefault(_path);var _crossSpawn = require("cross-spawn");var _crossSpawn2 = _interopRequireDefault(_crossSpawn);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params) {
  var cmd, args = [], res;


  if (params.length === 0) {
    params = {};} else 
  if (params.length >= 1) {
    params = params[0];}



  if (/^win/.test(_os2.default.platform())) cmd = "git.exe";else 
  cmd = "git";


  args.push("subtree");
  args.push("push");
  args.push("--prefix");
  args.push(params.src);
  args.push("origin");
  args.push("gh-pages");

  res = _crossSpawn2.default.sync(cmd, args, { stdio: "inherit" });


  return res.status;}