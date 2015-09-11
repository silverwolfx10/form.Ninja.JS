this.Ninja([
  
  '$compose',
  '$fileRequest',
  '$pick',
  '$template',
  '$webComponent'

], function ($compose, $fileRequest, $pick, $template, $webComponent, _) {
  
  /**
   * Criacao do Web Componente bbz-description, responsavel pela exibicao
   * das descricoes do input
   */
  $webComponent('bbz-description', {
    
    /**
     * Quando o Web Component bbz-description adicionado ao DOM,
     * sera disparado esta funcao, setando um novo estado para o component
     */
    attached: function (element) {
      element.setState($pick(['description'], element));
    },
    
    /**
     * Quando alterado o stado do componente, o template sera executado
     */
    template: function (element, data, render) {
      $fileRequest('./templates/bbz-description.html', $compose(render, $template(_, data)));
    }
    
  });
    
});