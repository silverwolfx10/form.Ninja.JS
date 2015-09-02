this.Ninja(['$webComponent', '$reduce'], function ($webComponent, $reduce) {

  $webComponent('bbz-text', {
    
    templateUrl: './templates/bbz-text.html',
    
    getInitialState: function (root) {
      return $reduce([
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
      ], {}, function (o, key) {
        return Object.defineProperty(o, key, { value: root.getAttribute(key) });
      });
    },
    
    events: {
      
      'keyup input': function (root, e) {
        
      }
      
    }
    
  });

});