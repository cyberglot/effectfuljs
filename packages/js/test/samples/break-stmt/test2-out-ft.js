// *- when it is the last statement
(function () {
  var ctx = M.context();
  return M.scope(f_1, f_4);
});

function f_1(ctx) {
  return M.chain(eff(2), f_2, f_4);
}

function f_2(ctx, a) {
  if (a) {
    return M.pure();
  } else {
    return M.chain(eff(3), f_3, f_4);
  }
}

function f_3(ctx) {
  return M.pure();
}

function f_4(ctx, e) {
  return M.raise(e);
}