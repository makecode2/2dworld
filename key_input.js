var x=0,
	y=0;

document.addEventListener('keydown', function(event) {
    //document.write(event.keyCode);
	if(event.keyCode == 37) {
		x=x-1;
        //alert('Left was pressed');
		//document.write(event.keyCode);
		document.getElementById("vars").innerHTML = x;
    }
    else if(event.keyCode == 39) {
		x=x+1;
		document.getElementById("vars").innerHTML = x;
        //alert('Right was pressed');
    }
	
});