define([],
	function()
	{
    return {
      alterSections: function (sections) {
        sections.forEach(function (section, index, thisSection) {
          if (index + 1 !== thisSection.length) {
            var actionName = 'IK-SECTION-' + index.toString();
            section.content = section.content + '<div class="next-section"><a data-storymaps="' + actionName + '" data-storymaps-type="navigate" href="#"><span>NEXT SECTION</span></div>';
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