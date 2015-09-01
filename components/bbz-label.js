this.Ninja(['$webComponent'], function ($webComponent) {
   
  $webComponent('bbz-label', {
    
    templateUrl: './templates/bbz-label.html',
    
    getInitialState: function (root) {
      return {
        'required': root.getAttribute('required'),
        'text': root.getAttribute('text')
      };
    }
    
  });
    
});