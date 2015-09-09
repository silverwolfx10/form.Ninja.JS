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
  
  $webComponent('bbz-error', {
    
    attached: function (element) {
      $dispatcher.on($format('{0}:input:error', [$prop('uuid', element)]), element.setState, element);
    },
    
    detached: function (element) {
      $dispatcher.off($format('{0}:input:error', [$prop('uuid', element)]), element.setState, element);
    },
    
    template: function (element, data, render) {
      $fileRequest('./templates/bbz-error.html', $compose(render, $template(_, data)));
    }
    
  });
    
});