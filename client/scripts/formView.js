var FormView = {

  $messageForm: $('form#send'),
  $RoomForm: $('form#newRoom'),
  $select: $('select'),

  initialize: function() {
    FormView.$messageForm.on('submit', FormView.handleMessageSubmit);
    FormView.$RoomForm.on('submit', FormView.handleRoomSubmit);
  },

  handleMessageSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var text = FormView.$messageForm.find('input[type=text]#message').val();
    var selectedRoom = FormView.$select.val();

    var message = {
      username: App.username,
      text: text,
      roomname: selectedRoom,
    };

    var successMessage = function() {
      console.log('Created Message', message);
    };

    Parse.create(message, successMessage);

  },

  handleRoomSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var roomname = FormView.$RoomForm.find('input[type=text]#roomname').val();

    Rooms.create(roomname);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$messageForm.find('input[type=submit]').attr('disabled', status);
  }

};