function colorToggle() {
	
    var color = document.getElementById('mydiv').style.backgroundColor;
    if (color == "rgb(0, 255, 0)")
	{
        document.getElementById('mydiv').style.backgroundColor="#AE2525";
	}
    else
	{
		document.getElementById('mydiv').style.backgroundColor="#00FF00";
	}
	setTimeout(colorToggle, 3000);
}





 