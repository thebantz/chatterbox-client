var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Messages.perRoomMsgs(FormView.selectedRoom);
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(message);
  }



};

