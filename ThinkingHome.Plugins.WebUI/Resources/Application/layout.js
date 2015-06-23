﻿define(['lib'], function(lib) {

	var rootLayout = lib.marionette.LayoutView.extend({
		el: 'body',
		regions: {
			content: ".js-region-content"
		},
		events: {
			"click .js-nav-link": "hideMenu"
		},
		hideMenu: function() {

			this.$(".js-navbar-collapse").collapse('hide');
		},
		setContentView: function (view) {

			this.getRegion('content').show(view);
		}
	});

	return rootLayout;
});