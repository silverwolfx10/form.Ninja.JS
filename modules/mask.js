this.Ninja.module('$mask', [
  
  '$dispatcher',
  '$equal',
  '$event',
  '$format',
  '$prop',
  '$translation'

], function ($dispatcher, $equal, $event, $format, $prop, $translation) {
  
  function mask(element, e) {
    
    if (!(!!$prop('mask', element))) return;
    
    if ([8, 9, 13, ''].some($equal(e.keyCode))) return;
    
    e.preventDefault();
    
    var value = (function () {
  
      if (!(this instanceof arguments.callee)) {
        return new arguments.callee();
      }

      [].push.apply(this, [].slice.call($event.target(e).value));
      [].splice.call(this, $event.target(e).selectionStart, 1, String.fromCharCode((96 <= e.keyCode && e.keyCode <= 105 ? e.keyCode - 48 : e.keyCode)));
      
      return [].join.call(this, '');
      
    })();
    
    $event.target(e).value = $translation($prop('mask', element), value);
    $event.target(e).setSelectionRange(1024, 1025);
    
  }
  
  mask.can = function (element) {
    return !!$prop('mask', element) && !!element.valueOf() ? ($prop('mask', element).length != element.valueOf().length) : !1;
  };
  
  mask.isValid = function (element) {
    return !mask.can(element);
  };
  
  mask.process = function (element) {
    $dispatcher.trigger($format('{0}:input:error', [$prop('uuid', element)]), { 'errormessage': $prop('maskerrormessage', element) });
  };
  
  return mask;
  
});