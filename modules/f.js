/**
 * $f
 * 
 * Sempre retorna False. Qualquer parametro passado sera ignorado
 * 
 * @module $f
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *      $f();
 * 
 */
this.Ninja.module('$f', [], function () {
  
  /**
   * Sempre retorna False. Qualquer parametro passado sera ignorado
   * 
   * @public
   * @mthod f
   * @return Retorna false
   * @example
   * 
   *        $f();
   * 
   */
  function t() {
    return !1;
  }
  
  /**
   * Revelacao do modulo $f, encapsulando a visibilidade das funcoes
   * privadas
   */
  return t;
  
});