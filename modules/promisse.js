this.Ninja.module('$promisse', ['$apply', '$push'], function ($apply, $push) {

  function promisse() {

    return (function (a) {

      function resolve() {
        $apply(a.shift(), arguments);
      }

      return Object.defineProperty(resolve, 'done', { value: $push(a) });

    })([]);

  }

  return promisse;

});