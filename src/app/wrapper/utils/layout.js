define([], function () {
  this.getState = function () {
    return (ik.wrapper.state) ? ik.wrapper.state.get('wrapper-state') : 'attract';
  };

  this.getPrevState = function () {
    return (ik.wrapper.state) ? ik.wrapper.state.get('prev-wrapper-state') : false;
  }

  this.getBackground = function () {
    return ik.wrapper.layout[this.getState()].background;
  }

  this.getInfo = function () {
    return ik.wrapper.layout.state[this.getState()].section.info;
  }

  this.getInteraction = function () {
    return ik.wrapper.layout.state[this.getState()].section.interaction;
  }

  // Set Data
  this.set = function (state, section, field, value) {
    if (section === 'background') {
      ik.wrapper.layout.state[state][section][field] = value;
    } else {
      ik.wrapper.layout.state[state].section[section][field] = value;
    }
  }

  // Manipulates the background.
  this.setBackground = function () {
    // Determine if the current state is using video
    if (ik.wrapper.layout.state[this.getState()].background.video) {
      var nextVideoDiffers = false

      if (this.getPrevState())
        nextVideoDiffers = ik.wrapper.layout.state[this.getState()].background.video !== ik.wrapper.layout.state[this.getPrevState()].background.video

      var video = $('#container video');

      if (ik.wrapper.state && ik.wrapper.state.get('video') === 'playing') {
        ik.wrapper.state.set('video', 'stopped')
      }

      var newSource = '<source src="' + ik.wrapper.layout.state[this.getState()].background.video.src + '" type="' + ik.wrapper.layout.state[this.getState()].background.video.type + '">'
      video.append(newSource);

      if (nextVideoDiffers === true) {
        video.children().get(0).remove();
        video.load();
      }

      if (ik.wrapper.state) {
        ik.wrapper.state.set('video', 'playing');
      }

      video.show();
    }

    $('.fullscreen-bg').css('background', 'black');

    // If a video is used for multiple states, go ahead and play it.
    try {
      if ($('#container video source').length > 0) {
        ik.wrapper.state.set('video', 'playing');
      }
    } catch (err) {
      $('#container video').load();
    }
  }

  return this;
})