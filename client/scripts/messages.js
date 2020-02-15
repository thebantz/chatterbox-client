var Messages = {

  initialize: function() {
    Parse.readAll(function(data) {
      var allMsgs = data.results;
      var oneMsg = MessageView.render(data.results[0]);
      MessagesView.renderMessage(oneMsg);

      allMsgs.forEach(msg => {
        var aMsg = MessageView.render(msg);
        return (MessagesView.renderMessage(aMsg));
      });

    });
  }
};