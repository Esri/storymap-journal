define([], function () {
  this.getState = function () {
    return (ik.wrapper.state) ? ik.wrapper.state.get('wrapper-state') : 'attract';
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
    // Set Background Video or Image
    if (ik.wrapper.layout.state[this.getState()].background.video) {
      var video = $('#container video');

      video.html('<source src="' + ik.wrapper.layout.state[this.getState()].background.video.src + '" type="' + ik.wrapper.layout.state.attract.background.video.type + '">');

      if (ik.wrapper.layout.state[this.getState()].background.img) {
        video.attr('poster', ik.wrapper.layout.state[this.getState()].background.img);
      }

      if (ik.wrapper.state) {
        ik.wrapper.state.set('video', 'playing');
      }

      video.show();

      return;
    }
    
    if (ik.wrapper.layout.state[this.getState()].background.img) {
      var source = $('#container video source');
      if (source.attr('src') && source.attr('src').length > 1) {
        ik.wrapper.state.set('video', 'stopped');
        $('#container video').attr('poster', '');
      }

      console.log('bg image', ik.wrapper.layout.state[this.getState()].background.img)
      $('.fullscreen-bg').css('background-image', 'url(' + ik.wrapper.layout.state[this.getState()].background.img + ')');
      $('.fullscreen-bg').css('background-position', '50% 50%');
    }
  }

  return this;
})