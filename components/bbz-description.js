/**
 * <bbz-descripion></bbz-description>
 * 
 * Responsavel pela exibicao das descricoes do input
 * Example:
 * 
 *        <bbz-description
 *          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos">
 *        </bbz-description>
 * 
 */
this.Ninja([
  
  '$compose',
  '$fileRequest',
  '$pick',
  '$render',
  '$template',
  '$webComponent'

], function ($compose, $fileRequest, $pick, $render, $template, $webComponent, _) {
  
  /**
   * Criacao do Web Componente bbz-description, responsavel pela exibicao
   * das descricoes do input
   */
  $webComponent('bbz-description', {
    
    /**
     * Quando o Web Component bbz-description criado,
     * sera disparado esta funcao, setando um novo estado para o component
     */
    created: function (element) {
      element.setState($pick(['description'], element));
    },
    
    /**
     * Quando alterado o stado do componente, o template sera executado
     */
    template: $render(_, _, '../templates/bbz-description.html')
    
  });
    
});