var Messages = {

  initialize: function() {
    Parse.readAll(function(data) {
      var html = '';
      //var element = MessageView.render();
      for (var i = 0; i < data.results.length; i++) {
        var message = data.results[i];
        html += MessageView.render(message);
      }
      // // console.log(html);
      MessagesView.renderMessage(html);
    });
  }
};