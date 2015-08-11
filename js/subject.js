var Subject = {

  subject: {},

  state: {
    row: 0
  },

  init: function(element) {
    this.subject = element;
    console.log(this);
  },

  moveUp: function() {
    var action = false;
    if (this.state.row < 1) {
      console.log("Can't move up");
    }
    else {
      console.log("Moving up");
      this.state.row = this.state.row - 1;
      action = this.state.row;
    }
    return action;
  },

  moveDown: function() {
    var action = false;
    if (this.state.row > 2) {
      console.log("Can't move down");
    }
    else {
      console.log("Moving down");
      this.state.row = this.state.row + 1;
      action = this.state.row;
    }
    return action;
  }

};