this.Ninja.module('$regexp', [
  
  '$dispatcher',
  '$format',
  '$memoize',
  '$prop'

], function ($dispatcher, $format, $memoize, $prop) {
  
  var regExp = $memoize(function (pattern) {
    return new RegExp(pattern, 'i');
  });
  
  return {
    
    can: function (element) {
      return !!$prop('regexp', element) && element.valueOf() && !regExp($prop('regexp', element)).test(element.valueOf());
    },
    
    isValid: function (element) {
      return !this.can(element);
    },
    
    process: function (element) {
      $dispatcher.trigger($format('{0}:input:error', [$prop('uuid', element)]), { 'errormessage': $prop('regexperrormessage', element) });
    }
    
  };
  
});