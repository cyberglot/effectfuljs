function a(z) {
  var a = M.context();
  a._z = z;
  return M.scope(a_1, a_4);
}

function a(z) {
  var a = M.context();
  a._z = z;
  return M.scope(_a_1, _a_4);
}

function c(z) {
  var c = M.context();
  c._z = z;
  return M.scope(c_1, c_5);
}

function d(z) {
  var d = M.context();
  d._z = z;
  return M.scope(d_1, d_5);
}

function a_1(a) {
  switch (a._z) {
    case 1:
      return M.chain(eff(1), a_2, a_4);

    default:
      return M.chain(eff(2), a_2, a_4);
  }
}

function a_2(a) {
  return M.chain(eff(3), a_3, a_4);
}

function a_3(a) {
  return M.pure();
}

function a_4(a, e) {
  return M.raise(e);
}

function _a_1(a) {
  switch (a._z) {
    case 1:
      return M.chain(eff(1), _a_2, _a_4);

    case 2:
      console.log('1');
      return M.jump(_a_2, _a_4);

    default:
      console.log('2');
      return M.jump(_a_2, _a_4);
  }
}

function _a_2(a) {
  return M.chain(eff(3), _a_3, _a_4);
}

function _a_3(a) {
  return M.pure();
}

function _a_4(a, e) {
  return M.raise(e);
}

function c_1(c) {
  switch (c._z) {
    case 1:
      return M.chain(eff(1), c_2, c_5);

    case 2:
      return M.chain(eff(2), c_3, c_5);

    case 3:
      {
        console.log('z');
      }

    default:
      return M.chain(eff(3), c_2, c_5);
  }
}

function c_2(c) {
  return M.chain(eff(4), c_3, c_5);
}

function c_3(c) {
  return M.chain(eff(5), c_4, c_5);
}

function c_4(c) {
  return M.pure();
}

function c_5(c, e) {
  return M.raise(e);
}

function d_1(d) {
  switch (d._z) {
    case 1:
      return M.chain(eff(1), d_2, d_5);

    case 2:
      return M.chain(eff(2), d_3, d_5);

    case 3:
      console.log('z');
      return M.chain(eff(5), d_3, d_5);

    default:
      return M.chain(eff(3), d_2, d_5);
  }
}

function d_2(d) {
  return M.chain(eff(4), d_3, d_5);
}

function d_3(d) {
  return M.chain(eff(6), d_4, d_5);
}

function d_4(d) {
  return M.pure();
}

function d_5(d, e) {
  return M.raise(e);
}