/**
 * $equal
 * 
 * Retorna True se seus argumentos são equivalentes, False contrário a funcao curry
 * 
 * @module $equal
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        $equal(1, 2);
 *
 */
this.Ninja.module('$equal', ['$curry'], function ($curry) {
  
  /**
   * Retorna True se seus argumentos são equivalentes, False contrário
   * 
   * @public
   * @method equal
   * @param {Array|Boolean|Date|Funcation|Null|Object|String|Undefined} a Primeiro valor
   * @param {Array|Boolean|Date|Funcation|Null|Object|String|Undefined} b Segundo valor
   * @return Resposata da comparacao dos dois argumentos
   * @example
   * 
   *        $equal('cleber.programmer', 'cleber.programmer');
   * 
   */
  function equal(a, b) {
    return a == b;
  }
  
  /**
   * Revelacao do modulo $equal, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(equal);
  
});