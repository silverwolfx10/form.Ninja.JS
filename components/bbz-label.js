this.Ninja([
  
  '$compose',
  '$fileRequest',
  '$pick',
  '$template',
  '$webComponent'

], function ($compose, $fileRequest, $pick, $template, $webComponent, _) {
   
  $webComponent('bbz-label', {
    
    attached: function (element) {
      element.setState($pick(['display', 'label', 'required'], element));
    },
    
    template: function (element, data, render) {
      $fileRequest('./templates/bbz-label.html', $compose(render, $template(_, data)));
    }
    
  });
    
});