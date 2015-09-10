/**
 * $always
 * 
 * Retorna uma funcao com o valor dado
 * 
 * @module $always
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        $always('cleber.programmer');
 * 
 */
this.Ninja.module('$always', [], function () {
  
  /**
   * Retorna uma funcao com o valor dado
   * 
   * @public
   * @method always
   * @param {Array|Boolean|Date|Funcation|Null|Object|String|Undefined} a Valor que sera rotornado
   * @return Funcao que quando executado retorna o valor passado
   * @example
   *
   *        $always('cleber.programmer');
   * 
   */
  function always(a) {
    return function () { return a; };
  }
  
  /**
   * Revelacao do modulo $always, encapsulando a visibilidade das funcoes
   * privadas
   */
  return always;
  
});