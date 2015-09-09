this.Ninja.module('$validator', ['$every', '$some', '$T'], function ($every, $some, $T) {
  
  var validators = [];
  
  function validator(element) {
    $some(validators, function (a) { return a.can(element) ? (a.process(element), $T()) : !1 });
  }
  
  validator.isValid = function (element) {
    return $every(validators, function (a) { return a.isValid(element); });
  };
  
  validator.push = function (a) {
    validators.push(a);
  };
  
  return validator;
  
});