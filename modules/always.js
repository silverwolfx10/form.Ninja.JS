this.Ninja.module('$always', [], function () {
  
  function always(a) {
    return function () { return a; }
  }
  
  return always;
  
});