this.Ninja.module('$render', ['$curry'], function ($curry) {
  
  function render(element, html) {
    element.shadowRoot.innerHTML = html;
  }
  
  return $curry(render);
  
});