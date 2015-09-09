this.Ninja.module('$stub', [
  
  '$dispatcher',
  '$format',
  '$prop'

], function ($dispatcher, $format, $prop) {
  
  return {
    
    can: function () {
      return !0;
    },
    
    isValid: function () {
      return !0;
    },
    
    process: function (element) {
      $dispatcher.trigger($format('{0}:input:error', [$prop('uuid', element)]), { 'errormessage': '' });
    }
    
  };
  
});