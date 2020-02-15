var Rooms = {

  initialize: function() {
    var rooms = this.allRooms;
    RoomsView.renderRoom(rooms);
  },

  allRooms: [],

  create: function(roomname) {
    this.allRooms.push(roomname);
    RoomsView.renderRoom([roomname]);
  },


};