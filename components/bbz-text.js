this.Ninja([
  
  '$compose',
  '$fileRequest',
  '$template',
  '$webComponent'

], function ($compose, $fileRequest, $template, $webComponent, _) {

  $webComponent('bbz-text', {
    
    attached: function (element) {
      element.setState({});
    },
    
    events: {
      
      'keyup input': function (element, e) {
        
      }
      
    },
    
    template: function (element, data, render) {
      $fileRequest('./templates/bbz-text.html', $compose(render, $template(_, data)));
    }
    
  });

});