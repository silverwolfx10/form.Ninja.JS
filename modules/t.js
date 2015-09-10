/**
 * $t
 * 
 * Sempre retorna True. Qualquer parametro passado sera ignorado
 * 
 * @module $t
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *      $t();
 * 
 */
this.Ninja.module('$t', [], function () {
  
  /**
   * Sempre retorna True. Qualquer parametro passado sera ignorado
   * 
   * @public
   * @mthod t
   * @return Retorna true
   * @example
   * 
   *        $t();
   * 
   */
  function t() {
    return !0;
  }
  
  /**
   * Revelacao do modulo $t, encapsulando a visibilidade das funcoes
   * privadas
   */
  return t;
  
});