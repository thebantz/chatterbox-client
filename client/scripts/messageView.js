var MessageView = {


  render: _.template(`
    <div class="chat">
        <div class="username">
          message from: <%= username %>
        </div>
      </div>
  `)
};