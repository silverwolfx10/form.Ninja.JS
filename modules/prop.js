this.Ninja.module('$prop', ['$always', '$curry'], function ($always, $curry) {
  
  function prop(a, b) {
    return (b.getAttribute || $always(b[a])).call(b, a);
  }
  
  return $curry(prop);
  
});