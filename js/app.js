$(document).ready(function() {

		$("#add-button").on('click', addListItem);
		function addListItem() {
			var text= $("#add-to-list").val ();
			alert(text);
		}



	});
