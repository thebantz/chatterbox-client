var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var text = FormView.$form.find('input[type=text]').val();

    var message = {
      username: App.username,
      text: text,
      roomname: 'lobby'
    };

    var successMessage = function() {
      console.log('Created Message', message);
    };

    Parse.create(message, successMessage);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};