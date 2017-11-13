function a() {
  var a = M.context();
  return M.scope(a_1, a_7);
}

function b() {
  var b = M.context();
  return M.scope(b_1, b_8);
}

function c() {
  var c = M.context();
  return M.scope(c_1, c_7);
}

function d() {
  var d = M.context();
  return M.scope(d_1, d_7);
}

function e() {
  var e = M.context();
  return M.scope(e_1, e_9);
}

function f() {
  var f = M.context();
  return M.scope(f_1, f_8);
}

function g() {
  var g = M.context();
  return M.scope(g_1, g_8);
}

function a_1(a) {
  a._fc = a_3;
  return M.chain(eff('in body'), a_2, a_5);
}

function a_2(a) {
  return M.chain(eff('in `finally`'), a._fc);
}

function a_3(a) {
  return M.chain(eff('after `finally`'), a_4, a_5);
}

function a_4(a) {
  return M.pure();
}

function a_5(a, e) {
  return M.raise(e);
}

function a_6(a) {
  return M.raise(a._err1);
}

function a_7(a, b) {
  a._fc = a_6, a._err1 = b;
  return M.jump(a_2, a_5);
}

function b_1(b) {
  b._fc = b_4;
  return M.chain(eff('in body'), b_3, b_6);
}

function b_2(b) {
  b._e = b._ex;
  b._fc = b_4;
  return M.chain(eff('in `catch`', b._e), b_3, b_6);
}

function b_3(b) {
  return M.chain(eff('in `finally`'), b._fc);
}

function b_4(b) {
  return M.chain(eff('after `finally`'), b_5, b_6);
}

function b_5(b) {
  return M.pure();
}

function b_6(b, e) {
  return M.raise(e);
}

function b_7(b) {
  return M.raise(b._err1);
}

function b_8(b, a) {
  b._ex = a;
  return M.jump(b_2, b_9);
}

function b_9(b, a) {
  b._fc = b_7, b._err1 = a;
  return M.jump(b_3, b_6);
}

function c_1(c) {
  c._fc = c_3;
  return M.chain(eff('in body'), c_2, c_5);
}

function c_2(c) {
  console.log('in `finally`');
  return M.jump(c._fc);
}

function c_3(c) {
  return M.chain(eff('after `finally`'), c_4, c_5);
}

function c_4(c) {
  return M.pure();
}

function c_5(c, e) {
  return M.raise(e);
}

function c_6(c) {
  return M.raise(c._err1);
}

function c_7(c, a) {
  c._fc = c_6, c._err1 = a;
  return M.jump(c_2, c_5);
}

function d_1(d) {
  console.log('in body');
  d._fc = d_3;
  return M.jump(d_2, d_5);
}

function d_2(d) {
  return M.chain(eff('in `finally`'), d._fc);
}

function d_3(d) {
  return M.chain(eff('after `finally`'), d_4, d_5);
}

function d_4(d) {
  return M.pure();
}

function d_5(d, e) {
  return M.raise(e);
}

function d_6(d) {
  return M.raise(d._err1);
}

function d_7(d, a) {
  d._fc = d_6, d._err1 = a;
  return M.jump(d_2, d_5);
}

function e_1(e) {
  console.log('before');
  return M.chain(eff('before'), e_2, e_11);
}

function e_2(e) {
  console.log('in body');
  e._fc = e_7;
  return M.chain(eff('in body'), e_5, e_9);
}

function e_3(e) {
  e._e = e._ex;
  console.log('catch', e._e);
  return M.chain(eff('catch', e._e), e_4, e_12);
}

function e_4(e) {
  console.log('catch', e._e);
  e._fc = e_7;
  return M.jump(e_5, e_9);
}

function e_5(e) {
  console.log('in finally');
  return M.chain(eff('in `finally`'), e_6, e_9);
}

function e_6(e) {
  console.log('in finally 2');
  return M.jump(e._fc);
}

function e_7(e) {
  console.log('after `finally`');
  return M.chain(eff('after `finally`'), e_8, e_9);
}

function e_8(e) {
  return M.pure();
}

function e_9(e, _e) {
  return M.raise(_e);
}

function e_10(e) {
  return M.raise(e._err1);
}

function e_11(e, a) {
  e._ex = a;
  return M.jump(e_3, e_12);
}

function e_12(e, a) {
  e._fc = e_10, e._err1 = a;
  return M.jump(e_5, e_9);
}

function f_1(f) {
  f._fc = f_4;
  return M.chain(eff('in body'), f_3, f_6);
}

function f_2(f) {
  f._e = f._ex;
  f._fc = f_4;
  return M.chain(eff('in `catch`'), f_3, f_6);
}

function f_3(f) {
  console.log('in `finally`');
  return M.jump(f._fc);
}

function f_4(f) {
  return M.chain(eff('after `finally`'), f_5, f_6);
}

function f_5(f) {
  return M.pure();
}

function f_6(f, e) {
  return M.raise(e);
}

function f_7(f) {
  return M.raise(f._err1);
}

function f_8(f, a) {
  f._ex = a;
  return M.jump(f_2, f_9);
}

function f_9(f, a) {
  f._fc = f_7, f._err1 = a;
  return M.jump(f_3, f_6);
}

function g_1(g) {
  g._fc = g_4;
  return M.chain(eff('in body'), g_3, g_6);
}

function g_2(g) {
  g._e = g._ex;
  console.log('in `catch`');
  g._fc = g_4;
  return M.jump(g_3, g_6);
}

function g_3(g) {
  console.log('in `finally`');
  return M.jump(g._fc);
}

function g_4(g) {
  return M.chain(eff('after `finally`'), g_5, g_6);
}

function g_5(g) {
  return M.pure();
}

function g_6(g, e) {
  return M.raise(e);
}

function g_7(g) {
  return M.raise(g._err1);
}

function g_8(g, a) {
  g._ex = a;
  return M.jump(g_2, g_9);
}

function g_9(g, a) {
  g._fc = g_7, g._err1 = a;
  return M.jump(g_3, g_6);
}