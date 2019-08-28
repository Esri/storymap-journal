define([],
	function()
	{
    return {
      /**
       * Alter the sections per requirements of IK design for LEAF project.
       * 
       * @param {array} sections 
       */
      alterSections: function (sections) {
        sections.forEach(function (section, index, thisSection) {
          var firstSection = false,
          lastSection = false,
          actionName = '';

          if (index === 0) {
            firstSection = true;
          }

          if (index + 1 === thisSection.length) {
            lastSection = true;
          }

          if (lastSection === false) {
            // Next section links
            actionName = 'IK-SECTION-NEXT-' + index.toString();
            var newActions =  [];

            newActions.push({
              id: actionName,
              type: 'navigate',
              index: index + 1
            });

            section.contentActions = newActions;
          }
        });

        return sections;
      },

      /**
       * Bind scroll events to each of the sections
       */
      bindScrollEventsToSections: function () {
        $('.sections .section .content').each(function (a,b) {
          var contentHeight =  $(b).get(0).offsetHeight;
          var innerHeight =  $(b).find('.content__inner').get(0).offsetHeight;

          if (innerHeight > contentHeight) {
            $(b).addClass('overflow');

            $(b).scroll(function () {
              var target = $(this).get(0);

              if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
                if ($(this).hasClass('overflow') === true) {
                  $(this).removeClass('overflow');
                }
              } else {
                if ($(this).hasClass('overflow') === false) {
                  $(this).addClass('overflow');
                }
              }
            });
          }
        });
      }
    };
  }
);