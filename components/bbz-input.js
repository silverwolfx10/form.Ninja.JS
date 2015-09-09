this.Ninja([
  
  '$compose',
  '$dispatcher',
  '$fileRequest',
  '$format',
  '$mask',
  '$pick',
  '$prop',
  '$template',
  '$validator',
  '$webComponent'

], function ($compose, $dispatcher, $fileRequest, $format, $mask, $pick, $prop, $template, $validator, $webComponent, _) {

  $webComponent('bbz-input', {
    
    attached: function (element) {
      element.setState($pick([
        'defaultvalue',
        'inverse',
        'max',
        'placeholder',
        'value'
      ], element));
    },
    
    events: {
      
      'blur #input': function (element) {
        $dispatcher.trigger($format('{0}:input:blur', [$prop('uuid', element)]));
      },
      
      'change #input': function (element, e) {
        $dispatcher.trigger($format('{0}:input:change', [$prop('uuid', element)]), element.valueOf());
      },
      
      'focus #input': function (element) {
        $dispatcher.trigger($format('{0}:input:focus', [$prop('uuid', element)]));
      },
      
      'keydown #input': function (element, e) {
        $mask(element, e);
      },
      
      'keyup #input': function (element) {
        $validator(element);
      }
      
    },
    
    prototype: {
      
      isValid: function (element) {
        return $validator.isValid(element);
      },
      
      valueOf: function (element) {
        return (element.shadowRoot || element).querySelector('#input').value;
      }
      
    },
    
    template: function (element, data, render) {
      $fileRequest('./templates/bbz-input.html', $compose(render, $template(_, data)));
    }
    
  });

});