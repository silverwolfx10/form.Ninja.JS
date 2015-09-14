this.Ninja([
  
  '$compose',
  '$curry',
  '$fileRequest',
  '$pick',
  '$template',
  '$webComponent'

], function ($compose, $curry, $fileRequest, $pick, $template, $webComponent, _) {
  
  function render(element, html) {
    element.shadowRoot.innerHTML = html;
  }
   
  $webComponent('bbz-label', {
    
    attached: function (element) {
      element.setState($pick(['display', 'label', 'required'], element));
    },
    
    template: function (element, data) {
      $fileRequest('./templates/bbz-label.html', $compose($curry(render)(element), $template(_, data)));
    }
    
  });
    
});