$('#multifile_input').change(function(){
	//create a new input
	new_input = $(this).clone(true);
	//remove event handlers
	new_input.off();
	//make it invisible
	$(new_input).hide();
	//insert it after the last input
	$(this.parentNode).append(new_input);

	//create a new li element to list the new file
	new_li = document.createElement('li');
	//copy the file name
	new_li.innerHTML = $(this).val().replace("C:\\fakepath\\", "");

	//create the link to remove the file from the list
	delete_link = document.createElement('a');
	delete_link.innerHTML = 'x';
	delete_link.href = '#';
	//save a reference to the input containing the file
	delete_link.input_reference = new_input;
	//set the handler for the onclick event
	$(delete_link).click(function(){
		$(this.input_reference).remove();
		$(this.parentNode).remove();
	});

	//put the x in the start of the li
	$(new_li).prepend(delete_link);
	//put the li in the end of the container
	$('#multifile_list').append(new_li);
	//clean the visible input
	this.value = '';
});
