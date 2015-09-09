this.Ninja([
  
  '$compose',
  '$fileRequest',
  '$pick',
  '$template',
  '$webComponent'

], function ($compose, $fileRequest, $pick, $template, $webComponent, _) {
   
  $webComponent('bbz-description', {
    
    attached: function (element) {
      element.setState($pick(['description'], element));
    },
    
    template: function (element, data, render) {
      $fileRequest('./templates/bbz-description.html', $compose(render, $template(_, data)));
    }
    
  });
    
});