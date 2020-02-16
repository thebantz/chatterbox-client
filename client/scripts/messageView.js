var MessageView = {

  render: _.template(`
    <div class="chat">
        <div class="username">
          message from: <%= username %>
        </div>
        <div class="roomname">
        chat room: <%= roomname %>
        </div>
      </div>
  `)
};