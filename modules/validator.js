this.Ninja.module('$validator', ['$every', '$some', '$t'], function ($every, $some, $t) {
  
  var validators = [];
  
  function validator(element) {
    $some(validators, function (a) { return a.can(element) ? (a.process(element), $t()) : !1 });
  }
  
  validator.isValid = function (element) {
    return $every(validators, function (a) { return a.isValid(element); });
  };
  
  validator.push = function (a) {
    validators.push(a);
  };
  
  return validator;
  
});