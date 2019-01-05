
'use strict';
function startGame() {
	$.get("https://qwyet.com/api/stream", function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
    });
  	console.log("Game will be started now");
}



function addInteractiveObject(objectData){
    $('#interactive_container').append('<button>Click Here</button>');
}
