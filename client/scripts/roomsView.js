var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(array) {
    for (var i = 0; i < array.length; i++) {
      this.$select.append('<option value=' + array[i] + '>' + array[i] + '</option>');
    }
  }

};
