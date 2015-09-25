this.Ninja.module('$innerHTML', ['$curry'], function ($curry) {

  function innerHTML(element, html) {
    element.shadowRoot.innerHTML = html;
  }

  return $curry(innerHTML);

});