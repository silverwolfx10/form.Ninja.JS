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
  
  function dispatcherHook(method, element) {
    $dispatcher[method](
      $format('{0}:input:error', [$prop('uuid', element)]),
      element.setState,
      element
    );
  }
  
  $webComponent('bbz-error', {
    
    attached: function (element) {
      dispatcherHook('on', element);
    },
    
    detached: function (element) {
      dispatcherHook('off', element);
    },
    
    template: function (element, data, render) {
      $fileRequest('./templates/bbz-error.html', $compose(render, $template(_, data)));
    }
    
  });
  
});