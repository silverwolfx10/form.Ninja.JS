/**
 * $equal
 * 
 * Retorna true se seus argumentos são equivalentes, False contrário a funcao curry
 * 
 * @module $equal
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        $equal(1, 2);
 *
 */
this.Ninja.module('$equal', ['$curry'], function ($curry) {
  
  function equal(a, b) {
    return a == b;
  }
  
  return $curry(equal);
  
});