import * as M from '@effectful/core';

(function () {
  var i, ref;
  ref = [1, 2, 3];
  i = 0;
  return M.jump(void 0, _1, i, ref);

  function _1(i, ref) {
    if (i < 3) {
      return M.chain(eff(i), _2, i, ref);
    }
  }

  function _2(i, ref) {
    var j, len;
    j = 0, len = ref.length;
    return M.jump(void 0, _3, i, j, len, ref);
  }

  function _3(i, j, len, ref) {
    if (j < len) {
      d = ref[j];
      return M.chain(eff(d), _4, i, j, len, ref);
    } else {
      return M.jump(void 0, _7, i, ref);
    }
  }

  function _4(a, i, j, len, ref) {
    if (a) {
      return M.jump(void 0, _6, i, j, len, ref);
    } else {
      return M.chain(eff(2), _5, i, j, len, ref);
    }
  }

  function _5(a, i, j, len, ref) {
    if (a) {
      return M.jump(void 0, _7, i, ref);
    } else {
      return M.jump(void 0, _6, i, j, len, ref);
    }
  }

  function _6(i, j, len, ref) {
    j++;
    return M.jump(void 0, _3, i, j, len, ref);
  }

  function _7(i, ref) {
    i++;
    return M.jump(void 0, _1, i, ref);
  }
});