var Messages = {

  initialize: function() {
    Parse.readAll(function(data) {
      // var html = '';
      // //var element = MessageView.render();
      // for (var i = 0; i < data.results.length; i++) {
      //   var message = data.results[i];
      //   html += MessageView.render(message);
      //   // console.log(message);
      // }
      // // // console.log(html);
      // MessagesView.renderMessage(html);
      // console.log(MessagesView);
      // console.log(data.results[0]);
      
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