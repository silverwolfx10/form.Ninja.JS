this.Ninja([
  
  '$compose',
  '$fileRequest',
  '$pick',
  '$render',
  '$template',
  '$webComponent'

], function ($compose, $fileRequest, $pick, $render, $template, $webComponent, _) {
  
  $webComponent('bbz-label', {
    
    attached: function (element) {
      element.setState($pick(['display', 'label', 'required'], element));
    },
    
    template: function (element, data) {
      $fileRequest('./templates/bbz-label.html', $compose($render(element), $template(_, data)));
    }
    
  });
    
});