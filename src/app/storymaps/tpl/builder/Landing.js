define(["lib-build/tpl!./Landing",
		"lib-build/css!./Landing"], 
	function (
		viewTpl
	){
		return function Landing(container, addFirstSectionCallback, helpCallback) 
		{
			var QUOTES = [
				[
					"&ldquo;There's always room for a story that can transport people to another place.&rdquo;",
					"--J.K. Rowling"
				],
				[
					"&ldquo;Storytelling is the most powerful way to put ideas into the world today.&rdquo;",
					"--Robert McKee"
				],
				[
					"&ldquo;The stories we tell literally make the world. If you want to change the world, you need to change your story. This truth applies both to individuals and institutions.&rdquo;",
					"--Michael Margolis"
				],
				[
					"&ldquo;The shortest distance between a human being and the truth is a story.&rdquo;",
					"--Anthony de Mello"
				],
				[
					"&ldquo;People don’t want more information. They are up to their eyeballs in information. They want faith–faith in you, your goals, your success, in the story you tell.&rdquo;",
					"--Annette Simmons"
				],
				[
					"&ldquo;I truly believe that people are looking for stories that really mean something–stories that are redemptive, inspiring, and bigger than an individual.&rdquo;",
					"--Scott Harrison"
				],
				[
					"&ldquo;If you wish to influence an individual or a group to embrace a particular value in their daily lives, tell them a compelling story.&rdquo;",
					"--Annette Simmons"
				],
				[
					"&ldquo;If you tell me, it’s an essay. If you show me, it’s a story.&rdquo;",
					"--Barbara Greene"
				],
				[
					"&ldquo;If you don’t know the trees you may be lost in the forest, but if you don’t know the stories you may be lost in life.&rdquo;",
					"--Siberian Elder"
				],
				[
					"&ldquo;Stories are the creative conversion of life itself into a more powerful, clearer, more meaningful experience. They are the currency of human contact.&rdquo;",
					"--Robert McKee"
				]
			];
			
			container.append(viewTpl({
				lblAdd: i18n.builder.landing.lblAdd,
				phAdd: i18n.builder.landing.phAdd,
				lblOR: i18n.builder.landing.lblOR,
				lblHelp: i18n.builder.landing.lblHelp
			}));
			
			initEvents();
			
			this.toggle = function(state) 
			{			
				container.toggle(state);
				$("#builderQuotes").toggle(state);
				focus();
			};
			
			this.focus = function()
			{
				container.find(".landing-add-container .add-title").focus();
			};
			
			function getTitle()
			{
				return container.find(".landing-add-container .add-title").val();
			}
			
			function onTitleChange()
			{
				container.find(".landing-add-container .landing-btn").toggleClass("disabled", ! getTitle());
			}
			
			function onClickAdd()
			{
				if ( ! $(this).hasClass("disabled") )
					addFirstSectionCallback(getTitle());
			}
			
			function initEvents()
			{
				container.find(".landing-add-container .add-title")
					.bind('input propertychange', onTitleChange)
					.keyup(function(e){ e.keyCode == 13 && $(this).val() && onClickAdd(); });
				container.find(".landing-add-container .landing-btn").click(onClickAdd);
				container.find(".landing-tour-container").click(helpCallback);
				
				$("#builderQuotes").html(
					'<div style="padding: 0 18%">' 
					+ QUOTES[Math.floor(Math.random() * QUOTES.length)].join("<br />") 
					+ "</div>"
				);
			}
		};
	}
);