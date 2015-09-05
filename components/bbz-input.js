this.Ninja([
  
  '$compose',
  '$dispatcher',
  '$event',
  '$fileRequest',
  '$format',
  '$pick',
  '$prop',
  '$template',
  '$translation',
  '$webComponent'

], function ($compose, $dispatcher, $event, $fileRequest, $format, $pick, $prop, $template, $translation, $webComponent, _) {

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
        $dispatcher.trigger($format('{0}:input:change', [$prop('uuid', element)]), $event.target(e).value);
      },
      
      'focus #input': function (element) {
        $dispatcher.trigger($format('{0}:input:focus', [$prop('uuid', element)]));
      },
      
      'keydown #input': function (element, e) {
        
        function compare(a) {
          return a == e.keyCode;
        }

        if ([8, 9, 13, 33, 34, 35, 36, 37, 38, 39, 40, ''].some(compare)) return;
        
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
        
      }
      
    },
    
    template: function (element, data, render) {
      $fileRequest('./templates/bbz-input.html', $compose(render, $template(_, data)));
    }
    
  });

});