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
  
  function $(query) {
    return this.shadowRoot.querySelector(query);
  }
  
  function blur() {
    $.call(this, '#text').className = 'text';
  }
  
  function focus() {
    $.call(this, '#text').className = 'text-focus';
  }
  
  $webComponent('bbz-text', {
    
    attached: function (element) {
      $dispatcher.on($format('{0}:input:blur', [$prop('uuid', element)]), blur, element);
      $dispatcher.on($format('{0}:input:change', [$prop('uuid', element)]), function () {}, element);
      $dispatcher.on($format('{0}:input:focus', [$prop('uuid', element)]), focus, element);
    },
    
    created: function (element) {
      element.setState($pick([
        'after',
        'before',
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
      $dispatcher.off($format('{0}:input:blur', [$prop('uuid', element)]), blur, element);
      $dispatcher.off($format('{0}:input:change', [$prop('uuid', element)]), function () {}, element);
      $dispatcher.off($format('{0}:input:focus', [$prop('uuid', element)]), focus, element);
    },
    
    prototype: {
      
      isValid: function (element) {
        return (element.shadowRoot || element).querySelector('bbz-input').isValid();
      }
      
    },
    
    template: $render(_, _, '../templates/bbz-text.html')
    
  });

});