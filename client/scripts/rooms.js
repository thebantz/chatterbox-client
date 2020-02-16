var Rooms = {

  initialize: function() {
    Parse.readAll(function(data) {
      var allMsgs = data.results;
      for (var i = 0; i < allMsgs.length; i++) {
        Rooms.create(allMsgs[i].roomname);
      }
    });
  },

  allRooms: [],

  create: function(roomname) {
    if (_.indexOf(this.allRooms, roomname) === -1) {
      this.allRooms.push(roomname);
      RoomsView.renderRoom([roomname]);
    }
  },






};