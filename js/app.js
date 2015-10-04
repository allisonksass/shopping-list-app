$(document).ready(function() {

		
		
	$("#add-button").on('click', addListItem);

		function addListItem() {
			var text= $("#add-to-list").val ();
			$("#list").append ('<li class="items"> <div class="box"><div class="empty-box"> </div></div> <p>'
				+text+'</p> <div class="delete"></div></li>');
			$("#add-to-list").val('');
		}


	$(document).on ('click', '.delete', deleteItem);

		function deleteItem (){
			$(this).parent().remove();

		}



	$('#list').on('mouseenter', 'li', function() {
			$(this).children('.delete').toggleClass('show');

		});


	$('#list').on('mouseleave', 'li', function(){
			$(this).children('.delete').toggleClass('show');
		});



			
	$('#list').on('click', 'li', function(){
		$(this).toggleClass('strike'); 
		$(this).children('.box').toggleClass('checked');

	});

	$('#add-to-list').keydown(function(event){
		if(event.keyCode == 13) {
			$('#add-button').click();
		};
	});




	});
