/**
 * $prop
 * 
 * Retorna uma função que quando fornecido um objeto retorna a propriedade
 * indicada desse objeto, se existir a funcao curry
 * 
 * @module $prop
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        $prop('module', this.Ninja);
 * 
 */
this.Ninja.module('$prop', ['$always', '$curry'], function ($always, $curry) {
  
  /**
   * Retorna uma função que quando fornecido um objeto retorna a propriedade
   * indicada desse objeto, se existir
   * 
   * @public
   * @method prop
   * @param {String} a Nome da propriedade do objeto
   * @param {Object} b Objeto
   * @return Valor da propriedade do objeto
   * @example
   * 
   *        $prop('module', this.Ninja);
   *
   */
  function prop(a, b) {
    return (b.getAttribute || $always(b[a])).call(b, a);
  }
  
  /**
   * Revelacao do modulo $prop, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(prop);
  
});