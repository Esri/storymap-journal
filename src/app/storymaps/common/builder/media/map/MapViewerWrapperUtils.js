define(["esri/arcgis/utils"],
	function(arcgisUtils)
	{
		return {
			isWhiteListedDomain: function()
			{
				return document.location.host.match(/\.esri\.com$/)
				|| document.location.host.match(/\.arcgis\.com$/);
			},
			getMapViewerLink: function(webmapId)
			{
				return this.getMapViewerURL() + "?webmap=" + webmapId;
			},
			getMapViewerURL: function()
			{
				return this.getPortalURL() + '/home/webmap/viewer.html';
			},
			getPortalURL: function()
			{
				var url = arcgisUtils.arcgisUrl.split('/sharing/')[0];

				// Prevent SSL only org to fail loading maps for apps that are accessed over http
				if ( app.portal.allSSL ) {
					url = url.replace('http:', 'https:');
				}

				return url;
			},
			getPortalDomain: function()
			{
				var link = document.createElement('a');
				link.setAttribute('href', this.getPortalURL());
				return link.protocol + '//' + link.hostname;
			},
			viewerIsSameDomain: function()
			{
				var mapViewerDomain = this.getPortalURL().split('//').slice(-1)[0],
					mapViewerDomainSplit = mapViewerDomain.split('.'),
					host = document.location.host,
					hostSplit = host.split('.');

				if ( mapViewerDomain == host
						// For Portal Web Adaptor
						|| (mapViewerDomain.split('/').length > 1 && mapViewerDomain.split('/')[0] == host)
				) {
					return true;
				}
				else if ( hostSplit.length < 3 ) {
					return host == mapViewerDomain;
				}
				else {
					return hostSplit.slice(1).join('.') == mapViewerDomainSplit.slice(-2).join('.');
				}
			}
		};
	}
);
