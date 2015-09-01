this.Ninja(['$webComponent'], function ($webComponent) {
   
  var colors = {
    'danger': '#CD4945',
    'master': '#626262'
  };
  
  $webComponent('bbz-message', {
    
    templateUrl: './templates/bbz-message.html',
    
    getInitialState: function (root) {
      return {
        'color': colors[root.getAttribute('type') || 'master'],
        'text': root.getAttribute('text')
      };
    },
    
    prototype: {
      
      'show': function (root, text, type) {
        root.setState({
          'color': colors[type || 'master'],
          'text': text
        });
      },
      
      'hide': function (root) {
        root.setState({ 'color': '', 'text': '' });
      }
      
    }
    
  });
    
});