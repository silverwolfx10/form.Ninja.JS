this.Ninja([
  
  '$compose',
  '$curry',
  '$dispatcher',
  '$fileRequest',
  '$format',
  '$pick',
  '$prop',
  '$template',
  '$webComponent'

], function ($compose, $curry, $dispatcher, $fileRequest, $format, $pick, $prop, $template, $webComponent, _) {
  
  function render(element, html) {
    element.shadowRoot.innerHTML = html;
  }

  $webComponent('bbz-text', {
    
    attached: function (element) {
      
      function $(query) {
        return (element.shadowRoot || element).querySelector(query);
      }
      
      $dispatcher.on($format('{0}:input:blur', [$prop('uuid', element)]), function () {
        $('#text').className = 'text';
      });
      
      $dispatcher.on($format('{0}:input:change', [$prop('uuid', element)]), function (value) {
        
      });
      
      $dispatcher.on($format('{0}:input:focus', [$prop('uuid', element)]), function () {
        $('#text').className = 'text-focus';
      });
      
    },
    
    created: function (element) {
      element.setState($pick([
        'defaultvalue',
        'description',
        'inverse',
        'display',
        'label',
        'mask',
        'maskerrormessage',
        'max',
        'maxerrormessage',
        'min',
        'minerrormessage',
        'placeholder',
        'readonly',
        'regexp',
        'regexperrormessage',
        'required',
        'requirederrormessage',
        'unique',
        'uniqueerrormessage',
        'uuid',
        'value'
      ], element));
    },
    
    detached: function (element) {
      
    },
    
    prototype: {
      
      isValid: function (element) {
        return (element.shadowRoot || element).querySelector('bbz-input').isValid();
      }
      
    },
    
    template: function (element, data) {
      $fileRequest('./templates/bbz-text.html', $compose($curry(render)(element), $template(_, data)));
    }
    
  });

});