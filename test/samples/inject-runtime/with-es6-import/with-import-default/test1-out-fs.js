import Z from '@effectful/generators';

function a() {
  return Z.pure(1);

  function _1() {
    return Z.pure(2);
  }
}