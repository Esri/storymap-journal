define([], function () {
  this.getState = function () {
    return ik.wrapper.state.get('wrapper-state');
  };

  this.getBackground = function () {
    return ik.wrapper.layout[this.getState()].background;
  }

  this.getInfo = function () {
    return ik.wrapper.layout.state[this.getState()].section.info;
  }

  this.getInteraction = function () {
    return ik.wrapper.layout.state[this.getState()].section.interaction;
  }

  return this;
})