this.Ninja([
  
  '$compose',
  '$dispatcher',
  '$fileRequest',
  '$format',
  '$pick',
  '$prop',
  '$render',
  '$template',
  '$webComponent'

], function ($compose, $dispatcher, $fileRequest, $format, $pick, $prop, $render, $template, $webComponent, _) {
  
  $webComponent('bbz-text', {
    
    attached: function (element) {
      
      function $(query) {
        return (element.shadowRoot || element).querySelector(query);
      }
      
      function blur() {
        $('#text').className = 'text';
      }
      
      function focus() {
        $('#text').className = 'text-focus';
      }
      
      $dispatcher.on($format('{0}:input:blur', [$prop('uuid', element)]), blur, element);
      $dispatcher.on($format('{0}:input:change', [$prop('uuid', element)]), function () {}, element);
      $dispatcher.on($format('{0}:input:focus', [$prop('uuid', element)]), focus, element);
      
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
      $fileRequest('./templates/bbz-text.html', $compose($render(element), $template(_, data)));
    }
    
  });

});