this.Ninja(['$webComponent', '$reduce'], function ($webComponent, $reduce) {

  $webComponent('bbz-input', {
    
    templateUrl: './templates/bbz-input.html',
    
    getInitialState: function (root) {
      return $reduce(['defaultvalue', 'inverse', 'max', 'placeholder', 'required', 'value'], {}, function (o, key) {
        return Object.defineProperty(o, key, { value: root.getAttribute(key) });
      });
    },
    
    events: {
      
      'keyup input': function (root, e) {
        
      }
      
    }
    
  });

});