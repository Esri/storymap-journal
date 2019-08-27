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
            // section.content = section.content + '<div class="next-section"><button data-storymaps="' + actionName + '" data-storymaps-type="navigate" href="#">' + thisSection[index + 1].title + '</button></div>';
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
      }
    };
  }
);