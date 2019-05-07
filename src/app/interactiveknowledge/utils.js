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
          var firstSection = false;
          var lastSection = false;

          if (index === 0) {
            firstSection = true;
          }

          if (index + 1 === thisSection.length) {
            lastSection = true;
          }

          if (firstSection === false) {
            var actionName = 'IK-SECTION-BACK' + index.toString();
            section.content = '<div class="previous-section"><a data-storymaps="' + actionName + '" data-storymaps-type="navigate" href="#"><span>BACK</span></div>' + section.content;
            section.contentActions.push({
              id: actionName,
              type: 'navigate',
              index: index - 1
            });
          }

          if (lastSection === false) {
            var actionName = 'IK-SECTION-NEXT' + index.toString();
            section.content = section.content + '<div class="next-section"><a data-storymaps="' + actionName + '" data-storymaps-type="navigate" href="#">' + thisSection[index + 1].title + '</div>';
            section.contentActions.push({
              id: actionName,
              type: 'navigate',
              index: index + 1
            });
          }
        });

        return sections;
      }
    }
  }
);