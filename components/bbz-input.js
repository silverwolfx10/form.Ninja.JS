this.Ninja([
  
  '$compose',
  '$dispatcher',
  '$fileRequest',
  '$format',
  '$mask',
  '$pick',
  '$prop',
  '$render',
  '$template',
  '$validator',
  '$webComponent'

], function ($compose, $dispatcher, $fileRequest, $format, $mask, $pick, $prop, $render, $template, $validator, $webComponent, _) {
  
  function dispatcherEventHook(element, e) {
    $dispatcher.trigger(
      $format('{0}:input:{1}', [$prop('uuid', element), e.type]),
      element.valueOf()
    );
  }

  $webComponent('bbz-input', {
    
    attached: function (element) {
      element.setState($pick([
        'defaultvalue',
        'inverse',
        'max',
        'placeholder',
        'readonly',
        'value'
      ], element));
    },
    
    events: {
      
      'blur #input': dispatcherEventHook,
      
      'change #input': dispatcherEventHook,
      
      'focus #input': dispatcherEventHook,
      
      'keydown #input': $mask,
      
      'keyup #input': $validator
      
    },
    
    prototype: {
      
      isValid: function (element) {
        return $validator.isValid(element);
      },
      
      valueOf: function (element) {
        return (element.shadowRoot || element).querySelector('#input').value;
      }
      
    },
    
    template: $render(_, _,'../templates/bbz-input.html')
    
  });

});