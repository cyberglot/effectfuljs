var $M = require("@effectful/debugger"),
    $context = $M.context,
    $ret = $M.ret,
    $unhandled = $M.unhandled,
    $brk = $M.brk,
    $mcall = $M.mcall,
    $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
  __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
}, null),
    $s$1 = [{
  a: [1, "1:9-1:10"]
}, null, 0],
    $s$2 = [{}, $s$1, 1],
    $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 2, "1:0-8:0", 32, function file_js($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $l[1] = $m$1($);
      $.goto = 2;
      continue;

    case 1:
      $.goto = 2;
      return $unhandled($.error);

    case 2:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 0, [[0, "1:0-7:1", $s$1], [16, "8:0-8:0", $s$1], [16, "8:0-8:0", $s$1]]),
    $m$1 = $M.fun("m$1", "a", null, $m$0, [], 0, 3, "1:0-7:1", 0, function a($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $.goto = 2;
      $brk();
      $.state = 2;

    case 2:
      $.goto = 3;
      ($context.call = eff)(1);
      $.state = 3;

    case 3:
      $l[1] = 8;
      $.goto = 4;
      $brk();
      $.state = 4;

    case 4:
      $.goto = 5;
      $brk();
      $.state = 5;

    case 5:
      $.goto = 6;
      $mcall("log", console, "fin");
      $.state = 6;

    case 6:
      $.goto = 7;
      $brk();
      $.state = 7;

    case 7:
      $.error = $l[2];
      $.goto = $l[1];
      continue;

    case 8:
      $.goto = 10;
      $brk();
      continue;

    case 9:
      $.goto = 10;
      return $unhandled($.error);

    case 10:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 3:
    case 2:
    case 1:
      $l[2] = $.error;
      $l[1] = 9;
      $.goto = 4;
      break;

    default:
      $.goto = 9;
      break;
  }
}, function ($, $l) {
  switch ($.state) {
    case 3:
    case 2:
    case 1:
      $l[1] = 10;
      $.goto = 4;
      break;

    default:
      $.goto = 10;
      break;
  }
}, 1, [[4, "2:2-6:3", $s$2], [4, "3:4-3:11", $s$2], [2, "3:4-3:10", $s$2], [36, "4:3-4:3", $s$2], [4, "5:4-5:23", $s$2], [2, "5:4-5:22", $s$2], [36, "6:3-6:3", $s$2], [0, null, $s$2], [36, "7:1-7:1", $s$2], [16, "7:1-7:1", $s$2], [16, "7:1-7:1", $s$2]]);

$M.moduleExports();