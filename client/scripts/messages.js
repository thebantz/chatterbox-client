var Messages = {

  $chats: $('#chats'),
  $chat: $('.chat'),

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
  },

  perRoomMsgs: function(roomname) {
    Parse.readAll(function(data) {
      var allMsgs = data.results;
      $('#currentRoom').change(function() {
        console.log(Messages.$chats.find('.roomname'));

        if (roomname !== Messages.$chats.find('.roomname')) {
          Messages.$chats..hide();
        }

        Messages.$chats.each(function() {
          if...
          then hide...
        }

        console.log('hello, i just changed');
      });
      for (var i = 0; i < allMsgs.length; i++) {
        if (roomname !== allMsgs[i].roomname) {
          var filteredMsgs = MessageView.render(allMsgs[i]);
          MessagesView.renderMessage(filteredMsgs);
        }
      }
    });
  }
};



// if the passed in roomnate is equal to the chats roomname, then we want it to stay on the page
// if not, then we want to hide the chat that has a roomname that isn't equal
// using jquery we detect the change with  change() of the selector
// call the hide method on messages whose roomname property does not equal passed in selectedRoomName