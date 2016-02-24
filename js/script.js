
		$('#alert').click( function(){alert('You clicked me!');});
		$('#green').click( function(){$('#la').css('background-color','lightgreen');});
		$('#blue').click( function(){$('#la').css('background-color','lightblue');});
		$('#grey').click( function(){$('#la').css('background-color','lightgrey');});

		var myNumber = 1;
		$('#addOne').click(
			function() {
		  myNumber = myNumber +1;
		  $('#myNumber').text(myNumber);
		  });
		  
		  
		$('#subtractOne').click(

			function() {
		  	myNumber = myNumber - 1;    
		  	$('#myNumber').text(myNumber);
		  }
		)

