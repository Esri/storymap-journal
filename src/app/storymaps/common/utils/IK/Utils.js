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

          if (firstSection === false &&
            !section.content.includes('<div class="previous-section"><button data-storymaps="IK-SECTION-BACK-')
          ) {
            // Back links
            actionName = 'IK-SECTION-BACK-' + index.toString();
            section.content = '<div class="previous-section"><button data-storymaps="' + actionName + '" data-storymaps-type="navigate"><span>BACK</span></button></div>' + section.content;
            section.contentActions.push({
              id: actionName,
              type: 'navigate',
              index: index - 1
            });
          }

          if (lastSection === false &&
            !section.content.includes('<div class="next-section"><button data-storymaps="IK-SECTION-NEXT-')
          ) {
            // Next section links
            actionName = 'IK-SECTION-NEXT-' + index.toString();
            section.content = section.content + '<div class="next-section"><button data-storymaps="' + actionName + '" data-storymaps-type="navigate" href="#">' + thisSection[index + 1].title + '</button></div>';
            section.contentActions.push({
              id: actionName,
              type: 'navigate',
              index: index + 1
            });
          }

          if (lastSection === true &&
            !section.content.includes('<div class="next-storymap"><button data-nav="nav">Go back to the home menu</button></div>')
          ) {
            // Link to another storymap
            section.content = section.content + '<div class="next-storymap"><button data-nav="nav">Go back to the home menu</button></div>';
          }
        });

        return sections;
      }
    };
  }
);