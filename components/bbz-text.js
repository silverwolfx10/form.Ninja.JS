this.Ninja([
  
  '$compose',
  '$dispatcher',
  '$fileRequest',
  '$format',
  '$pick',
  '$prop',
  '$template',
  '$webComponent'

], function ($compose, $dispatcher, $fileRequest, $format, $pick, $prop, $template, $webComponent, _) {

  $webComponent('bbz-text', {
    
    attached: function (element) {
      element.setState($pick([
        'defaultvalue',
        'description',
        'inverse',
        'display',
        'hidewithempty',
        'label',
        'mask',
        'maskerrormessage',
        'max',
        'errormessage',
        'min',
        'minerrormesage',
        'name',
        'placeholder',
        'readonly',
        'regexp',
        'regexperrormessage',
        'required',
        'value',
        'unique',
        'uniqueerrormessage',
        'uuid'
      ], element));
    },
    
    created: function (element) {
      
      function $(query) {
        return element.shadowRoot.querySelector(query);
      }
      
      $dispatcher.on($format('{0}:input:blur', [$prop('uuid', element)]), function () {
        $('#text').className = 'text';
      });
      
      $dispatcher.on($format('{0}:input:change', [$prop('uuid', element)]), function (value) {
        console.log(value);
      });
      
      $dispatcher.on($format('{0}:input:focus', [$prop('uuid', element)]), function () {
        $('#text').className = 'text-focus';
      });
      
    },
    
    prototype: {
      
      isValid: function (element) {
        return (element.shadowRoot || element).querySelector('bbz-input').isValid();
      }
      
    },
    
    template: function (element, data, render) {
      $fileRequest('./templates/bbz-text.html', $compose(render, $template(_, data)));
    }
    
  });

});