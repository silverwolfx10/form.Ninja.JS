this.Ninja.module('$render', [

  '$always',
  '$compose',
  '$curry',
  '$fileRequest',
  '$innerHTML',
  '$promisse',
  '$template'

], function ($always, $compose, $curry, $fileRequest, $innerHTML, $promisse, $template, _) {

  function render(element, data, url) {

    function solve(resolve) {
      return resolve($fileRequest(url, $compose(resolve(), $compose($innerHTML(element), $template(_, data)))));
    }
    
    return solve($always($promisse()));

  }

  return $curry(render);

});