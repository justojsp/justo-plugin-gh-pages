//imports
import os from "os";
import path from "path";
import cross_spawn from "cross-spawn";

/**
 * Task operation.
 */
export default function op(params) {
  var cmd, args = [], res;

  //(1) arguments
  if (params.length === 0) {
    params = {};
  } else if (params.length >= 1) {
    params = params[0];
  }

  //(2) determine command
  if (/^win/.test(os.platform())) cmd = "git.exe";
  else cmd = "git";

  //(3) run
  args.push("subtree");
  args.push("push");
  args.push("--prefix");
  args.push(params.src);
  args.push("origin");
  args.push("gh-pages");

  res = cross_spawn.sync(cmd, args, {stdio: "inherit"});

  //(4) return
  return res.status;
}
