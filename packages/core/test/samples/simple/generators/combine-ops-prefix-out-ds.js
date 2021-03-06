var $M = require("@effectful/debugger"),
    $iterator = $M.iterator,
    $yld = $M.yld,
    $iterErr = $M.iterErr,
    $iterFin = $M.iterFin,
    $iterNext = $M.iterNext,
    $context = $M.context,
    $ret = $M.ret,
    $retG = $M.retG,
    $unhandled = $M.unhandled,
    $unhandledG = $M.unhandledG,
    $brk = $M.brk,
    $lset = $M.lset,
    $mcall = $M.mcall,
    $m = $M.module("file.js", null, typeof module === "undefined" ? null : module, null, "$", {
  __webpack_require__: typeof __webpack_require__ !== "undefined" && __webpack_require__
}, null),
    $s$1 = [{
  d: [1, "4:10-4:11"],
  a4: [2, "15:10-15:12"],
  a5: [3, "30:10-30:12"]
}, null, 0],
    $s$2 = [{
  i: [1, "4:12-4:13"],
  j: [2, "5:6-5:7"]
}, $s$1, 1],
    $s$3 = [{}, $s$1, 1],
    $s$4 = [{
  e: [1, "20:11-20:12"]
}, $s$3, 1],
    $s$5 = [{}, $s$1, 1],
    $s$6 = [{
  i: [1, "31:13-31:14"]
}, $s$5, 2],
    $m$0 = $M.fun("m$0", "file.js", null, null, [], 0, 4, "1:0-33:0", 32, function file_js($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $lset($l, 1,
      /*d*/
      $m$1($));
      $lset($l, 2,
      /*a4*/
      $m$2($));
      $lset($l, 3,
      /*a5*/
      $m$3($));
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $.goto = 2;
      $mcall("profile", M, "generators");
      $.state = 2;

    case 2:
      $.goto = 3;
      $brk();
      $.state = 3;

    case 3:
      $.goto = 5;
      $mcall("option", M, {
        combineOps: true,
        scopePrefix: true,
        scopeContext: false
      });
      continue;

    case 4:
      $.goto = 5;
      return $unhandled($.error);

    case 5:
      return $ret($.result);

    default:
      throw new Error("Invalid state");
  }
}, null, null, 0, [[4, "1:0-1:24", $s$1], [2, "1:0-1:23", $s$1], [4, "2:0-2:71", $s$1], [2, "2:0-2:70", $s$1], [16, "33:0-33:0", $s$1], [16, "33:0-33:0", $s$1]]),
    $m$1 = $M.fun("m$1", "d", null, $m$0, ["i"], 1, 12, "4:0-13:1", 2, function d($, $l, $p) {
  var $1;

  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $lset($l, 2,
      /*j*/
      0);
      $.goto = 2;
      $brk();
      $.state = 2;

    case 2:
      $1 = $l[1];
      $lset($l, 1,
      /*i*/
      $1 + 1);
      $.goto = 3;
      return $yld($1);

    case 3:
      $1 = $l[2];
      $lset($l, 2,
      /*j*/
      $1 + 1);
      $.goto = 4;
      return $yld($1);

    case 4:
      $.goto = 5;
      $brk();
      $.state = 5;

    case 5:
      $.goto = 6;
      $p = ($context.call = some)($lset($l, 1,
      /*i*/
      $l[1] + 2), $l[2]);
      $.state = 6;

    case 6:
      $.goto = 7;
      $p = $iterator($p + $l[2]);
      $.state = 7;

    case 7:
      $l[5] = $p;
      $.state = 8;

    case 8:
      $.goto = 9;
      $p = $iterNext($l[5], $l[8]);
      $.state = 9;

    case 9:
      $l[6] = $p;
      $.state = 10;

    case 10:
      if ($l[6].done) {
        $.state = 11;
      } else {
        $.goto = 33;
        continue;
      }

    case 11:
      $l[7] = $l[6].value;
      $.goto = 12;
      return $yld($l[7]);

    case 12:
      if ($p) {
        $.state = 13;
      } else {
        $.goto = 31;
        continue;
      }

    case 13:
      $.goto = 14;
      $brk();
      $.state = 14;

    case 14:
      $.goto = 15;
      $p = $iterator($lset($l, 1,
      /*i*/
      $l[1] + 3));
      $.state = 15;

    case 15:
      $l[9] = $p;
      $.state = 16;

    case 16:
      $.goto = 17;
      $p = $iterNext($l[9], $l[11]);
      $.state = 17;

    case 17:
      $l[10] = $p;
      $.state = 18;

    case 18:
      if ($l[10].done) {
        $.state = 19;
      } else {
        $.goto = 20;
        continue;
      }

    case 19:
      $.result = $l[10].value;
      $.goto = 45;
      continue;

    case 20:
      $.goto = 21;
      return $yld($l[10].value);

    case 21:
      $l[11] = $p;
      $.goto = 16;
      continue;

    case 22:
      if ($l[9].throw) {
        $.state = 23;
      } else {
        $.goto = 25;
        continue;
      }

    case 23:
      $.goto = 24;
      $p = $iterErr($l[9], $.error);
      $.state = 24;

    case 24:
      $l[10] = $p;
      $.goto = 18;
      continue;

    case 25:
      $.error = $M.iterErrUndef();
      $l[4] = 44;
      $.state = 26;

    case 26:
      $.goto = 27;
      $p = $iterFin($l[9], $.result);
      $.state = 27;

    case 27:
      if ($p.done) {
        $.state = 28;
      } else {
        $.goto = 29;
        continue;
      }

    case 28:
      $.goto = $l[4];
      continue;

    case 29:
      $.goto = 30;
      return $yld($p.value);

    case 30:
      $l[11] = $p;
      $.goto = 16;
      continue;

    case 31:
      $.goto = 32;
      $brk();
      $.state = 32;

    case 32:
      $.result = $l[1];
      $.goto = 45;
      continue;

    case 33:
      $.goto = 34;
      return $yld($l[6].value);

    case 34:
      $l[8] = $p;
      $.goto = 8;
      continue;

    case 35:
      if ($l[5].throw) {
        $.state = 36;
      } else {
        $.goto = 38;
        continue;
      }

    case 36:
      $.goto = 37;
      $p = $iterErr($l[5], $.error);
      $.state = 37;

    case 37:
      $l[6] = $p;
      $.goto = 10;
      continue;

    case 38:
      $.error = $M.iterErrUndef();
      $l[3] = 44;
      $.state = 39;

    case 39:
      $.goto = 40;
      $p = $iterFin($l[5], $.result);
      $.state = 40;

    case 40:
      if ($p.done) {
        $.state = 41;
      } else {
        $.goto = 42;
        continue;
      }

    case 41:
      $.goto = $l[3];
      continue;

    case 42:
      $.goto = 43;
      return $yld($p.value);

    case 43:
      $l[8] = $p;
      $.goto = 8;
      continue;

    case 44:
      $.goto = 45;
      return $unhandledG($.error);

    case 45:
      return $retG($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 34:
    case 33:
    case 10:
      $.goto = 35;
      break;

    case 21:
    case 20:
    case 18:
      $.goto = 22;
      break;

    case 38:
    case 35:
    case 9:
    case 8:
      $l[3] = 44;
      $.goto = 39;
      break;

    case 25:
    case 22:
    case 17:
    case 16:
      $l[4] = 44;
      $.goto = 26;
      break;

    default:
      $.goto = 44;
      break;
  }
}, function ($, $l) {
  switch ($.state) {
    case 38:
    case 35:
    case 34:
    case 33:
    case 10:
    case 9:
    case 8:
      $l[3] = 45;
      $.goto = 39;
      break;

    case 25:
    case 22:
    case 21:
    case 20:
    case 18:
    case 17:
    case 16:
      $l[4] = 45;
      $.goto = 26;
      break;

    default:
      $.goto = 45;
      break;
  }
}, 1, [[4, "5:2-5:12", $s$2], [4, "6:2-6:25", $s$2], [2, "6:9-6:18", $s$2], [2, "6:2-6:24", $s$2], [4, "7:2-11:3", $s$2], [2, "7:19-7:36", $s$2], [2, "7:12-7:40", $s$2], [0, null, $s$2], [2, "7:12-7:40", $s$2], [0, null, $s$2], [0, null, $s$2], [2, "7:6-7:40", $s$2], [0, null, $s$2], [4, "8:4-8:27", $s$2], [2, "8:11-8:26", $s$2], [0, null, $s$2], [2, "8:11-8:26", $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [2, "8:11-8:26", $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [2, "8:11-8:26", $s$2], [0, null, $s$2], [4, "10:4-10:13", $s$2], [0, null, $s$2], [2, "7:12-7:40", $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [0, null, $s$2], [2, "7:12-7:40", $s$2], [0, null, $s$2], [16, "13:1-13:1", $s$2], [16, "13:1-13:1", $s$2]]),
    $m$2 = $M.fun("m$2", "a4", null, $m$0, [], 0, 14, "15:0-28:1", 2, function a4($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $.goto = 2;
      return $yld(1);

    case 2:
      $.goto = 3;
      $brk();
      $.state = 3;

    case 3:
      $.goto = 4;
      $brk();
      $.state = 4;

    case 4:
      $.goto = 5;
      return $yld(2);

    case 5:
      $.goto = 6;
      $brk();
      $.state = 6;

    case 6:
      $.goto = 7;
      return $yld(3);

    case 7:
      $l[2] = 19;
      $.goto = 13;
      $brk();
      continue;

    case 8:
      $lset($l, 1,
      /*e*/
      $.error);
      $.error = void 0;
      $.goto = 9;
      $brk();
      $.state = 9;

    case 9:
      $.goto = 10;
      return $yld("excep");

    case 10:
      $.goto = 11;
      $brk();
      $.state = 11;

    case 11:
      $.goto = 12;
      return $yld($l[1]);

    case 12:
      $l[2] = 19;
      $.goto = 13;
      $brk();
      $.state = 13;

    case 13:
      $.goto = 14;
      $brk();
      $.state = 14;

    case 14:
      $.goto = 15;
      return $yld("f");

    case 15:
      $.goto = 16;
      $brk();
      $.state = 16;

    case 16:
      $.goto = 17;
      return $yld("e");

    case 17:
      $.goto = 18;
      $brk();
      $.state = 18;

    case 18:
      $.error = $l[3];
      $.goto = $l[2];
      continue;

    case 19:
      $.goto = 20;
      $brk();
      $.state = 20;

    case 20:
      $.goto = 21;
      $p = ($context.call = a2)();
      $.state = 21;

    case 21:
      $.goto = 22;
      $p = $iterator($p);
      $.state = 22;

    case 22:
      $l[6] = $p;
      $.state = 23;

    case 23:
      $.goto = 24;
      $p = $iterNext($l[6], $l[9]);
      $.state = 24;

    case 24:
      $l[7] = $p;
      $.state = 25;

    case 25:
      if ($l[7].done) {
        $.state = 26;
      } else {
        $.goto = 46;
        continue;
      }

    case 26:
      $l[8] = $l[7].value;
      $.goto = 27;
      $p = ($context.call = a3)();
      $.state = 27;

    case 27:
      $.goto = 28;
      $p = $iterator($p);
      $.state = 28;

    case 28:
      $l[10] = $p;
      $.state = 29;

    case 29:
      $.goto = 30;
      $p = $iterNext($l[10], $l[13]);
      $.state = 30;

    case 30:
      $l[11] = $p;
      $.state = 31;

    case 31:
      if ($l[11].done) {
        $.state = 32;
      } else {
        $.goto = 35;
        continue;
      }

    case 32:
      $l[12] = $l[11].value;
      $.goto = 33;
      $p = ($context.call = a1)($l[8], $l[12]);
      $.state = 33;

    case 33:
      $.goto = 34;
      return $yld($p);

    case 34:
      $.goto = 58;
      $brk();
      continue;

    case 35:
      $.goto = 36;
      return $yld($l[11].value);

    case 36:
      $l[13] = $p;
      $.goto = 29;
      continue;

    case 37:
      if ($l[10].throw) {
        $.state = 38;
      } else {
        $.goto = 40;
        continue;
      }

    case 38:
      $.goto = 39;
      $p = $iterErr($l[10], $.error);
      $.state = 39;

    case 39:
      $l[11] = $p;
      $.goto = 31;
      continue;

    case 40:
      $.error = $M.iterErrUndef();
      $l[5] = 57;
      $.state = 41;

    case 41:
      $.goto = 42;
      $p = $iterFin($l[10], $.result);
      $.state = 42;

    case 42:
      if ($p.done) {
        $.state = 43;
      } else {
        $.goto = 44;
        continue;
      }

    case 43:
      $.goto = $l[5];
      continue;

    case 44:
      $.goto = 45;
      return $yld($p.value);

    case 45:
      $l[13] = $p;
      $.goto = 29;
      continue;

    case 46:
      $.goto = 47;
      return $yld($l[7].value);

    case 47:
      $l[9] = $p;
      $.goto = 23;
      continue;

    case 48:
      if ($l[6].throw) {
        $.state = 49;
      } else {
        $.goto = 51;
        continue;
      }

    case 49:
      $.goto = 50;
      $p = $iterErr($l[6], $.error);
      $.state = 50;

    case 50:
      $l[7] = $p;
      $.goto = 25;
      continue;

    case 51:
      $.error = $M.iterErrUndef();
      $l[4] = 57;
      $.state = 52;

    case 52:
      $.goto = 53;
      $p = $iterFin($l[6], $.result);
      $.state = 53;

    case 53:
      if ($p.done) {
        $.state = 54;
      } else {
        $.goto = 55;
        continue;
      }

    case 54:
      $.goto = $l[4];
      continue;

    case 55:
      $.goto = 56;
      return $yld($p.value);

    case 56:
      $l[9] = $p;
      $.goto = 23;
      continue;

    case 57:
      $.goto = 58;
      return $unhandledG($.error);

    case 58:
      return $retG($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
      $.goto = 8;
      break;

    case 47:
    case 46:
    case 25:
      $.goto = 48;
      break;

    case 36:
    case 35:
    case 31:
      $.goto = 37;
      break;

    case 51:
    case 48:
    case 24:
    case 23:
      $l[4] = 57;
      $.goto = 52;
      break;

    case 40:
    case 37:
    case 30:
    case 29:
      $l[5] = 57;
      $.goto = 41;
      break;

    case 12:
    case 11:
    case 10:
    case 9:
    case 8:
      $l[3] = $.error;
      $l[2] = 57;
      $.goto = 13;
      break;

    default:
      $.goto = 57;
      break;
  }
}, function ($, $l) {
  switch ($.state) {
    case 12:
    case 11:
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
    case 4:
    case 3:
      $l[2] = 58;
      $.goto = 13;
      break;

    case 51:
    case 48:
    case 47:
    case 46:
    case 25:
    case 24:
    case 23:
      $l[4] = 58;
      $.goto = 52;
      break;

    case 40:
    case 37:
    case 36:
    case 35:
    case 31:
    case 30:
    case 29:
      $l[5] = 58;
      $.goto = 41;
      break;

    default:
      $.goto = 58;
      break;
  }
}, 1, [[4, "16:2-16:10", $s$3], [2, "16:2-16:9", $s$3], [4, "17:2-26:3", $s$3], [5, "18:4-18:12", $s$3], [3, "18:4-18:11", $s$3], [5, "19:4-19:12", $s$3], [3, "19:4-19:11", $s$3], [37, "20:3-20:3", $s$3], [4, "21:4-21:18", $s$4], [2, "21:4-21:17", $s$4], [4, "22:4-22:12", $s$4], [2, "22:4-22:11", $s$4], [36, "23:3-23:3", $s$3], [4, "24:4-24:14", $s$3], [2, "24:4-24:13", $s$3], [4, "25:4-25:14", $s$3], [2, "25:4-25:13", $s$3], [36, "26:3-26:3", $s$3], [0, null, $s$3], [4, "27:2-27:37", $s$3], [2, "27:18-27:22", $s$3], [2, "27:11-27:22", $s$3], [0, null, $s$3], [2, "27:11-27:22", $s$3], [0, null, $s$3], [0, null, $s$3], [2, "27:31-27:35", $s$3], [2, "27:24-27:35", $s$3], [0, null, $s$3], [2, "27:24-27:35", $s$3], [0, null, $s$3], [0, null, $s$3], [2, "27:8-27:36", $s$3], [2, "27:2-27:36", $s$3], [36, "28:1-28:1", $s$3], [2, "27:24-27:35", $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [2, "27:24-27:35", $s$3], [0, null, $s$3], [2, "27:11-27:22", $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [0, null, $s$3], [2, "27:11-27:22", $s$3], [0, null, $s$3], [16, "28:1-28:1", $s$3], [16, "28:1-28:1", $s$3]]),
    $m$3 = $M.fun("m$3", "a5", null, $m$0, [], 0, 2, "30:0-32:1", 2, function a5($, $l, $p) {
  for (;;) switch ($.state = $.goto) {
    case 0:
      $.goto = 1;
      $brk();
      $.state = 1;

    case 1:
      $l = $.$ = [$l, void 0, void 0, void 0, void 0, void 0];
      $.goto = 2;
      $p = ($context.call = $l[0][0][2])();
      $.state = 2;

    case 2:
      $.goto = 3;
      $p = $iterator($p);
      $.state = 3;

    case 3:
      $l[3] = $p;
      $.state = 4;

    case 4:
      $.state = 5;

    case 5:
      $.goto = 6;
      $brk();
      $.state = 6;

    case 6:
      $context.call = $l[3].next;
      $.goto = 7;
      $p = $l[3].next();
      $.state = 7;

    case 7:
      if ($p.done) {
        $.state = 8;
      } else {
        $.goto = 10;
        continue;
      }

    case 8:
      $.state = 9;

    case 9:
      $l[0][1] = 16;
      $.goto = 15;
      continue;

    case 10:
      $lset($l, 1,
      /*i*/
      $p.value);
      $.goto = 11;
      $brk();
      $.state = 11;

    case 11:
      $.goto = 12;
      return $yld($l[1]);

    case 12:
      $l = $.$ = [$l[0], void 0, void 0, $l[3], void 0, void 0];
      $.goto = 5;
      continue;

    case 13:
      $.goto = 14;
      $iterFin($l[3]);
      $.state = 14;

    case 14:
      $.goto = $l[2];
      continue;

    case 15:
      $l = $.$ = $l[0];
      $.goto = $l[1];
      continue;

    case 16:
      $.goto = 18;
      $brk();
      continue;

    case 17:
      $.goto = 18;
      return $unhandledG($.error);

    case 18:
      return $retG($.result);

    default:
      throw new Error("Invalid state");
  }
}, function ($, $l) {
  switch ($.state) {
    case 14:
    case 13:
    case 9:
    case 4:
      $l[0][1] = 17;
      $.goto = 15;
      break;

    case 12:
    case 11:
    case 10:
    case 8:
    case 7:
    case 6:
    case 5:
      $l[2] = 15;
      $l[0][1] = 17;
      $.goto = 13;
      break;

    default:
      $.goto = 17;
      break;
  }
}, function ($, $l) {
  switch ($.state) {
    case 14:
    case 13:
    case 9:
    case 4:
      $l[0][1] = 18;
      $.goto = 15;
      break;

    case 12:
    case 11:
    case 10:
    case 8:
    case 7:
    case 6:
    case 5:
      $l[2] = 15;
      $l[0][1] = 18;
      $.goto = 13;
      break;

    default:
      $.goto = 18;
      break;
  }
}, 1, [[4, "31:2-31:32", $s$5], [2, "31:18-31:22", $s$6], [2, "31:18-31:22", $s$6], [0, null, $s$5], [0, null, $s$5], [4, "31:13-31:14", $s$6], [2, "31:18-31:22", $s$6], [0, null, $s$5], [0, null, $s$5], [0, null, $s$5], [4, "31:24-31:32", $s$6], [2, "31:24-31:31", $s$6], [0, null, $s$5], [2, "31:18-31:22", $s$6], [0, null, $s$5], [0, null, $s$5], [36, "32:1-32:1", $s$5], [16, "32:1-32:1", $s$5], [16, "32:1-32:1", $s$5]]);

$M.moduleExports();