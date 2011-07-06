(function($) {
	$('.cms-tree').bind('select_node.jstree', function(e, data) {
		var node = data.rslt.obj, url = $(node).find('a:first').attr('href');
		if(url && url != '#') document.location.href = url;
		return false;
	});
}(jQuery));