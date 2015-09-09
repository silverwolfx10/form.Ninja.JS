this.Ninja.module('$required', [
  
  '$dispatcher',
  '$format',
  '$prop'

], function ($dispatcher, $format, $prop) {
  
  return {
    
    can: function (element) {
      return (/yes/i.test($prop('required', element)) || /yes/i.test($prop('display', element))) && !element.valueOf();
    },
    
    isValid: function (element) {
      return !this.can(element);
    },
    
    process: function (element) {
      $dispatcher.trigger($format('{0}:input:error', [$prop('uuid', element)]), { 'errormessage': $prop('requirederrormessage', element) });
    }
    
  };
  
});