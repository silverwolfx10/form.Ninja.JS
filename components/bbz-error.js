this.Ninja([
  
  '$compose',
  '$curry',
  '$dispatcher',
  '$fileRequest',
  '$format',
  '$pick',
  '$prop',
  '$template',
  '$webComponent'

], function ($compose, $curry, $dispatcher, $fileRequest, $format, $pick, $prop, $template, $webComponent, _) {
  
  /**
   * Hook method para os eventos de attached e detached, sendo que
   * ambos so mudam a chamada do dispatacher. Um adicionando uma esculta a
   * um canal e outro desvinculando
   * 
   * @private
   * @method hook
   * @param {Node} element Web Componente bbz-error
   * @param {String} method Nome da funcao do dispatcher, sendo on ou off
   * @example
   * 
   *        hook(element, 'on');
   * 
   */
  function hook(element, method) {
    $dispatcher[method](
      $format('{0}:input:error', [$prop('uuid', element)]),
      element.setState,
      element
    );
  }
  
  /**
   * Criacao do Web Componente bbz-error, responsavel pela exibicao
   * de erros
   */
  $webComponent('bbz-error', {
    
    /**
     * Quando o Web Component bbz-error for adicionado ao DOM,
     * sera assinado as escultas para os eventos {0}:input:error
     */
    attached: $curry(hook)(_, 'on'),
    
    /**
     * Quando o Web Component bbz-error for removido do DOM,
     * sera desvinculado a assinatura {0}:input:error evitando sobre carga
     * ao dispatcher
     */
    detached: $curry(hook)(_, 'off'),
    
    /**
     * Quando alterado o stado do componente, o template sera executado
     */
    template: function (element, data, render) {
      $fileRequest('./templates/bbz-error.html', $compose(render, $template(_, data)));
    }
    
  });
  
});